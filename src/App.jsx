import Header from './components/Header'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import Footer from './components/Footer'
import {useState, useEffect} from 'react'
import './App.css'

function App(){
  const [users, setUsers] = useState(() =>{
    const savedUsers = localStorage.getItem('users')

    if(savedUsers){
      return JSON.parse(savedUsers)
    }

    return []
  })

  useEffect(() =>{
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const [editingIndex, setEditingIndex] = useState(null)
  const [error, setError] = useState('')
  const [theme, setTheme] = useState(() =>{
    return localStorage.getItem('theme') || 'light'
    
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const [formUsers, setFormUsers] = useState({
    name:'',
    email:'',
    age:'',
    city:''
  })

  function tema(){
    if(theme === 'light'){
      setTheme('dark')
      
    } else{
      setTheme('light')
     
    }
  }

  function handleChange(event){
   const fieldName = event.target.name
   const fieldValue = event.target.value

   setFormUsers({...formUsers, [fieldName]: fieldValue })
  }

  function startEdit(index){
    const selectedUser = users[index]

    setEditingIndex(index)
    setFormUsers(selectedUser)

  }

  function addUsers(){
    const newUsers = {
      name: formUsers.name.trim(),
      email: formUsers.email.trim(),
      age: formUsers.age.trim(),
      city: formUsers.city.trim()
    }

    if(newUsers.name === '' || newUsers.email === '' || newUsers.age === '' || newUsers.city === ''){
      setError('All fields are required')
      return
    }
    
    const emailExists = users.some((user,i) => (user.email === newUsers.email && i !== editingIndex))

    if(emailExists){
      
      setError('Email already exists')
      return
    }

    if(editingIndex === null){
      setUsers([...users, newUsers])
      setError('')
      setFormUsers({name:'', email:'', age:'', city:''})
      
    } else{
      const updatedUsers = users.map((user, i) => {
        if(i === editingIndex){
          return newUsers
          
        }
        return user
      })
      setUsers(updatedUsers)
      setEditingIndex(null)
      setError('')
      setFormUsers({name:'', email:'', age:'', city:''})
    }
  }

  function deleteUsers(index){
    const updatedUsers = users.filter((user, i) => (i !== index))
    setUsers(updatedUsers)
  }

  return(
  <div className={`app ${theme}`}>
    <div className='container'>
      
  <Header 
  tema={tema}
  theme={theme}/>

  <UserForm
  handleChange={handleChange}
  addUsers={addUsers}
  editingIndex={editingIndex}
  formUsers={formUsers} />

  
  {error && <div className='error-container'> <p className='error'>{error}</p></div>}
  

  <UserList 
  users={users}
  startEdit={startEdit}
  deleteUsers={deleteUsers} />

  <Footer />

 </div>
 </div>
  )
}

export default App
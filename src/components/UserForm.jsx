

function UserForm(props){
  return(

  <div className="user-form-container">
  <div className="form-grid">

  <p>Name</p>
  <p>Email</p>
  <input type="text"
  name="name"
  placeholder="Enter name"
  value={props.formUsers.name}
  onChange={props.handleChange} />

  
  <input type="email"
  name="email"
  placeholder="Enter email"
  value={props.formUsers.email}
  onChange={props.handleChange} />

  <p>Age</p>
  <p>City</p>
  <input  type="number"
  name="age"
  placeholder="Enter age"
  value={props.formUsers.age}
  onChange={props.handleChange} />
   
  
  <input type="text"
  name="city"
  placeholder="Enter city"
  value={props.formUsers.city}
  onChange={props.handleChange} />
  </div>
  

  <button onClick={props.addUsers}>{props.editingIndex === null ? 'Add User' : 'Save'}</button>

  </div>

  )
}
export default UserForm
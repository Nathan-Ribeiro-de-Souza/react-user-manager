import UserItem from './UserItem'

function UserList(props){
  
  if(props.users.length === 0){
          return <div className="empty-message"><p>No users registered yet.</p></div>
        }
  return(
    <div className="user-list-container">

    <ul>
       
      {props.users.map((user, index) =>(
      
        <UserItem
        index={index}
        user={user}
        key={index}
        startEdit={props.startEdit}
        deleteUsers={props.deleteUsers}/>
        
      ))}
      
    </ul>

    </div>

  )
}
export default UserList
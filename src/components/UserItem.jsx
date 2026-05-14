
function UserItem(props){
  return(
    
 <li className="user-card">
   <div className="user-card-info">
   <h2>{props.user.name}</h2>
   <h3 id="email">{props.user.email}</h3>
    </div>

   <h3>{props.user.age} years old </h3>
   <h3>{props.user.city}</h3>
  
    
    <div className="user-card-actions">
   <button className="editButton" onClick={() => props.startEdit(props.index)}>Edit</button>
   <button className="deleteButton" onClick={() => props.deleteUsers(props.index)}>Delete</button>
   </div>
 </li> 
 
 )
}

export default UserItem
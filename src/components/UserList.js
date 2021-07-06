import React, {useState,useEffect} from 'react';
import User from "./User"
import axios from 'axios';
import "./userlist.css"

const UserList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
        console.log("response", response.data)
    }

    useEffect(() => fetchUsers(), [])
    console.log("users", users)


    const listOfUsers = users.map(e => <User id={e.id} name={e.name} company={e.company.name} website={e.website} />)
    console.log("list of users", listOfUsers)

    return (
        <div className="container-list">
            {listOfUsers}
        </div>
    )
}

export default UserList

import React from 'react'
import "./user.css"

const User = ({id, name, company, website}) => {
    return (
        <div id={id} className="container-user">
            <h2 className="name">{name}</h2>
            <h4 className="company">company: {company}</h4>
            <p className="website">website: {website}</p>
        </div>
    )
}

export default User

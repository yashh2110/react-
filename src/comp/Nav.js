import React from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom";
function Nav() {
    return (
        <div>
                <Link to="/">Home</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/fetch">Fetch</Link>
                <Link to="/reducefetch">Reducefetch</Link>
                <Link to="/userform"> simple_userform</Link>
        </div>
    )
}

export default Nav

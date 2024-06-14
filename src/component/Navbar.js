import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css"
import {useDispatch,useSelector} from 'react-redux';
import { removeUser } from "../store/authSlice";
import axios from'axios';

const Navbar = () => {
  var user=useSelector(store=>store.auth.user)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  function logout(){
    if(user){
      axios.post('https://medicalstore.mashupstack.com/api/logout',{},{
      headers:{'Authorization':"Bearer "+user.token}
      });
      dispatch(removeUser());
      navigate('/');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="navbar-brand">
        <h4>Medicine</h4>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCon"
        aria-controls="navbarCon"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCon">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                            About us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/med/posts" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                            Medicine
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                            Register
                        </NavLink>
                    </li>
                    {user?
                <li className="nav-item">
                    <span className="nav-link" onClick={logout}>Logout</span>
                </li>:
                <li className="nav-item">
                <NavLink 
                to={"/login"} 
                className={
                    'nav-link '+
                    (status => status.isActive ? 'active' : '')
                } 
                >
                    Login
                </NavLink>
                </li>
}

        </ul>
        {user &&
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
}
      </div>
    </nav>
  );
};

export default Navbar;

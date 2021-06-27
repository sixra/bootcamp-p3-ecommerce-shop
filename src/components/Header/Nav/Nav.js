import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Nav.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { ShowSidebar } from "../../../Redux/actions/SidebarAction"

function Nav() {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ShowSidebar());
  };

  return (
    <div className="Nav-wrapper">
      <ul className="Nav-parent">
        <li className="Nav-item">
          <NavLink activeClassName='Active-page' to='/home'>
            home
          </NavLink>
        </li>
        <li className="Nav-item Nav-rel">
          <NavLink activeClassName='Active-page' to='/productlisting'>
            shop
          </NavLink>
          <GiHamburgerMenu
            onClick={() => handleClick()}
            className="Nav-menu"
          />
        </li>
        <li className="Nav-item">
          <NavLink activeClassName='Active-page' to='/terms'>
            t&c
          </NavLink>
        </li>
        <li className="Nav-item">
          <NavLink activeClassName='Active-page' to='/privacy'>
            privacy policy
          </NavLink>
        </li>
        <li className="Nav-item">
          <NavLink activeClassName='Active-page' to='/contact'>
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav

import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-sm navbar-dark bg-primary'><br /><br />

                <a className="navbar-brand" href="https://wwww.javaguides.net">Employee Management System</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/employees'>Employees</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className='nav-link' to='/departments'>Departments</NavLink>
                    </li>
                  </ul>
                  <form class="form-inline">
                    <input class="form-control sm" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success btn-sm" type="submit">Search</button>
                </form>
              </div>
            </nav>
        </header>

    </div>
  )
}

export default HeaderComponent
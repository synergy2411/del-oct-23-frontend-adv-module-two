import { Link, Outlet, NavLink } from 'react-router-dom'

function App() {
  return (
    <>
      {/* Navigation Bar */}

      <header>
        <nav className='navbar navbar-nav'>
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="todos">Todo List</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="new-todo">Add New</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className='m-auto'>
        <Outlet />
      </div>
      {/* Main Section */}
    </>

  );
}

export default App;

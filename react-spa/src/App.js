import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      {/* Navigation Bar */}

      <header>
        <nav className='navbar navbar-nav'>
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <Link className='nav-link' to="todos">Todo List</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="new-todo">Add New</Link>
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

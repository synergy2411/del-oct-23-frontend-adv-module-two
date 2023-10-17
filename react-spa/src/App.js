import { NavLink, Outlet } from 'react-router-dom';
import Dummy from './Demo/Dummy';
import DummyTwo from './Demo/DummyTwo';
import CardComp from './Demo/CardComp';
import CardTitle from './Demo/CardTitle';
import CardBody from './Demo/CardBody';

function App() {

  let msg = "Today is your lucky day!";

  let title = "Today's Quote";

  return (
    <>

      {/* <CardComp msg={msg} title={title} /> */}

      {/* Component Composition */}
      <CardComp titleComp={<CardTitle title={title} />} msgComp={<CardBody msg={msg} />} />


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

      <div className='mt-5'>
        <Outlet />
      </div>
      {/* Main Section */}
    </>

  );
}

export default App;

import { Outlet } from 'react-router-dom';
import './layout.css';
import Sidebar from '../sidebar/Sidebar';

const Layout = () => {
  return (
    <div className="layout flex relative">
      <Sidebar />
      <main className="layout__content flex flex-col w-full">
        <div className='layout__outlet'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
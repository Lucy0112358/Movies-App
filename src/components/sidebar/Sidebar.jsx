import './sidebar.css';
import { sitebarItems } from '../../data/sidebardItems';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSidebarHovered } from '../../redux/slice/uiSlice';
import avatar from "../../assets/icons/avatar.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsOpen(true);
    dispatch(setSidebarHovered(true));
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    dispatch(setSidebarHovered(false));
  };

  return (
    <div className='sidebar h-screen flex flex-col'>
      <div
        className={`bg-black text-white h-screen p-5 pt-8 duration-300 flex flex-col justify-between ${isOpen ? 'w-64' : 'w-20'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top section with avatar */}
        <div>
          {isOpen && (
            <div className="flex items-center mb-10">
              <img src={avatar} className="avatar" alt="avatar" />
              {isOpen && <span className="ml-4 font-semibold">Lusine</span>}
            </div>
          )}
          <ul className="space-y-4">
            {sitebarItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                style={{ textDecoration: 'none' }}
                className={({ isActive }) =>
                  !isOpen && isActive ? 'active-link flex items-center icon__container' : 'flex items-center icon__container'
                }
              >
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={`icon-${index}`}
                    className="sidebar__icon"
                  />
                  {isOpen && <span className="ml-4">{item.name}</span>}
                </div>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Bottom section (stuck to the bottom) */}
        {isOpen && (
          <ul className="space-y-2 text-gray-400 pb-5 uppercase tracking-wide font-medium text-sm">
            <li className="flex items-center">
              <span className="ml-4">Language</span>
            </li>
            <li className="flex items-center">
              <span className="ml-4">Get Help</span>
            </li>
            <li className="flex items-center">
              <span className="ml-4">Exit</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

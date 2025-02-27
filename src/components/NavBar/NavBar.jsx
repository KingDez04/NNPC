import { useState } from "react";
import { NavLink } from "react-router-dom";
import NNPCLogo from "../../assets/nnpcLoginLogo.png";
import notification from "../../assets/navIcons/notificationLogo.svg";
import displayPicture from "../../assets/navIcons/displayPicture.svg";
import dashboard from "../../assets/navIcons/dashboardLogo.svg";
import analytics from "../../assets/navIcons/analyticsLogo.svg";
import license from "../../assets/navIcons/licensesLogo.svg";
import help from "../../assets/navIcons/helpLogo.svg";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = (nav) => {
    if (nav) {
      setNav((prevNav) => !prevNav);
    } else {
      setNav((prevNav) => prevNav);
    }
  };

  const handleCloseNav = () => {
    setNav(false);
  };
  return (
    <nav className="relative block bg-white">
      <div
        className={`flex items-center justify-between h-[72px] shadow-md shadow-gray-400 px-[42px] ease-in-out duration-700 ${
          nav ? "ml-52" : "ml-0"
        }`}
      >
        <div className="text-[20.94px] font-bold leading-normal">
          Hello, {"Name"}
        </div>
        <div className="flex gap-5">
          <img src={notification} alt="notification logo" />
          <span onClick={(nav) => handleNav(nav)} className="cursor-pointer">
            <img
              src={displayPicture}
              alt="Display Picture"
              className="rounded-full h-[2.5rem] w-[40px]"
            />
          </span>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[209px] h-full bg-[#192F3D] ease-in-out duration-500 z-40"
            : "fixed top-0 left-[-100%] h-full ease-in-out duration-500"
        }
      >
        <div className="flex justify-center mt-[3px]">
          <span className="flex items-center justify-center">
            <img
              src={NNPCLogo}
              alt="NNPC Logo"
              className="w-[170px] h-[100px] p-2"
            />
          </span>
        </div>
        <ul className="px-2 pt-[2rem] text-center text-white text-[16.107px] font-semibold leading-normal">
          <li className="py-5 px-4 hover:bg-[#2C4B5F] rounded-sm">
            <NavLink
              to="/dashboard"
              onClick={handleCloseNav}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#2C4B5F] rounded-[10px] px-[23px] py-3 flex items-center justify-center gap-[14.09px]"
                  : "flex items-center justify-center gap-[14.09px]"
              }
            >
              <img src={dashboard} alt="dashboard logo" />
              Dashboard
            </NavLink>
          </li>
          <li className="py-5 px-4 hover:bg-[#2C4B5F] rounded-sm">
            <NavLink
              to="/analytics"
              onClick={handleCloseNav}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#2C4B5F] rounded-[10px] px-[23px] py-3 flex items-center justify-center gap-[14.09px]"
                  : "flex items-center justify-center gap-[14.09px]"
              }
            >
              <img src={analytics} alt="analytics logo" />
              Analytics
            </NavLink>
          </li>
          <li className="py-5 px-4 hover:bg-[#2C4B5F] rounded-sm">
            <NavLink
              to="/licenses"
              onClick={handleCloseNav}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#2C4B5F] rounded-[10px] px-[23px] py-3 flex items-center justify-center gap-[14.09px]"
                  : "flex items-center justify-center gap-[14.09px]"
              }
            >
              <img src={license} alt="license logo" />
              Licenses
            </NavLink>
          </li>
          <li className="py-5 px-4 hover:bg-[#2C4B5F] rounded-sm">
            <NavLink
              to="/help"
              onClick={handleCloseNav}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#2C4B5F] rounded-[10px] px-[23px] py-3 flex items-center justify-center gap-[14.09px]"
                  : "flex items-center justify-center gap-[14.09px]"
              }
            >
              <img src={help} alt="help logo" />
              Help
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;

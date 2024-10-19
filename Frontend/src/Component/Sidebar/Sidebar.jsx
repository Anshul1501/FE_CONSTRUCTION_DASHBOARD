import { LuLayoutDashboard } from "react-icons/lu";
import { WiTime12 } from "react-icons/wi";
import { CiViewList } from "react-icons/ci";
import { PiPipe } from "react-icons/pi";
import { CiMoneyBill } from "react-icons/ci";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { PiHandbagBold } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { MdOutlinePhoto } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { MdQueryStats } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r-2 border-gray-100 flex flex-col justify-between">
      <div className="p-4">
        {/* Logo Section */}
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
          <div className="flex flex-col">
            <span className="text-black font-semibold">CONSTRUCTION</span>
            <span className="text-xs text-gray-500">SERVICE</span>
          </div>
        </div>

        {/* Search Box */}
        <div className="relative mb-6">
        <CiSearch className="text-xl text-gray-700 absolute m-2.5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-8 pr-4 text-sm bg-white-100  border-2 border-grey-100 rounded-md focus:outline-none"
          />
        </div>

        {/* Main Menu */}
        <nav className="flex flex-col space-y-[-1%]">
          <p className="text-xs font-semibold text-gray-500">MAIN MENU</p>

          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 py-2 px-3 rounded-md hover:bg-gray-100 transition cursor-pointer">
              {item.icon}
              <span className={`text-sm ${item.active ? 'text-blue-500' : 'text-gray-700'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* User Profile */}
      <div className="flex items-center justify-between p-4 bg-gray-100 border-t">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div className="text-xs">
            <p className="font-semibold text-gray-700">Jacob Jones</p>
            <p className="text-gray-500">8:25 AM</p>
            <p className="text-gray-500">Feb 27, 2022</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-blue-500">
        <FaCheckCircle />
        </button>
      </div>
    </div>
  );
};

// Menu items for the sidebar
const menuItems = [
  { label: 'Dashboard', icon: <LuLayoutDashboard /> },
  { label: 'Time Tracking', icon: <WiTime12 /> },
  { label: 'Task List', icon: <CiViewList />},
  { label: 'Lead Pipeline', icon: <PiPipe />},
  { label: 'Estimates', icon: <CiMoneyBill /> },
  { label: 'Invoices', icon: <LiaFileInvoiceSolid /> },
  { label: 'Projects', icon: <PiHandbagBold /> },
  { label: 'Schedule', icon: <CiCalendar />},
  { label: 'Photos & Files', icon: <MdOutlinePhoto /> },
  { label: 'Customers', icon: <MdOutlinePeopleAlt />  },
  { label: 'Map', icon: <GrMapLocation /> },
  { label: 'Reports', icon: <MdQueryStats /> },
];


export default Sidebar;

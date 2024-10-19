import { IoPlayCircleOutline } from "react-icons/io5";
import { BsSortDown } from 'react-icons/bs';
import { AiOutlineFilter } from 'react-icons/ai';
import { FiCalendar } from 'react-icons/fi';

const ProjectLeadsHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b-2 border-gray-100">
      {/* Left Section - Title */}
      <div className="flex items-center space-x-2">
        <h2 className="text-xl font-semibold text-gray-800">New Project Leads</h2>
        <IoPlayCircleOutline className="text-xl text-teal-500 text-3xl" />
      </div>

      {/* Right Section - Controls */}
      <div className="flex space-x-3 items-center ml-[30%]">
        {/* Sort by */}
        <div className="flex items-center space-x-2 border rounded-md px-3 py-1 text-gray-700">
          <BsSortDown className="text-gray-500" />
          <span>Sort by</span>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-2 border rounded-md px-3 py-1 text-gray-700">
          <AiOutlineFilter className="text-gray-500" />
          <span>Filters</span>
        </div>

        {/* Datepicker */}
        <div className="flex items-center space-x-2 border rounded-md px-3 py-1 text-gray-700">
          <FiCalendar className="text-gray-500" />
          <span>Sep 17 - Sep 21, 2022</span>
        </div>
     
      </div>
         {/* Add Button */}
         <button className="flex items-center space-x-1 px-4 py-1 text-teal-400  border-2 border-teal-400 rounded-md hover:bg-teal-600 mr-[3%] ml-[3%">
          <span className="text-sm">+</span>
          <span className="text-sm">ADD</span>
        </button>
    </div>
  );
};

export default ProjectLeadsHeader;

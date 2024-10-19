import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { TbProgress } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import { CiMenuKebab } from "react-icons/ci";


const ProjectCard = () => {
  return (
    <>
    <div className="bg-white rounded-lg p-6 flex items-center justify-between space-x-6 border-2 border-gray-200 w-[95%] mt-3">
      {/* Left section */}
      <div className="flex items-center space-x-4 mt-[-1%] w-[45%]">
        {/* Icon and Follow-up */}
        <div className="flex flex-col items-center">
          <div className="bg-green-200 rounded-full p-4">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
            </svg>
          </div>
          <div className="text-xs font-medium text-green-700 mt-2">No Follow up</div>
        </div>
        
        {/* Project Info */}
        <div>
          <h2 className="text-lg text-black">Brown's Bathroom Remodel <span className="text-xs bg-gray-200 px-2 py-1 ml-2 rounded-lg">0185000</span> </h2>
          <div className="flex space-x-4 mt-2 text-gray-600 text-xs">
            <span className="flex items-center">
            <span><IoCallOutline className="text-lg mr-2 font-bold" /> </span> (907) 555-0101
            </span>
            <span className="flex items-center">
            <span><CiMail className="text-lg mr-2" /> </span> example@email.com
            </span>
          </div>
          <p className="flex mt-3 mb-[15%] text-xs text-gray-600"> <IoLocationOutline className="text-lg" /> 4517 Washington Ave. Manchester, Kentucky 39495</p>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-8 justify-between mt-[-8%] ml-[-3%] w-[55%] text-gray-600 border-2 border-red-600">
        {/* Project Info Dropdown */}
        <div>
          <label className="block text-xs  text-gray-700">Project Info</label>
          <select className="mt-1 block border border-gray-300 rounded-md shadow-sm py-1 px-4 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
            <option>Bathroom modeling</option>
          </select>
        </div>

        {/* Estimated Revenue */}
        <div>
          <label className="block text-xs text-gray-700">Est. revenue</label>
          <div className="mt-1 text-xs border border-gray-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-indigo-500">$120,000.00</div>
        </div>
        {/* Likelihood of Sale */}
        <div>
          <label className="block text-xs text-gray-600">Likelihood of sale</label>
          <div className="flex items-center mt-1 px-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500">
           <span className="text-xl"> <TbProgress /> </span>
            <span className="ml-2 text-xs font-medium">75%</span>
          </div>
        </div>

        {/* Sales Representatives */}
        <div>
          <label className="block text-xs text-gray-600">Sales Rep.</label>
          <div className="flex -space-x-2 mt-1">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://via.placeholder.com/32" alt="Rep 1" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://via.placeholder.com/32" alt="Rep 2" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://via.placeholder.com/32" alt="Rep 3" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://via.placeholder.com/32" alt="Rep 4" />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-row w-[35%] relative ml-[56%] mt-[-10%] text-lg space-x-5 text-gray-600">
       <butoon><CiCamera/></butoon>
       <butoon><CgNotes/></butoon>
       <butoon><PiPencilSimpleLineLight /></butoon>
       <butoon><CgMenuGridO /></butoon>
       <butoon><CiMenuKebab /></butoon>
       <div className="flex ml-10">
        <span className="text-xs ml-5">RECORD COMMUNICATION </span>
        <FaChevronDown className="text-xs mt-0.5 ml-2"/> </div>
    </div>
    </>
  );
};

export default ProjectCard;
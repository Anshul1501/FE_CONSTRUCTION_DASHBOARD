import { useState, useRef, useEffect } from 'react';
import { BsPlayCircle } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import { AiOutlineFilter } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Datepicker from "react-tailwindcss-datepicker"; // Import Datepicker

const ProjectLeadsHeader = () => {
    const [sortOption, setSortOption] = useState("latest");
    const [filterOption, setFilterOption] = useState("all");
    const [showForm, setShowForm] = useState(false);
    const [oneWay, setOneWay] = useState(true); // State to determine if the trip is one-way
    const [value, setValue] = useState({
        startDate: new Date(), // Default start date
        endDate: new Date(),   // Default end date
    });

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        console.log(`Sorting by: ${event.target.value}`);
    };

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
        console.log(`Filtering by: ${event.target.value}`);
    };

    const handleAddButtonClick = () => {
        setShowForm(!showForm);
    };

    const handleCloseModal = () => {
        setShowForm(false);
    };

    const handleDateChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className="relative bg-gray-50">
            {/* Header */}
            <div className="flex justify-between items-center bg-white border-b-2 border-gray-100 p-4">
                {/* Left Section - Title */}
                <div className="flex items-center space-x-2 ml-8 w-[60%] ">
                    <h2 className="text-xl font-semibold text-gray-800">New Project Leads</h2>
                    <BsPlayCircle className="text-teal-500 text-3xl" />
                </div>

                {/* Right Section - Controls */}
                <div className="flex space-x-3 items-center ml-[10%] float-right -mr-5 w-[60%]">
                    {/* Sort by */}
                    <div className="relative flex items-center space-x-2 border rounded-md px-3 py-1 text-gray-500 text-sm">
                        <BsSortDown className="text-lg" />
                        <span>Sort by</span>
                        <MdKeyboardArrowDown className="text-lg" />
                        <select
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full bg-white"
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <option value="latest" className="px-4 py-2">Latest</option>
                            <option value="oldest" className="px-4 py-2">Oldest</option>
                        </select>
                    </div>

                    {/* Filters */}
                    <div className="relative flex items-center space-x-2 border rounded-md px-3 py-1 text-gray-500 text-sm">
                        <AiOutlineFilter className="text-lg" />
                        <span>Filter by</span>
                        <MdKeyboardArrowDown className="text-lg" />
                        <select
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full bg-white"
                            value={filterOption}
                            onChange={handleFilterChange}
                        >
                               <option value="new">New</option>
                                    <option value="contact">Contact</option>
                                    <option value="upload">Upload Scope</option>
                                    <option value="estimate">Estimate</option>
                                    <option value="sign-contract">Sign Contract</option>
                                    <option value="payment">Payment</option>
                                    <option value="installation">Installation</option>
                                    <option value="completed">Completed</option>
                                    <option value="feedback">Feedback</option>
                        </select>
                    </div>

                    {/* Datepicker */}
                    <div className="w-[35%]">
                        <Datepicker
                            inputClassName={"w-full border-[1px] border-gray-300 p-0.5 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"}
                            containerClassName=""
                            asSingle={oneWay}
                            primaryColor={"blue"}
                            value={value}
                            showShortcuts={true}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>

                {/* Add Button */}
                <button
                    onClick={handleAddButtonClick}
                    className="flex items-center space-x-1 px-4 py-1 text-teal-400 border border-teal-400 rounded-md hover:bg-teal-600 hover:text-white mr-[3%] ml-[3%]"
                >
                    <span className="text-lg">+</span>
                    <span className="text-sm mt-0.5">ADD</span>
                </button>
            </div>

            {/* Modal Form */}
            {showForm && (
                <>
                    {/* Background Blur */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                        onClick={handleCloseModal} // Close the modal when clicking outside the form
                    />

                    {/* Form Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white border border-gray-500 rounded-lg p-6 w-full max-w-lg mx-auto relative">
                            {/* Close Button */}
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>

                            {/* Row 1: Email and Phone */}
                            <div className="flex space-x-4 mb-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="example@email.com"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="tel"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="(907) 555-0101"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Address */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
                                />
                            </div>

                            {/* Row 3: Dropdown */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Select Action</label>
                                <select className="dropdown menu dropdown-content bg-white z-[1] p-2 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-500 sm:text-sm">
                                    <option value="new">New</option>
                                    <option value="contact">Contact</option>
                                    <option value="upload">Upload Scope</option>
                                    <option value="estimate">Estimate</option>
                                    <option value="sign-contract">Sign Contract</option>
                                    <option value="payment">Payment</option>
                                    <option value="installation">Installation</option>
                                    <option value="completed">Completed</option>
                                    <option value="feedback">Feedback</option>
                                </select>
                            </div>
                            <button className='btn btn-primary w-full'>Submit</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectLeadsHeader;

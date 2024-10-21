import { useState } from "react";

const AddForm = () => {
  // State to toggle form visibility
  const [showForm, setShowForm] = useState(false);

  const handleAddButtonClick = () => {
    setShowForm(!showForm); // Toggle form visibility
  };

  return (
    <div className="p-4 bg-gray-50">
      {/* Add Button */}
      <button
        onClick={handleAddButtonClick}
        className="flex items-center space-x-1 px-4 py-2 text-teal-400 border border-teal-400 rounded-md hover:bg-teal-600 hover:text-white"
      >
        <span className="text-lg">+</span>
        <span className="text-sm">ADD</span>
      </button>

      {/* Conditional Form Rendering */}
      {showForm && (
        <div className="mt-4 p-4 bg-white border border-gray-500 rounded-md">
          
          {/* Row 1: Email and Phone */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="example@email.com"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="(907) 555-0101"
              />
            </div>
          </div>

          {/* Row 2: Name and Dropdown */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Select Action
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="new">New</option>
                <option value="contact">Contact</option>
                <option value="upload">Upload Scope</option>
              </select>
            </div>
          </div>

          {/* Row 3: Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
            />
          </div>
          <button>asdf</button>
          {/* Submit Button */}
          <button
            className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddForm;

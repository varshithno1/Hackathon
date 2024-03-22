import React from "react";

const UserInput = ({ click }) => {
  return (
    <div>
      <ul className="grid w-full gap-6 md:grid-cols-2 mt-4">
        <li>
          <input
            type="radio"
            id="attender"
            name="isuser"
            value="true"
            className="hidden peer"
            required
            onClick={click}
          />
          <label
            for="attender"
            className="inline-flex items-center justify-between w-full p-4 text-gray-700 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">Event Attender</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="organize"
            name="isuser"
            value="false"
            className="hidden peer"
            onClick={click}
          />
          <label
            for="organize"
            className="inline-flex items-center justify-between w-full p-4 text-gray-700 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold" onClick={click}>
                Event Organizer
              </div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default UserInput;

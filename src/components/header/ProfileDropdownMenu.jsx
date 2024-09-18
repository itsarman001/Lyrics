import React, { useState } from 'react';

function ProfileDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (action) => {
    // Perform the desired action based on the clicked menu item
    console.log('Clicked item:', action);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center px-4 py-2 bg-gray-100 rounded-md"
        onClick={handleButtonClick}
      >
        <img src="profile-image.jpg" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
        {/* Add other profile information as needed */}
        <span className="text-gray-700">Profile</span>
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md">
          <li className="px-4 py-2 hover:bg-gray-200">
            <a href="#" onClick={() => handleMenuItemClick('my-account')} className="text-gray-700">
              My Account
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <a href="#" onClick={() => handleMenuItemClick('settings')} className="text-gray-700">
              Settings
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <a href="#" onClick={() => handleMenuItemClick('logout')} className="text-gray-700">
              Logout
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileDropdownMenu;
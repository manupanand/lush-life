import React, { useState } from 'react';

interface Product{
    toggleDropdown:any;
    isDropdownOpen:boolean;
    title:string;
    firstProduct:string;
    secondProduct:string;
    thirdProduct:string;

}
// Dropdown component
const Dropdown: React.FC = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className=" flex justify-center ">
        <DropComponent toggleDropdown={toggleDropdown} 
        isDropdownOpen={isDropdownOpen} 
        title={'Product'} 
        firstProduct={'bedsheet'}
        secondProduct={'kitchen cloth'}
        thirdProduct={'pillow'}></DropComponent>
    </div>
    
  );
};



export default Dropdown;

function DropComponent(
    {toggleDropdown,
        isDropdownOpen,
        title,
        firstProduct,
        secondProduct,
        thirdProduct}:Product){
    return(
        <div className="relative place-content-center" 
        onMouseEnter={toggleDropdown} 
        onMouseLeave={toggleDropdown}>
            <button
                className="text-black
                bg-gray-200
                hover:bg-gray-300 focus:outline-none px-4 py-2 "
            >
               {title}

                
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" 
                className="w-6 h-6">
                <path strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            {isDropdownOpen && (
                <div className="absolute top-10 right-0
                 bg-white border shadow-md">
                <ul>
                    <li>
                    <a href="#" className="block px-4 py-2
                     hover:bg-gray-100">
                        {firstProduct}
                    </a>
                    </li>
                    <li>
                    <a href="#" className="block px-4 py-2
                     hover:bg-gray-100">
                        {secondProduct}
                    </a>
                    </li>
                    <li>
                    <a href="#" className="block px-4 py-2
                     hover:bg-gray-100">
                       {thirdProduct}
                    </a>
                    </li>
                </ul>
                </div>
            )}
    </div>

    )
}
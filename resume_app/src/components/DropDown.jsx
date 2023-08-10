import React, { useEffect, useState, useRef } from "react";
// import Validation from "./Validation";

const Dropdown = ({
  placeholder,
  options,
  lableName,
  validationError,
  label,
  updateValue,
  widthForSelect,
  objName,
  value,
  isKey,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  let preSelectedvalue = null;
  if (options) {
    preSelectedvalue = options.find((item) => item.id === value);
  }

  useEffect(() => {
    if (preSelectedvalue) {
      setSelectedOption(preSelectedvalue[objName]);
    }
  }, [preSelectedvalue, objName]);

  const handleOptionClick = (index) => {
    let obj = options[index];
    setSelectedOption(obj[objName]);
    let key = obj.id;
    if (updateValue) {
      if (isKey == false) {
        updateValue(obj[objName]);
      } else {
        updateValue(key);
      }
      setIsDropdownOpen(false);
    }
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  var width;
  if (widthForSelect) {
    width = widthForSelect;
  } else {
    width = "w-[300px]";
  }
  var labelWidth;
  if (label) {
    labelWidth = label;
  } else {
    labelWidth = "font-medium ";
  }
  var classNameForWidth;
  if (widthForSelect) {
    classNameForWidth = ` relative flex  flex-col items-center mt-[1px] justify-start   gap-1    ${width} `;
  } else {
    classNameForWidth = ` relative flex  flex-col items-center justify-start  gap-1      sm:w-[300px]   `;
  }
  var classNameForWidthSecond;
  if (widthForSelect) {
    classNameForWidthSecond = `text-center flex justify-around z-40  px-3 py-[11px] items-center  mt-[1px] font-roboto font-medium text-base text-[#4e4e4e] borde-2 border-[#D6D6D6]  appearance-none    ${width} bg-white  border rounded-lg leading-tight focus:outline-none focus:bg-white `;
  } else {
    classNameForWidthSecond = `text-center  mt-[1px] flex z-50 justify-around  px-3 py-[11px] items-center font-roboto font-medium text-base text-[#4e4e4e] borde-2 border-[#D6D6D6]  appearance-none    w-[300px]  bg-white  border rounded-lg leading-tight focus:outline-none focus:bg-white `;
  }
  var classNameForWidthThird;
  if (widthForSelect) {
    classNameForWidthThird = `absolute z-40  z-40 drop-shadow-xl  mt-1 overflow-auto text-base bg-white rounded-md  shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${width} `;
  } else {
    classNameForWidthThird = `absolute z-40  z-40 drop-shadow-xl  w-[300px]  mt-1 overflow-auto text-base bg-white rounded-md  shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text  `;
  }

  return (
    <>
      <div ref={dropdownRef} className={classNameForWidth}>
        <div
          className={`text-sm   text-[#344053] self-start   pl-[2px] ${labelWidth}`}
        >
          {lableName}
        </div>
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className={classNameForWidthSecond}
            type="button"
            onClick={toggleDropdown}
          >
            <div className="flex items-center text-[#4e4e4e]   justify-start w-full ">
              {selectedOption || placeholder}
            </div>
            <div className="flex items-center justify-end w-1/12 ">
              <svg
                className={`  w-2.5  ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
          </button>

          {isDropdownOpen && (
            <div id="dropdown" className={classNameForWidthThird}>
              <ul
                className="py-2 text-sm  text-gray-700"
                aria-labelledby="dropdownDefaultButton"
              >
                {options.map((option, index) => (
                  <li key={index}>
                    <button
                      href="#"
                      className={`block px-4 py-2 w-full text-left hover:bg-gray-100  ${
                        selectedOption === option ? "bg-blue-100 " : ""
                      }`}
                      onClick={() => handleOptionClick(index)}
                    >
                      {option[objName]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* <Validation Error={validationError} /> */}
      </div>
    </>
  );
};

export default Dropdown;

import React from 'react';
import './Dropdown.css';
import {RiArrowDropDownFill} from 'react-icons/ri';


const DropdownC = ({ options }) => {
    const [selectedOption, setSelectedOption] = React.useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div className="dropdown-container">
        <select className="dropdown-select" value={selectedOption} onChange={handleOptionChange}>
          {options.map((option) => (
            <option className="dropdown-option" key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <RiArrowDropDownFill className="dropdown-icon" />
      </div>
    );
  };
  
 
  

export default DropdownC;
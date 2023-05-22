import React from 'react';
import './Toolbar.css';
import docs from './Assets/docs1.png';
import { BiUndo, BiRedo } from 'react-icons/bi';
import { SlPrinter } from 'react-icons/sl'
import {
  MdOutlineSpellcheck, MdFormatColorText,
  MdOutlineInsertComment, MdStarOutline,
   MdOutlineEdit, MdMoreVert,MdOutlineKeyboardArrowUp,MdLockOutline
} from 'react-icons/md';
import { TfiPaintRoller } from 'react-icons/tfi'
import DropdownC from '../Dropdown/Dropdown';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineBold, AiOutlineItalic, AiOutlineUnderline } from 'react-icons/ai';
import { FaHighlighter } from 'react-icons/fa';
import { RiArrowDropDownFill } from 'react-icons/ri';
import R from './Assets/R.png'
import calender from './Assets/calender.png';
import slides from './Assets/slides.png';
import task from './Assets/task2.png';
import contact from './Assets/contact.png';
import map from './Assets/map.png'
import meet from './Assets/meet.png'




const Toolbar = () => {
  const options1 = [
    { value: '1', label: '100%' },
    { value: '2', label: '50%' },
    { value: '3', label: '75%' },
  ];

  const options2 = [
    { value: 'optionA', label: 'Normal text' },
    { value: 'optionB', label: 'Title' },
    { value: 'optionC', label: 'SubTitle' },
  ];
  const options3 = [
    { value: 'optionA', label: 'Arial' },
    { value: 'optionB', label: 'Calibri' },
    { value: 'optionC', label: 'Roboto' },
  ];
 


  return (
    <div className='container1'>
      <div className='header'>
        <div className='logo-container'>
          <img src={docs} alt="react logo" className='logo' />

          <h1 className="untitled">
            <span>Untitled document</span>
          </h1>

          <ul className="mainMenu">
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Insert</li>
            <li>Format</li>
            <li>Tools</li>
            <li>Extenstions</li>
            <li>Help</li>
          </ul>
        </div>
        <div className='star'>
          <MdStarOutline size={18} />
        </div>
        <div className="rightSide">
          <div className='comment'><MdOutlineInsertComment size={20}/></div>
          <div className='meet'><img src={meet} alt="react logo" className='meet2'/>
           <RiArrowDropDownFill className='dropdown-icon'/></div>
          <div className="share-button"><MdLockOutline size={15} className='sharelock'/>Share</div>
          <div className="circle-container">
            <img src={R} alt="Your Image" className="circle-image" />
          </div>
        </div>

      </div>

      <div className="toolbar-container">
        <p className="toolbar-button"><BiUndo /></p>
        <p className="toolbar-button"><BiRedo /></p>
        <p className="toolbar-button"><SlPrinter /></p>
        <p className="toolbar-button"><MdOutlineSpellcheck /></p>
        <p className="toolbar-button"><TfiPaintRoller /></p>
        <DropdownC className="toolbar-dropdown" options={options1} />
        <span className="splash">|</span>
        <DropdownC className="toolbar-dropdown" options={options2} />
        <DropdownC className="toolbar-dropdown" options={options3} />
        <span className="splash">|</span>
        <p className="toolbar-button"><AiOutlineMinus /></p>
        <input type="number" name="qty1" value="12" min="1" max="5" pattern="[0-9]" className="font-sizearea" />

        
        <p className="toolbar-button"><AiOutlinePlus /></p>
        <span className="splash">|</span>
        <p className="toolbar-button"  onclick="makeTextBold()"><AiOutlineBold /></p>
        <p className="toolbar-button"><AiOutlineItalic /></p>
        <p className="toolbar-button"><AiOutlineUnderline /></p>
        <p className="toolbar-button"><MdFormatColorText /></p>
        <p className="toolbar-button"><FaHighlighter /></p>
        <span className="splash">|</span>
        <p className="toolbar-button"><MdMoreVert /></p>     
        <p className="toolbar-buttonline"><MdOutlineEdit /><RiArrowDropDownFill className='dropdown-icon' /></p>
        <span className="splash">|</span>
        <p className="toolbar-button" ><MdOutlineKeyboardArrowUp size={25} /></p>

      </div>
      
      <div className='googlecompoenets'>
        <a href='https://calendar.google.com/calendar/u/0/r'>
      <img src={calender} alt="react logo" className='calender'  /></a>
      <a href='https://docs.google.com/presentation/u/0/'> <img src={slides} alt="react logo" className='slides' /></a>
     
      <a href='https://tasksboard.com/'><img src={task } alt="react logo" className='task'  /></a>
      <a href='https://contacts.google.com/'><img src={contact} alt="react logo" className='contact'  /></a>
      <a href='https://www.google.com/maps?authuser=0'><img src={map} alt="react logo" className='map'  /></a>
      <span className="splash2">|</span>
      <p className='plus'><AiOutlinePlus /></p>
       
      </div>
    </div>
  );
};

export default Toolbar;

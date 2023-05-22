import React from 'react';
import './DocumnetDisplay.css'

import { TfiMenuAlt } from 'react-icons/tfi';

const DocumentDisplay = ({ content, formattingOptions }) => {
  const getStyle = () => {
    let style = {};
    if (formattingOptions.bold) {
      style = { ...style, fontWeight: 'bold' };
    }
    if (formattingOptions.italic) {
      style = { ...style, fontStyle: 'italic' };
    }
    return style;
  };

  return (
    <div  style={getStyle()}>
        <TfiMenuAlt className='Displaydocumnet' size={23} />
     
    </div>
  );
};

export default DocumentDisplay;

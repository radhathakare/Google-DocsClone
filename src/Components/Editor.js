import React,{useState} from 'react';
import './Editor.css'

const Editor = () => {
  const [content, setContent] = useState('');

  const handleInputChange = (event) => {
    setContent(event.target.textContent);
  };
  return (
  
    <div className="text-editor" contentEditable="true" onInput={handleInputChange}>
   {content.length === 0 && (
        <div className="placeholder-f">
          <span className="placeholder-text">Type @ to insert</span>
        </div>
      )}
  </div>
  );
};

export default Editor;
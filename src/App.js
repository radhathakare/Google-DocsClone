import React, { useState } from 'react';
import Editor from './Components/Editor';
import Toolbar from './Components/Header/Toolbar';
import DocumentDisplay from './Components/DocumnetDisplay';

const App = () => {
  const [content, setContent] = useState('');
  const [formattingOptions, setFormattingOptions] = useState({});

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleFormattingChange = (newFormattingOptions) => {
    setFormattingOptions(newFormattingOptions);
  };

  return (
    <div className='doc-container'>
      <Toolbar onFormattingChange={handleFormattingChange} />
      <div style={{ display: 'flex' }}>
        
        <DocumentDisplay
          content={content}
          formattingOptions={formattingOptions}
        />
        <Editor
          content={content}
          onContentChange={handleContentChange}
          formattingOptions={formattingOptions}
        />
      </div>
    </div>
  );
};

export default App;

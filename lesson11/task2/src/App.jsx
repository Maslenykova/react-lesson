import React, { useState } from 'react';
import Expand from './Expand';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <Expand
        title="More information"
        isOpen={isOpen}
        onToggle={toggleExpand}
      >
        <p>
          React hooks are a new addition in React 16.8. They let you use state and other React
          features without writing a class.
        </p>
      </Expand>
    </div>
  );
};

export default App;
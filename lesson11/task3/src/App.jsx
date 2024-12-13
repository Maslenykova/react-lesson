import React, { useState } from 'react';
import Expand from './Expand';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="app">
      <Expand
        title="Click to Expand"
        isOpen={isOpen}
        onToggle={handleToggle}
      >
        <p>
          This is the main content. It appears when the expand button is toggled.
        </p>
      </Expand>
    </div>
  );
};

export default App;
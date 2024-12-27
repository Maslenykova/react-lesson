import React, { useState} from 'react';
import Clock from './Clock';

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle</button>
      {visible && (
        <div className="clock">
          <Clock location="New York" offset={-5} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="London" offset={0} />
        </div>
      )}
    </div>
  );
};


export default App;
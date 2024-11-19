import React from 'react';
import Counter from './Counter';

const App = () => {
    return(
        <>
        <Counter start={2} interval={1000}/>
        <Counter start={17} interval={1000}/>
        <Counter start={-21} interval={500}/>
        </>
    );
};

export default App;
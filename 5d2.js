import React from 'react'; 
 
function App() { 
  // Array of items to render 
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango']; 
 
  return ( 
    <div style={{ padding: '20px' }}> 
      <h1>Iterative Rendering using map()</h1> 
 
      <ul> 
        {/* Using map() to render list items */} 
        {fruits.map((fruit, index) => ( 
          <li key={index}>{fruit}</li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
 
export default App;
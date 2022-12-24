import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState(false);
  
  const toggleChange=()=>{
    setValue(!value)
  }
  return (
   <>
   <button onClick={()=>toggleChange()}>Click</button>
   <div style={{width:"200px",height:"200px",border:"2px dashed red",backgroundColor:value? "yellow":"violet"}}></div>
   </>
  );
}

export default App;

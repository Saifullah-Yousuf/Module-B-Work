// import React from 'react';
// import { useSelector , useDispatch } from 'react-redux';
// import { increment , decrement } from './CounterSlice/CounterSlice';

// const App = () => {
//   const myState = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <div style={{textAlign: 'center'}}>
//       <h1>APP</h1>
//       <input type="number" value={myState} readOnly />
//       <br />
//       <br />
//       <button onClick={()=> dispatch(increment())}>ADD</button>
//       <button onClick={()=> dispatch(decrement())}>Delete</button>
//     </div>
//   )
// }

// export default App









import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './CounterSlice/CounterSlice';

const App = () => {
  const myState = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();


  const handleDecrement = () => {
    if (myState > 0) {
      dispatch(decrement());
    }
  };

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f0f0', 
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333' }}>Counter App</h1>
      <input 
        type="number" 
        value={myState} 
        readOnly 
        style={{
          width: '100px', 
          padding: '10px', 
          fontSize: '28px', 
          textAlign: 'center', 
          border: 'none', 
          borderRadius: '5px',
          marginBottom: '20px',
          backgroundColor: '#F0F0F0'
        }} 
      />
      <div>
        <button 
          onClick={() => dispatch(increment())} 
          style={{
            padding: '10px 20px', 
            fontSize: '16px', 
            margin: '5px', 
            borderRadius: '5px', 
            border: '2px solid #000', 
            backgroundColor: '#000', 
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#000'}
        >
          ADD
        </button>
        <button 
          onClick={handleDecrement} 
          style={{
            padding: '10px 20px', 
            fontSize: '16px', 
            margin: '5px', 
            borderRadius: '5px', 
            border: '2px solid #000', 
            backgroundColor: '#000', 
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#000'}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default App;

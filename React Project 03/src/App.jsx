import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/SignUp Form/SignUp';
import Login from './Components/Login Form/Login';

const App = () => {
  const [join, setjoin] = useState(true)
  const funcJoin = () =>{
    setjoin(!join)
  }

  return (
    <div>
      {
        join ? <SignUp func={funcJoin}/> : <Login func={funcJoin}/>
      }
    </div>
  )
}

export default App

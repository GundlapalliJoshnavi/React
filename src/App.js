import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
{/*LOgin Form */}
function App() {
  return (<>
   <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='login'>
    <form>
     <h2 className='mb-3'>Login Form</h2>
     <div className='form-group mb-2'>
      <label htmlFor='Email' className='form-label'>EmailAddress</label>
      <input type='email' className='form-control'></input>
     </div>
     <div className='form-group mb-2'>
      <label htmlFor='Password' className='form-label'>Password</label>
      <input type='password'className='form-control'></input>
     </div>
     <button className='btn btn-success block w-100 mt-2' type='submit'>Sign In</button>
     </form>
    </div>
   </div>
   </>  
  );
}

export default App;

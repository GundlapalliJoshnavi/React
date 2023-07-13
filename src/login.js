import React,{useState,useEffect} from 'react';
function Login() {
  const [data,setData]=useState(``);
  useEffect( axios.post(`https://dummyjson.com/auth/login`,{username: 'kminchelle',password: '0lelplR'})
                  .then((posRes)=>{let {data} = posRes; 
                    console(setData())},(errRes)=>{}),[]) 
                    
  
    
    
    
  
  return (
    <>
        <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
          <div className="login">
            <form>
              <h2 className="mb-3">Login Form</h2>
              <div className="form-group mb-2">
                <label htmlFor="username" className="form-label">
                  username
                </label>
                <input type="text" id='username' className="form-control"></input>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
                <input type="password" id='Password' className="form-control"></input>
              </div>
              <button className="btn btn-success block w-100 mt-2" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
    </>
  );
}
export default Login;

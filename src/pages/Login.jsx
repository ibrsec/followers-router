import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setIsLogged}) => {
const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError,setLoginError] = useState(false);
    const credentials = {
        username:"john_doe@hibertech.com",
        password:"hiber99john"
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginCredentials = {
        username:username,
        password:password
    }
    if(credentials.username === username && credentials.password === password){
        console.log('logged in');
        setLoginError(false)
        setIsLogged(true)
        navigate("/");
    }else{
        console.log('logged in olmadi');
        setLoginError(true)
        setIsLogged(false);

    }





  };

  const handleFill = (e) => {
    e.preventDefault();
    setusername(credentials.username);
    setPassword(credentials.password)
  }
  return (
    <form className="container my-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="username: john_doe@hibertech.com"
          onChange={(e)=>setusername(e.target.value)}
          value={username}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="password: hiber99john"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-warning  ">
        Submit
      </button>
      <button className="btn btn-secondary ms-2  " onClick={handleFill}>Fill the credentials</button>
      <div>{loginError && <h6 className="text-danger fs-4 my-3">Invalid username or password!!</h6>}</div>
    </form>
  );
};

export default Login;

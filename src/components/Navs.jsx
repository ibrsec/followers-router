import  {NavLink  }  from "react-router-dom";

 

const Navs = ({isLogged,setIsLogged}) => { 



    const handleLogoutCLick = (e) => {
        // e.preventDefault();
        setIsLogged(false);
    }
  return (
    
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand text-black-50 fw-bold fs-4"  >Followers</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {isLogged && 
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link  " aria-current="page"  >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link"  >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" onClick={handleLogoutCLick} >Logout</NavLink>
        </li> 
      </ul>
    </div>
    }
  </div>
</nav>
  )
}

export default Navs;
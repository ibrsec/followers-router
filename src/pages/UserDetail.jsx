import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const [loading,setLoading] = useState(false);
    

  const getUser = async () => {
    const url = "https://api.github.com/users/" + username;
    try {

        setLoading(true)
      const response = await axios.get(url);
      if (response.status !== 200) {

        setLoading(false)
        throw new Error("not 200 get a user");
      }

      setLoading(false)
      setUser(response.data);
    } catch (error) {

        setLoading(false)
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(user);
  const { avatar_url, id, login, html_url, name,company , location,blog } = user;
  return (
    <div className="container mx-auto  text-center row">
        {
            loading ? <div className="text-center" > <img src="https://i0.wp.com/codemyui.com/wp-content/uploads/2017/07/fidget-spinner-loading.gif?fit=880%2C440&ssl=1" width="390px" alt="" /></div>
            :  
        
      <div className="border m-3 mx-auto text-center col-12 col-sm-12 col-md-9 col-lg-6 col-xl-6">
        <img src={avatar_url} alt="" className="w-100 object-fit-contain" />
        <div
          className="d-flex align-items-center justify-content-between mx-auto     mt-2"
           
        >
          <p className="fw-bold fs-5">Name:</p>
          <span className="fs-5">{name || "--"}</span>
        </div>
        <div
          className="d-flex align-items-center justify-content-between mx-auto     mt-2"
           
        >
          <p className="fw-bold fs-5">Username:</p>
          <span className="fs-5">{login || "--"}</span>
        </div> 
        <div
          className="d-flex align-items-center justify-content-between mx-auto     mt-2"
           
        >
          <p className="fw-bold fs-5">Company:</p>
          <span className="fs-5">{company || "--"}</span>
        </div>

        <div
          className="d-flex align-items-center justify-content-between mx-auto     mt-2"
           
        >
          <p className="fw-bold fs-5">Location:</p>
          <span className="fs-5">{location || "--"}</span>
        </div>
        <div
          className="d-flex align-items-center justify-content-between mx-auto     mt-2"
           
        >
          <p className="fw-bold fs-5">Blog:</p>
          <span className="fs-5">{blog || "--"}</span>
        </div>
        <div className="m-3 text-center">
                <a href={html_url} target="_blank" className="btn btn-warning mx-2">View Profile</a> 
                <button className="btn btn-danger" onClick={()=>navigate(-1)}>Go Back</button>
            </div>
      </div>
      }
    </div>
  );
};

export default UserDetail;

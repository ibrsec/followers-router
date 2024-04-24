import { useNavigate } from "react-router-dom";

const Followers = ({ followers }) => {
    const navigate = useNavigate();
  console.log(followers);
  return (
    <div className="d-flex align-items-center justify-content-center gap-1 flex-wrap my-4">
      {followers?.map((follower) => {
        const { avatar_url, id,login,html_url } = follower;
        return (
          <div key={id} className="border rounded-1 " style={{height:"30rem",width:"18rem"}}>
            <img src={avatar_url} alt="" className="h-75 w-100 object-fit-contain" />
            <p className="text-center text-secondary ">{login}</p>
            <div className="m-3 text-center">
                <a href={html_url} target="_blank" className="btn btn-warning mx-2">View Profile</a>
                <button className="btn btn-primary" onClick={()=>navigate(`/followers/${login}`)}>See Details</button>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Followers;

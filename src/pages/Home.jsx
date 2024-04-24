import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Followers from "../components/Followers";
import Search from "../components/Search";

 
const Home = () => {
const [followers,setFollowers] = useState();
const [page, setPage ] = useState(1);
const [loading,setLoading] = useState(false);
    
    const getFollowers =async (page) => {
    const url = "https://api.github.com/users/visionmedia/followers?per_page=10&page=";

    try{
        setLoading(true);
        const response = await axios.get(url+page);
        if(response.status !== 200){
            setLoading(false)
            throw new Error("not 200 get Followers, page = ", page);
        }
        setLoading(false)
        setFollowers(response.data);

    }catch(error){
        setLoading(false)
        console.log(error);
    }

}

useEffect(()=> {
    getFollowers(page);
},[page])
console.log(followers);
console.log(page);





  return (
    <div className="container">
        <Search />
        <Pagination setPage={setPage} />
        {
            loading ? <div className="text-center" > <img src="https://i0.wp.com/codemyui.com/wp-content/uploads/2017/07/fidget-spinner-loading.gif?fit=880%2C440&ssl=1" width="390px" alt="" /></div>
            : <Followers followers={followers}/>
        }
        
    </div>
  )
}

export default Home;
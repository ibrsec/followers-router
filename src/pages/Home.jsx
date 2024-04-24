import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Followers from "../components/Followers";
import Search from "../components/Search";

 
const Home = () => {
const [followers,setFollowers] = useState([]);
const [allFollowers,setAllFollowers] = useState([]);
const [searchValue,setSearchValue] = useState("");



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
        setAllFollowers(response.data);

    }catch(error){
        setLoading(false)
        console.log(error);
    }

}

useEffect(()=> {
    getFollowers(page);
    // const datas =[
    //   {
    //     "login": "avindra",
    //     "id": 126848,
    //     "node_id": "MDQ6VXNlcjEyNjg0OA==",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/126848?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/avindra",
    //     "html_url": "https://github.com/avindra",
    //     "followers_url": "https://api.github.com/users/avindra/followers",
    //     "following_url": "https://api.github.com/users/avindra/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/avindra/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/avindra/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/avindra/subscriptions",
    //     "organizations_url": "https://api.github.com/users/avindra/orgs",
    //     "repos_url": "https://api.github.com/users/avindra/repos",
    //     "events_url": "https://api.github.com/users/avindra/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/avindra/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   {
    //     "login": "9kopb",
    //     "id": 140489,
    //     "node_id": "MDQ6VXNlcjE0MDQ4OQ==",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/140489?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/9kopb",
    //     "html_url": "https://github.com/9kopb",
    //     "followers_url": "https://api.github.com/users/9kopb/followers",
    //     "following_url": "https://api.github.com/users/9kopb/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/9kopb/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/9kopb/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/9kopb/subscriptions",
    //     "organizations_url": "https://api.github.com/users/9kopb/orgs",
    //     "repos_url": "https://api.github.com/users/9kopb/repos",
    //     "events_url": "https://api.github.com/users/9kopb/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/9kopb/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   {
    //     "login": "tongweizj",
    //     "id": 665012,
    //     "node_id": "MDQ6VXNlcjY2NTAxMg==",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/665012?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/tongweizj",
    //     "html_url": "https://github.com/tongweizj",
    //     "followers_url": "https://api.github.com/users/tongweizj/followers",
    //     "following_url": "https://api.github.com/users/tongweizj/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/tongweizj/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/tongweizj/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/tongweizj/subscriptions",
    //     "organizations_url": "https://api.github.com/users/tongweizj/orgs",
    //     "repos_url": "https://api.github.com/users/tongweizj/repos",
    //     "events_url": "https://api.github.com/users/tongweizj/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/tongweizj/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   {
    //     "login": "brad426",
    //     "id": 686757,
    //     "node_id": "MDQ6VXNlcjY4Njc1Nw==",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/686757?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/brad426",
    //     "html_url": "https://github.com/brad426",
    //     "followers_url": "https://api.github.com/users/brad426/followers",
    //     "following_url": "https://api.github.com/users/brad426/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/brad426/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/brad426/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/brad426/subscriptions",
    //     "organizations_url": "https://api.github.com/users/brad426/orgs",
    //     "repos_url": "https://api.github.com/users/brad426/repos",
    //     "events_url": "https://api.github.com/users/brad426/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/brad426/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   {
    //     "login": "kororo",
    //     "id": 689528,
    //     "node_id": "MDQ6VXNlcjY4OTUyOA==",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/689528?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/kororo",
    //     "html_url": "https://github.com/kororo",
    //     "followers_url": "https://api.github.com/users/kororo/followers",
    //     "following_url": "https://api.github.com/users/kororo/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/kororo/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/kororo/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/kororo/subscriptions",
    //     "organizations_url": "https://api.github.com/users/kororo/orgs",
    //     "repos_url": "https://api.github.com/users/kororo/repos",
    //     "events_url": "https://api.github.com/users/kororo/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/kororo/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   {
    //     "login": "joeshub",
    //     "id": 764006,
    //     "node_id": "MDQ6VXNlcjc2NDAwNg==",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/764006?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/joeshub",
    //     "html_url": "https://github.com/joeshub",
    //     "followers_url": "https://api.github.com/users/joeshub/followers",
    //     "following_url": "https://api.github.com/users/joeshub/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/joeshub/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/joeshub/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/joeshub/subscriptions",
    //     "organizations_url": "https://api.github.com/users/joeshub/orgs",
    //     "repos_url": "https://api.github.com/users/joeshub/repos",
    //     "events_url": "https://api.github.com/users/joeshub/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/joeshub/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   {
    //     "login": "twokul",
    //     "id": 1131196,
    //     "node_id": "MDQ6VXNlcjExMzExOTY=",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/1131196?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/twokul",
    //     "html_url": "https://github.com/twokul",
    //     "followers_url": "https://api.github.com/users/twokul/followers",
    //     "following_url": "https://api.github.com/users/twokul/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/twokul/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/twokul/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/twokul/subscriptions",
    //     "organizations_url": "https://api.github.com/users/twokul/orgs",
    //     "repos_url": "https://api.github.com/users/twokul/repos",
    //     "events_url": "https://api.github.com/users/twokul/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/twokul/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   {
    //     "login": "gxcsoccer",
    //     "id": 1207064,
    //     "node_id": "MDQ6VXNlcjEyMDcwNjQ=",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/1207064?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/gxcsoccer",
    //     "html_url": "https://github.com/gxcsoccer",
    //     "followers_url": "https://api.github.com/users/gxcsoccer/followers",
    //     "following_url": "https://api.github.com/users/gxcsoccer/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/gxcsoccer/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/gxcsoccer/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/gxcsoccer/subscriptions",
    //     "organizations_url": "https://api.github.com/users/gxcsoccer/orgs",
    //     "repos_url": "https://api.github.com/users/gxcsoccer/repos",
    //     "events_url": "https://api.github.com/users/gxcsoccer/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/gxcsoccer/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   {
    //     "login": "barbatron",
    //     "id": 1238405,
    //     "node_id": "MDQ6VXNlcjEyMzg0MDU=",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/1238405?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/barbatron",
    //     "html_url": "https://github.com/barbatron",
    //     "followers_url": "https://api.github.com/users/barbatron/followers",
    //     "following_url": "https://api.github.com/users/barbatron/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/barbatron/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/barbatron/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/barbatron/subscriptions",
    //     "organizations_url": "https://api.github.com/users/barbatron/orgs",
    //     "repos_url": "https://api.github.com/users/barbatron/repos",
    //     "events_url": "https://api.github.com/users/barbatron/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/barbatron/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   {
    //     "login": "ibalpinar",
    //     "id": 1355079,
    //     "node_id": "MDQ6VXNlcjEzNTUwNzk=",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/1355079?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/ibalpinar",
    //     "html_url": "https://github.com/ibalpinar",
    //     "followers_url": "https://api.github.com/users/ibalpinar/followers",
    //     "following_url": "https://api.github.com/users/ibalpinar/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/ibalpinar/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/ibalpinar/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/ibalpinar/subscriptions",
    //     "organizations_url": "https://api.github.com/users/ibalpinar/orgs",
    //     "repos_url": "https://api.github.com/users/ibalpinar/repos",
    //     "events_url": "https://api.github.com/users/ibalpinar/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/ibalpinar/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   }
    // ];
    // setFollowers(datas) ;
    // setAllFollowers(datas);
      
},[page])
console.log(followers);
console.log(page);
 

useEffect(()=> {
 
  setFollowers(
    allFollowers?.filter(user => user.login.toLowerCase().includes(searchValue.trim().toLowerCase()))
  )
},[searchValue])


  return (
    <div className="container">
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Pagination setPage={setPage} />
        {
            loading ? <div className="text-center" > <img src="https://i0.wp.com/codemyui.com/wp-content/uploads/2017/07/fidget-spinner-loading.gif?fit=880%2C440&ssl=1" width="390px" alt="" /></div>
            : <Followers followers={followers}/>
        }
        
    </div>
  )
}

export default Home;
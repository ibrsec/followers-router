import { useEffect, useState } from "react";

const Search = ({searchValue,setSearchValue}) => {  
    

  return (
    <div className="my-4 container w-75">
      <div className="input-group">
        <span className="input-group-text bg-warning fs-3" id="basic-addon3">
          Search
        </span>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3 basic-addon4"
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;

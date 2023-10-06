import React, { useState } from "react";
import TableData from "./TableData";
import RepoDetailpage from "./RepoDetailpage";

const Home = ({data}) => {
  console.log("homedata:",data)
  return (
    <div>
      {data.length>0 && data.map((el)=>{
            return <TableData key={el.id} {...el}/>
         })}
    </div>
  );
};

export default Home;

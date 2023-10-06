import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FollowersRepo = ({data}) => {
  let name=JSON.parse(localStorage.getItem('followersName'))||[]
  const [git,setGit]=useState(name)
  const [follower,setFollower]=useState([])
  
  useEffect(()=>{
    fetch(`https://api.github.com/users/${git}/followers`).then(res=>res.json()).then(res=>{
      console.log("newfollowersname",res)
      setFollower(res)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  // console.log("followersRepodata:",data[0].owner.followers_url)
  let {id}=useParams()
  return (
    <div>
      <h1><strong>Name:</strong>{name} | Id: {id}</h1>
      <h1>Total Count:{follower.length}</h1>
      {follower.length>0 && follower.map(el=>{
        return <>
        <div class="follower-card">
        <img class="avatar" src={el.avatar_url} alt="Follower Avatar"/>
        <div class="follower-info">
            <strong><a href={el.html_url} target="_blank">{el.login}</a></strong>
            {/* <strong><a href={el.html_url} target="_blank">Repo List</a></strong> */}
            {/* <button onClick={()=>handleList(el.id,el.login)}>Repo List</button> */}
        </div>
    </div>
        </>
      })}
    </div>
  )
}

export default FollowersRepo

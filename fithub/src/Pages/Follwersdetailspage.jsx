import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './styles.css'
const Follwersdetailspage = ({data}) => {
    const {id}=useParams()
    const user=JSON.parse(localStorage.getItem('username'))||[]
    const navigate=useNavigate()
    const [len,setLen]=useState(0)
    const [fol,setFol]=useState([])
    let newdata=data.find(el=>el.id===parseInt(id,10))
    // console.log("newdata.owner.length:",newdata.owner.followers_url.length)

    const follow=newdata.owner.followers_url
    // console.log("fol:",fol)

    useEffect(()=>{
        fetch(`https://api.github.com/users/${user}/followers`).then(res=>res.json()).then(res=>{
            // console.log(res)
            setLen(res.len)
            setFol(res)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const handleList=(id,name)=>{
        if(id){
            localStorage.setItem("followersName",JSON.stringify(name))
            navigate(`/repo/followers/followersrepo/${id}`)
        }
    }

  return (
    <div>
      {/* <h1>{id}</h1> */}
      <h1>Total Count:{fol.length}</h1>
      {fol.length>0 && fol.map(el=>{
        return <>
        <div class="follower-card">
        <img class="avatar" src={el.avatar_url} alt="Follower Avatar"/>
        <div class="follower-info">
            <strong><a href={el.html_url} target="_blank">{el.login}</a></strong>
            {/* <strong><a href={el.html_url} target="_blank">Repo List</a></strong> */}
            <button onClick={()=>handleList(el.id,el.login)}>Followers List</button>
        </div>
    </div>
        </>
      })}
    </div>
  )
}

export default Follwersdetailspage

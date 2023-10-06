import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import RepoDetailpage from '../Pages/RepoDetailpage'
import Follwersdetailspage from '../Pages/Follwersdetailspage'
import FollowersRepo from '../Pages/FollowersRepo'

const Allroutes = ({data}) => {

  // console.log("data:",data)
  return (
    <Routes>
      <Route path='/repo' element={<Home data={data}/>}/>
      <Route path='/repo/:id' element={<RepoDetailpage data={data}/>}/>
      <Route path='/repo/followers/:id' element={<Follwersdetailspage data={data}/>}/>
      <Route path='/repo/followers/followersrepo/:id' element={<FollowersRepo data={data}/>}/>
    </Routes>
  )
}

export default Allroutes

import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const TableData = ({id,name,visibility,stargazers_count,pushed_at,created_at}) => {

  return (
    <div className='tab'>
      <p><span className='repo-name'><Link to={`/repo/${id}`}>{name}</Link></span> | <span className='badge'>{visibility}</span> | <span>{stargazers_count} </span>Star | Updated at: <span>{pushed_at}</span></p>
      <p>Created at: {created_at}</p>
    </div>
  )
}

export default TableData

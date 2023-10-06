import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles.css'

const RepoDetailpage = ({data}) => {
    let {id}=useParams()

    // console.log("repodata:",data)
    let newdata=data.find(el=>el.id===parseInt(id,10))
    // console.log("newdata:",newdata)
    // console.log("nameme:",name)
    const {name,html_url,description,created_at,owner,open_issues,watchers}=newdata;
  return (

    <div>
        <Link to={"/repo"}>Back</Link>
        <div className="card">
        <div className="card-header">
        <img src={owner.avatar_url} alt={owner.login} className="avatar" />
        <h3>{name}</h3>
        </div>
            <div className="card-body">
              <p>ID: {id}</p>
              <p>HTML URL: <a href={html_url} target="_blank" rel="noopener noreferrer">{html_url}</a></p>
              <p>Description: {description}</p>
              <p>Created At: {created_at}</p>
              <p>Open Issues: {open_issues}</p>
              <p>Watchers: {watchers}</p>
              <p>Owner:</p>
              <ul>
                <li>ID: {owner.id}</li>
                <li>HTML URL: <a href={owner.html_url} target="_blank" rel="noopener noreferrer">{owner.html_url}</a></li>
                <li>Type: {owner.type}</li>
                <li>Site Admin: {owner.site_admin ? 'Yes' : 'No'}</li>
              </ul>
              <p><strong style={{ color: 'orange', cursor: 'pointer' }}>
                <Link to={`/repo/followers/${id}`}>Followers details</Link> &rarr;
              </strong></p>

            </div>
        </div>
    </div>
  )
}

export default RepoDetailpage

import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0].toUpperCase()}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">
                    2,543
                </p>
            </div>

            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">2,448</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('coding')}
            {recentItem('developers')}
        </div>
    </div>
  )
}

export default Sidebar
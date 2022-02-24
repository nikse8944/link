import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)
    
    const recentItem =(topic)=>(
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>

        </div>
    )
    return (
    <div className="sidebar"> 
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <Avatar src ={user.photoUrl}className='sidebar__avatar'>{user.displayName[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
      
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>who viewed</p>
                <p className="sidebar__statNumber">2500</p>   
            </div>
            <div className="sidebar__stat">
                <p>who viewed</p>
                <p className="sidebar__statNumber">2500</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('bks')}
            {recentItem('boos')}
            {recentItem('book')}
            {recentItem('boks')}
            {recentItem('boks')}
        </div>
        
       
    </div>
  )
}

export default Sidebar

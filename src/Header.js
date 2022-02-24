import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, Home, Notifications } from '@mui/icons-material';
import { SupervisorAccount } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';


function Header() {
  const user = useSelector(selectUser)
  const dispatch =useDispatch();

  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut()
  }
  return (
    
        <div className='header'>
            
        

        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
            
            <div className="header__search">
                <SearchIcon />
                <input placeholder='Search' type="text" />

            </div>

        </div>
        <div className="header__right">
          <HeaderOption Icon={Home} title='Home'/>
          <HeaderOption Icon={SupervisorAccount} title='My network'/>
          <HeaderOption Icon={BusinessCenter} title='Jobs'/>
          <HeaderOption Icon={Chat} title='Messaging'/>
          <HeaderOption Icon={Notifications} title='Notifications'/>
          <HeaderOption avatar={true} title="me"onClick={logoutOfApp}
          />

        </div>
     </div>
  )
}

export default Header
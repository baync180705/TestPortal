import React from 'react'
import {ReactComponent as Dashboard} from '../../Assets/dashboard.svg';
import {ReactComponent as Course} from '../../Assets/course.svg';
import {ReactComponent as Settings} from '../../Assets/settings.svg';


const LeftMenu = () => {
  return (
    <div id = "left-menu">
        <span className = "left-menu-items"><Dashboard/>   Dashboard</span>
        <span className = "left-menu-items"><Course/>   Course</span>
        <span className = "left-menu-items"><Settings/>   Settings</span>
    </div>
  )
  }

export default LeftMenu


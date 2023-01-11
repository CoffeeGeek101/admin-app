import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from "@mui/icons-material";
export default function Topbar(){
    return(
        <div className="container">
            <div className="left-conatiner">
                <div className='brand-container'>
                <h1 className='logo'>JL</h1>
                <span className='brand-name'>Jutsu-log...</span>
                </div>
            </div>
            <div className='right-container'>
                <div className='noti-wrapper'>
                    <div className='noti-container'>
                        <NotificationsNone/>
                        <span className='noti-tracker'>4</span>
                    </div>
                    <div className='noti-container'>
                        <Language/>
                        <span className='noti-tracker'>3</span>
                    </div>
                    <div className='noti-container'>
                        <Settings/>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQ8xYrWkm7JynVyw8OewyaY7nF2LMskEODA&usqp=CAU' className='php' alt='img' />
                </div>
            </div>
        </div>
    )
}

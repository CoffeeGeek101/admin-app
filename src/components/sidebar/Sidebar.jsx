import React from "react";
import style from "./sidebar.css";
import {Home, BarChart, MonetizationOn, AccountCircle, LocalMall,CreditScore,
    Telegram,QuestionAnswer,Inbox,ManageAccounts,QueryStats,Report} from "@mui/icons-material";
import {Link} from 'react-router-dom';
export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="side-wrapper">
                <div className="side-menu">
                    <h3 className="side-title">Dashboard</h3>
                    <ul className="side-list">
                        <Link to="/">
                        <li className="list-ele active">
                            <Home className="icon"/>
                            <span className="ele-txt">Home</span> 
                        </li>
                        </Link>
                        <li className="list-ele">
                            <BarChart className="icon"/>
                            <span className="ele-txt">Analytics</span>
                        </li>
                        <li className="list-ele">
                            <MonetizationOn className="icon"/>
                        <span className="ele-txt">Sales</span>
                        </li>
                    </ul>
                </div>
                <div className="side-menu">
                    <h3 className="side-title">Quick Menu</h3>
                    <ul className="side-list">
                        <Link to="/user">
                        <li className="list-ele"><AccountCircle className="icon"/>
                            <span className="ele-txt">User</span>
                        </li>
                        </Link>
                        <Link to="/products">
                        <li className="list-ele"><LocalMall className="icon"/>
                            <span className="ele-txt">Products</span>
                        </li>
                        </Link>
                        <li className="list-ele"><CreditScore className="icon"/>
                        <span className="ele-txt">Transaction</span>
                        </li>
                    </ul>
                </div>
                <div className="side-menu">
                    <h3 className="side-title">Notifications</h3>
                    <ul className="side-list">
                        <li className="list-ele"><Telegram className="icon"/>
                            <span className="ele-txt">Mail</span>
                        </li>
                        <li className="list-ele"><QuestionAnswer className="icon"/>
                            <span className="ele-txt">Feedback</span>
                        </li>
                        <li className="list-ele"><Inbox className="icon"/>
                        <span className="ele-txt">Message</span>
                        </li>
                    </ul>
                </div>
                <div className="side-menu">
                    <h3 className="side-title">Staff</h3>
                    <ul className="side-list">
                        <li className="list-ele"><ManageAccounts className="icon"/>
                            <span className="ele-txt">Manage</span>
                        </li>
                        <li className="list-ele"><QueryStats className="icon"/>
                            <span className="ele-txt">Analytics</span>
                        </li>
                        <li className="list-ele"><Report className="icon"/>
                        <span className="ele-txt">Reports</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
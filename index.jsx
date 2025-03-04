import React, { useState } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './styles.css';

const KashkulTemplate = ({ children, sidebar, navbar, path }) => {
    const [isDark, setDark] = useState(false);
    return (
        <div className={`kashkul-template ${isDark?"dark":""}`} id='kashkul'>
            <Sidebar sidebar={sidebar} path={path} />
            <div className="markdown-container">
                <div>
                    <Navbar navbar={navbar} path={path} />
                    <main>{children}</main>
                </div>
                <footer>© 2024 My Blog</footer>
            </div>
            <div id='darkMode' onClick={()=>setDark(!isDark)}>{(isDark)?<MdLightMode/>:<MdDarkMode/>}</div>
        </div>)
};

export default KashkulTemplate;

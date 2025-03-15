import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const isNode = typeof window === 'undefined';

// Function to parse the input text
function parseLinksToObjects(text) {
    const regex = /\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/g;
    let matches;
    const result = [];

    while ((matches = regex.exec(text)) !== null) {
        result.push({ path: matches[2], label: matches[1], title: matches[3] || null });
    }
    return result;
}

const Navbar = ({ navbar = "", path = null }) => {
    const docsList = parseLinksToObjects(navbar);
    const [sideOpened, setSide] = useState(false)
    let location = null; // Get the current path
    let isActive = false;

    if(!isNode) location = useLocation(); // Get the current path
    return (
        <div className="navbar">
            <div className="container">
                <div onClick={()=>setSide(!sideOpened)} 
                    className={`navBurger ${(sideOpened)&&"opened"}`}
                >
                        <i class="fa fa-bars"></i>
                        <i class="fas fa-angle-right"></i>
                </div>
                <span></span>
                <ul>
                    {docsList.map((doc, index) => {
                        if(!isNode) isActive = location.pathname === `/${doc.path}`;
                        else if(path) isActive = path === `/${doc.path}.md`;
                        
                        return (
                        <li key={index}>
                            {isNode ? (
                                <a href={`/${doc.path}`} title={doc.title} className={isActive ? "active" : ""}>
                                    {doc.label}
                                </a>
                            ) : (
                                <Link to={`${doc.path}`} title={doc.title} className={isActive ? "active" : ""}>
                                    {doc.label}
                                </Link>
                            )}
                        </li>
                    )}
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

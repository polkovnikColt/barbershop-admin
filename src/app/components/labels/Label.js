import React from 'react';
import {Link} from "react-router-dom";

export const Label = ({children, type = 'else', path = ''}) => {
    return (
        <div>
            {type === "link" ?
                <Link
                    to={path}>
                    {children}
                </Link> :
                <span className="mx-auto">
                    {children}
                </span>
            }
        </div>
    )
}
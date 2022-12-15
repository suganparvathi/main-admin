import React from 'react'
import { Link, useLocation } from "react-router-dom";

import { classNames } from "../utils/helpers";
import { IconType } from "react-icons";

interface ActiveLinkProps {
    to: string;
    title: string
    Icon: IconType;
    active: string;
}


export const ActiveLink = ({
    to,
    title,
    Icon,
    active
}:ActiveLinkProps) => {

    const location = useLocation();
    const check:boolean = location.pathname.split("/")[1] === active;

    
  return (
    <Link
    to={to}
    className="text-2xl" >
        <Icon size="1.2rem" />
        <span className={`text-black ${check ? "text-blue-200" : "text-black"}`}>
            {title}
        </span>

    </Link>
  )
}

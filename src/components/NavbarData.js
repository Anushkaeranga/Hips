import React from 'react'
import * as Faicons from "react-icons/fa";
import * as Aiicons from "react-icons/ai";
import * as Ioicons from "react-icons/io";

export const NavbarData = [
    {
        title: 'Document Templates',
        path: "/templates",
        icon: <Aiicons.AiFillHome/>,
        cname: 'nav-text'
    },
    {
        title: 'Document Types',
        path: "/types",
        icon: <Ioicons.IoIosPaper/>,
        cname: 'nav-text'
    },
    {
        title: 'Message Resources',
        path: "/resources",
        icon: <Aiicons.AiFillHome/>,
        cname: 'nav-text'
    },
    {
        title: 'Document Concept',
        path: "/concept",
        icon: <Faicons.FaCartPlus/>,
        cname: 'nav-text'
    }
]
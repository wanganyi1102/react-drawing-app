import React, { Component } from 'react';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CollectionsIcon from '@mui/icons-material/Collections';

export const SidebarData = [
    {
        index: 0,
        title: "Colour",
        icon: <ColorLensIcon />,
        link: "/colour"
    },
    {
        index: 1,
        title: "References",
        icon: <CollectionsIcon />,
        link: "/references"
    }
]

export const ColourData =[
    {
        index: 0,
        object: "house",
        colour_name: "Red",
        colour_code: "#FF0000",
    },
    {
        index: 1,
        object: "sky",
        colour_name: "Blue",
        colour_code: "#0000FF",
    },
    {
        index: 2,
        object: "grass",
        colour_name: "Green",
        colour_code: "#00FF00",
    },
    {
        index: 3,
        object: "cat",
        colour_name: "Yellow",
        colour_code: "#FFFF00",
    },
]

export const ReferencesData =[
    {
    data: 'pictures of stuff'
    }
]

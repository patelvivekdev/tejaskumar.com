"use client"
import React from "react";
import ReactPlayer from "react-player";

export default function ReactVideoPlayer({url}:{
    url: string
}) {
    return (
        <ReactPlayer width="100%" url={url} />
    )
}
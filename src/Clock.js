import React from 'react'

function Clock(){
    return (
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    )
}


export default Clock

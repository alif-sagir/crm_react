import React from 'react'
import { Outlet } from 'react-router-dom'
import Demo_1 from './Demo_1'

function Main_content_page() {
    return (
        <>
            <div className='main_content_page'>
                <div className="main-content">
                    <div className="page-content">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_content_page
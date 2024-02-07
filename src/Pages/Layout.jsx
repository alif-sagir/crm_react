import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Main_content_page from './Main_content_page';
function Layout() {

    return (
        <>
            <div id="layout-wrapper">

                <div className='full_area'>
                    <div>
                        <Header />
                    </div>

                    <div className='sidebar_and_contentt'>
                       <Sidebar/>
                       <Main_content_page/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Layout
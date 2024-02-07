import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div className='sidebar'>
                <div className="vertical-menu" style={{ "overflow-y": "scroll" }}>
                    <div data-simplebar="" className="h-100">
                        {/*- Sidemenu */}
                        <div id="sidebar-menu">
                            {/* Left Menu Start */}
                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li className="menu-title" key="t-menu">
                                    Menu
                                </li>
                                <li>
                                    <a href="#/" className="has-arrow waves-effect">
                                        <i className="bx bx-home-circle" />
                                        <span key="t-dashboards">Dashboards</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>

                                            <Link to="demo1">Demo1</Link>
                                        </li>
                                        <li>

                                            <Link to="demo2">Demo2</Link>
                                        </li>
                                        <li>

                                            <Link to="demo3">Demo3</Link>
                                        </li>
                                    </ul>
                                </li>


                                <li>
                                    <a href="#/" className="has-arrow waves-effect">
                                        <i className="bx bx-user-circle" />
                                        <span key="t-dashboards">User Management</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>

                                            <Link to="/user">User</Link>
                                        </li>

                                        <li>

                                            <Link to="/user-info">User Info</Link>
                                        </li>
                                        <li>

                                            <Link to="/user-designation">User Designation</Link>
                                        </li>
                                        <li>
                                            <Link to="/user-work">User Works</Link>
                                        </li>
                                        <li>
                                            <Link to="/user-work-user">User work users</Link>
                                        </li>
                                        <li>
                                            <Link to="/user-work-department">User work department</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/" className="has-arrow waves-effect">
                                        <i className="bx bx-task" />
                                        <span key="t-dashboards">Task</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>
                                            <Link to="/task">Task</Link>
                                        </li>
                                        <li>
                                            <Link to="/task-user">Task user</Link>
                                        </li>
                                        <li>
                                            <Link to="/task-variant-task">Task variant task</Link>
                                        </li>
                                        <li>
                                            <Link to="/task-variant-value">Task variant value</Link>
                                        </li>
                                        <li>
                                            <Link to="/task-variant">Task variant</Link>
                                        </li>


                                    </ul>
                                </li>
                                <li>
                                    <a href="#/" className="has-arrow waves-effect">
                                        <i className="bx bx-file" />
                                        <span key="t-dashboards">Support Ticket</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>
                                            <a href="calendar.html" key="t-tui-calendar">
                                                Support Ticket
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/" className="has-arrow waves-effect">
                                        <i className="bx bx-file" />
                                        <span key="t-dashboards">Customer</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>
                                            <a href="calendar.html" key="t-tui-calendar">
                                                Customer
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Groups
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Variants
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Variant Values
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Documents
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Calendar Events
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Contact Numbers
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/" className="has-arrow waves-effect">
                                        <i className="bx bxs-user-detail" />
                                        <span key="t-dashboards">Contact</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>
                                            <a href="calendar.html" key="t-tui-calendar">
                                                Communication Numbers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Ieads
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Appoinments
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Histories
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Feedbacks
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar-full.html" key="t-full-calendar">
                                                Contact Reasons
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                        {/* Sidebar */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
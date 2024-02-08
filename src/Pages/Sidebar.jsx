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
                                    <a href="#/" className=" waves-effect">
                                        <i className="bx bx-home-circle" />
                                        <span key="t-dashboards">Dashboards</span>
                                    </a>
                                    {/* <ul className="sub-menu" aria-expanded="false">
                                        <li>

                                            <Link to="demo1">Demo1</Link>
                                        </li>
                                        <li>

                                            <Link to="demo2">Demo2</Link>
                                        </li>
                                        <li>

                                            <Link to="demo3">Demo3</Link>
                                        </li>
                                    </ul> */}
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

                                            <Link to="/user-info">Info</Link>
                                        </li>
                                        <li>

                                            <Link to="/user-designation">Designation</Link>
                                        </li>
                                        <li>
                                            <Link to="/user-work">Works</Link>
                                        </li>
                                        <li>
                                            <Link to="/user-work-user">Work users</Link>
                                        </li>
                                        <li>
                                            <Link to="/user-work-department">Work department</Link>
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
                                            <Link to="/task-user">Users task</Link>
                                        </li>
                                        <li>
                                            <Link to="/task-variant-task">Variant task</Link>
                                        </li>
                                        <li>
                                            <Link to="/task-variant-value">Variant value</Link>
                                        </li>
                                        <li>
                                            <Link to="/task-variant">Variant</Link>
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
                                            <Link to="/support-ticket">Ticket</Link>
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
                                            <Link to="/calender-event">Calender event</Link>
                                        </li>
                                        <li>
                                            <Link to="/customer-contact-number">Contact number</Link>
                                        </li>
                                        <li>
                                            <Link to="/customer-group-customer">Group customer</Link>
                                        </li>
                                        <li>
                                            <Link to="/customer-group">Group</Link>
                                        </li>
                                        <li>
                                            <Link to="/customer-relavent-document">Relavent document</Link>
                                        </li>
                                        <li>
                                            <Link to="/customer-variant-customer">Variant customer</Link>
                                        </li>
                                        <li>
                                            <Link to="/customer-variant">Variant</Link>
                                        </li>
                                        <li>
                                            <Link to="/customer-variant-value">Variant value</Link>
                                        </li>
                                        <li>
                                            <Link to="/customer">Customer</Link>
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
                                            <Link to="/contact-appointment-reason">Appointment-reason</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-appointment">Appointment</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-history">History</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-history-feedback">History-feedback</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-history-reason">History-reason</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-reason">Reason</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-number">Number</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-leads">Leads</Link>
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
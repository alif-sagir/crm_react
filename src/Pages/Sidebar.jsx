
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Sidebar(props) {
    const [menuOpen, setMenuOpen] = useState(true)
    const toggleMenubar = () =>{
        setMenuOpen(!menuOpen)
    }

   let isSidebarOpen = props.isSidebarOpen;
    console.log('sidebar issiedebaropen', props.isSidebarOpen);
    return (
        <>
            <div className={`sidebar ${isSidebarOpen ? 'sidebaropen' : 'closeside'}`} >
                <div className="vertical-menu" style={{ "overflowY": "scroll" }}>
                    <div data-simplebar="" className="h-100">
                        {/*- Sidemenu */}
                        <div id="sidebar-menu">
                            {/* Left Menu Start */}
                            <ul className="tismenu list-unstyled" id="side-menu">
                                <li className="nu-title" key="t-menu">
                                    Menu
                                </li>
                                <li>
                                    <a href="#/dashboard" className=" waves-effect">
                                        <i className="bx bx-home-circle" />
                                        <span key="t-dashboards">Dashboards</span>
                                    </a>
                                </li>


                                <li>
                                    <a  onClick={toggleMenubar}  className="has-arrow waves-effect">
                                        <i className="bx bx-user-circle" />
                                        <span key="t-dashboards">User Management</span>
                                    </a>
                                    <ul  className={`sub-menu ${menuOpen ? 'openmenu' : 'closemenu'}`}aria-expanded="false">
                                        <li>

                                            <Link to="/dashboard/user">User</Link>
                                        </li>

                                        <li>

                                            <Link to="/dashboard/user-info">Info</Link>
                                        </li>
                                        <li>

                                            <Link to="/dashboard/user-designation">Designation</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/user-work">Works</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/user-work-user">Work users</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/user-work-department">Work department</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a  className="has-arrow waves-effect">
                                        <i className="bx bx-task" />
                                        <span key="t-dashboards">Task</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>
                                            <Link to="/dashboard/task">Task</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/task-user">Users task</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/task-variant-task">Variant task</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/task-variant-value">Variant value</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/task-variant">Variant</Link>
                                        </li>


                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow waves-effect">
                                        <i className="bx bx-file" />
                                        <span key="t-dashboards">Support Ticket</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>
                                            <Link to="/dashboard/customer-support-ticket">Ticket</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow waves-effect">
                                        <i className="bx bx-file" />
                                        <span key="t-dashboards">Customer</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>
                                            <Link to="/dashboard/calender-event">Calender event</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/customer-contact-number">Contact number</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/customer-group-customer">Group customer</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/customer-group">Group</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/customer-relavent-document">Relavent document</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/customer-variant-customer">Variant customer</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/customer-variant">Variant</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/customer-variant-value">Variant value</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/customer">Customer</Link>
                                        </li>

                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow waves-effect">
                                        <i className="bx bxs-user-detail" />
                                        <span key="t-dashboards">Contact</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>
                                            <Link to="/dashboard/contact-appointment-reason">Appointment-reason</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/contact-appointment">Appointment</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/contact-history">History</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/contact-history-feedback">History-feedback</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/contact-history-reason">History-reason</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/contact-reason">Reason</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/contact-number">Number</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/contact-leads">Leads</Link>
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
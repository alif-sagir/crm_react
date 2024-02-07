import React from 'react'
import TableAction from './Components/all_data_components/TableAction';
import TopPart from './Components/all_data_components/TopPart';
import Pagination from './Components/all_data_components/Pagination';
import { Link } from 'react-router-dom';

function All() {
    return (

        <>
            <div className="card list_card">
                <div className="card-header px-0">
                    <TopPart></TopPart>
                </div>
                <div className="table-responsive card-body text-nowrap">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th><input type="checkbox" className="form-check-input" /></th>

                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Customer Id
                                </th>
                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Ticket user id
                                </th>

                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Subject
                                </th>
                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Description
                                </th>
                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Status
                                </th>
                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Priority
                                </th>
                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Is complete
                                </th>
                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Is complete
                                </th>
                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Assigned to
                                </th>
                                <th aria-label="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">

                            <tr>
                                <td><input type="checkbox" className="form-check-input" /></td>

                                <td>
                                    <span>
                                        customer Id
                                    </span>
                                </td>
                                <td>
                                    <span>
                                    Ticket user id
                                    </span>
                                </td>
                                <td>
                                    <span>
                                    Subject
                                    </span>
                                </td>
                                <td>
                                    <span>
                                    Description
                                    </span>
                                </td>
                                <td>
                                    <span>
                                    Status
                                    </span>
                                </td>
                                <td>
                                    <span>
                                    Priority
                                    </span>
                                </td>
                                <td>
                                    <span>
                                    Is complete
                                    </span>
                                </td>
                                <td>
                                    <span>
                                    Assigned to
                                    </span>
                                </td>

                                <td>
                                    <span>Active</span>
                                </td>
                                <td>
                                    <span className='edit_class_submanu_active'><i class="mdi mdi-format-list-bulleted"></i>
                                        <div className='edit_class_submanu'>
                                            <ul>
                                                <li>
                                                    <Link to="/support-ticket/edit">Edit</Link>
                                                </li>
                                                <li>
                                                    <Link to="/support-ticket/details">Details</Link>
                                                </li>
                                                <li>
                                                    <Link to="/support-ticket/edit">Deactive</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </span>

                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
                <div className="card-footer py-1">
                    <Pagination></Pagination>
                </div>
            </div>
        </>
    )
}

export default All
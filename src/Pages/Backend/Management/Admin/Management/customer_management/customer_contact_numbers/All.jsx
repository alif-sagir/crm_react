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
                                    Operator
                                </th>
                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Details
                                </th>

                                <th className="cursor_n_resize edit_cursor_n_resize">
                                    Status
                                </th>
                                <th aria-label="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">

                            <tr>
                                <td><input type="checkbox" className="form-check-input" /></td>
                                <td>
                                    <span >
                                        01
                                    </span>
                                </td>
                                <td>
                                    <span>
                                    Operator
                                    </span>
                                </td>

                                <td>
                                    <span>
                                    Details
                                    </span>
                                </td>
                                
                                <td>
                                    <span>Active</span>
                                </td>
                                <td>
                                    <span className='edit_class_submanu_active'><i className="mdi mdi-format-list-bulleted"></i>
                                        <div className='edit_class_submanu'>
                                            <ul>
                                                <li>
                                                    <Link to="/customer-contact-number/edit">Edit</Link>
                                                </li>
                                                <li>
                                                    <Link to="/customer-contact-number/details">Details</Link>
                                                </li>
                                                <li>
                                                    <Link to="/customer-contact-number/edit">Deactive</Link>
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
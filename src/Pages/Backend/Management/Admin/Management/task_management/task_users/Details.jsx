import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dataStoreSlice, { async_actions } from './Config/store.js';
import setup from './Config/setup.js';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment.js';

function Details() {
    const { id } = useParams();
    setup.dispatch = useDispatch();
    const data_store = useSelector((state) => state[setup.prefix]["singleData"])
    const data_store2 = useSelector((state) => state[setup.prefix])
    setup.set_async(async_actions, dataStoreSlice);
    const { get_users, set_data, fetch_all_variants } = setup.actions;
    // console.log(id);
    useEffect(() => {
        get_users(id);
        return () => {
            set_data(null)
        };
    }, []);
    useEffect(() => {
        fetch_all_variants();
    }, [])

    console.log(data_store, id);
    // console.log(data_store2, id);
    if (data_store && data_store2?.variants?.data) {
        const { title } = data_store;
        const variants = data_store2?.variants?.data;
        // console.log('variants', variants);
        return (
            <div className='card list_card'>
                <div className="card-header ">
                    <h2 className='heading'>Details</h2>
                    <div className="btns d-flex gap-2 align-items-center">
                        <a href="#/dashboard/task-user" className="btn rounded-pill btn-outline-secondary">
                            {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
                            Back
                        </a>
                        {/* {JSON.stringify(data_store)} */}
                    </div>
                </div>
                <div className="card-body">
                    <div className="container py-5">
                        <div className="">
                            <div className="col-lg-12">
                                {/* [
                                "ID",
                                "Title",
                                "Serial",
                                "Status",
                                "CreatedAt",
                                "UpdatedAt",
                                "last ID",
                            ] */}
                                <div className="form-group mb-3">

                                    {/* <div className="custom_form_el">
                                <div>Task Id</div>
                                <div>:</div>
                                <div>
                                    {"Task Id"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>User Id</div>
                                <div>:</div>
                                <div>
                                    {"User_id"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>Is complete</div>
                                <div>:</div>
                                <div>
                                    {"Is complete"}
                                </div>
                            </div> */}

                                    <div className='tag-list_and_task-list_area'>
                                        <div className='tag_list'>
                                            <ul>

                                                {
                                                    variants?.length && variants?.map(item => {
                                                        return <li>
                                                            <a href="#">
                                                                {item?.title}
                                                            </a>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className='task-list'>
                                        {
                                                    data_store?.data?.length && data_store?.data?.map(item => {
                                                        return <ul>
                                                        <li className='input_and_label'>
                                                            <input type="checkbox" id="" name="" value="" />
                                                            <label for="">{item.task.title}</label>
                                                        </li>
                                                        {/* <li>
                                                            <span>Created: {moment(item?.task?.end_time).format('YYYY-MM-DD')}</span>
                                                        </li> */}
                                                        <li>
                                                            <span>End date: {moment(item?.task?.end_time).format('YYYY-MM-DD')}</span>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Hellow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">low</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">He</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Hellow</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <img src="/assets/customize_img/img.png" alt="img" />
                                                        </li>
                                                    </ul>
                                                    })
                                                }
                                           
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">

                </div>

                <div className='input_message_container'>
                    <form action="#">
                        <input className='input_area' type="text" placeholder='Message . . .' />
                        <button className='button_area'>
                            <i class="fa-solid fa-paper-plane hhhh"></i>
                        </button>
                    </form>
                </div>
            </div>
        )
    } else {
        return <>
            <p>loading ...</p>
        </>
    }
}

export default Details
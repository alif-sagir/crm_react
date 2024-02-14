import React from 'react'

function Details() {
  return (
    <div className='card list_card'>
        <div className="card-header ">
            <h2 className='heading'>Details</h2>
            <div className="btns d-flex gap-2 align-items-center">
                <a href="#/dashboard/user-info" className="btn rounded-pill btn-outline-secondary">
                    {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
                    Back
                </a>
                {/* {JSON.stringify(data_store)} */}
            </div>
        </div>
        <div className="card-body">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
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
                            <div className="custom_form_el">
                                <div>Id</div>
                                <div>:</div>
                                <div>
                                    {"_id"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>User name</div>
                                <div>:</div>
                                <div>
                                    {"user name"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>First name</div>
                                <div>:</div>
                                <div>
                                    {"alif"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>Last name</div>
                                <div>:</div>
                                <div>
                                    {"sagir"}
                                </div>
                            </div>
                            
                            <div className="custom_form_el">
                                <div>Phone number</div>
                                <div>:</div>
                                <div>
                                    {"phone number"}
                                </div>
                            </div>
                           
                            <div className="custom_form_el">
                                <div>Designation</div>
                                <div>:</div>
                                <div>
                                    {"designation"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>Date of birth</div>
                                <div>:</div>
                                <div>
                                    {"10.10.24"}
                                </div>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="card-footer">

        </div>
    </div>
)
}

export default Details
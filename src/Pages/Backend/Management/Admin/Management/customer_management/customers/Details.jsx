import React from 'react'

function Details() {
  return (
    <div className='card list_card'>
        <div className="card-header ">
            <h2 className='heading'>Details</h2>
            <div className="btns d-flex gap-2 align-items-center">
                <a href="#/user" className="btn rounded-pill btn-outline-secondary">
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
                                <div>User Id</div>
                                <div>:</div>
                                <div>
                                    {"_id"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>Full name</div>
                                <div>:</div>
                                <div>
                                    {"fullname"}
                                </div>
                            </div>
                            
                            <div className="custom_form_el">
                                <div>Email</div>
                                <div>:</div>
                                <div>
                                    {"email"}
                                </div>
                            </div>
                           
                            <div className="custom_form_el">
                                <div>Contact number</div>
                                <div>:</div>
                                <div>
                                    {"01748484854"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>Address</div>
                                <div>:</div>
                                <div>
                                    {"dhaka"}
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
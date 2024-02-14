import React from 'react'

function Details() {
  return (
    <div className='card list_card'>
        <div className="card-header ">
            <h2 className='heading'>Details</h2>
            <div className="btns d-flex gap-2 align-items-center">
                <a href="#/dashboard/contact-leads" className="btn rounded-pill btn-outline-secondary">
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
                                <div>Customer Id</div>
                                <div>:</div>
                                <div>
                                    {"_id"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>Lead status</div>
                                <div>:</div>
                                <div>
                                    {"Lead status"}
                                </div>
                            </div>
                            
                            <div className="custom_form_el">
                                <div>Lead source</div>
                                <div>:</div>
                                <div>
                                    {"Lead source"}
                                </div>
                            </div>      
                            <div className="custom_form_el">
                                <div>Assigned to</div>
                                <div>:</div>
                                <div>
                                    {"Assigned to"}
                                </div>
                            </div>      
                            <div className="custom_form_el">
                                <div>Qualification notes</div>
                                <div>:</div>
                                <div>
                                    {"Qualification notes"}
                                </div>
                            </div>           
                            <div className="custom_form_el">
                                <div> Follow up date</div>
                                <div>:</div>
                                <div>
                                    {" Follow up date"}
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
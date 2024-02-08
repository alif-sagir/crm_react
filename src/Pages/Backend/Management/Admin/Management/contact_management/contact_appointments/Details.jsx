import React from 'react'

function Details() {
  return (
    <div className='card list_card'>
        <div className="card-header ">
            <h2 className='heading'>Details</h2>
            <div className="btns d-flex gap-2 align-items-center">
                <a href="#/contact-appointment" className="btn rounded-pill btn-outline-secondary">
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
                                <div>Customer Number Id</div>
                                <div>:</div>
                                <div>
                                    {"_id"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>Customer Id</div>
                                <div>:</div>
                                <div>
                                    {"_id"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>Customer name</div>
                                <div>:</div>
                                <div>
                                    {"Customer name"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>Date</div>
                                <div>:</div>
                                <div>
                                    {"Date"}
                                </div>
                            </div>
                            
                            <div className="custom_form_el">
                                <div>Contact type</div>
                                <div>:</div>
                                <div>
                                    {"Contact type"}
                                </div>
                            </div>      
                            <div className="custom_form_el">
                                <div>Notes</div>
                                <div>:</div>
                                <div>
                                    {"Notes"}
                                </div>
                            </div>      
                            <div className="custom_form_el">
                                <div>Feedback</div>
                                <div>:</div>
                                <div>
                                    {"Feedback"}
                                </div>
                            </div>      
                            <div className="custom_form_el">
                                <div>Title</div>
                                <div>:</div>
                                <div>
                                    {"Title"}
                                </div>
                            </div>      
                            <div className="custom_form_el">
                                <div>Creator</div>
                                <div>:</div>
                                <div>
                                    {"Creator"}
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
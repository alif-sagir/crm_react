import React from 'react'
import { Link } from 'react-router-dom';

function CrmEntry() {
    return (
        <>
            <div className='mt-5'>
                <div className="card list_card">
                    <div className="card-body p-3">
                        <form className='form-group'>
                            <div className="custom_form_el">
                                <label htmlFor="">Date moment js</label>
                                <div>:</div>
                                <div><input name="lead_status" type="date" className="form-control" /></div>
                            </div>
                            <div className="custom_form_el">
                                <label htmlFor=""> Full Name</label>
                                <div>:</div>
                                <div><input name="lead_status" type="text" className="form-control" /></div>
                            </div>
                            <div className="custom_form_el">
                                <label htmlFor=""> Phone Number</label>
                                <div>:</div>
                                <div><input name="lead_status" type="text" className="form-control" /></div>
                            </div>

                            <div className="custom_form_el">
                                <label htmlFor=""> Feedback</label>
                                <div>:</div>
                                <div>
                                    <textarea name="lead_status" type="text" className="form-control" ></textarea>
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <label htmlFor="">Contact type</label>
                                <div>:</div>
                                <div>
                                    <select name="" id="">
                                        <option value="">Group 1</option>
                                        <option value="">Group 2</option>
                                        <option value="">Group 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <label htmlFor="">Group na thakle create hobe</label>
                                <div>:</div>
                                <div>
                                    <select name="" id="">
                                        <option value="">Group 1</option>
                                        <option value="">Group 2</option>
                                        <option value="">Group 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <label htmlFor="">reason na thakle create hobe</label>
                                <div>:</div>
                                <div>
                                    <select name="" id="">
                                        <option value="">reason 1</option>
                                        <option value="">reason 2</option>
                                        <option value="">reason 3</option>
                                    </select>
                                </div>
                            </div>

                            <hr />
                            <h2>varieants</h2>
                            <div className="custom_form_el">
                                <label htmlFor="">variant 1</label>
                                <div>:</div>
                                <div>
                                    <select name="" id="">
                                        <option value="">variant 1 vlaue 1</option>
                                        <option value="">variant 1 vlaue 2</option>
                                        <option value="">variant 1 vlaue 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <label htmlFor="">variant 2</label>
                                <div>:</div>
                                <div>
                                    <select name="" id="">
                                        <option value="">variant 2 vlaue 1</option>
                                        <option value="">variant 2 vlaue 2</option>
                                        <option value="">variant 2 vlaue 3</option>
                                    </select>
                                </div>
                            </div>
                            <hr />

                            <hr />
                            <h2>event</h2>
                            <div className="custom_form_el">
                                <label htmlFor="">Event Details</label>
                                <div>:</div>
                                <div>
                                    <input type="text" placeholder="event_date" />
                                    <input type="text" placeholder="event_type" />
                                    <input type="text" placeholder="event_descrption" />
                                    <input type="text" placeholder="meet_link" />
                                </div>
                            </div>
                            <hr />

                            <hr />
                            <h2>appointment</h2>
                            <div className="custom_form_el">
                                <label htmlFor="">appointment Details</label>
                                <div>:</div>
                                <div>
                                    <input type="text" placeholder="aapointment_date" />
                                    <input type="text" placeholder="contact_type" />
                                    <input type="text" placeholder="notes" />
                                </div>
                                <label htmlFor="">appointment reason na thakle create hobe</label>
                                <div>:</div>
                                <div>
                                    <select name="" id="">
                                        <option value="">reason 1</option>
                                        <option value="">reason 2</option>
                                        <option value="">reason 3</option>
                                    </select>
                                </div>
                            </div>
                            <hr />

                            <hr />
                            <h2>other contacts</h2>
                            <div className="custom_form_el">
                                <label htmlFor="">customer contact numbers</label>
                                <div>:</div>
                                <div>
                                    <input type="text" placeholder="extra_number 1" />
                                    <input type="text" placeholder="extra number 2" />
                                </div>
                            </div>
                            <hr />

                            <hr />
                            <h2>document</h2>
                            <div className="custom_form_el">
                                <label htmlFor="">related images</label>
                                <div>:</div>
                                <div>
                                    <input type="text" placeholder="doc 1" />
                                    <input type="text" placeholder="doc 2" />
                                    <input type="text" placeholder="imag3 3" />
                                </div>
                            </div>
                            <hr />

                            <hr />
                            <h2>lead</h2>
                            <div className="custom_form_el">
                                <label htmlFor="">lead details</label>
                                <div>:</div>
                                <div>
                                    <input type="text" placeholder="lead_status" />
                                    <input type="text" placeholder="lead_source" />
                                    <input type="text" placeholder="qualification_note" />
                                    <input type="text" placeholder="follow_up_date" />
                                    <div className="custom_form_el">
                                        <label htmlFor="">assignto</label>
                                        <div>:</div>
                                        <select name="" id="">
                                            <option value="">user 1</option>
                                            <option value="">user 2</option>
                                            <option value="">user 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div>
                                <div className='d-flex gap-2 '>
                                    <div>
                                        <button>Submit</button>
                                    </div>
                                    <div>
                                        <button>Reset</button>
                                    </div>
                                    <div>
                                        <button>Last Number</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CrmEntry
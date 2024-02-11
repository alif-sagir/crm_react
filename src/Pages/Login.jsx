import React from 'react'

function Login() {
    return (
        <>
            {/* <h1 className='testt'>login</h1> */}

            <div style={{"backgroundImage":"url(./assets/customize_img/bg.jpg)"}} className='login_page'>
                <div className='container'>
                    <div className='login_page_content'>

                        <div className='login_form_all_content'>
                            <div className='form_logo'>
                                <img src="./assets/customize_img/logo_big.png" alt="logo" />
                            </div>
                            <div className='form_title'>
                                <h2 className='title_text'>CRM</h2>
                            </div>

                            {/* form_area_start */}
                            <form action="#">
                                <div class="input_area">
                                    {/* email area start */}
                                    <div class="icon_and_input_text_area">
                                       
                                        <div class="input_text_area">
                                            <input type="email" className="input_text" placeholder="Email . . ." />
                                        </div>
                                    </div>
                                    {/* email area end */}

                                    {/* password area start */}
                                    <div class="icon_and_input_text_area">
                                       
                                        <div class="input_text_area">
                                            <input type="password" class="input_text" placeholder="Enter your password . . ." />
                                        </div>
                                    </div>
                                    {/* password area end */}

                                    {/* login_button_area start */}
                                    <div className='login_button_area'>
                                        <button className='login_button'>Login</button>
                                    </div>
                                    {/* login_button_area end */}
                                </div>
                            </form>
                            {/* form_area_end */}


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
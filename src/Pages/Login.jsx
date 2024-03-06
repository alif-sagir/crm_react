import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const loginSubmit = async (event) => {

        event.preventDefault();
        // let name = event.target.email.value;
        // let form = {
        //     email:event.target.email.value,
        //     password:event.target.email.value,
        // }
    
        // console.log('name value', form);
        axios.post("api/login-submit", new FormData(event.currentTarget))
            .then(res => {
                // {{-- localStorage.token = res.data.access_token; --}}
                console.log('from form submitddd',res.data?.data?.role);

                // return;

                if (res?.data?.data?.role === 'employee') {
                    console.log('role', 1);
                    // window.toaster( "success");
                    // return location.href = "#/dashboard";
                    return navigate("/dashboard");

                }
                // if (res?.data?.title == 'RajiburRahman') {
                //     window.toaster( "success");
                //     return location.href = "/dashboard";

                // }
                else{
                    // return location.href = "/home";
                }

                console.log(res);
                console.log(res.data.access_token);
            })
            .catch(err => {
                // let { code, data } = err.response.data;
                // window.toaster(code, "error");
                // console.log(data);
                // console.log(err);
                // var parentDiv = document.getElementById('email_input');
                // parentDiv.insertAdjacentHTML('afterend', `<Div class="form_error text-danger">${err?.response?.data?.code}</Div>`)
            })
    }
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
                            <form onSubmit={(event) =>loginSubmit(event)} method="POST" action="/login-submit" >
                                <div class="input_area">
                                    {/* email area start */}
                                    <div class="icon_and_input_text_area">
                                       
                                        <div class="input_text_area">
                                            <input name='email' type="email"
                                            value={'mmm@gmail.com'} className="input_text" placeholder="Email . . ." />
                                        </div>
                                    </div>
                                    {/* email area end */}

                                    {/* password area start */}
                                    <div class="icon_and_input_text_area">
                                       
                                        <div class="input_text_area">
                                            <input name='password' type="password"
                                             value={'1234'}  class="input_text" placeholder="Enter your password . . ." />
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
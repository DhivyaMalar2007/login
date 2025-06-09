import React from 'react'
import img from "./login design.jpg"
const Login = () => {
    return (
        <div className='w-full h-screen bg-purple-600 flex justify-center items-center'>

            <div className='w-[90%] h-[90%]  shadow-md bg-white flex items-center'>
                <div className='w-[35%] h-[85%] rounded-md shadow-md ms-[50px] bg-white flex justify-center items-center'>
                    <div className='w-[80%] h-[90%] '>
                        <p className='text-3xl text-blue-900 font-bold w-[80%] '>Login</p>
                        <div className='flex mt-2 gap-1'>
                            <p className='text-gray-400 font-bold'>Dosen't have an account yet?</p>
                            <p className='text-purple-400 underline font-bold'>Sign Up</p>
                        </div>
                        <p className='text-gray-500 font-bold mt-6'>Email Address</p>
                        <input type="text" className='border-2 border-gray-300 rounded-md w-full px-4 py-3 mt-1' placeholder='you@example.com' />
                        <div className='flex mt-4 justify-between'>
                            <p className='text-gray-500 font-bold'>Password</p>
                            <p className='text-purple-400 underline font-bold'>Forgot Password?</p>
                        </div>
                        <input type="text" className='border-2 border-gray-300 rounded-md w-full px-4 py-3 mt-1' placeholder='Enter 6 character or more' />
                        <div className='flex mt-6 items-center gap-1'>
                            <input type="checkbox" className='w-5 h-5 rounded-md border border-gray-300' />
                            <p className='text-gray-400'>Remember me</p>
                        </div>
                        <button className='w-full py-4 rounded-md bg-[rgba(137,61,255,1)] text-white mt-6'>LOGIN</button>

                        <div className='flex mt-4 items-center justify-between'>
                            <div className='w-[35%] h-[1px] border '></div>
                            <p className='text-gray-300'>or login with</p>
                            <div className='w-[35%] h-[1px] border '></div>
                        </div>
                        <div className='flex mt-6 items-center justify-between gap-4'>
                            <button className='w-full border-2 border-red-400 flex justify-center  items-center gap-3 text-red-400 text-[14px] rounded-md py-4 font-bold'>
                                <img src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png" alt="" className='w-6 h-6' />
                                <p>Google</p>
                            </button>
                            <button className='w-full border-2 border-blue-600 flex justify-center items-center gap-3 text-blue-600 text-[14px] rounded-md py-4'>
                                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" alt="" className='w-6 h-6'/> */}
                                {/* <span style="color:#1877F2; font-weight:bold; font-family:sans-serif;">f</span> */}
                                <span className="text-[#1877F2] font-bold text-xl">f</span>

                                <p className='font-bold'>facebook</p>
                            </button>
                        </div>


                    </div>

                </div>
                <div >
                    <img src={img} alt="" className='ms-20 w-[600px] h-[600px]' />
                </div>
            </div>
        </div>
    )
}


export default Login

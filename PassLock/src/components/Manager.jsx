import React, { useState } from 'react'
import { useRef } from 'react';

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" });

    const showPassword = () => {
        alert("show the passoword");
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyecrossed.png")) {
            ref.current.src = "icons/eye.png"
        } else {
            ref.current.src = "icons/eyecrossed.png"
        }
    }
    const savePassword = () => {
        console.log(form)
    }
    const handleChange = (e) => {
        setform({...form, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-30 blur-[100px]">
            </div></div>

            <div className="mycontainer">
                <div className='logo font-bold h-8 text-center text-2xl'>
                    <span className='text-green-400'>
                        &lt;
                    </span>
                    Pass
                    <span className=' text-green-500'>Lock/&gt;</span>
                </div>

                <p className='text-green-900 text-lg'>Your own password manager</p>

                <div className=' flex flex-col p-4 text-black gap-5 items-center'>
                    <input name='site' value={form.site} placeholder='Enter website URL' onChange={handleChange} type='text' className='rounded-full border border-green-500 w-full p-4 py-1' />
                    <div className='flex justify-between gap-8 w-full'>
                        <input name='username' value={form.username} onChange={handleChange} placeholder='User-name' type='text' className='rounded-full border border-green-500 w-full p-4 py-1' />
                        <div className='relative'>
                            <input name='password' value={form.password} onChange={handleChange} placeholder='Enter-Password' type='text' className='rounded-full border border-green-500 w-full p-4 py-1' />
                            <span className='absolute top-[9px] right-[6px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} src="/icons/eye.png" className="w-4 h-4 rounded-full" alt="" />

                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 rounded-full px-6 py-2 w-fit hover:bg-green-300 hover:border border-green-800 gap-2 '>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Add Passowrd</button>
                </div>

            </div>
        </>

    )
}

export default Manager

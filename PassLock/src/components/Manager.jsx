import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordwordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");

        if (passwords) {
            setPasswordwordArray(JSON.parse(passwords))
        }
    }, [])

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
        setPasswordwordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div class="fixed inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-30 blur-[100px]">
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
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4 '>Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table class="table-auto w-full overflow-hidden rounded-xl">
                            <thead className='bg-green-700 text-white'>
                                <tr>
                                    <th className='py-2'>Song</th>
                                    <th className='py-2'>Artist</th>
                                    <th className='py-2'>Year</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-200'>
                                <tr>
                                    <td className='text-center w-32 py-1 border border-white'>The Sliding Mr. Bones (Next Stop, Pottersville)</td >
                                    <td className='text-center w-32 py-1 border border-white'>Malcolm Lockyer</td >
                                    <td className='text-center w-32 py-1 border border-white'>1961</td >
                                </tr>
                                <tr>
                                    <td className='text-center w-32 py-1 border border-white'>Witchy Woman</td >
                                    <td className='text-center w-32 py-1 border border-white'>The Eagles</td >
                                    <td className='text-center w-32 py-1 border border-white'>1972</td >
                                </tr>
                                <tr>
                                    <td className='text-center w-32 py-1 border border-white'>Shining Star</td >
                                    <td className='text-center w-32 py-1 border border-white'>Earth, Wind, and Fire</td >
                                    <td className='text-center w-32 py-1 border border-white'>1975</td >
                                </tr>
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>

    )
}

export default Manager

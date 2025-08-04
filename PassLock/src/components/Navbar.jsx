import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className=' bg-slate-600 text-white'>
                <div className="mycontainer flex justify-between items-center px-4 py-3">
                    <div className='logo font-bold h-8'>
                        <span className='text-green-400'>
                            &lt;
                        </span>
                        Pass
                        <span className=' text-green-400'>Lock/&gt;</span>
                    </div>
                    <ul>
                        <li className='flex gap-4'>
                            <a className=' hover:font-bold' href='#'>Home</a>
                            <a className=' hover:font-bold' href='#'>About</a>
                            <a className=' hover:font-bold' href='#'>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

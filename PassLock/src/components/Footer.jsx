import React from 'react'

const Footer = () => {
    return (

        <div className=' bg-slate-500 text-white flex flex-col justify-center items-center p-2'>
            <div>
                <div className="mycontainer flex justify-between items-center px-2 py-2">
                    <div className='logo font-bold h-3'>
                        <span className='text-green-400'>
                            &lt;
                        </span>
                        Pass
                        <span className=' text-green-400'>Lock/&gt;</span>
                    </div>
                </div>
            </div>
            Created to keep all your passwords at one place.
        </div>
    )
}

export default Footer

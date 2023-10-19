import React from 'react'

function Navbar() {
    return (
        <nav className='fixed top-0 left-0 right-0'>
            <div className="w-full bg- bg-gradient-to-tr from-indigo-600 to-purple-600 py-6 flex items-center md:justify-between justify-center px-6 md:px-20 ">
                <div>
                    <h1 className="text-white text-2xl font-semibold ">Servis Xizmatlari</h1>
                </div>
                <div className="hidden lg:block w-1/2">
                    <input type="text" className="py-2 px-4 outline-none rounded-md w-full" placeholder='Bizdagi servis xizmatlar' />
                </div>
                <div className=" items-center space-x-10 hidden lg:block">
                    <button className="border border-white px-4 py-1 rounded-md text-white text-[16px]">Kirish</button>
                    <button className="border border-white px-4 py-1 rounded-md text-white text-[16px]">Ro'yxatdan o'tish</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
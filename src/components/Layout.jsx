import React from 'react';

import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../index'

const Layout = ({children}) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='h-20 bg-gradient-to-br from-[#857656] to-[#010101] text-white flex items-center justify-center'>
            <Header />
            {/* bg-gradient-to-r from-indigo-600 to-purple-400 */}
            </div>
            <main className="flex-1 flex items-center justify-center bg-[url('../src/physics.jpg')]">
                {/* <Outlet /> */}
                {children}
            </main>
            <div className="h-20 bg-gradient-to-r from-indigo-600 to-purple-400  text-white flex items-center justify-center">
            <Footer />

            </div>
        </div>
    )
}

export default Layout;
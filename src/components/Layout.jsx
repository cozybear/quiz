import React from 'react';

import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../index'

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='h-20 bg-indigo-600 text-white flex items-center justify-center'>
            <Header />

            </div>
            <main className='flex-1 bg-gray-100 flex items-center justify-center'>
                <Outlet />
            </main>
            <div className="h-20 bg-indigo-600 text-white flex items-center justify-center">
            <Footer />

            </div>
        </div>
    )
}

export default Layout;
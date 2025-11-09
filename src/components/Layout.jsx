import React from 'react';

import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../index'

const Layout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen bg-[url('../src/bgimage.jpg')]">
            <div className='h-20 text-white flex items-center justify-center'>
            <Header />
            {/* bg-gradient-to-r from-indigo-600 to-purple-400 */}
            </div>
            <main className="flex-1 flex items-center justify-center">
                {/* <Outlet /> */}
                {children}
            </main>
            <div className="h-20  text-white flex items-center justify-center">
            <Footer />

            </div>
        </div>
    )
}

export default Layout;
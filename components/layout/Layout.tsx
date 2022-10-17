import { NextPage } from 'next'
import React, { ReactElement, ReactNode } from 'react'
import Loading from '../loading/Loading';
import Navbar from '../navbar/Navbar'

type Props = {
children:ReactElement
}

const Layout:NextPage<Props> = ({children}) => {
  return (
    <>
    <Navbar />
    <main className="container">
    {/* <Loading /> */}
        {children}
    </main>
    </>
  )
}

export default Layout
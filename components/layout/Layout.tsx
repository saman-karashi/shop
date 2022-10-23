import { NextPage } from 'next'
import React, { ReactElement } from 'react'
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
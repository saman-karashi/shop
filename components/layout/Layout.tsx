import { NextPage } from 'next'
import React, { ReactNode } from 'react'
import Navbar from '../navbar/Navbar'

type Props = {
children:ReactNode
}

const Layout:NextPage<Props> = ({children}) => {

  return (
    <>
    <Navbar/>
    <main className="container">
        {children}
    </main>
    </>
  )
}

export default Layout
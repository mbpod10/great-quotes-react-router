import classes from "./Layout.module.css"
import MainNavigation from "./MainNavigation"

import React from 'react'

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        {props.children}
      </main>
    </>
  )
}

export default Layout
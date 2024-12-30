import React from 'react'
import { Metadata } from 'next'


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default layout

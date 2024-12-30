"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const client=new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        refetchOnWindowFocus: true,
      },
    },
  })
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <QueryClientProvider client={client}>
    <main>
      {children}
    </main>
    </QueryClientProvider>
  )
}

export default layout

import React from 'react'
import Navbar from '../navbar'
import { Helmet } from 'react-helmet'
const Explore = () => {
  return (
    <>
    <div style={{ marginTop: "-4.4%" }} className="min-h-screen z-50 bg-gray-900 flex  flex-col">
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <title>FlorAyush</title>
        <link rel="icon" href="https://images.unsplash.com/photo-1725868904830-165e35d22ae6?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      </Helmet>
    <Navbar mt="mt-5"/><br /><br /><br />
    <h1 className='text-white'>This is Explore Page where all the plants will be rendered</h1>
    </div>
    </>
  )
}

export default Explore
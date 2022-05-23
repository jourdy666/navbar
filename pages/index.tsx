import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-slate-900 text-white">
      <nav>
        <div className="container mx-auto font-mulish">
          <div className="flex py-8">
            <div className="w-3/12 text-2xl">arsi. |</div>
            <div className="w-6/12">
              <ul className="flex items-center space-x-14">
                <li className="text-opacity-60">
                  <a href="#"></a>Home
                </li>
                <li className="text-opacity-60">
                  <a href="#"></a>About
                </li>
                <li className="text-opacity-60">
                  <a href="#"></a>Our Works
                </li>
                <li className="text-opacity-60">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <button className="m-2 border p-3">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Home

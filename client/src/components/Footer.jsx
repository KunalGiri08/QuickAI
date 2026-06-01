import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

        {/* Logo Section */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="/">
            <img
              src={assets.logo}
              alt="QuickAI Logo"
              className="w-36 cursor-pointer"
            />
          </a>

          <p className="text-sm/7 mt-6">
            QuickAI is an AI-powered SaaS platform that helps users generate
            content, images, and productivity tools using advanced AI models.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <a className="hover:text-slate-600 transition" href="#">
              About us
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Careers
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Contact us
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-5">
            Subscribe to our newsletter
          </h2>

          <div className="text-sm space-y-6 max-w-sm">
            <p>
              The latest news, articles, and resources sent directly to your
              inbox.
            </p>

            <div className="flex items-center">
              <input
                className="rounded-l-md bg-gray-100 outline-none w-full max-w-64 h-11 px-3"
                type="email"
                placeholder="Enter your email"
              />

              <button className="bg-primary cursor-pointer px-4 h-11 text-white rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t mt-6 border-slate-200">
        <p className="text-center">
          Copyright {new Date().getFullYear()} © QuickAI. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Cookie Policy</a>
        </div>
      </div>

    </footer>
  )
}
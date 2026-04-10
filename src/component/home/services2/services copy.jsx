import React, { Component } from "react";
import "./services.css";

export class Services2 extends Component {
  render() {
    return (
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">IT Support Packages</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose Your IT Support Package</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Get the most out of your IT budget with a package that includes everything you need to have premium IT AMC support</p>
          </div>

          <div className="grid grid-cols-1 gap-y-8 gap-x-6 lg:grid-cols-3 place-items-center max-w-7xl mx-auto">
            {/* Break & Fix Package */}
            <div className="flex flex-col bg-white p-8 shadow-xl ring-1 ring-gray-200 rounded-3xl w-full max-w-md text-center">
              <h3 className="text-xl font-semibold leading-7 text-gray-900">Break & Fix</h3>
              <p className="mt-2 text-base leading-6 text-gray-600">2 Hours of Tech Support</p>
              <p className="mt-1 text-sm text-gray-500">ONE TIME COST</p>
              
              
              <div className="mt-6 space-y-4">
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Remote Support</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">4 Hours response time</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Preventive Maintenance</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">On-site support</span>
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get started
                </button>
              </div>
              <p className="mt-4 text-xs text-center text-gray-500">*Terms & Conditions Apply</p>
            </div>

            {/* Essential Care Package */}
            <div className="flex flex-col bg-white p-8 shadow-xl ring-1 ring-gray-200 rounded-3xl relative w-full max-w-md text-center">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-indigo-600 px-3 py-1 text-sm font-semibold text-white">Popular</div>
              <h3 className="text-xl font-semibold leading-7 text-gray-900">Essential Care</h3>
              <p className="mt-2 text-base leading-6 text-gray-600">Monthly Support</p>
              <p className="mt-1 text-sm text-gray-500">PER DEVICE/MONTH</p>
              
              
              <div className="mt-6 space-y-4">
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Unlimited Remote Support</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">2 Hours Response Time</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Preventive Maintenance</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Periodic Checkup</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">24/7 Remote Monitoring</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Managed Data Backup</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Data Backup to Cloud</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Advanced Cyber Security</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Act as IT department</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get started
                </button>
              </div>
              <p className="mt-4 text-xs text-center text-gray-500">*Terms & Conditions Apply</p>
            </div>

            {/* Complete Care Package */}
            <div className="flex flex-col bg-white p-8 shadow-xl ring-1 ring-gray-200 rounded-3xl w-full max-w-md text-center">
              <h3 className="text-xl font-semibold leading-7 text-gray-900">Complete Care</h3>
              <p className="mt-2 text-base leading-6 text-gray-600">Monthly Support</p>
              <p className="mt-1 text-sm text-gray-500">PER DEVICE/MONTH</p>
              
              
              <div className="mt-6 space-y-4">
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Unlimited Remote Support</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">2 Hours Response Time</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Preventive Maintenance</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Periodic Checkup</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">24/7 Remote Monitoring</span>
                </div>
                <div className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Managed Data Backup</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Data Backup to Cloud</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Advanced Cyber Security</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Act as IT department</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-indigo-600" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-gray-700">Unlimited On-site support</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get started
                </button>
              </div>
              <p className="mt-4 text-xs text-center text-gray-500">*Terms & Conditions Apply</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services2;

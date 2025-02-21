import React, { Component } from "react";
// import "./services.css";

export class Services1 extends Component {
  render() {
    return (
      <div className="services1 py-16 text-gray-950">
  <div className="container mx-auto">
    <div className="holder text-center mb-12">
      <div className="heading">
        <p className="text-gray-900 font-medium">SERVICES WE OFFER</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Solid IT Solutions That Make You Worry-Free
        </h1>
      </div>
    </div>
    <div className="container0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="box bg-blue-950 text-gray-200 shadow-lg rounded-lg p-10 text-center color">
        <img
          src="image/customer-service.png"
          alt="Complete IT Support"
          className="mx-auto mb-4 w-16 h-16"
        />
        <h4 className="text-orange-500 text-xl font-semibold mb-2">Complete IT Support</h4>
        <p className="mb-4">
          We take a proactive approach to IT support and focus on what matters most to our customers.
        </p>
        <div className="more">
          <a href="/" className="btn bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
            Learn more
          </a>
        </div>
      </div>
      <div className="box bg-white shadow-lg rounded-lg p-10 text-center">
        <img
          src="image/cloud-backup-up-arrow.png"
          alt="Data Backup"
          className="mx-auto mb-4 w-16 h-16"
        />
        <h4 className="text-orange-600 text-xl font-semibold mb-2">Data Backup</h4>
        <p className="text-gray-600 mb-4">
          We can back up all your data for an affordable monthly fee, and our service includes a free tech support line.
        </p>
        <div className="more">
          <a href="/" className="btn bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
            Learn more
          </a>
        </div>
      </div>
      <div className="box bg-white shadow-lg rounded-lg p-10 text-center">
        <img
          src="image/insurance.png"
          alt="Cyber Security"
          className="mx-auto mb-4 w-16 h-16"
        />
        <h4 className="text-orange-600 text-xl font-semibold mb-2">Cyber Security</h4>
        <p className="text-gray-600 mb-4">
          Invest in a cyber security plan today to ensure your company has a solid defense against the latest threats.
        </p>
        <div className="more">
          <a href="/" className="btn bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
            Learn more
          </a>
        </div>
      </div>
      <div className="box bg-white shadow-lg rounded-lg p-10 text-center">
        <img
          src="image/server.png"
          alt="Server Management"
          className="mx-auto mb-4 w-16 h-16"
        />
        <h4 className="text-orange-600 text-xl font-semibold mb-2">Server Management</h4>
        <p className="text-gray-600 mb-4">
          Our team of IT professionals can manage servers and infrastructure, including Virtualization, NAS, Exchange, and SQL.
        </p>
        <div className="more">
          <a href="/" className="btn bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
            Learn more
          </a>
        </div>
      </div>
      <div className="box bg-white shadow-lg rounded-lg p-10 text-center">
        <img
          src="image/laptop.png"
          alt="Desktop/PC Support"
          className="mx-auto mb-4 w-16 h-16"
        />
        <h4 className="text-orange-600 text-xl font-semibold mb-2">Desktop/PC Support</h4>
        <p className="text-gray-600 mb-4">
          Comprehensive and trusted system and computer support platform delivers top-quality PC and laptop help 24/7.
        </p>
        <div className="more">
          <a href="/" className="btn bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
            Learn more
          </a>
        </div>
      </div>
      <div className="box bg-white shadow-lg rounded-lg p-10 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1311/1311693.png"
          alt="Networking"
          className="mx-auto mb-4 w-16 h-16"
        />
        <h4 className="text-orange-600 text-xl font-semibold mb-2">Networking</h4>
        <p className="text-gray-600 mb-4">
          We manage your enterprise-level network with certified staff and tools that help keep monitoring for any possible issues.
        </p>
        <div className="more">
          <a href="/" className="btn bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default Services1;

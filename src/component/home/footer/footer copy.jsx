import React, { Component } from "react";
import "./footer.css";
export class Footer extends Component {
  render() {
    return (
      <div class="">
  <footer class="text-lg-left bg-gray-900 text-white">
      <div class="text-center m-auto py-7">
        <p className="text-center">Get connected with us on social networks</p>
      </div>
    <section class="bg-gray-800 p-5">
      <div>
        <div class="flex justify-between space-x-4 px-2">
          <a href="/" class="text-white">
            <i class="fa-brands fa-facebook text-white text-xl"></i>
          </a>
          <a href="/" class="text-white">
            <i class="fa-brands fa-twitter text-white text-xl"></i>
          </a>
          <a href="/" class="text-white">
            <i class="fa-brands fa-google text-white text-xl"></i>
          </a>
          <a href="/" class="text-white">
            <i class="fa-brands fa-instagram text-white text-xl"></i>
          </a>
          <a href="/" class="text-white">
            <i class="fa-brands fa-linkedin text-white text-xl"></i>
          </a>
          <a href="/" class="text-white">
            <i class="fa-brands fa-github text-white text-xl"></i>
          </a>
        </div>
      </div>
    </section>

    <div class="container mx-auto mt-5 p-2">
      <h6 class="text-xl font-bold uppercase">Services</h6>
      <hr class="my-4 border-gray-600" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="#!" class="!text-gray-300 hover:!text-white">Office Automation</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">Software Solutions</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">AV Solutions</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">Structured Cabling</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">ELV Systems</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">Home Automation</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">Cloud Services</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">Maintenance & Support</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">AI Based Solutions</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">Data Centre Solutions</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">Microsoft Azure / Office 365</a>
        <a href="#!" class="!text-gray-300 hover:!text-white">Backup and Disaster Recovery Management</a>
      </div>
    </div>

    <section class="mt-8 p-2">
      <div class="container mx-auto">
        <h6 class="text-xl font-bold uppercase">Contact</h6>
        <hr class="my-4 border-gray-600" />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <p class="flex items-center space-x-2 !text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="flex-1">+971 50 415 3141</span>
          </p>
          <p class="flex items-center space-x-2 !text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="flex-1">sales@onetechuae.com</span>
          </p>
          <p class="flex items-center space-x-2 !text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="flex-1">G11, Madina Mall, Muhaisnah 4, P.O Box: 120735 Dubai-UAE</span>
          </p>
        </div>
      </div>
    </section>

    <div class="text-center p-3 mt-5 bg-gray-800">
      &copy; 2025 Copyright :
      <a class="!text-gray-300 hover:!text-white" href="#!"> onetech</a>
    </div>
  </footer>
</div>

    );
  }
}

export default Footer;

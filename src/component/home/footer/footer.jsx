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
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="/" class="text-white">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="/" class="text-white">
            <i class="fab fa-google"></i>
          </a>
          <a href="/" class="text-white">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="/" class="text-white">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="/" class="text-white">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>

    <div class="container mx-auto mt-5 p-2">
      <h6 class="text-xl font-bold uppercase">Services</h6>
      <hr class="my-4 border-gray-600" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="#!" class="text-gray-300 hover:text-white">Office Automation</a>
        <a href="#!" class="text-gray-300 hover:text-white">Software Solutions</a>
        <a href="#!" class="text-gray-300 hover:text-white">AV Solutions</a>
        <a href="#!" class="text-gray-300 hover:text-white">Structured Cabling</a>
        <a href="#!" class="text-gray-300 hover:text-white">ELV Systems</a>
        <a href="#!" class="text-gray-300 hover:text-white">Home Automation</a>
        <a href="#!" class="text-gray-300 hover:text-white">Cloud Services</a>
        <a href="#!" class="text-gray-300 hover:text-white">Maintenance & Support</a>
        <a href="#!" class="text-gray-300 hover:text-white">AI Based Solutions</a>
        <a href="#!" class="text-gray-300 hover:text-white">Data Centre Solutions</a>
        <a href="#!" class="text-gray-300 hover:text-white">Microsoft Azure / Office 365</a>
        <a href="#!" class="text-gray-300 hover:text-white">Backup and Disaster Recovery Management</a>
      </div>
    </div>

    <section class="mt-8 p-2">
      <div class="container mx-auto">
        <h6 class="text-xl font-bold uppercase">Contact</h6>
        <hr class="my-4 border-gray-600" />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <p class="flex items-center text-gray-300">
            <i class="fas fa-phone mr-2"></i>+971 50 415 3141
          </p>
          <p class="flex items-center text-gray-300">
            <i class="fas fa-envelope mr-2"></i> <span className="pb-1"> sales@onetechuae.com</span>
          </p>
          <p class="flex items-center text-gray-300">
            <i class="fas fa-home mr-2"></i><span className="pt-6">G11, Madina Mall, Muhaisnah 4, P.O Box: 120735 Dubai-UAE</span>
          </p>
        </div>
      </div>
    </section>

    <div class="text-center p-3 mt-5 bg-gray-800">
      &copy; 2025 Copyright:
      <a class="text-gray-300 hover:text-white" href="#!">onetech</a>
    </div>
  </footer>
</div>

    );
  }
}

export default Footer;

import React, { Component } from "react";
// import "./contact.css";
export class Contact extends Component {
  render() {
    return (
      <>
        <div class="contact-container">
  <h3 class="text-center text-xl font-bold mb-6">Contact</h3>
  <div class="contact flex flex-wrap justify-center text-center">
    <div class="contact-content content0 w-full sm:w-1/2 md:w-1/2 lg:w-2/5 m-3">
      <img
        class="mx-auto mb-3"
        src="https://cdn4.iconfinder.com/data/icons/outdated/128/icon_Telephone.png"
        alt=""
      />
      <p>
        <strong>Landline</strong>
        <br />
        044-21242124
      </p>
    </div>
    <div class="contact-content content1 w-full sm:w-1/2 md:w-1/2 lg:w-2/5 m-3">
      <img
        class="mx-auto mb-3"
        src="https://cdn4.iconfinder.com/data/icons/Primo_Icons/PNG/128x128/telephone_black.png"
        alt=""
      />
      <p>
        <strong>Phone</strong>
        <br />
        +971-50-415-3141
      </p>
    </div>
    <div class="contact-content content2 w-full sm:w-1/2 md:w-1/2 lg:w-2/5 m-3">
      <img
        class="mx-auto mb-3"
        src="https://cdn1.iconfinder.com/data/icons/android-png/256/Android-Email.png"
        alt=""
      />
      <p>
        <strong>Email</strong>
        <br />
        support@onetechae.com
      </p>
    </div>
    <div class="contact-content content3 w-full sm:w-1/2 md:w-1/2 lg:w-2/5 m-3">
      <img
        class="mx-auto mb-3"
        src="https://cdn0.iconfinder.com/data/icons/gpsmapicons/red/gpsmapicons01.png"
        alt=""
      />
      <p>
        <strong>Location</strong>
        <br />
        Office 408, koko building, near Naif intersection bus station,
        Dubai, United Arab Emirates
      </p>
    </div>
  </div>
</div>
<div class="map style0 mt-8">
  <iframe
  title="map"
    class="w-full h-[500px]"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8784910406803!2d55.3067914144859!3d25.27467263475643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434c2736314d%3A0x8d0bce90d1cfafb6!2sNaif%20Intersection%202!5e0!3m2!1sen!2sin!4v1674999325590!5m2!1sen!2sin"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
<div class="chat-link text-center">
  <h3 class="text-lg font-semibold text-gray-900">
    Technical assistance by <a href="http://" class="text-orange-500">chat</a>
  </h3>
</div>
<div class="container0">
  <form id="submit-form" action="" class="max-w-md mx-auto">
    <h3 class="text-center text-xl font-bold mb-6">GET IN TOUCH</h3>
    <input
      type="text"
      id="fname"
      placeholder="Your name"
      name="name"
      class="w-full mb-4 p-2 border border-gray-300 rounded-md"
    />
    <input
      type="text"
      id="email"
      placeholder="Your email"
      name="email"
      class="w-full mb-4 p-2 border border-gray-300 rounded-md"
    />
    <textarea
      id="subject"
      rows="4"
      placeholder="Enter your message"
      name="message"
      class="w-full mb-4 p-2 border border-gray-300 rounded-md"
    ></textarea>
    <button
      type="submit"
      class="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700"
    >
      Send
    </button>
  </form>
</div>
<div class="whatsapp mt-8 text-center">
  <a href="https://wa.me/971504153141">
    <img
      id="whatsapp"
      class="mx-auto"
      height="40px"
      src="image/WhatsApp-logo.png"
      alt=""
      width="100"
    />
  </a>
</div>

      </>
    );
  }
}

export default Contact;

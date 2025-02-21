import React, { useState, useEffect } from "react";

import LogoSlider from "../../home/partners/carousel/logo-carousel";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Navbar from "../../home/navbar/navbar";
import Footer from "../../home/footer/footer";

export const IThomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is an office telephone system?",
      answer:
        "An office telephone system is a communication setup that allows multiple telephones to function together, enabling employees to connect with clients, partners, and colleagues, either within the office or externally. Modern systems often include features like call forwarding, conferencing, and voicemail.",
    },
    {
      question:
        "What types of office telephone systems are available in Dubai?",
      answer:
        "In Dubai, common office telephone systems include: <br/>  <br/> <ul> <li> <span class=' font-semibold text-indigo-600'> Traditional PBX (Private Branch Exchange):</span> Uses landlines for internal and external communication. </li> <li> <span class=' font-semibold text-indigo-600'> IP PBX:</span> Routes calls via the internet rather than landlines. </li> <li> <span class=' font-semibold text-indigo-600'> VoIP (Voice over IP):</span> Uses internet protocols for voice communication, offering flexibility and lower costs. </li> <li> <span class=' font-semibold text-indigo-600'> Cloud-based Phone Systems:</span> Managed online, allowing scalability and remote access. </li> </ul>",
    },
    {
      question: "How do VoIP systems differ from traditional landline systems?",
      answer:
        "VoIP systems use the internet to transmit calls, providing greater flexibility, more features, and lower costs compared to traditional landlines that rely on physical phone lines. VoIP systems can be accessed from anywhere with an internet connection.",
    },
    {
      question:
        "Can I integrate office telephone systems with other business tools?",
      answer:
        "Yes, many modern office telephone systems in Dubai can integrate with CRM software, email platforms, and other business tools, allowing seamless communication, enhanced productivity, and better customer service.",
    },
    {
      question:
        "What are the benefits of using a cloud-based telephone system?",
      answer:
        "<ul> <li> <span class=' font-semibold text-indigo-600'> Scalability:</span> Easily add or remove users as your business grows. </li> <li> <span class=' font-semibold text-indigo-600'> Remote Access:</span> Employees can make and receive calls from anywhere. </li> <li> <span class=' font-semibold text-indigo-600'> Cost Efficiency:</span> No need for extensive hardware or maintenance costs. </li> <li> <span class=' font-semibold text-indigo-600'> Advanced Features:</span> Includes call recording, auto attendants, voicemail to email, etc. </li> </ul>",
    },
    {
      question:
        "Is it possible to upgrade from a traditional PBX to a VoIP system?",
      answer:
        "Yes, most businesses in Dubai can upgrade from a traditional PBX to a VoIP or IP PBX system. The process typically involves assessing the existing infrastructure and ensuring the business has a reliable internet connection for VoIP.",
    },
    {
      question: "How can I choose the right telephone system for my business?",
      answer:
        "To choose the right system, consider: <br/> <br/> <ul> <li>The size of your business and the number of employees.</li> <li> Your communication needs (local vs. international calls, conferencing, etc.). </li> <li> The features you need (voicemail, call forwarding, call recording). </li> <li>Whether you need remote or mobile access.</li> <li>Budget and scalability needs.</li> </ul>",
    },
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const IThomePage = [
    {
      quote:
        "“From the initial IT consultation to the seamless implementation, CubeZix demonstrated a deep understanding of our unique IT Infrastructure needs. Their expertise in network security, cloud computing, and IT infrastructure management has significantly enhanced our operational efficiency.”",
      name: "Judith Black",
      role: "Assistant Finance Manager of Al Rama International FZCO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "“CubeZix’s responsiveness is impressive; they are always quick to address any issues that arise, minimizing downtime and keeping our operations seamless. Beyond just maintenance, CubeZix offers valuable advice and proactive solutions, helping us stay ahead with the latest technology and best practices.”",
      name: "Alex Johnson",
      role: "Chief Product Officer of Arabyads",
      image:
        "https://images.unsplash.com/photo-1502767089025-d6f4b74b5ea3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "“CubeZix's proactive maintenance approach is a standout feature. They regularly monitor our systems, perform routine check-ups, and provide detailed reports on our IT health.Their dedication to proactive maintenance and their ability to deliver outstanding results have truly exceeded our expectations.”",
      name: "Sarah Williams",
      role: "Director of International Textile Exports Ltd",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === IThomePage.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [IThomePage.length]);

  // const prevSlide = () => {
  //   setCurrentIndex(
  //     currentIndex === 0 ? IThomePage.length - 1 : currentIndex - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setCurrentIndex(
  //     currentIndex === IThomePage.length - 1 ? 0 : currentIndex + 1
  //   );
  // };

  // render() {
  return (
    <>
      <Navbar />
      <div className="bg-gray">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-38 lg:py-36">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-800/10 hover:ring-gray-800/20 tracking-[.35em] uppercase">
                Solutions for IP PBX
                {/* <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a> */}
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-800 sm:text-7xl">
                Office Telephone Systems in Dubai
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
                We assist our customers in selecting the best office telephone
                system in Dubai. We have a very advanced team to support your
                phone system requirements, whether it is an IP PBX or a
                traditional PABX system.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="/" className="text-sm/6 font-semibold text-gray-800">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      <LogoSlider />

      <div class="bg-gray py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base/7 font-semibold text-indigo-600 tracking-[.35em] uppercase">
              PABX System Installation in Dubai
            </h2>
            <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl lg:text-balance">
              Streamlined Business Communication
            </p>
            <p class="mt-6 text-lg/8 text-gray-600">
              We offer state-of-the-art telephone solutions designed to meet the
              communication needs of modern businesses. Our services include
              VoIP systems,{" "}
              <span class="font-semibold text-indigo-600">
                PBX installations
              </span>
              , and tailored communication infrastructures that enhance
              connectivity, streamline operations, and improve customer
              engagement.
              <br />
              <br />
              As a reliable service provider, we offer comprehensive telephone
              solutions designed to enhance your business communication.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div class="relative pl-16">
                <dt class="text-base/7 font-semibold text-gray-800">
                  <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      class="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  VoIP Solutions
                </dt>
              </div>
              <div class="relative pl-16">
                <dt class="text-base/7 font-semibold text-gray-800">
                  <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      class="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  PBX Systems
                </dt>
              </div>
              <div class="relative pl-16">
                <dt class="text-base/7 font-semibold text-gray-800">
                  <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      class="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  Call Center Solutions
                </dt>
              </div>
              <div class="relative pl-16">
                <dt class="text-base/7 font-semibold text-gray-800">
                  <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      class="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  Unified Communications
                </dt>
              </div>
              <div class="relative pl-16">
                <dt class="text-base/7 font-semibold text-gray-800">
                  <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      class="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  Telephony Support & Maintenance
                </dt>
              </div>
            </dl>
          </div>

          <div class=" py-24 sm:py-32">
            <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
              <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
                <div class="relative lg:row-span-2">
                  <div class="absolute inset-px rounded-lg bg-gray-100 lg:rounded-l-[2rem]"></div>
                  <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] pb-8">
                    <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-5 sm:pt-10">
                      <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center uppercase">
                        Essential IT Setup
                      </p>
                      <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Expert Consultancy and Seamless Implementation for
                        Optimal Office IT Solutions We offer expert IT
                      </p>
                      <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        We offer expert IT consultancy and precise
                        implementation for a flawless office setup.
                      </p>
                    </div>
                  </div>
                  <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                </div>

                <div class="relative lg:row-span-2">
                  <div class="absolute inset-px rounded-lg bg-gray-100 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                  <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] pb-8">
                    <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-5 sm:pt-10">
                      <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center uppercase">
                        Premier IT Support
                      </p>
                      <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Tailored IT Solutions and Efficient Project Execution
                        for Your Office
                      </p>
                      <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        We deliver custom IT infrastructure design and efficient
                        execution for optimal office functionality.
                      </p>
                    </div>
                  </div>
                  <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div
          class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div
          class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-auto text-center">
            <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              IP PABX Telephone System Installation
            </h2>
            <p class="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Get in touch with our team today for IP PABX Telephone System
              Installation
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="/" className="text-sm/6 font-semibold text-gray-200">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div class="relative isolate overflow-hidden bg-gray px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <svg
            class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="lg:max-w-lg">
          <p class="text-base/7 font-semibold text-indigo-600 tracking-[.35em]">TRANSFORM RELIABLY</p>
          <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">A better workflow</h1>
          <p class="mt-6 text-xl/8 text-gray-300">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.</p>
        </div>
      </div>
    </div> */}
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png" alt=""/> */}

            <div class="lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 pt-8">
              <div class="lg:pr-4">
                <div class="lg:max-w-lg">
                  <p class="text-base/7 font-semibold text-indigo-600 tracking-[.35em] uppercase">
                    Efficiency with Modern IP PBX Solutions
                  </p>
                  <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl">
                    IP PBX System in Dubai
                  </h1>
                  <p class="mt-6 text-xl/8 text-gray-600">
                    Discover the benefits of IP PBX systems for managing calls,
                    saving costs, and improving internal communication in Dubai.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                <ul class="mt-8 space-y-8 text-gray-600">
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 size-5 flex-none text-indigo-600"
                      fill="none"
                      viewBox="0 0 20 25"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-800">
                        Efficient Management of Incoming Calls
                      </strong>
                      <br />
                      An IP PBX system provides automated call transferring,
                      ensuring efficient handling of incoming calls and
                      professional interaction with clients.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 size-5 flex-none text-indigo-600"
                      fill="none"
                      viewBox="0 0 20 25"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-800">
                        Streamlined Internal Communication
                      </strong>
                      <br />
                      Save on labor costs while maintaining seamless internal
                      communication with a system that offers extension
                      directories and voice interaction.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 size-5 flex-none text-indigo-600"
                      fill="none"
                      viewBox="0 0 20 25"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-800">
                        Faster Speed Dialing
                      </strong>
                      <br />
                      Programmable speed dialing in IP PBX systems facilitates
                      quicker connections to frequently dialed numbers,
                      enhancing overall productivity.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 size-5 flex-none text-indigo-600"
                      fill="none"
                      viewBox="0 0 20 25"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-800">
                        Automated Enquiry Assistance
                      </strong>
                      <br />
                      Customized call routing directs inquiries to appropriate
                      departments, streamlining customer interactions and
                      improving response efficiency.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 size-5 flex-none text-indigo-600"
                      fill="none"
                      viewBox="0 0 20 25"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-800">
                        User-Friendly Navigable Interface
                      </strong>
                      <br />
                      The navigable interface of IP PBX systems accommodates
                      voice interactive functions, integrating easily with daily
                      operations and enhancing user experience.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 size-5 flex-none text-indigo-600"
                      fill="none"
                      viewBox="0 0 20 25"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-800">
                        Flexible, Hands-Free Features
                      </strong>
                      <br />
                      Pairing IP PBX systems with hands-free headsets allows for
                      increased mobility, boosting creativity and productivity
                      by avoiding desk-bound restrictions.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 size-5 flex-none text-indigo-600"
                      fill="none"
                      viewBox="0 0 20 25"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-800">
                        Expert Installation and Maintenance
                      </strong>
                      <br />
                      CubeZix offers expert installation and maintenance of IP
                      PBX systems, tailored to meet the needs of startups and
                      growing businesses alike.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

        <div className="mx-auto max-w-4xl">
          {/* <img
          className="mx-auto h-12"
          src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
          alt=""
        /> */}

          <div className="relative mt-10">
            {/* Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {IThomePage.map((testimonial, index) => (
                  <figure
                    key={index}
                    className="min-w-full text-center px-4 sm:px-6"
                  >
                    <blockquote className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                      <p>{testimonial.quote}</p>
                    </blockquote>
                    <figcaption className="mt-1">
                      <img
                        className="mx-auto size-10 rounded-full"
                        // src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div className="mt-1 flex items-center justify-center space-x-3 text-base">
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <svg
                          viewBox="0 0 2 2"
                          width="3"
                          height="3"
                          aria-hidden="true"
                          className="fill-gray-900"
                        >
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-900 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-700 hover:text-blue-500"
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6 text-blue-500" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-gray-600" />
                )}
              </div>
              {openIndex === index && (
                <div
                  className="mt-2 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="whatsapp">
        <a href="https://wa.me/971504153141">
          <img
            id="whatsapp"
            height="40px"
            src="image/WhatsApp-logo.png"
            alt=""
            width={100}
          />
        </a>
      </div>
      <Footer />
    </>
  );
};
// }

export default IThomePage;

import React, { useState, useEffect } from "react";

import LogoSlider from "../../home/partners/carousel/logo-carousel";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Navbar from "../../home/navbar/navbar";
import Footer from "../../home/footer/footer";

export const IThomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are structured cabling services offered by Cubezix?",
      answer:
        "Cubezix offers comprehensive structured cabling services including installation, maintenance, and management of communication networks for businesses of all sizes in Dubai.",
    },
    {
      question: "Why is structured cabling important for my business in Dubai?",
      answer:
        "Structured cabling provides a reliable and scalable network infrastructure, ensuring efficient communication, better internet speed, reduced downtime, and easy troubleshooting, which is essential for the seamless operation of your business.",
    },
    {
      question: "What Types Of Structured Cabling Services Do You Provide?",
      answer:
        "Our services cover a diverse range of applications including: <br/> <br/> <span class=' font-semibold text-indigo-600'>Office Cabling</span> <br/> <span class=' font-semibold text-indigo-600'>Wi-Fi Cabling</span> <br/> <span class=' font-semibold text-indigo-600'>CCTV Cabling</span> <br/> <span class=' font-semibold text-indigo-600'>Telephonic Cabling</span> <br/> <span class=' font-semibold text-indigo-600'>Villa Cabling</span> <br/> <span class=' font-semibold text-indigo-600'>Audio/Video Cabling</span> <br/> <span class=' font-semibold text-indigo-600'>Data Center Cabling</span> <br/> <span class=' font-semibold text-indigo-600'>Warehouse Cabling</span> <br/> <span class=' font-semibold text-indigo-600'>Optical Fiber Splicing</span> <br/> <span class=' font-semibold text-indigo-600'>Cable Rearrangement</span> <br/> <span class=' font-semibold text-indigo-600'>Comprehensive Maintenance Support</span>",
    },
    {
      question:
        "How do I know if my business needs structured cabling services?",
      answer:
        "If your business experiences frequent network disruptions, slow connections, or requires future network expansion, it may be time to consider structured cabling services to improve performance and efficiency.",
    },
    {
      question:
        "How does Cubezix ensure the quality of its structured cabling installations?",
      answer:
        "Cubezix uses high-quality materials and adheres to industry standards during installations. Our experienced technicians undergo regular training and use best practices to deliver reliable and effective cabling solutions.",
    },
    {
      question: "Do you offer support and maintenance for structured cabling?",
      answer:
        "Yes, Cubezix offers ongoing support and maintenance services to ensure your structured cabling system remains efficient and problem-free over time.",
    },
    {
      question: "What Are The Advantages Of Structured Cabling?",
      answer:
        "Structured cabling offers several benefits including: <br/> <br/> Improved aesthetics due to its organized setup <br/> Reduced potential downtime <br/> Time-saving maintenance and upgrades <br/> Flexibility to accommodate changes <br/> Scalability to meet growing demands <br/> Robust security <br/> measures ensuring data integrity &confidentiality",
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
                TRANSForm RELIABLY
                {/* <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a> */}
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-800 sm:text-7xl">
                Structured Cabling Services in Dubai
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
                Structured cabling is the foundation of your IT network,
                handling essential voice, data, and video communications crucial
                for daily business functions.
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
              Expert Network Cabling Services in Dubai
            </h2>
            <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl lg:text-balance">
              Complete Network Infrastructure Solutions
            </p>
            <p class="mt-6 text-lg/8 text-gray-600">
              Network cabling connects devices and transfers data across your{" "}
              <span class=" font-semibold text-indigo-600">
                IT infrastructure
              </span>
              . CubeZix offers full-service network cabling in Dubai, including
              the design and installation of structured cabling systems. We
              manage every detail, from cable laying and connector installation
              to network cabinet setup and cable testing, using various cable
              types like UTP, F/UTP, STP, and fiber optics as needed.
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
                  Professional network cabling
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
                  Efficient cabinet design
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
                  Expert cable installation
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
                  Comprehensive cable testing
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
                  Reliable connector setup
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
                  Versatile cable types
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
              Get CubeZix Structured Cabling Solutions
            </h2>
            <p class="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Get in touch with our team today for structured cabling services
              in Dubai.
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
                    TRANSForm RELIABLY
                  </p>
                  <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl">
                    Enhancing Your IT with Custom Cabling Solutions
                  </h1>
                  <p class="mt-6 text-xl/8 text-gray-600">
                    By offering{" "}
                    <span class=" font-semibold text-indigo-600">
                      Structured Cabling Services in Dubai
                    </span>
                    , we enhance your IT infrastructure through innovative
                    solutions, seamless integration, and scalable growth for
                    your business.
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
                        Office Cabling
                      </strong>
                      <br />
                      We provide structured data and network cabling for
                      offices, ensuring efficient connections between user desks
                      and server rooms.
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
                        Wi-Fi Cabling
                      </strong>
                      <br />
                      Our team sets up and supports Wi-Fi access points,
                      ensuring reliable coverage for new or existing buildings.
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
                        Issue Fixing & Maintenance
                      </strong>
                      <br />
                      Available 24/7, we troubleshoot, manage cables, and
                      document components for easy future maintenance and
                      network stability.
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
                        CCTV Cabling
                      </strong>
                      <br />
                      We offer SIRA-compliant CCTV cabling, connecting
                      surveillance equipment throughout your building for easy
                      monitoring and control.
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
                        Telephonic Cabling
                      </strong>
                      <br />
                      We handle installation and modification of IP, digital,
                      and analog telephone systems, along with WAN/LAN and frame
                      relay setups.
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
                        Villa Cabling
                      </strong>
                      <br />
                      Providing structured cabling for villas with minimal
                      construction work, we design and install systems tailored
                      to your needs.
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
                        Optic Fiber Splicing
                      </strong>
                      <br />
                      We analyze your infrastructure to choose the best optic
                      fiber, ensuring efficient, lossless data transmission
                      across your network.
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
                        Audio/Video Cabling
                      </strong>
                      <br />
                      Our team implements tailored audio/video solutions for
                      control rooms, smart meeting spaces, video walls, and
                      digital signage.
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
                        Data Centers Cabling
                      </strong>
                      <br />
                      We install robust cabling for data centers, ensuring
                      compatibility and durability, optimized for future
                      upgrades and organizational needs.
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
                        Warehouse Cabling
                      </strong>
                      <br />
                      Design and install structured cabling for warehouses, with
                      a focus on safety and meeting the specific equipment and
                      material requirements.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="mx-auto py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fill-opacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#7775D6" />
                  <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div class="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 class=" text-base/7 font-semibold text-indigo-600 tracking-[.35em] mb-3 uppercase">
                Expert Solutions with Comprehensive Support
              </h2>
              <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Structured Cabling Services in Dubai
              </h2>

              <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start pl-6">
                <a
                  href="/"
                  class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="/" class="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>

              <p class="mt-6 text-pretty text-lg/8 text-gray-300">
                We specialize in providing reliable and high-performance IT
                structured cabling solutions. With years of expertise, we design
                and implement tailored cabling systems that ensure seamless
                connectivity and support for your business’s IT infrastructure.
                Our services include data cabling, fiber optics, and cable
                management, ensuring efficient communication, scalability, and
                long-term network performance. Trust us to deliver future-proof
                cabling solutions that enhance productivity and meet the demands
                of your growing business.
              </p>

              <hr className="mt-10" />

              <div class=" pt-10 sm:pt-10">
                <div class=" max-w-7xl">
                  <div class=" mt-10 max-w-2xl sm:mt-10 lg:mt-2 lg:max-w-5xl">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 lg:gap-y-16">
                      <div class="relative pl-14">
                        <dt class="text-base/7 font-semibold text-gray-100 whitespace-nowrap pt-1.5">
                          <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
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
                          Premier Cabling Services
                        </dt>
                      </div>
                      <div class="relative pl-14">
                        <dt class="text-base/7 font-semibold text-gray-100 whitespace-nowrap pt-1.5">
                          <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
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
                          Extensive Industry Experience
                        </dt>
                      </div>
                      <div class="relative pl-14">
                        <dt class="text-base/7 font-semibold text-gray-100 whitespace-nowrap pt-1.5">
                          <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
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
                          Tailored Cabling Solutions
                        </dt>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative mt-16 h-80 lg:mt-8">
              <img
                class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://cubezix.com/wp-content/uploads/2024/02/IT-Structured-Cabling.webp"
                alt="App screenshot"
                width="1824"
                height="1080"
              />
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

import React, { useState, useEffect } from "react";

import LogoSlider from "../../home/partners/carousel/logo-carousel";
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import Navbar from "../../home/navbar/navbar";
import Footer from "../../home/footer/footer";

export const IThomePage = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Business Process Outsourcing (BPO)?",
      answer: "BPO is the practice of hiring external companies to handle certain business functions, such as customer service, accounting, IT services, human resources, or payroll, to reduce costs and focus on core business activities."
    },
    {
      question: "Why should I consider outsourcing my business processes in Dubai?",
      answer: "Outsourcing in Dubai allows companies to benefit from cost savings, access to skilled labor, operational efficiency, and the ability to focus on core business tasks while maintaining high-quality standards."
    },
    {
      question: "What types of services can be outsourced in Dubai??",
      answer: "Commonly outsourced services in Dubai include: <br/> <br/>Customer support and call center services <br/>IT support and managed services <br/>Accounting and payroll services <br/>Human resources management <br/>Digital marketing and SEO services <br/>Data entry and administrative tasks"
    },
    {
      question: "How does BPO benefit companies in Dubai?",
      answer: "BPO helps businesses streamline operations, lower operational costs, improve efficiency, access specialized skills, and enhance service delivery without the need for large internal departments."
    },
    {
      question: "How do I choose the right BPO provider in Dubai?",
      answer: "To select the best BPO provider, consider factors such as industry experience, expertise in the specific services you need, client reviews, cost-effectiveness, and their adherence to local regulations and data security standards."
    },
    {
      question: "How does CubeZix support business scalability through BPO?",
      answer: "CubeZix's BPO solutions are highly scalable, allowing businesses to adjust their service needs as they grow. Whether you need to expand operations or streamline processes, CubeZix can scale services accordingly without requiring large upfront investments."
    },
    {
      question: "What sets CubeZix apart from other BPO providers in Dubai?",
      answer: "CubeZix stands out due to our deep industry expertise, flexible and customized solutions, commitment to data security, and a proven track record of delivering high-quality services. We build long-term partnerships with our clients, ensuring that we contribute to their ongoing success."
    }
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
        '“From the initial IT consultation to the seamless implementation, CubeZix demonstrated a deep understanding of our unique IT Infrastructure needs. Their expertise in network security, cloud computing, and IT infrastructure management has significantly enhanced our operational efficiency.”',
      name: 'Judith Black',
      role: 'Assistant Finance Manager of Al Rama International FZCO',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      quote:
        '“CubeZix’s responsiveness is impressive; they are always quick to address any issues that arise, minimizing downtime and keeping our operations seamless. Beyond just maintenance, CubeZix offers valuable advice and proactive solutions, helping us stay ahead with the latest technology and best practices.”',
      name: 'Alex Johnson',
      role: 'Chief Product Officer of Arabyads',
      image:
        'https://images.unsplash.com/photo-1502767089025-d6f4b74b5ea3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      quote:
        "“CubeZix's proactive maintenance approach is a standout feature. They regularly monitor our systems, perform routine check-ups, and provide detailed reports on our IT health.Their dedication to proactive maintenance and their ability to deliver outstanding results have truly exceeded our expectations.”",
      name: 'Sarah Williams',
      role: 'Director of International Textile Exports Ltd',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-38 lg:py-36">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-800/10 hover:ring-gray-800/20 tracking-[.35em] uppercase">
              Business Process Outsourcing (BPO) Solutions
              {/* <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a> */}
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-800 sm:text-7xl">Business Process Outsourcing (BPO) in Dubai</h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">Our BPO services optimize business processes, addressing key needs and transforming non-core activities for greater efficiency</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                <a href="/" className="text-sm/6 font-semibold text-gray-800">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
          </div>
        </div>
      </div>      
      
      <LogoSlider/>

      <div class="bg-gray py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base/7 font-semibold text-indigo-600 tracking-[.35em] uppercase">Business Process Outsourcing (BPO) Solutions</h2>
      <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl lg:text-balance">Enhance business efficiency with tailored BPO services</p>
      <p class="mt-6 text-lg/8 text-gray-600">Our CubeZix is dedicated to providing high-quality, cost-effective <span class="font-semibold text-indigo-600">BPO services</span> that boost operational efficiency and enhance profitability. With CubeZix, you can rest assured your business processes and customers are in expert hands.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-800">
            <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Payroll and Accounting
          </dt>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-800">
            <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Customer Support
          </dt>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-800">
            <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Administration
          </dt>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-800">
            <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Marketing
          </dt>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-800">
            <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Talent & HR
          </dt>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-800">
            <div class="absolute left-0 top-[-6px] flex size-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Sales & Customer Operations
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
          <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center uppercase">Essential IT Setup</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Expert Consultancy and Seamless Implementation for Optimal Office IT Solutions
            We offer expert IT</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">We offer expert IT consultancy and precise implementation for a flawless office setup.</p>
          </div>
          
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
      </div>
      
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-gray-100 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] pb-8">
          <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-5 sm:pt-10">
          <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center uppercase">Premier IT Support</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Tailored IT Solutions and Efficient Project Execution for Your Office</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">We deliver custom IT infrastructure design and efficient execution for optimal office functionality.</p>
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
  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"/>
  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-auto text-center">
      <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Reliable Business Process Outsourcing (BPO) Services in Dubai</h2>
      <p class="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">We create value across the IT spectrum through deploying innovation, structuring transformation and unlocking growth for your company.</p>
    </div>
    <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                <a href="/" className="text-sm/6 font-semibold text-gray-200">Learn more <span aria-hidden="true">→</span></a>
              </div>
    
  </div>
</div>



<div class="relative isolate overflow-hidden bg-gray px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
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
          <p class="text-base/7 font-semibold text-indigo-600 tracking-[.35em] uppercase">Maximize efficiency and reduce costs</p>
          <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl">Key Benefits of BPO Services</h1>
          <p class="mt-6 text-xl/8 text-gray-600">Business Process Outsourcing (BPO) offers multiple advantages, enabling organizations to focus on core functions and drive growth.</p>
        </div>
      </div>
    </div>

      
    </div>
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
          <ul class="mt-8 space-y-8 text-gray-600">
            <li class="flex gap-x-3">
              <svg class="mt-1 size-5 flex-none text-indigo-600" fill="none"
                viewBox="0 0 20 25"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true">
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                />
                <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7" />
              </svg>
              <span><strong class="font-semibold text-gray-800">Cost Reduction</strong><br/> Outsourcing reduces operational, recruitment, and training costs, significantly enhancing an organization’s overall financial performance.</span>
            </li>
            <li class="flex gap-x-3">
            <svg class="mt-1 size-5 flex-none text-indigo-600" fill="none"
                viewBox="0 0 20 25"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true">
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                />
                <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7" />
              </svg>
              <span><strong class="font-semibold text-gray-800">Productivity Growth</strong><br/> Delegating repetitive tasks boosts productivity by allowing focus on critical business operations and priorities.</span>
            </li>
            <li class="flex gap-x-3">
            <svg class="mt-1 size-5 flex-none text-indigo-600" fill="none"
                viewBox="0 0 20 25"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true">
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                />
                <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7" />
              </svg>
              <span><strong class="font-semibold text-gray-800">Strategic Advantage</strong><br/>BPOs provide valuable customer feedback and 24/7 support, improving service and product development efforts.</span>
            </li>
            <li class="flex gap-x-3">
              <svg class="mt-1 size-5 flex-none text-indigo-600" fill="none"
                viewBox="0 0 20 25"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true">
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                />
                <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7" />
              </svg>
              <span><strong class="font-semibold text-gray-800">Business Risk Mitigation</strong><br/> Expert BPOs manage non-core tasks, reducing risks and ensuring effective risk mitigation strategies.</span>
            </li>
            <li class="flex gap-x-3">
            <svg class="mt-1 size-5 flex-none text-indigo-600" fill="none"
                viewBox="0 0 20 25"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true">
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                />
                <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7" />
              </svg>
              <span><strong class="font-semibold text-gray-800">Utilization Improvement</strong><br/>Outsourcing routine tasks enhances resource efficiency by freeing skilled employees for core responsibilitie</span>
            </li>
            <li class="flex gap-x-3">
            <svg class="mt-1 size-5 flex-none text-indigo-600" fill="none"
                viewBox="0 0 20 25"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true">
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                />
                <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7" />
              </svg>
              <span><strong class="font-semibold text-gray-800">Superior Competency</strong><br/> BPOs deliver high-quality services with skilled professionals and access to cutting-edge technology.</span>
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
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
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
              <div className="mt-2 text-gray-700"
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
  }
// }

export default IThomePage;

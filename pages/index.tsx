import Layout from '../components/Layout'
import { useState, useRef, PropsWithChildren } from 'react';
import * as emailjs from 'emailjs-com';
import * as gtag from "../lib/gtag";

const IndexPage = () => {
  const divRef = useRef<HTMLLinkElement>(null);

  return (
    <Layout title="Ark Health">
      <Hero divRefScrollHandler={() => {
        divRef.current !== null && divRef.current.scrollIntoView({ behavior: 'smooth' })
      }} />
      <Services />
      <Featured />
      <Finisher />
      <Contact divRef={divRef} />
    </Layout>
  )
}


export default IndexPage

/// Page Sections
interface HeroProps {
  divRefScrollHandler?: any,
}

const Hero = (props: PropsWithChildren<HeroProps>) => {

  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "75vh"
      }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')"
        }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full px-4 ml-auto mr-auto text-center">
            <div className="px-4">
              <h1 className="text-white font-semibold text-5xl">
                Faster Clinical Trial Recruitment
          </h1>
              <p className="mt-4 text-lg text-gray-300">
                Struggling to hit enrollment timelines? We're here to help.
          </p>
            </div>
          </div>
          <a
            className="mt-10 mx-auto px-8 py-3 bg-white rounded-3xl font-semibold border-none text-lg cursor-pointer text-gray-700"
            onClick={() => props.divRefScrollHandler()}
          >
            Get in Touch
      </a>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  )
}

const Services = () => <section className="pb-20 bg-gray-300 -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h6 className="text-xl font-semibold">Understand EMR Data</h6>
            <p className="mt-2 mb-4 text-gray-600">
              We compliantly surface the eligible patients already in your health system using the latest in machine learning and natural language processing.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
              <i className="fas fa-user-friends"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Easily Enroll Patients
            </h6>
            <p className="mt-2 mb-4 text-gray-600">
              We provide industry-leading tools and workflows to ensure nobody slips through the cracks. Give superpowers to your research coordinators.
            </p>
          </div>
        </div>
      </div>

      <div className="md:pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
              <i className="fas fa-chart-line"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Site-Level Analytics
            </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Your clinical site lead can easily understand whether you're on track to hit timelines, what's working well, and what to change to improve performance.
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-wrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Become a top performing research site
          </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          Recruiting for clinical trials shouldn't be so hard. Let us do the heavy lifting to help find eligible patients that are excited to participate in the cutting edge of medicine.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          With our enrollment management system, your team will enroll more patients faster, with less manual tracking and work.
        </p>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1519975258993-60b42d1c2ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px"
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-pink-600 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Fill Your Studies Faster
            </h4>
            <p className="text-md font-light mt-2 text-white">
              We'll connect your study with our large, engaged, and diverse patient population that's keen on participating in clinical research. Leave outreach to the larger population to the experts.
            </p>
          </blockquote>
        </div>
      </div>

    </div>
  </div>
</section>

const Featured = () => <section className="relative py-20 pb-32">
  <div
    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
    style={{ height: "80px" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="text-white fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>

  <div className="container mx-auto px-4">
    <div className="items-center flex flex-wrap">
      <div className="max-w-full md:w-5/12 ml-auto mr-auto px-4 mb-4">
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80"
        />
      </div>
      <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div className="md:pr-12">
          <h3 className="text-3xl font-semibold">
            How it works
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            We understand how the best sites become top performers. The right tools are key to meet enrollment timelines.
          </p>
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fas fa-paper-plane"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-600">Automated records request</h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fas fa-file-medical"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-600">Fast, intuitive chart review</h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fas fa-envelope-open-text"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-600">
                    Automated patient communications
                  </h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fas fa-calendar-plus"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-600">Automated scheduling</h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fas fa-check-square"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-600">eConsent and patient education</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

const Finisher = () => <section className="pb-20 relative block bg-gray-900">
  <div
    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
    style={{ height: "80px" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="text-gray-900 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
  <div className="container mx-auto px-4 pt-12 lg:pt-24 lg:pb-64">
    <div className="flex flex-wrap text-center justify-center">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-semibold text-white">
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
          We're passionate about helping lifesaving treatments reach the market faster via more efficient clinical trials, while democratizing early access to the best treatment options for clinical research participants.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap mt-12 justify-center">
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-users text-xl"></i>
        </div>
        <h6 className="text-xl mt-5 font-semibold text-white">
          Trust
        </h6>
        <p className="mt-2 mb-4 text-gray-500">
          Security and complaince are critical, and our systems are HIPAA compliant and use the latest security and encryption technology.
        </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-shield-alt text-xl"></i>
        </div>
        <h5 className="text-xl mt-5 font-semibold text-white">
          Experience
        </h5>
        <p className="mt-2 mb-4 text-gray-500">
          <a className="underline" href="https://www.linkedin.com/in/noahmaccallum/">Noah</a> was an early engineer and product manager at <a className="underline" href="https://goforward.com/">Forward Health</a>, and <a className="underline" href="https://www.linkedin.com/in/zainm">Zain</a> was an engineering leader at <a className="underline" href="https://www.opendoor.com/">Opendoor</a>. Our advisors have decades of clinical research experience.
        </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 mb-8 text-center">
        <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-chart-line text-xl"></i>
        </div>
        <h5 className="text-xl mt-5 font-semibold text-white">
          Performance
        </h5>
        <p className="mt-2 mb-4 text-gray-500">
          We care deeply about your success, and will do everything we can to make sure you're meeting your goals.
        </p>
      </div>
    </div>
  </div>
</section>

interface ContactProps {
  divRef?: any,
}

const Contact = (props: PropsWithChildren<ContactProps>) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const submit = () => {
    console.log('hit subscribe!', name, email, message);
    //action, category, label, value
    gtag.event({
      action: "leadFormSubmit",
      category: 'testCategory',
      label: 'testLabel',
      value: 1
    })
    // emailjs.init('user_J8o62m6BktAmspvjxLjKS');
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Noah',
      message: message
    };
    emailjs.send(
      'service_ezgq53n',
      'template_ipgedhg',
      templateParams,
      'user_J8o62m6BktAmspvjxLjKS'
    )
    setMessage('');
    setEmail('');
    setName('');
  }

  return (
    <section className="relative block py-24 lg:pt-0 bg-gray-900" ref={props.divRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Want to learn more?
              </h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Send us a message and we will get back to you within 24 hours.
            </p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="full-name"
                  >
                    Full Name
              </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Full Name"
                    style={{ transition: "all .15s ease" }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
              </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
              </label>
                  <textarea
                    rows={4}
                    cols={80}
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Type a message..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={submit}
                  >
                    Send Message
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



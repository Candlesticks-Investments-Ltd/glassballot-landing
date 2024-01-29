'use client'

import { useState, useEffect, Fragment, useId } from 'react'
import { Switch } from '@headlessui/react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ReCAPTCHA from 'react-google-recaptcha'
import { CheckCircleIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Transition } from '@headlessui/react'
import Head from 'next/head'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function FeedbackSuccess(props) {
  const { message, visible } = props
  const [show, setShow] = useState(visible)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start !z-50"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">{message}!</p>
                    <p className="mt-1 text-sm text-gray-500">Our team will reach out soon.</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShow(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

export function FeedbackFailed(props) {
  const { message, visible } = props

  const [show, setShow] = useState(visible)


  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start !z-50"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">{message}</p>
                    {/* <p className="mt-1 text-sm text-gray-500">Try again later...</p> */}
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

export function InquiryError() {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-red-800">Failed to send inquiry</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="block w-full shadow-sm sm:text-sm focus:ring-accent focus:border-accent border-gray-300 rounded-md"
      />
    </div>
  )
}


export default function Register() {
  const [captcha, setCaptcha] = useState(null);
  const [emailStatus, setEmailStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    company_name: '',
    phone: '',
    email: '',
    policy: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.f_name) {
      setMessage('First name is required.');
      return false;
    }
    if (!formData.l_name) {
      setMessage('Last name is required.');
      return false;
    }
    if (!formData.company_name) {
      setMessage('Company name is required.');
      return false;
    }
    if (!formData.phone) {
      setMessage('Phone No. is required.');
      return false;
    }
    if (!isValidWorkEmail(formData.email)) {
      setMessage('We only accept work emails');
      return false;
    }
    if (!formData.message) {
      setMessage('Provide a brief description of your requirements...');
      return false;
    }
    if (!formData.policy) {
      setMessage('Ensure you have read and accepted our Privacy Policy.');
      return false;
    }
    if (!captcha) {
      setMessage('Complete captcha verification first.');
      return false;
    }
    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    setEmailStatus(null); // Reset email status
    setMessage(''); // Reset validation message

    if (!validateForm()) {
      setEmailStatus('failure');
      setShow(true);
      return;
    }
    // Call the function to send email
    sendEmail(formData);
  };

  const isValidWorkEmail = (email) => {
    const workEmailPattern = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/; // Replace with actual work email domain
    return workEmailPattern.test(email);
  };

  // Update the state when dismissing the popup
  const resetFormStatus = () => {
    setEmailStatus(null);
    setShow(true);

  };

  const sendEmail = async (formData) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setEmailStatus('success');
        setShow(true);
        setMessage("Successfully Sent")
      } else {
        setEmailStatus('failure');
        setShow(true);
        setMessage("Failed to send")

      }
    } catch (error) {
      setMessage("Failed to send")
      setShow(true);
      setEmailStatus('failure');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <>
          <Head>
        <title>GlassBallot - Contact Us</title>
        <meta
          name="description"
          content="Feel free to reach out and our team will be in touch with you shortly."
        />
      </Head>
      {emailStatus === 'success' && <FeedbackSuccess visible={show} onDismiss={resetFormStatus} message={message} />}
      {emailStatus === 'failure' && <FeedbackFailed visible={show} onDismiss={resetFormStatus} message={message} />}
      <Header />
      <div className="bg-white py-8 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-16">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Feel free to reach out and our team will respond as soon as possible.
            </p>
          </div>
          <div className="mt-12">
            <form onSubmit={handleSubmit} className="grid gap-y-3 grid-cols-2 gap-x-2 sm:gap-x-8">
              <div className='col-span-1'>
                <TextInput onChange={handleChange}
                  label="First name" name="f_name" autoComplete="f_name" />
              </div>
              <div className='col-span-1'>
                <TextInput onChange={handleChange}
                  label="Last Name"
                  type="text"
                  name="l_name"
                  autoComplete="l_name"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <TextInput onChange={handleChange}

                  label="Company Name"
                  name="company_name"
                  autoComplete="company_name"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <TextInput onChange={handleChange}

                  label="Phone No"
                  name="phone"
                  type="tel"
                  autoComplete="phone"
                />
              </div>
              <div className="col-span-2">
                <TextInput onChange={handleChange}
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-accent focus:border-accent border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-start my-2">
                  <div className="flex-shrink-0">
                    <Switch
                      checked={formData.policy}
                      onChange={() => setFormData({ ...formData, policy: !formData.policy })}
                      className={classNames(
                        formData.policy ? 'bg-accent' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent'
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          formData.policy ? 'translate-x-5' : 'translate-x-0',
                          'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                      />
                    </Switch>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">
                      By selecting this, you agree to our{' '}
                      <Link href="/privacy-policy" target='_blank' className="font-medium text-accent">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-span-2'>
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={setCaptcha} />

              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                  Let&apos;s talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

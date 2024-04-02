import Image from 'next/image';
import { HiArrowLeft, HiArrowRight, HiBell, HiChevronRight } from 'react-icons/hi'
import imageCandidate from '@/images/screenshots/election.png'
import { StarIcon } from '@heroicons/react/24/solid';
import { FeedbackFailed, FeedbackSuccess } from '@/pages/register';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Hero() {

  const [emailStatus, setEmailStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!isValidWorkEmail(formData.email)) {
      setMessage('We only accept work emails');
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
    // Check for existing requests in localStorage
    const requestTimes = JSON.parse(localStorage.getItem('demoRequestTimes')) || [];
    const currentTime = new Date().getTime();

    // Filter out requests that are older than an hour
    const validTimes = requestTimes.filter(time => currentTime - time < 3600000); // 3600000 milliseconds = 1 hour

    if (validTimes.length >= 2) {
      // If there are already 2 requests within the last hour
      setMessage('You have reached the limit of 2 demo requests per hour.');
      setEmailStatus('failure');
      setShow(true);
    } else {
      // Proceed with the email sending and update the request times
      sendEmail(formData);
      validTimes.push(currentTime);
      localStorage.setItem('demoRequestTimes', JSON.stringify(validTimes));
    }
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
      const response = await fetch('/api/demo', {
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
      {emailStatus === 'success' && <FeedbackSuccess visible={show} onDismiss={resetFormStatus} message={message} />}
      {emailStatus === 'failure' && <FeedbackFailed visible={show} onDismiss={resetFormStatus} message={message} />}
      <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
        <div className="overflow-hidden lg:relative pt-6 lg:pb-48 lg:pt-16">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div>
                <div>
                  <a href="https://demo.glassballot.xyz" className="inline-flex space-x-4">
                    <span className="rounded bg-stone-100 flex justify-center items-center px-2.5 py-1 text-xs font-semibold text-stone-600 border border-stone-600 tracking-wide uppercase">
                      <HiBell className='mr-1 text-stone-600 w-4 h-4' />Coming Soon
                    </span>
                    <span className="inline-flex items-center text-sm font-medium text-gray-600 space-x-1">
                      <span>GlassBallot v2.0</span>
                      {/* <HiChevronRight className="h-5 w-5" aria-hidden="true" /> */}
                      <HiArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                  </a>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Best online voting platform for institutions
                  </h1>
                  <p className="mt-6 text-lg text-accent">
                    Glass Ballot is a secure, transparent online voting platform offering auditable, fast, and confidential voting with real-time results, enabling secure and anonymous voting from anywhere globally
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="hero-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      name='email'
                      type="email"
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-accent shadow-sm focus:border-accent focus:ring-accent"
                      placeholder="Enter your work email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-accent text-base font-medium text-white shadow hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:px-10"
                    >
                      Request Demo
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm text-accent/50 sm:mt-4">
                  Reach out and we will send you an exclusive demo. By providing your email, you agree to
                  our{' '}
                  <Link href="/terms-of-use" className="font-medium text-accent">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy-policy" className="font-medium text-accent">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                </svg>
              </div>
              <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                <Image
                  alt='Hero Image of the Glass Ballot Website'
                  className="w-full rounded-[20px] shadow-xl ring-1 ring-accent ring-opacity-10 lg:h-full lg:w-auto lg:max-w-none"
                  src={imageCandidate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const includedFeatures = [
  '24hr support',
  'Custom subdomain e.g org.glassballot.xyz',
  '99.9% uptime',
  'All inclusive user sensitization & training',
]

export default function Price() {
  return (
    <div className="bg-gray-100" id="pricing">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Straight-forward pricing</h2>
            <p className="mt-4 text-xl text-gray-600">
              No hidden fees. You will know every cost upfront.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">User based service</h3>
                <p className="mt-6 text-base text-gray-500">
                We strive to provide a memorable experience by supporting our clients in electing leaders who are capable in delivering their promises and the institution&apos;s vision.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-accent">
                      What&apos;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">Pay only for your voters</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>$0.15/vote</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">USD</span>
                </div>
                <p className="mt-4 text-sm">
                  <Link href="/terms-of-use" className="font-medium text-gray-500 underline">
                    Learn about our terms of use
                  </Link>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <Link
                      href="/register"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Get Access
                    </Link>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <Link href="/register" className="font-medium text-gray-500">
                    Book a <span className=" text-accent font-bold">demo</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

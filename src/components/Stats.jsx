/* This example requires Tailwind CSS v2.0+ */
import { UsersIcon } from '@heroicons/react/24/outline'
import imageTeam from '@/images/cinv/team.jpeg';
import Image from 'next/image';

export default function Stats() {
  return (
    <div className="relative bg-white" id="stats">
      <div className="h-56 bg-accent sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <Image
          className="w-full h-full object-cover"
          src={imageTeam}
          alt="Support team"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          We have exceeded our customers’ expectation in delivering a memorable election experience          </h2>
          <p className="mt-6 text-lg text-gray-500">
          The team dedicated to crafting a user experience that simplifies the voting pipeline and empower
communities to make informed decisions while electing their leaders on an auditable, secure and
transparent platform.          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Organizations</dt>
                <dd className="order-1 text-2xl font-extrabold text-accent sm:text-3xl">2</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Up-time</dt>
                <dd className="order-1 text-2xl font-extrabold text-accent sm:text-3xl">99.9%</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Users</dt>
                <dd className="order-1 text-2xl font-extrabold text-accent sm:text-3xl">10k+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

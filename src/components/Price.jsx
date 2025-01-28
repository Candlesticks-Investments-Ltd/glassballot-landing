/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const includedFeatures = [
  "24hr support",
  "Custom subdomain e.g org.glassballot.xyz",
  "99.9% uptime",
  "All inclusive user sensitization & training",
];

export default function Price() {
  return (
    <div className="bg-gray-100" id="pricing">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Straight-forward pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              No hidden fees. You will know every cost upfront.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  User based service
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  We strive to provide a memorable experience by supporting our
                  clients in electing leaders who are capable in delivering
                  their promises and the institution&apos;s vision.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-sm font-semibold uppercase tracking-wider text-accent">
                      What&apos;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                  >
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-8 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6 text-gray-900">
                  Pay only for your voters
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  {/* <span className="ml-3 text-xl font-medium text-gray-500">KES</span> */}
                </div>
                <p className="mt-4 text-sm">
                  <Link
                    href="/terms-of-use"
                    className="font-medium text-gray-500 underline"
                  >
                    Learn about our terms of use
                  </Link>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <Link
                      href="/register"
                      className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                    >
                      Get Access
                    </Link>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <Link href="/register" className="font-medium text-gray-500">
                    Book a <span className=" font-bold text-accent">demo</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

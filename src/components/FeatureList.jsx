/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
    { name: 'Persons with disability', description: 'Our platform has basic features for people with various disabilities, and we can provide in-house support for people who cannot cast their votes on their own devices.' },
];
export default function FeatureList() {
    return (
        <div className="bg-accent" id="features">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div>
                    <h2 className="text-base font-semibold text-white uppercase tracking-wide">Features</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white">What we have to offer</p>
                    <p className="mt-4 text-lg text-gray-400">
                        Glass Ballot strives to deliver a memorable experience that builds confidence in the democratic process and encouraging participation by making an election uniquely yours.           </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-5 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                                    <p className="ml-9 text-lg leading-6 font-medium text-white">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

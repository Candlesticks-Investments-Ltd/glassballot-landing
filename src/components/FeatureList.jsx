/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Robust authentication',
    description: 'Ensures that no user can vote more than once during any election e.g via page refresh.',
  },
  { name: 'Voting page presentation', description: 'Every candidate is still able to appeal to undecided voters using a picture and a catchy slogan during voting.' },
  {
    name: 'Intuitive voting process',
    description: 'Beautiful and minimalist user interface with convenience features e.g progress, countdown.',
  },
  { name: 'Action confirmaton', description: 'Users are required to confirm every single important action to avoid e.g “voting by mistake”' },
  { name: 'Time-based rendering', description: 'The system has several measurers to ensure no vote is cast a millisecond after the election ends.' },
  { name: 'Real-time tally & results', description: 'Candidates are able to see their real-time rank as voters participate, ensuring full transparency.' },
  { name: 'Candidate zone', description: 'Customizable and shareable candidate page containing their image, slogan and manifesto.' },
  { name: 'User Authority', description: 'Users are only able to access the pages relevant to them e.g. a Dean cannot vote.' },
]

export default function FeatureList() {
  return (
    <div className="bg-accent" id="features">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-white uppercase tracking-wide">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-white">What we have to offer</p>
          <p className="mt-4 text-lg text-gray-400">
           Glassballot offers a robust feature-rich platform that is auditable, fast, secure, and transparent, and ensures the integrity and confidentiality of the voting process
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
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

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Robust authentication',
        description: 'Robust gatekeeping that ensures only eligible voters have access to the elections by combining multiple factors such as Passwords, OTP, Behavioral tracking, etc.',
    },
    { name: 'Time-based rendering', description: 'The content and functionality of the voting interface is modified based on the voting duration or predefined schedule provided by the client.' },
    {
        name: 'Candidate profile',
        description: 'Each candidate has their own profile which will be visible during the campaign period and during the elections. Their profile will capture their photo, slogan, and manifesto that can be shared on social media pages.',
    },
    { name: 'Real-time tally & results', description: 'The candidates and voters are able to see the votes being tallied live, and the results are displayed immediately when the countdown stops.' },
    { name: 'User-friendly platform', description: 'An easy-to-use platform with clear instructions and a guided layout that is easy to use on any device.' },
    { name: 'Action confirmation', description: 'The admin, candidates, and voters are required to confirm their actions on the platform to eliminate the risks of "By-mistake."' },
    { name: 'User authority', description: 'The admin, candidates, and voters have different access controls before, during, and after the elections.' },
    { name: 'Auditability', description: 'Track your vote\'s journey through the system, from casting to counting, with a detailed audit trail that builds trust and eliminates uncertainty.' },
    { name: 'Persons with disability', description: 'Our platform has basic features for people with various disabilities, and we can provide in-house support for people who do not have the capacity to cast their votes on their own devices.' },
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

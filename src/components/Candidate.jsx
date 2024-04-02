import Image from 'next/image';
import screenshotCandidate from '@/images/screenshots/candidate-card.png';
import { HiOutlineExternalLink } from 'react-icons/hi';


export default function Candidate() {
    return (
        <div className="relative py-20 bg-transparent">
            <div className="hidden absolute top-0 inset-x-0 h-1/2 lg:block" aria-hidden="true" />
            <div className="max-w-7xl mx-auto bg-accent !border-none rounded-lg lg:bg-transparent lg:px-8">
                <div className="lg:grid !border-none lg:grid-cols-12">
                    <div className="relative lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                        <div className="z-2 absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
                        <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                            <div className="aspect-w-14 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-3">
                                <Image
                                    className="object-cover object-center rounded-xl shadow-2xl z-[99999999]"
                                    src={screenshotCandidate}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-accent lg:col-start-3 lg:row-start-1 lg:col-span-10 rounded-lg lg:rounded-lg lg:grid lg:grid-cols-10 lg:items-center">
                        <div className="hidden absolute inset-0 overflow-hidden rounded-lg lg:block" aria-hidden="true">

                            <svg
                                className="absolute top-full transform !opacity-25 -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-slate-500/10 opacity-15" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                        </div>
                        <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                            <h2 className="text-3xl font-extrabold text-white" id="join-heading">
                                Candidate Profile
                            </h2>
                            <p className=" text-white">
                            Each candidate has a profile that captures their photo, slogan and manifesto that is sharable on social media through a unique link
                            </p>
                            <a
                                className="inline-flex items-center w-max py-2 px-5 text-center border bg-white border-transparent rounded-md shadow-md text-base font-medium text-slate-700 hover:bg-gray-50 md:w-auto"
                                href="https://demo.glassballot.xyz/candidate/emily-brown"
                                rel="noreferrer"
                                target='_blank'
                            >
                                <div className='text-accent'>View Example</div>
                                <HiOutlineExternalLink className='text-accent ml-2'/>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

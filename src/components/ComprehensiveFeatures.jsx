/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/24/outline'
import { HiLightningBolt, HiOutlineAnnotation, HiOutlineClock, HiOutlineEmojiHappy, HiOutlineExternalLink, HiOutlineGlobeAlt, HiOutlineLockClosed, HiOutlineMail, HiOutlineQuestionMarkCircle, HiOutlineShieldCheck, HiOutlineUserGroup, HiScale } from 'react-icons/hi'
import screenshotVoting from '@/images/screenshots/confirm.png';
import screenshotAuthentication from '@/images/screenshots/robust-auth.png';
import screenshotRankedCandidates from '@/images/screenshots/time-stuff.png';
import screenshotAccessibility from '@/images/screenshots/accessible.png';
import Image from 'next/image';
import Candidate from './Candidate';


const transferFeatures = [
  {
    id: 1,
    name: 'Action confirmation',
    description:
      'The admin, candidates, and voters are required to confirm their actions on the platform to eliminate the risks of "By-mistake."',
    icon: HiOutlineQuestionMarkCircle,
  },
  {
    id: 2,
    name: 'User-friendly platform',
    description:
      'Easy-to-use platform with clear instructions and a guided layout that is compatible with any device.',
    icon: HiOutlineEmojiHappy,
  },
]

const authFeatures = [
    {
      id: 1,
      name: 'Robust authentication',
      description:
        'Robust gatekeeping that ensures only eligible voters have access to the elections by combining multiple factors such as Passwords, OTP, Behavioral tracking, etc.',
      icon: HiOutlineLockClosed,
    },
    {
      id: 2,
      name: 'User authority',
      description:
        'The admin, candidates, and voters have different access controls before, during, and after the elections.',
      icon: HiOutlineUserGroup,
    },
  ]

const communicationFeatures = [
  {
    id: 1,
    name: 'Auditability',
    description:
      'Track your vote\'s journey through the system, from casting to counting, with a detailed audit trail that builds trust and eliminates uncertainty.',
    icon: HiOutlineShieldCheck,
  },
  {
    id: 2,
    name: 'Time-based rendering',
    description:
      'The content and functionality of the voting interface is modified based on the voting duration or predefined schedule provided by the client.',
    icon: HiOutlineClock,
  },
]


export default function ComprehensiveFeatures() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What we have to offer
</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Glass Ballot strives to deliver a memorable experience that builds confidence in the democratic process and encouraging participation by making an election uniquely yours.


          </p>
        </div>
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Secure & Reliable System</h3>
              <p className="mt-3 text-lg text-gray-500">
              The votes are tallied real-time, and the election results are displayed immediately after the countdown stops
              </p>

              <dl className="mt-10 space-y-10">
                {authFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              {/* <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-2.png"
                alt=""
              /> */}
               <Image
              className="relative mx-auto"
              width={490}
              src={screenshotAuthentication}
                alt=""
            />
            </div>
          </div>
        </div>
        <Candidate/>
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Intuitive User Experience
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              We provide a beautiful, easy to use and straight-forward system that makes the voting process enjoyable for all voters, staff and candidates 
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute opacity-10 left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>

            <Image
              className="md:absolute relative  md:max-w-[55vw] md:top-[-17vw] md:right-[-20vw]"
              src={screenshotVoting}
                alt=""
            />
          </div>
        </div>
        <div className="bg-transparent mt-10">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-accent rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Persons with disability</span>
                </h2>
                <p className="mt-4 text-base leading-6 text-white/80">
                Our platform has basic features for people with various disabilities, and we can provide in-house support for people who cannot cast their votes on their own devices.
                </p>
                <a
                                className="inline-flex  items-center w-max  py-2 px-5 mt-5 text-center border bg-white border-transparent rounded-md shadow-md text-base font-medium text-slate-700 hover:bg-gray-50 sm:w-auto"
                                href="https://userway.org/widget/"
                                rel='noreferrer'
                                target='_blank'
                            >
                                <div className='text-accent'>Learn More</div>
                                <HiOutlineExternalLink className='text-accent ml-2'/>

                            </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <Image
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-8 lg:translate-y-20"
                src={screenshotAccessibility}
                alt="Glass Ballot Accessibility"
              />
            </div>
          </div>
        </div>
      </div>
        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
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
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Real-time tally & results</h3>
              <p className="mt-3 text-lg text-gray-500">
              The votes are tallied real-time, and the election results are displayed immediately after the countdown stops
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform !opacity-30 -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              {/* <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-2.png"
                alt=""
              /> */}
               <Image
              className="relative mx-auto"
              width={490}
              src={screenshotRankedCandidates}
                alt=""
            />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

import screenshotAccessibility from '@/images/screenshots/accessible.png';
import Image from 'next/image';

export default function Accessibility() {
    return (
        <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-accent rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Persons with disability</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white/80">
                Our platform has basic features for people with various disabilities, and we can provide in-house support for people who cannot cast their votes on their own devices.
                </p>
  
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
    )
}
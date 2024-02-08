import { useEffect, useState } from 'react';
import Image from 'next/image';
import screenshotConfirm from '@/images/screenshots/home.png';


export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
    <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
      <div>
        <h2 className="text-base font-semibold tracking-wider text-accent uppercase">Custom solution</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Personalize your elections
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        We provide our clients and voters with a bespoke voting experience on a user-friendly platform that fosters a sense of connection between the candidates and voters.        </p>
      </div>
      <div className="mt-12 mb-20 sm:mb-24 lg:mb-40">
        <Image
          className="rounded-[20px] shadow-xl ring-1 ring-accent ring-opacity-10"
          src={screenshotConfirm}
          alt=""
        />
      </div>
    </div>
  </div>
  );
}

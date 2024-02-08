import Link from 'next/link';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { NavLink } from '@/components/NavLink';

export function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="pb-8 sm:pb-16 pt-8">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/#features">Features</NavLink>
              <NavLink href="/#stats">Achievements</NavLink>
              <NavLink href="/#pricing">Pricing</NavLink>
            </div>
          </nav>
          <div className='flex justify-center'>
            <hr className='mt-8 mb-4 divide-slate-400/20 w-[90%] text-center md:w-1/2' />

          </div>
          <nav className="-mx-5 mb-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-2 py-2">
              <Link href="/cookie-policy" className="text-xs text-gray-500 hover:text-gray-900">
                Cookie Policy
              </Link>
            </div>
            <div className="px-2 py-2 text-gray-500">
              /
            </div>
            <div className="px-2 py-2">
              <Link href="/terms-of-use" className="text-xs text-gray-500 hover:text-gray-900">
                Terms of Use
              </Link>
            </div>
            <div className="px-2 py-2 text-gray-500">
              /
            </div>
            <div className="px-2 py-2">
              <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link href="https://www.linkedin.com/company/glassballot/" className="group" aria-label="Glassballot on LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
            <Link href="https://twitter.com/glassballot" className="group" aria-label="GlassBallot on Twitter">
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0 text-center lg:text-left">
            Copyright &copy; {new Date().getFullYear()} GlassBallot <br />Powered by
            <Link href="https://candlesticksinvestments.com" className="text-accent font-bold"> Candlesticks Investments LTD</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

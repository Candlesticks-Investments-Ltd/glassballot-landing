import Link from 'next/link';

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-md px-3 py-1 text-sm text-slate-700 bg-stone-100 hover:bg-stone-200 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}

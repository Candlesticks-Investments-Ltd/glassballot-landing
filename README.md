# GlassBallot Official Website

GlassBallot is a [Tailwind UI](https://tailwindui.com) site built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this site, first install the npm dependencies:

```bash
npm install
```

Ensure to add the file `.env.local` to the root folder and adding the following keys:

```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<API-KEY>
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=<SECRET-KEY>
NEXT_PUBLIC_SENDGRID_API_KEY=<API-KEY>

```

Recaptcha keys can be obtained from [Google](https://www.google.com/recaptcha/admin/create) and Sendgrid API keys can be obtained from [Sendgrid](https://app.sendgrid.com/settings/api_keys).

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## License

Refer to LICENSE.md

## Learn more

To learn more about the technologies used in this site, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function CookiesPolicy() {
    return (
        <>
            <Header />
            <div className="relative pt-8 pb-16 bg-white overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                        <svg
                            className="absolute top-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                        </svg>
                        <svg
                            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                        </svg>
                        <svg
                            className="absolute bottom-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                        </svg>
                    </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span className="block text-base text-center text-stone-600 font-semibold tracking-wide uppercase">
                                GlassBallot
                            </span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Cookie Policy
                            </span>
                        </h1>
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                        <pre className="mx-auto w-full md:w-1/2 whitespace-pre-wrap">
                            Last Updated: <b>29th January 2024</b>
                            <br /><br />
                            Welcome to GlassBallot! This Cookies Policy explains how we use cookies and similar technologies on our platform. By using our platform, you consent to the use of cookies in accordance with this policy.
                            <br /><br />
                            <b>What are Cookies?</b> Cookies are small text files that are placed on your device when you visit a website or use an application. They are widely used to make websites and applications work or work more efficiently, as well as to provide information to the owners of the site.
                            <br /><br />
                            <b>Types of Cookies We Use</b>
                            <br /><br />
                            a. <b>Essential Cookies:</b> These cookies are necessary for the proper functioning of our platform. They enable you to navigate the platform and use its features.
                            <br /><br />
                            b. <b>Analytics Cookies:</b> We use analytics cookies to collect information about how users interact with our platform. This information helps us improve the performance and user experience of the platform.
                            <br /><br />
                            c. <b>Functionality Cookies:</b> These cookies allow us to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.
                            <br /><br />
                            d. <b>Third-Party Cookies:</b> We may also use third-party cookies to track and analyze usage and provide personalized content and advertisements. These cookies are subject to the privacy policies of the third parties providing them.
                            <br /><br />
                            <b>How to Control Cookies</b> Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. If you choose to disable cookies, it may limit your ability to use certain features of our platform.
                            <br /><br />
                            <b>Cookie Duration</b> Cookies may be session cookies (temporary and deleted when you close your browser) or persistent cookies (remain on your device for a set period or until you delete them).
                            <br /><br />
                            <b>Changes to this Cookies Policy</b> We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
                            <br /><br />
                            <b>Contact Information</b> If you have any questions or concerns about our use of cookies or this Cookies Policy, please contact us at <Link className="text-accent" href="mailto:info@glassballot.xyz">info@glassballot.xyz. </Link>
                            By using GlassBallot, you consent to the use of cookies as described in this Cookies Policy. If you do not agree to the use of cookies, please disable them as outlined in Section 3 above or refrain from using our platform.
                        </pre>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import Stats from '@/components/Stats';
import FeatureList from '@/components/FeatureList';
import Price from '@/components/Price';
import Recommendation from '@/components/Recommendation';
import ClientLogos from '@/components/ClientLogos';

export default function Home() {
  return (
    <>
      <Head>
        <title>GlassBallot - An online voting platform that is auditable, fast, secure and transparent.</title>
        <meta
          name="description"
          content="GlassBallot ensures the integrity and confidentiality of the voting process, as well as provides real-time results, allowing voters to cast their votes securely and anonymously from anywhere in the world."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Stats/>
        {/* <Recommendation/> */}
        <ClientLogos />
        <FeatureList />
        <Price/>
      </main>
      <Footer />
    </>
  );
}

import framer from 'framer-motion';
import Intro from '@/app/components/intro/Intro';
import Career from '@/app/components/career/Career';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Intro />
      <Career />
    </main>
  );
}

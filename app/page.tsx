import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import LiveDemo from "@/components/LiveDemo";
import SolvencyDemo from "@/components/SolvencyDemo";
import Architecture from "@/components/Architecture";
import Metrics from "@/components/Metrics";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSolution />
      <LiveDemo />
      <SolvencyDemo />
      <Architecture />
      <Metrics />
      <Footer />
    </main>
  );
}

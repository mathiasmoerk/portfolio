import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import WorkList from "@/components/WorkList";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ProfileCard />
        <WorkList />
        <About />
      </main>
      <Footer />
    </>
  );
}

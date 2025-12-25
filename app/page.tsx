import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import HeroSection from "./HomePage/HeroSection";

export default function Home() {
  return (
    <div>
      {/* <h1>Home</h1> */}
      {/* <Button>Hello Abhi</Button> */}
      {/* <UserButton /> */}
      <HeroSection />
    </div>
  );
}

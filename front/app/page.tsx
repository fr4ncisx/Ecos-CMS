import Hero from "@/components/Hero/Hero";
import TestimonialsList from "@/components/TestimonialList/TestimonialList";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center p-24">
//       <Button variant={'secondary'}>Click me</Button>
//     </div>
//   );
// }


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TestimonialsList />
      </main>
      <Footer />
    </div>
  )
}
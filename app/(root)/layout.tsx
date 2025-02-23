import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans bg-cover bg-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/3.jpg"
          alt="skyline"
          layout="fill"
          objectFit="cover" // Ensures the image covers the whole background
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      {children}
    </main>
  );
}

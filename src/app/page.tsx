'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import useTheme from "./hooks/useTheme";

export default function Home()
{
  const { theme } = useTheme();
  const gradientColor = theme === "light"
    ? "linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(255,255,255,0.3) 35%, rgba(255,255,255,1) 55%)"
    : "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,1) 60%)";
  return (
    <div className="relative min-h-dvh flex flex-col">
      <Navbar />
      <main style={{
        background: gradientColor,
      }}
        className="relative flex flex-col w-dvw h-full items-center justify-center">
        <h1 className="text-4xl font-semibold font-playfair text-primary mt-60 mb-40 filter drop-shadow-lg">
          Rolesheets
        </h1>

        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>

      </main>
      <Footer />
      <Image
        src="/images/hero.png"
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
    </div>
  );
}

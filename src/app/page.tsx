"use client";
import { useEffect } from 'react';
import Dollar from "@/components/home/Dollar";
import Performance from "@/components/home/Performance";
import Mobile from "@/components/home/Mobile";
import Solutions from "@/components/home/Solutions";
import Accountability from "@/components/home/Accountability";
import Faq from "@/components/home/Faq";
import Learning from "@/components/home/Learning";
import Footer from "@/components/home/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <Dollar />
      <Performance />
      <Mobile />
      <Solutions />
      <Accountability />
      <Faq />
      <Learning />
      <Footer />
      <ScrollToTop />
    </>
  );
}

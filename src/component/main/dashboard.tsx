"use client";
import React from "react";
// import { Header, BuySection, ListSection, Bigwin, Howtobuy, Footer, About, FaqSection, ShowImage } from "@/component/section/section";
import { Header } from '@/component/section/header';
import { BuySection } from '@/component/section/buySection';
import { About } from "@/component/section/about";
import { Howtobuy } from "@/component/section/howtobuy";
import { FaqSection } from "@/component/section/faqSection";
import { ShowImage } from "@/component/section/showImage";
import { ListSection } from "@/component/section/listSection";
import { Bigwin } from "@/component/section/bigWin";
import { Footer } from "@/component/section/footer";


const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <BuySection />
      <About />
      <Howtobuy />
      <FaqSection />
      <ShowImage />
      <ListSection />
      {/* <Bigwin /> */}
      <Footer />
      
    </div>
  );
};

export default Dashboard;

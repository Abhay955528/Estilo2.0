import Image from "next/image";
import { Inter } from "next/font/google";
import {HomePage, Login, Navbar , About, Cart, CartEmpty, Footer, TermsCondition, HelpSupport, Sort, FAQS, Address} from "@/component/Index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Navbar />
      <HomePage /> */}
      {/* <Login/> */}
      {/* <About/> */}
      {/* <Cart/> */}
      {/* <CartEmpty/> */}
     {/* <Footer/>  */}
     {/* <TermsCondition/> */}
     {/* <HelpSupport/> */}
     {/* <Sort/> */}
     {/* <FAQS/> */}
     <Address/>
    </>
  );
}

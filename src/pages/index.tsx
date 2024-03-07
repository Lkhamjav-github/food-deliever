import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Homefood } from "@/components/Homefood"
import { Servicemenu } from "@/components/Servicemenu";
import { Products } from "@/components/Products";
import { Login } from "@/components/Login";
import { Signup } from "@/components/Signup";
import { User } from "@/components/User";
import { Admin } from "@/components/Admin";
import { Forgotten } from "@/components/Forgotten";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <User /> */}
      <Admin />
      <Forgotten />
      {/* <Homefood />
      <Servicemenu />
      <Products name=' Хямдралтай' />
      <Products name='Үндсэн хоол' />
      <Products name='Салад ба зууш' />
      <Products name='Амттан' /> */}
      <Footer />
    </>
  );
}

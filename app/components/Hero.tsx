import About from "./About";
import Footer from "./Footer";
import Image from 'next/image'


export default function Hero() {
  return (
    <section className="pt-20 px-6 text-center">
      <div className="items-center align-middle h-fit mb-12 flex justify-center gap-9">
        <h1 className="text-5xl font-bold">Hi, I'm Silas</h1>
        <div className="relative">
            <Image
            src="/silas_head.png"
            width={100}
            height={100}
            alt="Picture of the author"
            />
            <Image
            className="absolute md:bottom-0 md:right-[-25] bottom-[-3] right-[-25] scale-75 md:scale-90 animate-wiggle origin-bottom"
            src="/hand.png"
            width={80}
            height={80}
            alt="Picture of the author"
            />

        </div>
        
        </div>
      <About/>
      <Footer/>
    </section>
  );
}

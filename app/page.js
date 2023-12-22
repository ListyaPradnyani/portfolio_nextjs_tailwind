import Image from 'next/image'
import git from '../app/source/img/github.svg'
import listya from '../app/source/img/listya.png'
import instagram from '../app/source/img/instagram.svg'
import phone from '../app/source/img/phoneicon.svg'
import gmail from '../app/source/img/gmailicon.svg'
import por1 from '../app/source/img/por1.jpg'
import port2 from '../app/source/img/port2.jpg'
import figma from '../app/source/img/figma.jpg'
import osis from '../app/source/img/mpls.jpg'
import dirigen from '../app/source/img/dg.jpg'
import Navbar from '../app/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <body className="bg-white overflow-x-hidden">
        
    {/* <!-- banner section --> */}
    <section className="max-w-7xl mx-auto px-5 my-12" id="home">
      <div className="flex md:flex-row flex-col justify-between items-center text-white gap-4 py-10">
        <div className="md:w-1/2 items-center">
          <p className="text-xl text-teal-500 font-medium mb-4">
            Hello, <span className="text-teal-500">I am</span>
          </p>
          <h1 className="font-bold text-4xl tracking-[3.22px] text-emerald-400 mb-5">Listya Pradnyani</h1>
          <p className="text-2xl text-black font-montserrat mb-5">
            Newbie Programer
          </p>
          <p className="text-xl mb-12 md:w-3/4 text-slate-500 text-justify leading-8">
          I am a student from SMK Negeri 1 Denpasar, majoring in Software Engineering, with basic skills in HTML and CSS programming.
          </p>
          <button className="py-4 px-10 rounded-md bg-teal-500 hover:opacity-10 transition duration-300 ease-in-out text-white font-bold " href="" >
            Download CV
          </button>
          {/* <!-- social btn --> */}
          <div className="mt-12 mb-8 flex gap-4 items-center">
            <p className='text-teal-500 font-extrabold'>Check out My:</p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/listyaprdynii_?igsh=OGQ5ZDc2ODk2ZA=="
                ><Image src={instagram} alt='instagram' className='w-8 h-8 ' /></a>
              <a href="https://wa.me/6285382592990"
                ><Image src={phone} alt='phone' className='w-8 h-8' /></a>
              <a href="lisyapradnyani@gmail.com"
                ><Image src={gmail} alt='gmail' className='w-8 h-8' /></a>
              <a href="https://github.com/ListyaPradnyani/lislis"
                ><Image src={git} alt='github' className='w-8 h-8' /></a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 order-first md:order-none">
        <Image src={listya} alt='listya' className='' />
        </div>
      </div>
    </section>

    {/* <!-- service section --> */}
    <section className="max-w-7xl mx-auto px-5 my-6 text-black" id="projects">
      <div className="text-center">
        <p className="mb-3 font-montserrat font-medium">My Projects</p>
        <h3 className="text-primary text-3xl font-bold mb-16">This is My Project Outcomes</h3>
      </div>
      {/* <!-- service cards --> */}
      <div
        className="my-16 flex flex-col md:flex-row justify-around items-center gap-12"
      >
        <div
          className="w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
        >
          <Image src={por1} alt='portofolio1' className='w-[196px] mb-12 mx-auto flex items-center justify-center' />
          <h5 className="text-center my-5 text-xl text-black font-extrabold">Responsive Portofolio</h5>
          <p className="text-justify text-slate-800">
            Creating a responsive portfolio as a programming subject project assignment using HTML and CSS.
          </p>
        </div>
        <div
          className="w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
        >
          <Image src={figma} alt='portofolio2' className='w-[196px] mb-12 mx-auto flex items-center justify-center"' />
          <h5 className="text-center my-5 text-xl text-black font-extrabold">Design Figma</h5>
          <p className="text-justify">
            Creating a Figma app design themed around an online food store as a project for the entrepreneurship subject.
          </p>
        </div>
        <div
          className="w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
        >
          <Image src={port2} alt='design figma' className='w-[196px] mb-12 mx-auto flex items-center justify-center"' />
          <h5 className="text-center my-5 text-xl text-black font-extrabold">Personal Portofolio </h5>
          <p className="text-justify">
           Creating a personal website project as an assignment for the programming subject using HTML and CSS.
          </p>
        </div>
      </div>
    </section>

    {/* <!-- projects --> */}
    <section className="px-5 my-32 mx-auto max-w-7xl" id="service">
      <div className="text-center text-black">
        <h3 className="text-3xl font-bold mb-5">
          Recent <span className="text-primary">Service</span>
        </h3>
        <p className="mb-6 md:w-3/4 mx-auto">
           I have had several experiences during school, serving as a Student Council Member and also as a conductor at various school events.
        </p>
      </div>
      <div
        className="flex md:flex-row flex-col items-center justify-between gap-8 my-20"
      >
        <div
          className="border border-primary shadow-xl shadow-[#5dadec3b] md:w-[741px] md:h-96 mx-auto rounded-2xl p-5 md:p-0 flex items-center justify-center"
        >
          <Image src={osis} alt='panitia' className='p-5 w-80 flex' />
        </div>
        <div
          className="border border-primary shadow-xl shadow-[#5dadec3b] md:w-[741px] md:h-96 mx-auto rounded-2xl p-5 flex items-center justify-center"
        >
          <Image src={dirigen} alt='event' className=' w-80 p-5' />
        </div>
      </div>
    </section>

    <footer className="max-w-7xl bg-teal-500 mx-auto px-5 my-16">
      <div>
        <h4 className="text-2xl text-white pt-12 mb-12 font-bold">ListyaPradnyani</h4>
        <div className="text-white md:ml-16 flex flex-col md:flex-row justify-between md:items-center gap-6">
          <div className="md:w-1/3 md:pl-10">
            <h5 className="mb-3">Company</h5>
            <a href="#" className="block my-2 text-sm text-slate-300">Sibang Kaja, Bali</a>
            <a href="#" className="block my-2 text-sm text-slate-300">SMKN 1 Denpasar</a>
            <a href="#" className="block my-2 text-sm text-slate-300">Rekayasa Perangkat Lunak</a>
            <a href="#" className="block my-2 text-sm text-slate-300">Indonesia</a>
          </div>
        
        </div>
      </div>
    </footer>
  </body>
    </>
  )
}

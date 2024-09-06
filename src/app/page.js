"use client";
import Image from "next/image";
import myPic from "../public/1718632600127.jpeg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl uppercase dark:text-slate-200">
              Hamza Asghar
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 cursor-pointer to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  src="../public/resume_001.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Hamza Asghar
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-200">
              Developer and Designer.
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto dark:text-slate-200">
              Freelancer providing services for programming and design content
              needs.Join me down below and let&apos;s get cracking!
            </p>
          </div>
          <div className="text-5xl flex  justify-center gap-14 py-3 text-gray-600 cursor-pointer dark:text-slate-200">
            <a href="#">
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-asghar-571334314/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@hamzaraftargaming7552"
              target="_blank"
            >
              <AiFillYoutube />
            </a>
            <a href="https://github.com/hamzaraftar" target="_blank">
              <AiFillGithub />
            </a>
          </div>
          <div>
            <Image
              src={myPic}
              className="rounded-full w-80 h-80 mt-20 mx-auto  md:h-96 md:w-96"
              alt="mypic"
            />
          </div>
        </section>
        {/*  */}
        <section>
          <div>
            <h3 className="text-3xl py-1 font-medium dark:text-slate-200">
              Services I offer
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-800 dark:text-slate-200">
              Since the beginning of my journey as freelance designer and
              developer,I&apos;ve done my
              <span className="text-teal-500 px-1">studies</span> and making
              some
              <span className="text-teal-500 px-1">projects</span>
            </p>
            <p className="text-lg py-5 leading-8 text-gray-800 dark:text-slate-200">
              I offer wide range of services, including brand design,
              programming and teaching
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-xl rounded-xl my-10 p-10 dark:bg-slate-200">
              <Image
                src={design}
                alt="design"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifull Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-xl rounded-xl my-10 p-10 dark:bg-slate-200">
              <Image
                src={consulting}
                alt="consulting"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifull Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-xl rounded-xl my-10 p-10 dark:bg-slate-200">
              <Image
                src={code}
                alt="code"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifull Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 font-medium dark:text-slate-200">
              Portofolio
            </h3>
            <p className="text-lg py-4 leading-8 text-gray-800 dark:text-slate-200">
              <span className="text-teal-500 px-1">Welcome</span>
              to my portfolio! Explore a collection of my recent projects,
              showcasing my journey in web development and design
            </p>
            <p className="text-lg py-3 leading-8 text-gray-800 dark:text-slate-200">
              From concept to completion, each project represents my passion for
              creating innovative and user-friendly digital experiences.
            </p>
            <p className="text-lg py-3 leading-8 text-gray-800 dark:text-slate-200">
              I strive to blend creativity with functionality, crafting websites
              and applications that offer seamless user engagement.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web3"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web4"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="web5"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="web6"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

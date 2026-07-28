"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "./ui/button";

import {
  Mic,
  Stethoscope,
  FileText,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";



const features = [
  {
    icon: Mic,
    title: "Voice Consultation",
    description: "Describe your symptoms naturally using your voice.",
  },
  {
    icon: Stethoscope,
    title: "Smart Doctor Matching",
    description: "AI recommends the most suitable specialist.",
  },
  {
    icon: FileText,
    title: "AI Medical Reports",
    description: "Receive a structured report after every consultation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description: "Your conversations remain encrypted and protected.",
  },
];



export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto  flex flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"AI-Powered Healthcare Voice Assistant"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Experience seamless AI-powered healthcare assistance through natural
          voice conversations. Enable instant medical support, automated
          appointment scheduling, symptom triage, and personalized follow-up
          care — available 24/7.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/dashboard">
            <button className="w-70 transform rounded-lg text-2xl bg-blue-400 px-6 py-2 font-high text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Get Started
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-blue-400 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                    <Icon className="text-blue-600 " size={24} />
                  </div>

                  <h3 className="font-semibold text-lg">{feature.title}</h3>

                  <p className="text-muted-foreground mt-2 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        

      </div>
    </div>
  );
}

const Navbar = () => {
  const user = useUser();
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">MedEcho</h1>
      </div>
      {!user ? (
        <Link href={"/sign-in"}>
          <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Login
          </button>
        </Link>
      ) : (
        <div className="flex items-center gap-5">
          <UserButton />
          <Link href={"/dashboard"}>
            <Button className="bg-blue-400">Dashboard</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

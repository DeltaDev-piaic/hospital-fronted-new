"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./../components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-4 ">
      {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Special Doctors
      </h2>
       */}
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Dr. James Anderson",
    title: "Cardiologist",
    src: "/img/AIdoctor (1).png",
    content: <DummyContent />,
  },
  {
    category: "Rr. Michel Lee",
    title: "Dermatologist",
    src: "/img/AIdoctor (1).jpg",
    content: <DummyContent />,
  },
  {
    category: "Dr. Emily Smith",
    title: "Neurologist",
    src: "/img/AIdoctor (2).png",
    content: <DummyContent />,
  },

  {
    category: "Dr. Scott Alexander",
    title: "Psychiatrist",
    src: "/img/AIdoctor (2).jpg",
    content: <DummyContent />,
  },
  {
    category: "Dr. Devid Allen",
    title: "Orthopedic Surgeon",
    src: "/img/AIdoctor (3).png",
    content: <DummyContent />,
  },
  {
    category: "Dr. Richard Lee",
    title: "Pediatrician (Children's Doctor)",
    src: "/img/AIdoctor (3).jpg",
    content: <DummyContent />,
  },
  {
    category: "Dr. Maria Gomez",
    title: "Gynecologist",
    src: "/img/AIdoctor (4).jpg",
    content: <DummyContent />,
  },
  {
    category: "Dr. Anna Clark",
    title: "Psychiatrist",
    src: "/img/AIdoctor (5).jpg",
    content: <DummyContent />,
  },
  {
    category: "r. Alan Brooks",
    title: "Gastroenterologist",
    src: "/img/AIdoctor (5).png",
    content: <DummyContent />,
  },
  {
    category: "Dr. Olivia Taylor ",
    title: "ENT Specialist",
    src: "/img/AIdoctor (6).jpg",
    content: <DummyContent />,
  },
  {
    category: "Dr. Nancy ",
    title: "You can do more with AI.",
    src: "/img/team-1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Dr. Mary Taylor",
    title: "You can do more with AI.",
    src: "/img/team-2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/img/team-3.jpg",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/img/team-4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/img/team-5.jpg",
    content: <DummyContent />,
  },
];

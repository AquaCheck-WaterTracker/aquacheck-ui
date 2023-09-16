//import React from 'react'
import one from '../assets/section1.svg'
import second from '../assets/section2.svg'
import three from '../assets/section3.svg'
import four from '../assets/section4.svg'
function About() {
    return (
        <div className="relative">
  <div className="sticky top-0 flex h-screen items-center justify-center">
    <img src={one} className="h-full w-full object-cover" />
    <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
      <h2 className="text-2xl font-bold">How it works? Track-water in varying glass sizes</h2>
      <p className="font-sans text-lg text-black">Add what you have drunk according to the quantity, a glass, a bottle and a big bottle, several times a day.</p>
    </div>
  </div>
  <div className="sticky top-0 flex h-screen items-center justify-center">
    <img src={second} className="h-full w-full object-cover" />

    <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
      <h2 className="text-2xl font-bold text-black">This proyect take part as a final proyect of the full-stack bootcamp F5</h2>
    </div>
  </div>

  <div className="sticky top-0 flex h-screen items-center justify-center">
    <img src={three} className="h-full w-full object-cover" />

    <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
      <h2 className="text-2xl font-bold text-black">Story time</h2>
      <p className="font-sans text-lg text-black">Our founder hardly drank any water so she decided to create this website to keep track of the water she drank.</p>
    </div>
  </div>

  <div className="sticky top-0 flex h-screen items-center justify-center">
    <img src={four} className="h-full w-full object-cover" />

    <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
      <h2 className="text-2xl font-bold text-black">See you on Social Media </h2>
      <p className="font-sans text-lg text-black">Our social media  also offers healthy tips, because we believe in the importance of healthy eating and workout.</p>
    </div>
  </div>
</div>
    )
}

export default About;
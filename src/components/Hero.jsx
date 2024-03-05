import { telegram } from "../assets";

import { ShowTotayThisYear } from "./cancer_death_button";

// Initialization for ES Users

import { Typography } from "@material-tailwind/react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Hero = () => {
  return (
    <div className="relative flex w-full content-center h-screen items-center justify-center pt-20">
      <div className="absolute top-0 h-full w-full bg-[url('/giphy.gif')] bg-cover bg-center" />
      <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      <div className="max-w-8xl container relative mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <AnimatedOnScroll animationIn="zoomIn">
              <Typography variant="lead" color="white">
                Welcome to{" "}
                <span className="text-gradient text-2xl">CancerDAO </span>
                <br></br>The first{" "}
                <span className="text-gradient text-2xl">decentralized, cancer-focused</span>{" "}
                autonomous organization founded by working
                scientists
              </Typography>
            </AnimatedOnScroll>

            <AnimatedOnScroll animationIn="zoomIn">
              <Typography variant="lead" color="white" className="mt-5">
                Cancer deaths are accelerating
              </Typography>
              <ShowTotayThisYear />
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="zoomIn">
              <Typography variant="lead" color="white" className="mt-10">
                So, at CancerDAO, our goal is
              </Typography>
            </AnimatedOnScroll>

            <AnimatedOnScroll animationIn="zoomIn">
              <Typography
                color="white"
                className="sm:text-6xl text-4xl mb-6 font-black"
              >
                <span className="text-gradient"> Conquering </span>
                cancer <span className="text-4xl font-normal">by</span> <span className="text-gradient">
                  {" "}
                  funding transformative{" "}
                </span>{" "}
                science{" "}
              </Typography>
            </AnimatedOnScroll>

            <br></br>

            <br></br>
            <AnimatedOnScroll animationIn="zoomIn">
              <div className="flex flex-row justify-center">
                <Typography
                variant="lead"
                  color="white"
               
                >
                  Join us in making cancer history
                </Typography>
                <img
                  src={telegram}
                  className="ml-4 w-[48px] h-[48px] "
                  onClick={() => window.open("https://t.me/+PdY6GumuMV45ZmE5")}
                />
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

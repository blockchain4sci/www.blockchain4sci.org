import { roadmap } from "../constants";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { PageTitle } from "../widgets/layout";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { arrow_down } from "../assets";

function FeatureCard2({ id, content, index }) {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Card className="m-3 w-full border">
        <CardBody>
          <Typography
            variant="h5"
            color="black"
            className="mb-1 font-bold text-center"
          >
            {id}
          </Typography>
          {content && <div className="mx-auto ">{content}</div>}
        </CardBody>
      </Card>
      <div>
        <img
          src={arrow_down}
          className={`${
            index === 2 ? "hidden" : ""
          } h-10 items-center justify-center`}
        ></img>
      </div>
    </div>
  );
}

const Roadmap = () => (
  <section
    id="roadmap"
    className="w-full bg-white justify-center items-center px-4 pb-10 pt-10"
  >
    <AnimatedOnScroll animationIn="zoomIn">
      <div className="container mx-auto flex justify-center items-center flex-wrap w-full">
        <PageTitle section="Roadmap" heading=""></PageTitle>
        <div className="flex flex-col justify-center items-center">
          {roadmap.map(({ stage, content }, index) => (
            <FeatureCard2
              id={stage}
              content={
                <div className="items-center justify-center">
                  {content.map(({ id, activity, time, icon, icon2, link }) => (
                    <div className="m-1 grid grid-cols-6 gap-3 place-items-left">
                      <div className="col-start-1 col-span-3">
                        <Typography className="font-normal text-black text-left mr-2">
                          {activity}
                        </Typography>
                      </div>
                      <div className="col-start-4 col-span-1">
                        <Typography className="font-normal text-black text-left text-nowrap">
                          {time}
                        </Typography>
                      </div>

                      <div className="col-start-5 col-span-1">
                        <img src={icon}></img>
                      </div>
                      <a href={link}>
                        <div className="col-start-6 col-span-1">
                          <img src={icon2} className="w-[36px]"></img>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </AnimatedOnScroll>
  </section>
);

export default Roadmap;

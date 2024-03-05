import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Carousel,
} from "@material-tailwind/react";
import {
  cancer_animated_gif,
  funding,
  nih_heatmap,
  nih_point,
  cancer_death_vs_funding,
} from "../assets";
import { whyCancerDao } from "../constants";
import { FeatureCard_li } from "../widgets/cards";
import { PageTitle } from "../widgets/layout";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import React from "react";
import { CancerDeathEachYear } from "./CancerDeathEachYear";

const CancerTrend = () => {
  return (
    <section id="problem" className="w-full bg-white px-4 pb-10 ">
      <div className="container mx-auto">
        <AnimatedOnScroll animationIn="zoomIn">
          <PageTitle
            section="Why CancerDAO?"
            heading=""
            children=""
          ></PageTitle>
        </AnimatedOnScroll>

        <Typography className="text-left text-blue-gray-500">
          Current funding is insufficient to support most research ideas,
          preventing the testing of many highly innovative ideas. In addition,
          research suggests that bias in the allocation of funds can lead to
          disparities in cancer mortality. Low funding rates also create other
          problems that negatively impact researcher productivity and lead to
          the so-called{" "}
          <span className=" text-blue-600 ml-1 mr-1">
            reproducibility crisis,
          </span>
          <a href="https://www.sciencenews.org/article/cancer-biology-studies-research-replication-reproducibility">
            <span className="text-blue-600">
              with studies showing that as many as 70% of cancer papers cannot
              be reproduced.
            </span>
          </a>
        </Typography>
        {/*}    <Card className="border border-blue-500">
          <CardBody className="flex flex-center justify-center">
            <div className="flex-col px-4">
              {whyCancerDao.map((wcd, index) => (
                <FeatureCard_li key={wcd.id} {...wcd} index={index} />
              ))}
            </div>
          </CardBody>
        </Card>
              */}

        <Carousel
          transition={{ duration: 2 }}
          autoplay
          autoplayDelay={5000}
          loop
          className="mt-6 rounded-xl"
        >
          <div className="flex w-full">
            <Card className="w-full bg-gray-900 items-center">
              <CardHeader
                floated={false}
                shadow={false}
                className=" text-center shrink-0 rounded-r-none"
              >
                <Typography
                  variant="h5"
                  color="white"
                  className="bg-black text-center font-bold"
                >
                  Cancer Deaths Are Accelerating
                </Typography>
                <img
                  alt="Card Image"
                  src={cancer_animated_gif}
                  className="w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography className="font-normal text-white  pb-6">
                  Click the button to see the estimated number of deaths from
                  cancer each year (analyzed from
                  https://ourworldindata.org/causes-of-death).
                </Typography>

                <CancerDeathEachYear />
              </CardBody>
            </Card>
          </div>

          <div className="flex w-full ">
            <Card className="w-full bg-gray-900 items-center">
              <CardHeader
                floated={false}
                shadow={false}
                className="mt-3  shrink-0 rounded-r-none"
              >
                <img alt="Card Image" src={funding} className=" w-full " />
              </CardHeader>
              <CardBody className="text-center">
                <Typography className="font-normal text-white  pb-6 max-w-[800px]">
                  Despite the increasing number of deaths caused by cancer,
                  funding rates for cancer are declining at major funding agencies, such as
                  the National Cancer Institute, the largest cancer funding
                  agency in the world.
                </Typography>
              </CardBody>
              <CardBody></CardBody>
            </Card>
          </div>

          <div>
            <Card className="w-full bg-gray-900 justify-center items-center">
              <CardHeader
                floated={false}
                shadow={false}
                className=" text-center bg-black shrink-0 rounded-r-none"
              >
                <Typography
                  variant="h5"
                  color="white"
                  className="bg-black text-center font-bold"
                >
                  Persistence of strong geographical bias in the allocation of centralized cancer grants
                </Typography>
                <img
                  alt="Card Image"
                  src={nih_point}
                  className="w-full bg-black  py-8"
                />
                <span className="w-full text-base text-white font-normal">
                  (data source: NIH reporter database)
                </span>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </div>

          <div>
            <Card className=" bg-gray-900 w-full items-center">
              <CardHeader
                floated={false}
                shadow={false}
                className=" text-center shrink-0 rounded-r-none"
              >
                <Typography
                  variant="h5"
                  color="white"
                  className="bg-black text-center font-bold py-3"
                >
                  Persistence of strong geographical bias in the allocation of centralized cancer grants <br></br>
                </Typography>
                <img
                  alt="Card Image"
                  src={nih_heatmap}
                  className="w-200 bg-black content-center mt-9"
                />
                <span className="text-base font-normal text-black">
                  (data source: NIH reporter database)
                </span>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </div>

          <div>
            <Card className=" bg-gray-900 w-full  items-center">
              <CardHeader
                floated={false}
                shadow={false}
                className=" text-center shrink-0 rounded-r-none"
              >
                <Typography
                  variant="h5"
                  color="white"
                  className="px-4 bg-black text-center font-bold"
                >
                Inadequate Cancer Funding May Contribute to Higher Cancer Death Rates in Some U.S. States 
                </Typography>
                <img
                  alt="Card Image"
                  src={cancer_death_vs_funding}
                  className="w-full bg-black py-5"
                />
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CancerTrend;

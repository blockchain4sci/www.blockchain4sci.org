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
          Current funding rates are insufficient to support research projects,
          preventing the testing of many highly innovative ideas. In addition,
          there are biases in the allocation of the current funding, which may
          contribute to the continued rise of cancer-caused deaths worldwide. A
          low funding rate creates other issues, negatively impacting the
          productivity of researchers and likely contributing to
          <span className=" text-blue-600 ml-1 mr-1">
            reproducibility crisis
          </span>
          ,
          <a href="https://www.sciencenews.org/article/cancer-biology-studies-research-replication-reproducibility">
            <span className="text-blue-600">
              which studies showing that as many as 70% of cancer papers cannot
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
                  Cancer Deaths Rise At An Accelerated Rate
                </Typography>
                <img
                  alt="Card Image"
                  src={cancer_animated_gif}
                  className="w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography className="font-normal text-white  pb-6">
                  Click on the button to find the estimated cancer-caused deaths
                  each year (data source:
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
                  Despie the rising numbers of cancer-caused deaths, funding
                  Rates are delincing at major funding agencies, such as the
                  National Cancer Institute, the world's largest funding agency for cancer
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
                  Persistent Geographic Bias in the Distribution of Centralized
                  Cancer Funding
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
                  Persistant Geographic Bias in the Distribution of NIH Cancer
                  Funding <br></br>
                </Typography>
                <img
                  alt="Card Image"
                  src={nih_heatmap}
                  className="w-200 bg-black content-center mt-9"
                />
                <span className="text-base font-normal">
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
                  className="bg-black text-center font-bold"
                >
                  Low Cancer Funding May Have Contributed to The Elevated Cancer
                  Mortality Rates In Some States
                </Typography>
                <img
                  alt="Card Image"
                  src={cancer_death_vs_funding}
                  className="w-full bg-black py-10"
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

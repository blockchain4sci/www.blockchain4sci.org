import { benefits } from "../constants";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { PageTitle, Footer } from "../widgets/layout";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const FeatureCard = ({ icon, content, index }) => (
  <Typography color="black" className="mb-2">
    <AnimatedOnScroll animationIn="zoomIn">
      <li>{content}</li>
    </AnimatedOnScroll>
  </Typography>
);

const FeatureCard2 = ({ id, icon, content }) => (
  <Card className="m-3 shadow-lg border lg:flex-row shadow-gray-500/10 rounded-lg">
    <CardBody>
      <Typography
        variant="h5"
        color="black"
        className="mb-3 mt-2 font-bold text-center"
      >
        {id}
      </Typography>
      <Typography className="font-normal text-black text-center">
        {content}
      </Typography>
    </CardBody>
  </Card>
);

const Benefit = () => (
  <section
    id="benefit"
    className="w-full bg-white justify-center items-center px-4 pb-10 pt-10"
  >
    <AnimatedOnScroll animationIn="zoomIn">
      <div className="container mx-auto flex justify-center items-center flex-wrap w-full">
        <PageTitle
          section="Community"
          heading="CancerDAO is community-based. As a member, you have the following rights to"
        ></PageTitle>
        <div className="flex md:flex-row flex-col justify-center items-center">
          {benefits.map((benefit, index) => (
            <FeatureCard2 {...benefit} index={index} />
          ))}
        </div>
      </div>
    </AnimatedOnScroll>
  </section>
);

export default Benefit;

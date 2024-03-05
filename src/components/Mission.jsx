import { PageTitle } from "../widgets/layout";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import { Typography } from "@material-tailwind/react";

// Filename - App.js

const Mission = () => (
  <section
    id="mission"
    className="w-full bg-white justify-center items-center px-4 pb-10 pt-10"
  >
    <div className="container mx-auto">
      <AnimatedOnScroll animationIn="zoomIn">
        <PageTitle section="Our Mission" heading=""></PageTitle>

        <Typography className="text-left text-blue-gray-500">
          CancerDAO aims to pioneer decentralized mechanisms to fund and sustain
          highly promising, retrospectively validated cancer research programs
          to accelerate cancer treatment.
        </Typography>
      </AnimatedOnScroll>
      {/*}
      <Card className="px-5 border border-blue-500">
        <CardBody className="flex flex-center justify-center">
          <div className="flex-col ">
            {missions.map((mission, index) => (
              <FeatureCard_li key={mission.id} {...mission} index={index} />
            ))}
          </div>
        </CardBody>
      </Card>
            */}
    </div>
  </section>
);

export default Mission;

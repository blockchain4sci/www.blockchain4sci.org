import React from 'react'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Typography } from "@material-tailwind/react";
export const FeatureCard_li = ({ id, content }) => (
    <Typography className="mb-2 font-bold text-blue-gray-500">
      <AnimatedOnScroll animationIn="zoomIn">
        <li>{content}</li>
      </AnimatedOnScroll>
    </Typography>
  );
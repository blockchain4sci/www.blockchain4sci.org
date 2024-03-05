import { tokenomics } from "../assets";
import { tokenomics_progs } from "../constants";

import { Typography } from "@material-tailwind/react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { FeatureCard_li } from "../widgets/cards";

const FeatureCard = ({ icon, content, index }) => (
  <Typography variant="h5" color="black" className="mb-2">
    <li>{content}</li>
  </Typography>
);

const Token = () => (
  <section
    id="token"
    className="w-full bg-white justify-center items-center px-4 pb-20 pt-4"
  >
    <AnimatedOnScroll animationIn="zoomIn">
      <div className="container mx-auto flex-row justify-center items-center flex-wrap w-full">
        <div className="flex flex-col">
          <div>
            <div className="mx-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h2" color="blue" className="font-semibold">
                Tokenomics
              </Typography>

              {/*              <a href="https://etherscan.io/token/0x1d332e3a96e50e4f7922480d13ddc9042a4cb901">
                  <button class="align-middle flex-center justify-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-2xl py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                    <img src={logo_token} className=" w-auto mb-2 mt-2" />
                    ATCG
                  </button>
</a> */}
              <Typography variant="h4" color="black" className="my-3">
                {tokenomics_progs.map(({ id, content }) => (
                  <FeatureCard_li content={content} />
                ))}
              </Typography>
            </div>
          </div>

          <div class="w-auto flex justify-center items-center gap-2 pl-12"></div>
          <div className="mt-8 flex md:flex-row flex-col justify-center items-center">
            <img
              alt="Card Image"
              src={tokenomics}
              className="w-[80%]  rounded"
            />
          </div>
        </div>
      </div>
    </AnimatedOnScroll>
  </section>
);

export default Token;

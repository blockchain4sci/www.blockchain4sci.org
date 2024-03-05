import { teamData } from "../constants";

import { AnimatedOnScroll } from "react-animated-css-onscroll";

import { IconButton } from "@material-tailwind/react";

import { PageTitle } from "@/widgets/layout";
import { TeamCard } from "@/widgets/cards";

const Team = () => (
  <section id="team" className="w-full bg-white pt-10 pb-20">
    <AnimatedOnScroll animationIn="zoomIn">
      <div className="container mx-auto">
        <PageTitle
          section="Meet The Team"
          heading="We are a group of researchers, educators and scientists united in our commitment to improving cancer treatment."
        ></PageTitle>
        <div className="mt-24 grid grid-cols-1 gap-12 gap-x-36 md:grid-cols-3 xl:grid-cols-3">
          {teamData.map(({ img, name, position, socials }) => (
            <TeamCard
              key={name}
              img={img}
              name={name}
              position={position}
              socials={
                <div className="flex items-center gap-2">
                  {socials.map(({ color, name, link }) => (
                    <a href={link}>
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    </a>
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </AnimatedOnScroll>
  </section>
);

export default Team;

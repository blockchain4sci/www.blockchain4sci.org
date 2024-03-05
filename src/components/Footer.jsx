import { socialMedia } from "../constants";

const Footer = () => (
  <section className="w-full bg-black flex-col">
    <div className="w-full flex justify-between items-center flex-col pt-6  bg-black border-t-[#3F3E45]">
      <div className="flex flex-row" >
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      <p className="mt-6 bg-black font-normal text-center text-base  text-white">
        Copyright Ⓒ 2024 Laboratory of Cancer Genomics and Artificial
        Intelligence, CancerDAO and Blockchain for Science Foundation.
        All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;

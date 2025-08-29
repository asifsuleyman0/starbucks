import { footerData } from '../Provider/footerdata.js';
import { FaSpotify,FaFacebook,FaPinterest,FaInstagram,FaYoutube,FaTwitter } from "react-icons/fa";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const socialIcons = {
    "Spotify": <FaSpotify />,
    "Facebook": <FaFacebook />,
    "Pinterest": <FaPinterest />,
    "Instagram": <FaInstagram />,
    "YouTube": <FaYoutube />,
    "Twitter": <FaTwitter />
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 lg:py-16">
      <div className="xl:px-8 xl:max-w-7xl xl:mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {footerData?.sections?.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm leading-relaxed">
                      {link}
                    </a>
                  </li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 my-8 lg:my-12"></div>
        <div className="flex flex-wrap gap-4 mb-8">
          {footerData?.socialLinks?.map((social, index) => (
            <a key={index} href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-200"aria-label={social.name}>
              <span className="text-lg">
                {socialIcons[social.name]}
              </span>
            </a>
          ))}
        </div>
        <div className="space-y-4 mb-8">
          <div className="flex">
            {footerData?.legalLinks?.map((link, index) => (
              <a key={index} href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200  hover:underline">{link}</a>
            ))}
          </div>
        </div>
        <div className="text-sm text-gray-500">
          © {getCurrentYear()} Starbucks Coffee Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
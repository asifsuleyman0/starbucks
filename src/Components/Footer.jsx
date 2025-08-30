import { footerData } from '../Provider/footerdata.js';
import { FaSpotify, FaFacebook, FaPinterest, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const socialIcons = [
  { name: "Spotify", icon: <FaSpotify /> },
  { name: "Facebook", icon: <FaFacebook /> },
  { name: "Pinterest", icon: <FaPinterest /> },
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "YouTube", icon: <FaYoutube /> },
  { name: "Twitter", icon: <FaTwitter /> },
];


  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 lg:py-16">
      <div className="xl:px-8 xl:max-w-7xl xl:mx-30 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 ">
          {footerData?.sections?.map((section, index) => (
            <div key={index} className="space-y-5">
              <h3 className="text-lg font-semibold text-gray-800 tracking-tight">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-500 font-semibold hover:text-gray-900 transition-colors duration-200 text-l leading-relaxed">
                      {link}
                    </a>
                  </li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 my-8 lg:my-12"></div>
        <div className="flex flex-wrap gap-4 mb-8">
          {socialIcons.map((social, index) => (
            <a key={index} href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-200"aria-label={social.name}>
              <span className="text-lg">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
        <div className="space-y-4 mb-8">
          <div className='flex flex-col gap-4'>
            {footerData?.legalLinks?.map((link, index) => (
              <a key={index} href="#" className="text-m font-semibold text-gray-800 transition-colors duration-200 hover:underline">{link}</a>
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
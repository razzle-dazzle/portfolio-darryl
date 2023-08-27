import Logo from "../Logo";
import { footerLinks } from './Footer.data';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white dark:bg-[#1D1D1D] text-[#1D1D1D] dark:text-white py-4">
      <div className="container mx-auto p-6 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Logo size="large"></Logo>
            <div className="text-xl md:text-2xl font-bold select-none mt-2">
              Darryl October
            </div>
          </div>
          <div>
            <h4 className="text-[#F8CB01] text-xl md:text-4xl leading-snug font-bold my-6 mt-0 mb-12 text-center md:text-left">
              {"LET’S WORK TOGETHER"}
            </h4>
            <div className="flex flex-col gap-6">
              {footerLinks.map((link, index) => {
                return (
                  <a
                    href={link.link}
                    title={link.title}
                    target={link.target}
                    className="flex flex-row gap-4 items-center"
                  >
                    <div className="flex flex-row items-center justify-start gap-4">
                      <div className='w-8 h-8 md:w-10 md:h-10 rounded-full dark:bg-[#F8CB01] dark:text-gray-900 flex items-center justify-center'>{link.icon}</div>
                      <div className="text-xl md:text-2xl">{link.title}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

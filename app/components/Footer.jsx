import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: "/Whatsapp.svg",
    url: "https://wa.link/rwz2je",
  },
  {
    name: "Twitter",
    icon: "/X.svg",
    url: "https://x.com/favourlpeters",
  },
  {
    name: "LinkedIn",
    icon: "/LinkedIn.svg",
    url: "https://www.linkedin.com/in/favour-l-peters-73b1b922b/",
  },
  {
    name: "GitHub",
    icon: "/Github.svg",
    url: "https://github.com/FavourPeters",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-main to-[#1a1528] px-8 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="logo text-xl font-bold bg-gradient-to-r from-white to-basic bg-clip-text text-transparent">
            Favour<span className="text-basic">Peters</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 hover:opacity-80"
                aria-label={link.name}
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FavourPeters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

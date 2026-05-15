import { Github, Linkedin, Mail, Phone, MapPin, Zap } from "lucide-react";
import { memo } from "react";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/simon9001", title: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/simongatungob8a429225", title: "LinkedIn", icon: Linkedin },
  { href: "mailto:simongatungo300@gmail.com", title: "Email", icon: Mail },
];

const footerLinks = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About Us" },
  { to: "/process", label: "Our Process" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Footer = memo(() => {
  return (
    <footer className="w-full bg-muted/30 border-t border-border pt-10 pb-8 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-md">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-extrabold text-black dark:text-white tracking-wide">
                jengeame
              </span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Full-stack digital agency delivering scalable web, mobile, and backend solutions for businesses across Africa and beyond.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-3 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-3 uppercase tracking-wide">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Nairobi, Kenya
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+254757568845" className="hover:text-primary transition-colors">+254 0757 568845</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:simongatungo300@gmail.com" className="hover:text-primary transition-colors">
                  simongatungo300@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black dark:text-white">
            © {new Date().getFullYear()} jengeame. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socialLinks.map(({ href, title, icon: Icon }) => (
              <a
                key={title}
                href={href}
                title={title}
                aria-label={title}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;

import {
  FaTelegramPlane,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-l from-secondary/10   to-background text-text pb-10 pt-20 ">
      <section className="">
        <div className="flex justify-between items-start gap-10 flex-col lg:flex-row">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-secondary text-3xl font-bold">⬛</div>
              <h2 className="text-2xl font-semibold text-secondary">Stygar</h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
              ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor
              pesto bianco pesto red onions.
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <p> stygar@help.com</p>
              <p> +1 (555) 123-4567</p>
              <p> 5987 Mid Rivers Mall Dr., St. Charles</p>
            </div>

            <div className="flex gap-4 mt-6">
              <SocialIcon icon={<FaTelegramPlane />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaGithub />} />
              <SocialIcon icon={<FaYoutube />} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-white cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer">
                Digital Marketing
              </li>
              <li className="hover:text-white cursor-pointer">
                Brand Strategy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">Portfolio</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-700" />

      <section className="px-6 py-5 flex flex-col sm:flex-row justify-between items-center text-sm text-text/10 gap-3">
        <p className="text-text/40!">Privacy Policy • Disclaimer</p>
        <p className="text-text/40!">
          © Copyright © Stygar. All Rights Reserved 2025
        </p>
      </section>
    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-red-600 hover:text-red-500 transition cursor-pointer">
      {icon}
    </div>
  );
}

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-6 px-4 md:px-8 bg-pink-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Left - Message */}
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg md:text-xl font-semibold text-rose-600 dark:text-rose-400">
              Created with ❤️ by Fatur
            </h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Made specially for{" "}
              <span className="font-medium text-rose-600 dark:text-rose-400">
                Dinda
              </span>
              .
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 text-sm">
              <a
                href="https://instagram.com/10fatur_rahman"
                target="_blank"
                rel="noreferrer"
                className="
                hover:text-gray-600 hover:dark:text-gray-300 
                transition 
                duration-300
                bg-gradient-to-r 
                from-[#F58529] 
                via-[#DD2A7B] 
                to-[#515BD4]
                text-transparent
                bg-clip-text
                font-semibold
              "
              >
                Instagram
              </a>

              <a
                href="https://wa.me/6285340305544"
                target="_blank"
                rel="noreferrer"
                className="
                  hover:text-gray-600 hover:dark:text-gray-300
                  transition 
                  duration-300
                  bg-gradient-to-r
                  from-[#25D366] 
                  via-[#128C7E]
                  to-white
                  text-transparent
                  bg-clip-text
                  font-semibold
                "
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Copyright */}
          <div className="flex-1 text-center md:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {year} Fatur Rahman. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-gray-400">
              kadokecil.vercel.app • Built with React & Tailwind
            </p>
          </div>
        </div>

        {/* Bottom small note */}
        <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            Website ini dibuat khusus untuk hari ulang tahun Dinda 💞
          </p>
        </div>
      </div>
    </footer>
  );
}

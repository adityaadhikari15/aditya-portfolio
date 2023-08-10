import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "@styles/prime-react-custom.scss";

//core
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "@styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-100">
      <header>
        <nav>
          <div>
            <g transform="translate(-8.000000, -2.000000)">
              <g transform="translate(11.000000, 5.000000)">
                <polygon
                  id="Shape"
                  stroke="currentColor"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  points="39 0 0 22 0 67 39 90 78 68 78 23"
                ></polygon>
                <path
                  d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                  fill="currentColor"
                ></path>
              </g>
            </g>
          </div>
          <div>
            <button className="button--primary fs-13px mt-0  px-3 py-1">
              Resume
            </button>
          </div>
        </nav>
      </header>
      <main>
        <div className="fillHeight">
          <Component {...pageProps} />
        </div>
        <hr />
        <section>
          <footer className="pb-3">
            <div className="footer-social-links center mb-5">
              <ul className="center">
                <li>
                  <a
                    href="https://github.com/adityaadhikari15"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img src="/assets/images/github.svg" width={20} />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/adityaadhikari1993/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img src="/assets/images/instagram.svg" width={20} />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/adityaadhikari15/"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/images/linkedin.svg" width={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.upwork.com/freelancers/adityaadhikari"
                    aria-label="Codepen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/images/upwork.svg" width={20} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="center text-center">
              <div>
                <div className="font-mono fs-12px">
                  Designed & Built by Aditya Adhikari
                </div>
                <div className="font-mono fs-12px">
                  This website is built using three important ingredients
                </div>
              </div>
            </div>

            <div className="center mt-5 mb-16px">
              <div>
                <div>
                  <span className="footer-card text-black">
                    <img src="/assets/images/nextjs.svg" width={20} /> Nextjs
                  </span>
                  &nbsp;
                  <span className="footer-card text-black">
                    <img src="/assets/images/sass.svg" width={20} /> Sass
                  </span>
                  &nbsp;
                  <span className="footer-card text-black">❤️ Love</span>
                </div>
                <div className="text-center"> </div>
              </div>
            </div>
          </footer>
        </section>
      </main>

      <div className="fixed-side-bar left">
        <ul>
          <li>
            <a
              href="https://github.com/adityaadhikari15"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="/assets/images/github.svg" width={20} />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/adityaadhikari1993/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="/assets/images/instagram.svg" width={20} />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adityaadhikari15/"
              aria-label="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/linkedin.svg" width={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/adityaadhikari"
              aria-label="Codepen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/upwork.svg" width={20} />
            </a>
          </li>
        </ul>
      </div>
      <div className="fixed-side-bar right">
        <ul>
          <li>
            <a href="mailto:adityaadhikari15@gmail.com">
              adityaadhikari15@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

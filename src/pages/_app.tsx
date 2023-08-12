import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "@styles/prime-react-custom.scss";

//core
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "@styles/global.scss";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const metaDesc = `Experienced web developer specializing in user-centric solutions, proficient in Angular.
  Transforming ideas into seamless, visually appealing websites. Visit my portfolio for innovative projects.`;
  const metaTitle = `Aditya Adhikari`;
  const metaImage = `/assets/images/logo.svg`;
  return (
    <div className="h-100">
      <Head>
        <title>Aditya Adhikari</title>
        <link
          rel="shortcut icon"
          href={"/assets/images/logo.svg"}
          type="image/x-icon"
        ></link>
        <meta name="description" content={metaDesc} key="desc" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={metaImage} />
      </Head>
      <header>
        <nav>
          <div>
            <img src="/assets/images/main-logo.svg" width={40} />
          </div>
          <div>
            <button className="button--primary mt-0  px-3 py-1 fs-13px">
              <i className="pi pi-download mr-8px "></i>Resume
            </button>
            {/* <button className="button--primary fs-13px mt-0  px-3 py-1">
              Resume
            </button> */}
          </div>
        </nav>
      </header>
      <main>
        <div className="fillHeight">
          <Component {...pageProps} />
        </div>
        <hr />
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
                  href="https://www.upwork.com/freelancers/adityaadhikari?s=1110580755057594368"
                  aria-label="Upwork"
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
                Designed & Built by Aditya Adhikari.
              </div>
              <div className="font-mono fs-12px">
                This website is delpoyed on vercel.
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

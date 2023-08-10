import { MyProjects } from "@/components/my-projects/my-projects";
import MainStyles from "./main.module.scss";
import { MyPreviousWorks } from "@/components/my-previous-jobs/my-previous-jobs";
export default function Home() {
  const mailTo = () => {
    window.location.href = "mailto:adityaadhikari15@gmail.com";
  };
  return (
    <div className="container">
      <div className={MainStyles.landing_page}>
        <div className="hero_section">
          <div className="row">
            <div className="col-md-12 m-auto">
              <div className="fw-bolder mb-24px text-primary font-mono">
                Hi, my name is
              </div>
              <h1 className="big-heading">Aditya Adhikari.</h1>
              <div>
                {" "}
                <h3 className="big-heading">I build things for the web.</h3>
              </div>
              <p>
                I’m a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building accessible, human-centered
                products at Upstatement.
              </p>
              <div className="mt-32px">
                <button className="button--primary mr-24px">
                  View my work
                </button>
                <button className="button--primary" onClick={mailTo}>
                  Hire me
                </button>
              </div>
            </div>
          </div>
        </div>
        <section>
          <h2 className="numbered-heading">
            <span>01.</span>About me
          </h2>
          <div className="row">
            <div className="col-md-8">
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS! Fast-forward to today, and
              </p>
              <p>
                I&apos;ve had the privilege of working at an advertising agency,
                a start-up, a huge corporation, and a student-led design studio.
                My main focus these days is building accessible, inclusive
                products and digital experiences at Upstatement for a variety of
                clients.
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>
            </div>
            <div className="col-md-4 center">
              <div className={MainStyles.personal_image_wrapper}>
                {/* <img
                    className="ml-32px"
                    src="https://v4.brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif"
                    alt=""
                  /> */}
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="numbered-heading">
            <span>2.</span> Skills & Tools
          </h2>
          <div className={MainStyles.skills_list}>
            <ul>
              <li>
                <div>
                  <img src="/assets/images/angular.svg" />
                  <div className={MainStyles.skill_name}>Angular</div>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/react.svg" />
                  <div className={MainStyles.skill_name}>React</div>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/nextjs.svg" />
                  <div className={MainStyles.skill_name}>Nextjs</div>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/ts.svg" />
                  <div className={MainStyles.skill_name}>Typescript</div>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/sass.svg" />
                  <div className={MainStyles.skill_name}>Sass</div>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/rxjs.svg" />
                  <div className={MainStyles.skill_name}>Rxjs</div>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/redux.svg" />
                  <div className={MainStyles.skill_name}>Redux</div>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/javascript.svg" />
                  <div className={MainStyles.skill_name}>Javascript</div>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/html.svg" />
                  <div className={MainStyles.skill_name}>Html</div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <MyPreviousWorks />
        </section>
        <section>
          <MyProjects />
        </section>
        <hr />
        <section>
          <h2 className="text-white fw-bold">
            In need of a frontend developer?
          </h2>
          <div className="fw-semibold text-primary fs-16px">
            <span className="pulse"></span>&nbsp;&nbsp;I’m currently available
            for work.
          </div>
          <div className="mt-32px">
            <button className="button--primary mr-24px">Send me message</button>
            <button className="button--primary">Download Resume</button>
          </div>
        </section>
      </div>
    </div>
  );
}

import { MyProjects } from "@/components/my-projects/my-projects";
import MainStyles from "./main.module.scss";
import { MyPreviousWorks } from "@/components/my-previous-jobs/my-previous-jobs";
export default function Home() {
  const scrollToDiv = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const mailTo = () => {
    window.open(
      "mailto:adityaadhikari15@gmail.com",
      "_blank",
      "noopener, noreferrer"
    );
  };

  const openWhatapp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=919873978779&amp;text=Lets chat",
      "_blank",
      "noopener, noreferrer"
    );
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank", "noopener, noreferrer");
  };
  return (
    <div className="">
      <div className={MainStyles.landing_page}>
        <div className={MainStyles.hero_section}>
          <div className="row">
            <div className="col-md-12 m-auto">
              <div className="mb-24px text-primary font-mono">
                Hi, my name is
              </div>
              <h1 className="big-heading">👨‍💻 Aditya Adhikari.</h1>
              <div>
                <h3 className="big-heading">I build things for the web.</h3>
              </div>
              <div className={MainStyles.my_techs}>
                <div>
                  <img src="/assets/images/angular.svg" width={60} />
                </div>
                <div>
                  <img src="/assets/images/react.svg" width={70} />
                </div>
                <div className="center">
                  <img src="/assets/images/nextjs-white.svg" width={70} />
                </div>
              </div>
              <p>
                If you have a project that you need to take to the next level or
                develop a new one from scratch using cutting-edge technologies
                but still well architecture (modular, easy to extend, and
                reuse), you are in the right place.
                <span className="text-primary">Angular is my passion</span> and
                I love to develop well-structured, extensible, and performant
                angular applications.
              </p>
              <div className="mt-32px">
                <button
                  className="button--primary mr-24px"
                  onClick={() => scrollToDiv("my_projects")}
                >
                  View my work
                </button>
                <button
                  className="button--primary"
                  onClick={() => scrollToDiv("hire_me")}
                >
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
          <div className={MainStyles.about_section}>
            <div className={MainStyles.about_section_desc}>
              <p>
                👋 Hello! My name is Aditya. I am an accomplished front-end
                developer with{" "}
                <span className="text-primary">
                  6+ years of professional experience
                </span>{" "}
                in the field. My expertise lies in crafting visually appealing
                and user-friendly interfaces, utilizing the latest technologies
                and best practices to deliver exceptional web experiences.
                Fast-forward to today, I&apos;ve crafted software for an{" "}
                <span className="text-primary"> advertising agency</span>,{" "}
                <span className="text-primary">two startups</span> , and{" "}
                <span className="text-primary">
                  I&apos;m presently freelancing
                </span>{" "}
                .
              </p>
              <p>
                When I am not immersed in coding or experimenting with the
                latest frameworks, I find solace and exhilaration in the great
                outdoors, particularly during mountain expeditions.
              </p>
              <p>
                With my unique blend of technical proficiency, a passion for
                technology, and a love for adventure, I approach both my
                professional and personal pursuits with dedication and
                enthusiasm, always eager to embrace new challenges and reach new
                heights.
              </p>
            </div>
            <div className={MainStyles.personal_image_wrapper + ` center`}>
              <img className="" src="/assets/images/photo.jpeg" />
            </div>
          </div>
        </section>
        <section>
          <h2 className="numbered-heading">
            <span>02.</span> Skills & Tools
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
        <section id="my_projects">
          <MyProjects />
        </section>
        <hr />
        <section id="hire_me">
          <h2 className="text-white fw-bold">
            In need of a frontend developer?
          </h2>

          <div className="mt-24px">
            If you have a project that you need to take to the next level or
            develop a new one from scratch using cutting-edge technologies but
            still well architecture (modular, easy to extend, and reuse), you
            are in the right place.Angular is my passion and I love to develop
            well-structured, extensible, and performant angular applications.
          </div>
          <div className="fw-semibold  fs-16px mt-16px">
            <span className="pulse"></span>&nbsp;&nbsp;I’m currently available
            for work.
          </div>
          <div className="mt-32px">
            <div className="d-flex gap-2">
              <div>
                <img src="/assets/images/gmail.svg" width={20} />
              </div>
              <div
                className="mt-1 text-primary cursor-pointer"
                onClick={mailTo}
              >
                adityaadhikari15@gmail.com
              </div>
            </div>
            <div className="d-flex gap-2">
              <div>
                <img src="/assets/images/whatsapp.svg" width={20} />
              </div>
              <div
                className="mt-1 text-primary cursor-pointer"
                onClick={openWhatapp}
              >
                +91-9873978779
              </div>
            </div>
          </div>
          <div className="mt-32px">
            <button
              className="button--primary button-hovered"
              onClick={openResume}
            >
              <i className="pi pi-download mr-8px"></i>Download my resume
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

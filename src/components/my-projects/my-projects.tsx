import { useEffect, useState } from "react";
import ComponentStyles from "./my-projects.module.scss";

export const MyProjects = () => {
  const [tabIndex, setTabSelect] = useState<number>(0);

  const onTabSelect = (index: number) => {
    setTabSelect(index);
  };
  return (
    <div className={ComponentStyles.my_previous_jobs}>
      <div>
        <h2 className="numbered-heading">
          <span>03.</span> Things That I&apos;ve Build
        </h2>
        <div className={ComponentStyles.job_tab}>
          <div className={ComponentStyles.tab_list}>
            <ul>
              <li
                className={tabIndex === 0 ? ComponentStyles.tab_selected : ""}
                onClick={() => onTabSelect(0)}
              >
                SmartDocs&nbsp;(Freelancer)
              </li>
              <li
                className={tabIndex === 1 ? ComponentStyles.tab_selected : ""}
                onClick={() => onTabSelect(1)}
              >
                Bid Betty&nbsp;(Freelancer)
              </li>
              <li
                className={tabIndex === 2 ? ComponentStyles.tab_selected : ""}
                onClick={() => onTabSelect(2)}
              >
                Teebeds Technologies
              </li>
              <li
                className={tabIndex === 3 ? ComponentStyles.tab_selected : ""}
                onClick={() => onTabSelect(3)}
              >
                Ideationz
              </li>
            </ul>
          </div>
          <div className={ComponentStyles.tab_content}>
            {tabIndex === 0 && (
              <div>
                <h5>
                  <span>Senior Frontend Developer</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a
                      href="https://www.apple.com/music/"
                      className="inline-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      SmartDocs
                    </a>
                  </span>
                </h5>
                <p className="range">July - December 2017</p>
                <div>
                  <ul>
                    <li>
                      Developed and styled interactive web applications for
                      Apple Music using Ember and SCSS
                    </li>
                    <li>
                      Built and shipped the Apple Music Extension for Facebook
                      Messenger leveraging third-party and internal API
                      integrations
                    </li>
                    <li>
                      Architected and implemented the user interface of Apple
                      Music's embeddable web player widget for in-browser user
                      authorization and full song playback
                    </li>
                    <li>
                      Contributed extensively to the creation of MusicKit JS, a
                      public-facing JavaScript SDK for embedding Apple Music
                      players into web applications
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {tabIndex === 1 && (
              <div className="jobs__StyledTabPanels-sc-59sdss-4 jbGgbG">
                <div>
                  <h5>
                    <span>Lead Engineer</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a
                        href="https://www.upstatement.com/"
                        className="inline-link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Upstatement
                      </a>
                    </span>
                  </h5>
                  <p className="range">May 2018 - Present</p>
                  <div>
                    <ul>
                      <li>
                        Deliver high-quality, robust production code for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more
                      </li>
                      <li>
                        Work alongside creative directors to lead the research,
                        development, and architecture of technical solutions to
                        fulfill business requirements
                      </li>
                      <li>
                        Collaborate with designers, project managers, and other
                        engineers to transform creative concepts into production
                        realities for clients and stakeholders
                      </li>
                      <li>
                        Provide leadership within engineering department through
                        close collaboration, knowledge shares, and mentorship
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {tabIndex === 2 && (
              <div>
                <h5>
                  <span>Software Engineer Co-op</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a
                      href="https://starry.com/"
                      className="inline-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Starry
                    </a>
                  </span>
                </h5>
                <p className="range">July - December 2016</p>
                <div>
                  <ul>
                    <li>
                      Engineered and improved major features of Starry's
                      customer-facing Android web app using ES6, Handlebars,
                      Backbone, Marionette, and CSS
                    </li>
                    <li>
                      Proposed and implemented scalable solutions to issues
                      identified with cloud services and applications
                      responsible for communicating with the Starry Station
                      internet router
                    </li>
                    <li>
                      Collaborated with designers and other developers to ensure
                      thoughtful and consistent user experiences across Starry’s
                      iOS and Android mobile apps
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {tabIndex === 3 && (
              <div>
                <h5>
                  <span>Developer</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a
                      href="https://web.northeastern.edu/scout/"
                      className="inline-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Scout Studio
                    </a>
                  </span>
                </h5>
                <p className="range">Spring 2016 &amp; 2017</p>
                <div>
                  <ul>
                    <li>
                      Collaborated with other student designers and engineers on
                      pro-bono projects to create new brands, design systems,
                      and websites for organizations in the community
                    </li>
                    <li>
                      Built and delivered technical solutions according to
                      stakeholder business requirements
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

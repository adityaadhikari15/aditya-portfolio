import { useEffect, useState } from "react";
import ComponentStyles from "./my-previous-jobs.module.scss";

export const MyPreviousWorks = () => {
  const [tabIndex, setTabSelect] = useState<number>(0);

  const onTabSelect = (index: number) => {
    setTabSelect(index);
  };
  return (
    <div className={ComponentStyles.my_previous_jobs}>
      <div>
        <h2 className="numbered-heading">
          <span>02.</span> Where I&apos;ve worked
        </h2>
        <div className={ComponentStyles.job_tab}>
          <div className={ComponentStyles.tab_list}>
            <ul>
              <li
                className={tabIndex === 0 ? ComponentStyles.tab_selected : ""}
                onClick={() => onTabSelect(0)}
              >
                SmartDocs&nbsp;
                <img src="/assets/images/upwork.svg" width={15} />
              </li>
              <li
                className={tabIndex === 1 ? ComponentStyles.tab_selected : ""}
                onClick={() => onTabSelect(1)}
              >
                Bid Betty&nbsp;
                <img src="/assets/images/upwork.svg" width={15} />
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
                  <span>Senior Angular Developer</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a
                      href="https://www.upwork.com/freelancers/adityaadhikari?s=1110580755057594368"
                      className="inline-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Upwork
                    </a>
                  </span>
                </h5>
                <p className={ComponentStyles.range}>
                  November 2022 - July 2023
                </p>
                <div className={ComponentStyles.tab_content_job_desc}>
                  <ul>
                    <li>
                      Created dynamic web applications for SmartDocs Auto-pilot
                      Bot, utilizing Angular 15 and SCSS for development and
                      styling.
                    </li>
                    <li>
                      Provide leadership within engineering department through
                      close collaboration, knowledge shares, and mentorship
                    </li>
                    <li>
                      Designed and developed the Admin Panel&apos;s user
                      interface and dashboard to monitor and manage bots
                      utilized for invoice downloads across various channels.
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {tabIndex === 1 && (
              <div className="jobs__StyledTabPanels-sc-59sdss-4 jbGgbG">
                <div>
                  <h5>
                    <span>Senior Frontend Developer</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a
                        href="https://www.upwork.com/freelancers/adityaadhikari?s=1110580755057594368"
                        className="inline-link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Upwork
                      </a>
                    </span>
                  </h5>
                  <p className={ComponentStyles.range}>
                    October 2022 - June 2023
                  </p>
                  <div className={ComponentStyles.tab_content_job_desc}>
                    <ul>
                      <li>
                        Autonomously restructuring legacy code into an organized
                        structure using interceptors, authentication guards, and
                        router guards for role-based enhancement.
                      </li>
                      <li>
                        Applied Angular best practices to implement features and
                        suggested solutions for enhanced user experiences.
                      </li>
                      <li>
                        Revamped auction UI and readied the project for
                        production deployment.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {tabIndex === 2 && (
              <div>
                <h5>
                  <span>Frontend Engineer</span>
                  {/* <span className="company">
                    &nbsp;@&nbsp;
                    <a
                      href="https://starry.com/"
                      className="inline-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Starry
                    </a>
                  </span> */}
                </h5>
                <p className={ComponentStyles.range}>
                  June 2019 - October 2022
                </p>
                <div className={ComponentStyles.tab_content_job_desc}>
                  <ul>
                    <li>
                      Architected and executed a scalable frontend for Teebeds
                      Property Management system, employing Angular 10, Material
                      UI, SCSS, and Angular SSR.
                    </li>
                    <li>
                      Developed a bespoke Google-style calendar, streamlining
                      guest check-in and checkout. Achieved a 70% speed boost
                      over the old system, heightening user satisfaction.
                    </li>
                    <li>
                      Crafted Hotel Booking Engine with integrated payments,
                      ensuring seamless user bookings. Implemented using
                      Next.js, SCSS, and React.
                    </li>
                    <li>
                      Championed frontend development in Angular, proposing and
                      implementing features to elevate user experience.
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {tabIndex === 3 && (
              <div>
                <h5>
                  <span>Junior Angular Developer</span>
                  {/* <span className="company">
                    &nbsp;@&nbsp;
                    <a
                      href="https://web.northeastern.edu/scout/"
                      className="inline-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Scout Studio
                    </a>
                  </span> */}
                </h5>
                <p className={ComponentStyles.range}>
                  September 2017 - April 2019
                </p>
                <div className={ComponentStyles.tab_content_job_desc}>
                  <ul>
                    <li>
                      Commenced my journey as an AngularJS developer, acquiring
                      proficiency in technologies spanning from AngularJS to
                      Angular 5.
                    </li>
                    <li>
                      Presented with a chance to create web-based portals from
                      the ground up.
                    </li>
                    <li>
                      Individually crafted and constructed CRMs for major
                      organizations such as Harmon-Kardon and Sukam India.
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

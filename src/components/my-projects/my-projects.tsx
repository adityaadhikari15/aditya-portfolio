import { useEffect, useState } from "react";
import ComponentStyles from "./my-projects.module.scss";
import { Projects } from "./projects-list";
export const MyProjects = () => {
  const [tabIndex, setTabSelect] = useState<number>(0);

  const onTabSelect = (index: number) => {
    setTabSelect(index);
  };
  return (
    <div className={ComponentStyles.my_projects}>
      <div className={ComponentStyles.projects_list}>
        <h2 className="numbered-heading">
          <span>03.</span> Things That I&apos;ve Build
        </h2>
        <div>
          <ul>
            {Projects.map((elem) => {
              return (
                <>
                  <li key={elem.name} className={ComponentStyles.project}>
                    <img
                      src={elem.image}
                      className={ComponentStyles.image_display_md}
                    />
                    <div>
                      <h3>{elem.name}</h3>
                      <h6>{elem.company}</h6>
                      <img
                        src={elem.image}
                        className={ComponentStyles.image_display_sm}
                      />

                      <p>{elem.description}</p>

                      <div className={ComponentStyles.techs}>
                        {elem.techs.map((tech) => {
                          return (
                            <>
                              <span className={ComponentStyles.tech}>
                                {tech}
                              </span>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

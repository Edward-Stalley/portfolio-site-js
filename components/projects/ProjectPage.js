import React from "react";
import classes from "../projects/ProjectPage.module.css";
import Link from "next/link";
import Image from "next/image";
import projectData from "../projects/projectData";
import { useRouter } from "next/router";

export default function ProjectPage(props) {
  const router = useRouter();
  const projects = projectData;
  console.log(router.query.projectId);
  const currentPage = router.query.projectId;
  // console.log(currentPage);

  // console.log(router.query.projectId);

  console.log(projectData);

  const currentProject = projects.map((project) => {
    let currentTitle = project.title;

    // if (currentPage === title) {
    console.log("welcome to " + currentTitle);
  });
  return (
    <div className={classes.projectPage_container}>
      <div>{projects[0].title}</div>
    </div>
  );
}

// import { useRouter } from "next/router";
// import projectData from "../projects/projectData";

// export default function ProjectInfo() {
//   // get access to data encoded in the url
//   const router = useRouter();
//   const projects = projectData;
//   const currentPage = router.query.projectId;

//   // send request to backend api to fetch item with newsId
//   router.query.projectId;
//   const currentProject = projects.map((project) => {
//     let title = project.title;

//     if (currentPage === title) {
//       console.log("welcome to" + title);
//     }
//   });

//   return (
//     <div>
//       <div>{projects[0].title}</div>
//     </div>
//   );
// }

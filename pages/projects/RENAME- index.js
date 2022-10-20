// our -domain.com/projects/something-important

// for nested need to make index(root folder for that section)

import Link from "next/link";
import { Fragment } from "react";
import ProjectList from "../../components/projects/ProjectList";

export default function Projects() {
  return (
    // fragments let you add lots of children to a component (use instead of a div)
    <Fragment>
      <h1>Projects</h1>
      <ProjectList />
      <Link href="/">Go Home</Link>

      {/* <ul>
        <li>
          <Link href="/projects/project-1">project-1-link</Link>
        </li>
        <Link href="/projects/project-2">project-2-link</Link>
      </ul> */}
    </Fragment>
  );
}

// import React from "react"; - this is autoadded in next.js
import { Link } from "react-scroll";
import Navigation from "../components/sections/Navigation";
import React from "react";
import { Fragment } from "react";
import classes from "./Homepage.module.css";
import ProjectList from "../components/projects/ProjectList";
import About from "../components/sections/About";
import Head from "next/head";
import NewContact from "../components/sections/NewContact";

export default function Homepage() {
  const [returnBtn, setReturnBtn] = React.useState(false);
  console.log(returnBtn);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <div className={classes.container}>
        <Navigation returnBtn={returnBtn} />
        <About />
        <ProjectList />
        <NewContact />
      </div>
    </>
  );
}

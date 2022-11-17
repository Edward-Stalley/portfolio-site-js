// import { Link } from "react-scroll";
import Link from "next/link";

// import * as Scroll from "react-scroll";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import React from "react";
import classes from "/components/sections/Navigation.module.css";

export default function Navigation(props) {
  return (
    // testing out tailwind css
    <div className={"sticky flex justify-end top-0 z-20 py-2 bg-black md:py-6  "}>
      {/* <div className={classes.navbar}> */}
      <ul className={classes.list}>
        {/* {props.returnBtn && <li>Return to Home</li>} */}
        <li className={classes.list_item}>
          {/* <Link scroll={true} href="/#about">
            About
          </Link> */}
          {/* <a href="/#about">About</a> */}
          <Link
            activeClass="active"
            href={"#about" ?? " "}
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={50}
          >
            About
          </Link>
          {/* About
          {/* <a href={props.about}>About</a> */}
        </li>
        <li className={classes.list_item}>
          <div className={classes.dropdown}>
            {/* <a href="/#projects"> Projects</a> */}
            <Link to="projects" href={"#projects" ?? " "} spy={true} smooth={true} offset={50} duration={50}>
              Projects
            </Link>
            <button className={classes.dropbtn}>
              <i className={classes.icon}></i>
            </button>
            <div className={classes.dropdown_content}>
              {/* <Link to={`Flashcard-App`}>
              <a>Flashcard App</a>
              </Link> */}
              <Link scroll={false} href={`../projects/Flashcard-App`}>
                Flashcard App
              </Link>
              <Link scroll={false} href={`../projects/Dice-Game`}>
                Dice Game
              </Link>
              <Link scroll={false} href={`../projects/Bike-Website`}>
                Bicycle Website
              </Link>
            </div>
          </div>
        </li>
        <li className={classes.list_item}>
          <Link scroll={false} href="/contact">
            Contact
          </Link>
        </li>

        {/* <li className={classes.list_item}>
          <a href="#projects-section">Projects</a>
        </li> */}
        <li className={classes.list_item}>
          {/* <Link to="contact" spy={true} smooth={true} offset={50} duration={50}>
            Contact
          </Link> */}
        </li>
      </ul>
    </div>
  );
}

// the links need a bit of work on this page

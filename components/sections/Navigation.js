import Link from "next/link";
import React from "react";
import classes from "/components/sections/Navigation.module.css";

export default function Navigation(props) {
  return (
    <div className={"sticky flex justify-end top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black"}>
      {/* <div className={classes.navbar}> */}

      <ul className={classes.list}>
        {/* {props.returnBtn && <li>Return to Home</li>} */}
        <li className={classes.list_item}>
          {/* <Link href="#about-section">About</Link> */}
          <Link href="/#about-section">About</Link>
          {/* <a href={props.about}>About</a> */}
        </li>
        <li className={classes.list_item}>
          <div className={classes.dropdown}>
            <Link href="/#projects-section"> Projects</Link>
            <button className={classes.dropbtn}>
              <i className={classes.icon}></i>
            </button>
            <div className={classes.dropdown_content}>
              <Link href={`../projects/Flashcard%20App`}>Flashcard App</Link>
              <Link href={`../projects/Dice%20Game`}>Dice Game</Link>
              <Link href={`../projects/Bike%20Website`}>Bicycle Website</Link>
            </div>
          </div>
        </li>
        {/* <li className={styles.list_item}>
    //           <Link href="/contact">Contact</Link>
    //         </li> */}

        {/* <li className={classes.list_item}>
          <a href="#projects-section">Projects</a>
        </li> */}
        <li className={classes.list_item}>
          <Link href="../contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

// the links need a bit of work on this page

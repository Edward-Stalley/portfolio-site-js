import Image from "next/image";
import classes from "/components/images/StartupBackground.module.css";
// import styles from "../styles/Home.module.css";

export default function StartupBackground() {
  return (
    <div className={classes.startup}>
      <Image
        className={classes.startup}
        src={require("/public/images/startup.svg")} // Route of the image file
        // Desired size with correct aspect ratio
        // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Card from "../ui/Card";
import classes from "../projects/ProjectItem.module.css";
import Image from "next/image";

export default function ProjectItem(props) {
  const [hover, setHover] = React.useState(false);

  // const dynamicHREF = "../projects" + `${props.title}`;

  return (
    <div className={classes.card}>
      <li className={classes.item}>
        <Card>
          <div className={classes.content_container}>
            {props.isClicked ? (
              <div className={classes.image_container}>
                <Image
                  src={props.image}
                  alt={props.title}
                  objectFit="cover"
                  objectPosition="top center"
                  className={classes.image}
                  layout="fill"
                />
              </div>
            ) : (
              <Link href={`../projects/${props.title}`}>
                <div className={classes.card_title}> {props.title}</div>
              </Link>
            )}
            {/* <p>{props.content}</p> */}
            {/* <div className={classes.actions}>
              <button>Show Details</button>
            </div> */}
          </div>
        </Card>
      </li>
    </div>
  );
}

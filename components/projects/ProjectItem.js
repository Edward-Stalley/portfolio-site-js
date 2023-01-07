import React from "react";
import Link from "next/link";
import Card from "../ui/Card";
import classes from "../projects/ProjectItem.module.css";
import Image from "next/image";

export default function ProjectItem(props) {
  const [hover, setHover] = React.useState(false);

  // console.log(props.title);
  // const dynamicHREF = "../projects" + `${props.title}`;

  return (
    <div className={classes.card}>
      <li className={classes.item}>
        <Card>
          <Link href={`../projects/${props.title}`}>
            <div className={classes.card_content}>
              <div className={classes.content_container}>
                <div className={classes.card_title}>
                  <h1>{props.title}</h1>
                </div>
              </div>
              <div className={classes.image_test}>
                <Image
                  className={classes.project_image}
                  alt=" "
                  // width="100%"
                  // height="100%"
                  // layout="fill"
                  // objectFit="cover"
                  src={
                    (props.title === "E.B-Flashcards" && require("/public/images/EB-Flashcards.png")) ||
                    (props.title === "Flashcard-App" && require("/public/images/Flashcard_Project_Image_2.png")) ||
                    (props.title === "Dice-Game" && require("/public/images/DiceGame_2-900.png")) ||
                    (props.title === "Bike-Website" && require("/public/images/bicycle_site-3.png"))
                  }
                />
              </div>
            </div>
            {/* If i move the link to here the whole thing should work as  href when clicked */}

            {/* <div className={classes.content_container}>
            {props.isClicked ? (
              <div className={classes.image_container}>
                <Image
                  src={require("/public/images/DiceGame_2-900.png")}
                  src={require(props.title === "Dice-Game" && "/public/images/DiceGame_2-900.png")}
                  I
                  could
                  put
                  an
                  ternary
                  to
                  check
                  title
                  and
                  hardcode
                  image
                  in
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
          </div> */}
          </Link>
        </Card>
      </li>
    </div>
  );
}

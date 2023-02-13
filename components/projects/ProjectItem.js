import React from "react";
import Link from "next/link";
import Card from "../ui/Card";
import classes from "../projects/ProjectItem.module.css";
import Image from "next/image";

export default function ProjectItem({ title }) {
  const [hover, setHover] = React.useState(false);

  // console.log(props.title);
  // const dynamicHREF = "../projects" + `${props.title}`;
  const formattedTitle = title.replaceAll("-", " ");
  return (
    <div className={classes.card}>
      <li className={classes.item}>
        <Card>
          <Link href={`../projects/${title}`}>
            <div className={classes.card_content}>
              <div className={classes.content_container}>
                <div className={classes.card_title}>
                  <h1 className="flex  justify-center p-2">{formattedTitle}</h1>
                </div>
              </div>
              <div className={classes.image_test}>
                <Image
                  className={classes.project_image}
                  alt=" "
                  width="300%"
                  height="300%"
                  // layout="fill"
                  objecFit="cover"
                  src={
                    (title === "Game-News-Scraper" && require("/public/images/Game-News-Scraper-1.png")) ||
                    (title === "E.B-Flashcards" && require("/public/images/EB-Flashcards.png")) ||
                    (title === "Flashcard-App" && require("/public/images/Flashcard_Project_Image_2.png")) ||
                    (title === "Omni-Food-Site" && require("/public/images/Omni-4.png")) ||
                    (title === "Dice-Game" && require("/public/images/DiceGame_2-900.png")) ||
                    (title === "Guessing-Game" && require("/public/images/Guessing-Game-4.png")) ||
                    (title === "Bankist-App" && require("/public/images/Bankist-1.png")) ||
                    (title === "Bike-Website" && require("/public/images/bicycle_site-3.png")) ||
                    (title === "Matching-Game" && require("/public/images/Matching-Game-3.png"))
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

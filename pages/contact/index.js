import React, { useState } from "react";
import classes from "/pages/contact/Contact.module.css";
import Link from "next/link";
import message from "/public/images/message.svg";
import Image from "next/image";
import Navigation from "/components/sections/Navigation.js";

export default function Contact() {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("sending");

    let data = { fullname, email, subject, message };

    fetch("/api/mail", {
      method: "POST",
      headers: { Accept: "applicaton/json, text/plain, */*", "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("repsonse recieved");
      if (res.status === 2000) {
        console.log("response succeeded");
        setSubmitted(true);
        setFullname("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    });
  }

  return (
    <div>
      <Navigation />
      {/* <KyotoBackground /> */}

      {/* <div className={styles.background_main}> */}
      {/* <BackgroundShape /> */}
      <div className={classes.contact_form}>
        {/* <div className={styles.kyoto_background}>
          <Image
            src={require("/public/images/kyoto_linegot-cropped.png")}
            alt="kyoto landscape" // Route of the image file
          ></Image>
        </div> */}
        <div className={classes.form_container}>
          {/* <div className={styles.shape_1}></div> */}
          <form onSubmit={handleSubmit} method="post" className={classes.form}>
            {/* <div className={classes.header}> */}
            <div className={classes.contact_header}>
              <div className={classes.contact_header_text}>
                <h1>Get in Touch!</h1>
              </div>
              <div className={classes.contact_header_image}>
                <Image src={require("/public/images/message.svg")} width={100} alt=" "></Image>
              </div>
            </div>
            {/* </div> */}
            <div className={classes.content}>
              <label htmlFor="fullname">
                Full name
                {/* <span className="text-red-500">*</span> */}
              </label>
            </div>
            <div className={classes.content}>
              <input
                type="text"
                // placeholder="Type Full Name..."
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                name="fullname"
              />
            </div>
            <div className={classes.content}>
              <label htmlFor="email">
                E-mail
                {/* <span className="text-red-500">*</span> */}
              </label>
            </div>

            <div className={classes.content}>
              <input
                // placeholder="Type Email Here..."
                className={classes.email}
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="classes.content">
              <label htmlFor="subject">
                Subject
                {/* <span className="text-red-500">*</span> */}
              </label>
            </div>
            <div className="classes.content">
              <input
                // placeholder="Type Subject Here..."
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div className="classes.content">
              <label htmlFor="message">
                Message
                {/* <span className="text-red-500">*</span> */}
              </label>
            </div>
            <div className="classes.content">
              <textarea
                // placeholder="Type Message Here..."
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            {/* <div className="classes.content">
              <div className={classes.return_btn}>
                <Link href="/">Return Home</Link>
              </div>
            </div> */}

            <div className={classes.content}>
              <div className={classes.return_btn_container}>
                <input
                  className={classes.btn}
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                />
              </div>
            </div>

            {/* <div className="styles.content">
              <div className={styles.btn_container}>
                <input
                  className={styles.btn}
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                />
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
}

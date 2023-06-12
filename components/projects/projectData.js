const projectData = [
  {
    id: "E.B-Flashcards",
    title: "E.B-Flashcards",
    image: require("/public/images/EB-Flashcards.png"),
    imageTwo: require("/public/images/EB-Flashcards-2.png"),
    imageThree: require("/public/images/EB-Flashcards-3.png"),
    tagline: "Review and Vocab Prep for Language Schools",
    description: "Flashcard App",
    process: "process here",
    objective:
      "To create a flashcard app  for the students of a Kyoto based English School so they can prepare and review vocabulary with ease.",
    development: `As a language student I found myself 
    spending more time making flashcards than actually studying them.
     When I was a student I wished that my language school had utilised some more modern approaches
      to studying. Now, as a teacher I wanted to provide that service
       to my current students. I am utilising the React framework Next.js to do this.
       With the built in backend api that Next.js provides I can connect
        to a hosted Mysql database which I created.
        I wanted to develop an app that took weekly vocab lists from a
         variety of classes and uploaded them into flashcards for students
         to access for both preperation and review. This app will be updated weekly as the class vocabulary is decided. `,
    tech: ["CSS", "HTML", "JS", "React", "MySQL", "next.js", "tailwind", "AWS"],
    weblink: "https://flashcard-app-2022-version-2-0.vercel.app/",
    github: "https://github.com/Edward-Stalley/Flashcard-App-2022-Version-2.0/tree/main",
    course: false,
  },
  {
    // test to find white bar reason
    // this displays fine - will add text bit by bit to find issue
    id: "test-test-test-test",
    title: "test-test-test-test",
    image: require("/public/images/Game-News-Scraper-1.png"),
    imageTwo: require("/public/images/Game-News-Scraper-1.png"),
    imageThree: require("/public/images/Game-News-Scraper-1.png"),
    tagline: "this is a test",
    description: "testing white bar css problem",
    process: "process here",
    objective: "test test",
    development: `Test Test As a language student I found myself 
    spending more time making flashcards than actually studying them.
     When I was a student I wished that my language school had utilised some more modern approaches
      to studying. Now, as a teacher I wanted to provide that service
       to my current students. I am utilising the React framework Next.js to do this.
       With the built in backend api that Next.js provides I can connect
        to a hosted Mysql database which I created.
        I wanted to develop an app that took weekly vocab lists from a
         variety of classes and uploaded them into flashcards for students
         to access for both preperation and review. This app will be updated weekly as the class vocabulary is decided. `,
    tech: ["CSS", "HTML", "JS", "React", "tailwind", "next.js"],
    weblink: "https://gamesite-scraper-git-main-edward-stalley.vercel.app/",
    github: "https://github.com/Edward-Stalley/Website-Scraper/tree/main/article-scraper",
    course: false,
  },
  {
    id: "Game-News-Scraper",
    title: "Game-News-Scraper",
    image: require("/public/images/Game-News-Scraper-1.png"),
    imageTwo: require("/public/images/Game-News-Scraper-1.png"),
    imageThree: require("/public/images/Game-News-Scraper-1.png"),
    tagline: "Stay up-to-date with gaming news!",
    description: "Website Scraper",
    process: "process here",
    objective:
      "To create an app that fetches the most recent news from various gaming websites and puts them all in one convenient place.",
    development:
      "As a game enthisast I wanted an easy way to grab the headlines and check the content of a variety of websites. I am utilising puppetter. I got it running on node.js on the backend and then decided to use the api provided by next.js. Both ways are viewable in the code on github.  I plan to update this app so that the content will all be viewable from this app without the need to go the article link to read the text.",
    tech: ["CSS", "HTML", "JS", "React", "tailwind", "next.js"],
    weblink: "https://gamesite-scraper-git-main-edward-stalley.vercel.app/",
    github: "https://github.com/Edward-Stalley/Website-Scraper/tree/main/article-scraper",
    course: false,
  },
  {
    id: "Dice-Game",
    title: "Dice-Game",
    image: require("/public/images/DiceGame_1-900.png"),
    imageTwo: require("/public/images/DiceGame_2-900.png"),
    imageThree: require("/public/images/DiceGame_2-900.png"),
    description: "A Timed Dice Roll Game",
    objective: "To create a simple game to gain a better understanding of React.",
    development:
      "This dice game was my first project that I made using React. / Until this point I had only used pure HTML, CSS , and Javascript. /  Through studying and utilising React I began to understand the benefits and advantages of Javascript libraries and how they can make the development process more streamlined and efficient.",
    tagline: "Review and Vocab Prep for Language Schools",

    process: "process here",
    tech: ["JS", "React", "CSS"],
    weblink: "https://dice-game-mocha-zeta.vercel.app/",
    github: "https://github.com/Edward-Stalley/Dice-Game/tree/main",
    course: true,
  },
  // {
  //   id: "Flashcard-App",
  //   title: "Flashcard-App",
  //   image: require("/public/images/FlashcardAppWhite-900.png"),
  //   imageTwo: require("/public/images/FlashcardApp-900.png"),
  //   imageThree: require("/public/images/FlashcardAppWhite-900.png"),
  //   tagline: "Review and Vocab Prep for Language Schools",
  //   description: "Flashcard App",
  //   process: "process here",
  //   objective: "To create a flashcard app  for my students so they can prepare and review vocab with ease.",
  //   development:
  //     "This was my first attempt at a flashcard app. I have put it on the website to show my improvements over the span of a few months. Please see the E.B Flashcards for the newest verison of this App. ",
  //   tech: ["CSS", "HTML", "JS", "React", "MySQL"],
  //   weblink: "https://flashcards-1-2-baeu.vercel.app/",
  //   github: "https://github.com/Edward-Stalley/Flashcards-1.2",
  // },
  {
    id: "Bankist-App",
    title: "Bankist-App",
    image: require("/public/images/Bankist-1.png"),
    imageTwo: require("/public/images/Bankist-1.png"),
    imageThree: require("/public/images/Bankist-1.png"),
    description: "A Timed Dice Roll Game",
    objective: "To create a simple game to gain a better understanding of React.",
    development:
      "This dice game was my first project that I made using React. / Until this point I had only used pure HTML, CSS , and Javascript. /  Through studying and utilising React I began to understand the benefits and advantages of Javascript libraries and how they can make the development process more streamlined and efficient.",
    tagline: "Review and Vocab Prep for Language Schools",

    process: "process here",
    tech: ["JS", "HTML", "CSS"],
    weblink: "https://bankist-landing-page-six.vercel.app/",
    github: "https://github.com/Edward-Stalley/Bankist-Landing-Page/tree/main",
    course: true,
  },
  {
    id: "Omni-Food-Site",
    title: "Omni-Food-Site",
    image: require("/public/images/Omni-2.png"),
    imageTwo: require("/public/images/Omni-4.png"),
    imageThree: require("/public/images/Omni-3.png"),
    description: "A Landing Page for a Meal Planning Website",
    objective: "To gain a better understanding of HTML, and CSS.",
    development:
      "This website landing page game was part of an online course I took to learn CSS and web design . I built it from the ground up which helped me to gain a better understanding of CSS concepts such as grid and flex as well as design and style concepts such as complimentary color, positioning,and visual hierarchies.",
    tagline: "Review and Vocab Prep for Language Schools",

    process: "process here",
    tech: ["HTML", "CSS"],
    weblink: "https://omnifood-website-nu.vercel.app/",
    github: "https://github.com/Edward-Stalley/Omnifood",
    course: true,
  },

  {
    id: "Guessing-Game",
    title: "Guessing-Game",
    image: require("/public/images/Guessing-Game-2.png"),
    imageTwo: require("/public/images/Guessing-Game-3.png"),
    imageThree: require("/public/images/Guessing-Game-1.png"),
    description: "A Number Guessing Game",
    objective: "To gain a better understanding of HTML and Javascript",
    development: "This guessing game was one of my first javascript projects.",
    tagline: "Review and Vocab Prep for Language Schools",

    process: "process here",
    tech: ["JS", "HTML", "CSS"],
    weblink: "https://number-guessing-game-iota.vercel.app/",
    github: "https://github.com/Edward-Stalley/Dice-Game/tree/main",
    course: false,
    oldProject: true,
    show: false,
  },

  {
    id: "Matching-Game",
    title: "Matching-Game",
    image: require("/public/images/Matching-Game-1.png"),
    imageTwo: require("/public/images/Matching-Game-2.png"),
    imageThree: require("/public/images/Matching-Game-3.png"),
    description: "A Card Matching Game",
    objective: "To gain a better understanding of HTML and Javascript",
    development: "This matching game was one of my first javascript projects.",
    tagline: "Review and Vocab Prep for Language Schools",

    process: "process here",
    tech: ["JS", "HTML", "CSS"],
    weblink: "https://card-matching-game-three.vercel.app/",
    github: "https://github.com/Edward-Stalley/Dice-Game/tree/main",
    course: false,
    oldProject: true,
    show: false,
  },

  // {
  //   id: "Bike-Website",
  //   title: "Bike-Website",
  //   image: require("/public/images/bicycle_site-2.png"),
  //   imageTwo: require("/public/images/bicycle_site-4.png"),
  //   imageThree: require("/public/images/bicycle_site-3.png"),
  //   description: "Bicycle Tour Website",
  //   objective: "To create a Landing Page for a bicycle tour company operating in Japan.",
  //   process: "This is a bicycle website",
  //   development:
  //     "I have always been interested in cycling. I cycled around Japan for 6 months and had many unforgettable experiences. During that time, the Inland Seto Sea in particular really stood out to me - so I decided to do a mockup cycle tour website for the area.",
  //   tagline: "Review and Vocab Prep for Language Schools",

  //   tech: ["CSS", "HTML"],
  //   weblink: "https://flashcards-1-2-baeu.vercel.app/",
  //   github: "https://github.com/Edward-Stalley/Flashcards-1.2",
  // },
];

export default projectData;

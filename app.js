console.log("Lets get loopy");

const ourBooks = [
  {
    title: "The Shadow of the Wind",
    imgSource:
      "https://upload.wikimedia.org/wikipedia/en/8/84/TheShadowOfTheWind.jpg",
    imgAlt:
      "The image shows the book cover. The Shadow of the Wind (Spanish: La sombra del viento) is a 2001 novel by the Spanish writer Carlos Ruiz Zafón and a worldwide bestseller. It is the first book in the series Cemetery of Forgotten Books.",
  },
  {
    title: "The Angel's Game",
    imgSource:
      "https://upload.wikimedia.org/wikipedia/en/6/60/El_Juego_del_Angel.jpg",
    imgAlt:
      "The image shows the book cover. Angel's Game (El juego del ángel, 2008) is a prequel to 2001's The Shadow of the Wind, by Spanish author Carlos Ruiz Zafón. The novel marks a return to The Cemetery of Forgotten Books in Barcelona's Raval district, and the Sempere & Sons bookshop. ",
  },
  {
    title: "The Prisioner of Heaven",
    imgSource:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/The_Prisoner_of_Heaven_-_bookcover.jpg",
    imgAlt:
      "The image shows the book cover. The Prisoner of Heaven (original title: El prisionero del cielo) is a 2011 book written by Carlos Ruiz Zafón. Originally published in Spanish, it was later translated to English by Lucia Graves. This is the third novel in the series The Cemetery of Forgotten Books written by the author.",
  },
  {
    title: "The Labyrinth of Spirits",
    imgSource:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/The_Labyrinth_of_Spirits_bookcover.jpg",
    imgAlt:
      "The Labyrinth of the Spirits (original title: El laberinto de los espíritus) is a fiction novel by Spanish author Carlos Ruiz Zafón. This is the fourth and final book in the Cemetery of Forgotten Books series.",
  },
  // {
  //   title: "Blood on the Streets: A-Z of Glasgow Crime",
  //   imgSource: "https://m.media-amazon.com/images/I/61iWaYOnzPL._SL1000_.jpg",
  //   imgAlt: "A book by Robert Jeffrey about street crime in Glasgow",
  // },
  // {
  //   title: "One Day",
  //   imgSource:
  //     "https://upload.wikimedia.org/wikipedia/en/6/6f/One_day_-_david_nicholls.jpg",
  //   imgAlt: "this is the image of the book One Day by David Nicholls",
  // },
  // {
  //   title: "Confident Presenter",
  //   imgSource: "https://m.media-amazon.com/images/I/612S0ew9bSL._SY466_.jpg",
  //   imgAlt:
  //     "this is the image of the book Confident Presenter by Andrea Pacini",
  // },
];

function DisplayStuff() {
  //   console.log(ourBooks.title[1]); // Almost there!
  console.log(ourBooks[1].title);

  for (let i = 0; i < ourBooks.length; i++) {
    console.log("the current number is", i);
    console.log(ourBooks[i]);

    // render the title onto the page
    // create a container for this individual book
    const myBookDiv = document.createElement("div");
    myBookDiv.classList = "individual-book";

    // reference the HTML section
    const container = document.getElementById("books-container");
    // create a new h2 element
    const myNewh2 = document.createElement("h2");
    // make the textcontent of that h2 tag be the title of the current book
    myNewh2.textContent = ourBooks[i].title;
    // append that title to the page
    myBookDiv.appendChild(myNewh2);

    // create a new img element DEMIR

    const aNewImage = document.createElement("img");
    // make the src of the element the imgSource of the current book: Vinay

    aNewImage.src = ourBooks[i].imgSource;
    // similar for the img's alt - Marina
    aNewImage.alt = ourBooks[i].imgAlt;
    // also make the img's width attribute 200 teaky hehe
    aNewImage.width = "200";

    // the image needs an event listener so that it knows when a click happens
    aNewImage.addEventListener("click", function () {
      console.log("Image clicked");
      // when the image is clicked, we want to add an image to the 'current-book' secton on the page.
      const NewCurrentImage = document.createElement("img");
      NewCurrentImage.src = ourBooks[i].imgSource;
      NewCurrentImage.alt = ourBooks[i].imgAlt;

      const currentBookSection = document.getElementById("current-book");
      currentBookSection.innerHTML = "";
      currentBookSection.appendChild(NewCurrentImage);

      // The following code we tried, but it had some strange behaviour!
      // const currentBookSection = document.getElementById("current-book");
      // currentBookSection.appendChild(aNewImage);
    });

    // then we need to append the image to the container
    myBookDiv.appendChild(aNewImage);

    // this adds our new book div to the section on the HTML
    container.appendChild(myBookDiv);
    // the loop ends on the next line
  }

  // the function ends on the next line
}
DisplayStuff();

// Frankie: Show how to use .forEach()
// -----------------------------audio-------------------------

const interviewAudio = document.getElementById("interview-audio");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const ffButton = document.getElementById("ff-button");
const rwButton = document.getElementById("rw-button");
const currentTimePTag = document.getElementById("current-time");

console.log(interviewAudio);

// My buttons need and "event listener" so that they can do a thing when an event happns
playButton.addEventListener("click", function () {
  // console.log("I have been clicked. Play the music maestro");
  interviewAudio.play();
});

pauseButton.addEventListener("click", function () {
  // console.log("pause button clicked");
  interviewAudio.pause();
});

ffButton.addEventListener("click", function () {
  console.log("ff button clicked");
  interviewAudio.currentTime = interviewAudio.currentTime + 10;
  // interviewAudio.currentTime += 10 // exactly the same result
});

rwButton.addEventListener("click", function () {
  console.log("rw button clicked");
  interviewAudio.currentTime = interviewAudio.currentTime - 10;
});

// To 'stop' our audio:
// indianGuitarAudio.stop() <-- this unfortunately doesnt work. COME ON JAVASCRIPT!!!
// instead:
// myAudio.pause(), myAudio.currentTime = 0

// how to update an HTML element with the current time of the audio
// https://stackoverflow.com/questions/4993097/html5-display-audio-currenttime
// add an event listener to the audio itself
interviewAudio.addEventListener("timeupdate", function () {
  console.log("change"); //see me in the console.
  const theTime = Math.floor(interviewAudio.currentTime);
  currentTimePTag.textContent = `Current Time: ${theTime}/${Math.floor(
    interviewAudio.duration
  )}`;
});

const jokeText=document.getElementById("joke-text");
const prevBtn=document.getElementById("prev");
const nextBtn=document.getElementById("next");
const jokes=[
"Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't programmers like nature? Too many bugs.",
  "Why did the math book look sad? Because it had too many problems."
  "Why don’t skeletons ever fight each other? Because they don’t have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why can’t your nose be 12 inches long? Because then it would be a foot!",
  "Parallel lines have so much in common… it’s a shame they’ll never meet.",
  "I told my computer I needed a break, and it said: 'No problem, I’ll go to sleep.'"
]
let currentJokeIndex = 0;
jokeText.innerText = jokes[currentJokeIndex];


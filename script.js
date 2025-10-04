let jokeText=document.getElementById("joke-text");
let prevbtn=document.getElementById("prev");
let nextbtn=document.getElementById("next")
let jokes=[
"Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't programmers like nature? Too many bugs.",
  "Why did the math book look sad? Because it had too many problems."
]
let currentJokeIndex = 0;
jokeText.innerText = jokes[currentJokeIndex];

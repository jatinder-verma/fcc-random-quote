var quotes = [
  "Life must be lived forwards, but can only be understood backwards.<br>-Kierkegaard",
  "Whatever you are, be a good one. <br>-Abraham Lincoln",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. <br>-Buddha",
  "As long as you live, keep learning how to live. <br>-Seneca",
  "Imagination, life is your creation. <br>-Aqua",
  "Life is ten percent what happens to you and ninety percent how you respond to it. <br>-Lou Holtz",
  "Every man dies, not every man lives <br>-William Wallace",
  "Love the life you live, and live the life you love. <br>-Bob Marley",
  "Try and fail, but never fail to try. <br>-Jared Leto",
  "Life is a mirror and will reflect back to the thinker what he thinks into it. <br>-Ernest Holmes",
  "Life is like riding a bicycle. To keep your balance you must keep moving. <br>-Albert Einstein",
  "The key to immortality is first living a life worth remembering. <br>-Bruce Lee",
  "If you dream it, you can do it. <br>-Walt Disney",
  "Never, never, never give up. <br>-Winston Churchill",
  "If not us, who? If not now, when? <br>-JFK",
  "Remember no one can make you feel inferior without your consent. <br>-Eleanor Roosevelt",
  "Life is trying things to see if they work. <br>-Ray Bradbury",
  "Don’t regret the past, just learn from it. <br>-Ben Ipock",
  "Believe you can and you’re halfway there. <br>-Theodore Roosevelt",
  "Eighty percent of success is showing up. <br>-Woody Allen",
  "The best revenge is massive success. <br>-Frank Sinatra",
  "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. <br>-Samuel Beckett",
  "We become what we think about. <br>-Earl Nightingale",
  "An obstacle is often a stepping stone. <br>-Prescott Bush"];

function newQuote() {
    'use strict';
    //Generate random number for random quotes 
    var ranNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quote").innerHTML = quotes[ranNum];
}

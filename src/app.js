/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let first = "A ";
  let adj = [
    "two headed ",
    "nuclear ",
    "angry ",
    "lonely ",
    "crazy ",
    "glowing ",
    "smelly ",
    "slow ",
    "old "
  ];
  let who = [
    "jogger ",
    "racoon ",
    "dog ",
    "merchant ",
    "driver ",
    "comedian ",
    "pinecone "
  ];
  let action = [
    "took my ",
    "threw my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "hit my "
  ];
  let what = [
    "toe ",
    "car ",
    "watch ",
    "shoe ",
    "wallet ",
    "shirt ",
    "keys ",
    "computer ",
    "phone ",
    "sandwich "
  ];
  let where = [
    "on the street",
    "in my house",
    "in my driveway",
    "in front of the office",
    "near the mall",
    "near the toilet",
    "at the bus station"
  ];
  let when = [
    " before the class",
    " when I was sleeping",
    " while I was exercising",
    " during my lunch",
    " while I was praying"
  ];

  let r1 = Math.floor(Math.random() * adj.length);
  let r2 = Math.floor(Math.random() * who.length);
  let r3 = Math.floor(Math.random() * action.length);
  let r4 = Math.floor(Math.random() * what.length);
  let r5 = Math.floor(Math.random() * where.length);
  let r6 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    first + adj[r1] + who[r2] + action[r3] + what[r4] + where[r5] + when[r6];
};

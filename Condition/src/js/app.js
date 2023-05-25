"use strict";

// 1 den 100e qeder ededlerin icinde 30 a bolunen
// ededi tapin ve hemin eded 2 ye ve 3 e bolunurse
// onu gosterin yox eger 2ye eyni zamanda 3 e
// bolunende qaliq alinirsa alinanq qaligin 3 e
// bolunmesinden alinan qaligi gosterin

var weekDays, IsClose, clock;
weekDays = Number(prompt("Enter the day: "));
weekDays <= 7;

clock = Number(prompt("Enter the hour: "));
clock <= 24;

if ((clock >= 19 || clock < 9) && (weekDays === 6 || weekDays === 7)) {
  IsClose = "Close";
  console.log(IsClose);
} else if (clock >= 13 && clock <= 14) {
  IsClose = "Open";
  console.log(IsClose);
  console.log("But it's a lunch time.");
} else if ((clock > 18 || clock < 9) && weekDays < 6) {
  IsClose = "Close";
  console.log(IsClose);
} else if ((clock <= 18 || clock >= 9) && weekDays < 6) {
  IsClose = "open";
  console.log(IsClose);
} else {
  console.log("Undefined options!");
}

"use strict";

// 1 den 100e qeder ededlerin icinde 30 a bolunen
// ededi tapin ve hemin eded 2 ye ve 3 e bolunurse
// onu gosterin yox eger 2ye eyni zamanda 3 e
// bolunende qaliq alinirsa alinanq qaligin 3 e
// bolunmesinden alinan qaligi gosterin

for (let i = 1; i <= 100; i++) {
  if (i % 30 == 0 && i % 2 == 0 && i % 3 == 0) document.writeln(i, "<br>");
  else if (i % 2 !== 0 && i % 3 !== 0) {
    m = i;
    document.writeln(m);
  }
}

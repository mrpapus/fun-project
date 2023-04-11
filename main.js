let cvn = document.getElementById("mycanvas");
let ctx = cvn.getContext("2d");

cvn.width = 500;
cvn.height = 500;
let happyArray = [];
for (let n = 50; n <= 200; n += 20) {
  happyArray.push(randomInt(5, 9));
}

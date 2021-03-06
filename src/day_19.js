// ##################### Part 1 #####################

const fs = require('fs')
const content = fs.readFileSync(process.cwd() + "\\" + "day_19_data.txt").toString()

/*
[
  [
    '38',                [ 826, -549, -638 ],
    [ -554, 372, 807 ],  [ 360, 744, 645 ],
    [ -39, -57, 38 ],    [ -639, 700, -756 ],
    [ 800, -857, 527 ],  [ 2, 123, -43 ],
    [ 808, -571, -455 ], [ -861, -384, -668 ],
    [ -484, 377, 672 ],  [ 765, -842, 679 ],
    [ -704, 810, -729 ], [ 530, 386, -395 ],
    [ 409, 795, 531 ],   [ -785, -459, -807 ],
    [ -704, -797, 879 ], [ 785, -570, -645 ],
    [ -763, -810, 744 ], [ 481, 776, 724 ],
    [ 578, 362, -380 ],  [ -631, 811, -745 ],
    [ 654, 361, -294 ],  [ -546, 497, 704 ],
    [ 811, -863, 616 ],  [ -800, -432, -788 ],
    [ -794, -777, 838 ]
  ], ...
]
*/
const contentArr = content
    .split("\r\n\r\n")
    .map(scanner => scanner
        .split("\r\n")
        .map((e, i) => {
            if (i === 0) return e.match(/\d+/g)[0]
            else return e.split(",").map(x => +x)
        }
        ))

console.log(contentArr);
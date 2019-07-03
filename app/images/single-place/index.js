import place1 from './r1.jpg';
import place2 from './r2.jpg';
import place3 from './r3.jpg';
import place4 from './r4.jpg';
import place5 from './r5.jpg';

const images = [place1, place2, place3, place4, place5];
const random1 = Math.floor(Math.random() * 5);
let random2 = random1;
let random3 = random1;

do {
  random2 = Math.floor(Math.random() * 5);
} while (random2 === random1);

do {
  random3 = Math.floor(Math.random() * 5);
} while (random3 === random1 || random3 === random2);

export const singlePlace = [
  {
    id: 1,
    img: images[random1]
  },
  {
    id: 2,
    img: images[random2]
  },
  {
    id: 2,
    img: images[random3]
  }
];

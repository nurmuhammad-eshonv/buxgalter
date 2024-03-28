let jami = parseFloat(
  prompt("qancha pulingiz borligini kiriting: (so'm)valyutasida")
);
let samolyot = 500 * 11000.34;
0.34;
let hotel = 250 * 11000.34;
let muzey = 120 * 12354.03;
let umumiy = samolyot + hotel + muzey;

let javob = jami - umumiy;
if (javob > 0) {
  console.log("oq yo'l alisher");
} else if (javob < 0) {
  console.log("ozgina sabr qilish kerak ekan");
}

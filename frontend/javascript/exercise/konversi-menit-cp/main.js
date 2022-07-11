/**
 * Konversikan menit pada paramter menjadi satuan jam.
 * Misal:
 * - 99 menjadi "1:39"
 * - 132 menjadi "2:12"
 *
 * notes:
 * - type data pada parameter akan selalu INTEGER
 * - type data pada result akan selalu berupa STRING
 */

function konversiMenit(input) {
  // TODO: answer here
  let JAM = Math.floor(input / 60);
  let MENIT = input % 60;
  if (JAM < 10) {
    JAM = JAM;
  }
  if (MENIT < 10) {
    MENIT = "0" + MENIT;
  }
  return JAM + ":" + MENIT;
}

console.log(konversiMenit(61));
console.log(konversiMenit(94));
console.log(konversiMenit(51));
console.log(konversiMenit(187));

module.exports = konversiMenit;

/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

const sumTotalArray = (numbers) => {
  return numbers.reduce((previous, current) => {
    const value = isNaN(current) ? 0 : current;
    return previous + value;
  }, 0);
};

module.exports = sumTotalArray;

import wordBank from "./wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let todaysSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n").map((word) => word.trim());
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      todaysSet = new Set(wordArr);
    });

  return { todaysSet, todaysWord };
};

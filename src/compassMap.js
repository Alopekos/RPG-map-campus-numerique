import data from "./data.js";
export { compassData };
const compassData = [];
const compassSquareSize = 6;

for (let i = 0; i < compassSquareSize; i++) {
  compassData[i] = [];
  for (let j = 0; j < compassSquareSize; j++) {
    compassData[i][j] = 0;
  }
}

const createKnownMaps = () => {
  compassData[1][0] = 1;
  compassData[1][1] = 2;
  compassData[0][1] = 3;
  compassData[0][2] = 4;
  compassData[1][2] = 5;
  compassData[2][2] = 6;
  compassData[3][2] = 7;
  compassData[4][2] = 8;
  compassData[5][2] = 9;
  compassData[4][1] = 13;
  compassData[4][0] = 14;
  compassData[3][0] = 15;
  compassData[3][4] = 16;
  compassData[2][4] = 17;
};

const createUnknownMaps = () => {
  compassData[2][1] = "x";
  compassData[1][4] = "x";
  compassData[2][5] = "x";
};
console.log(compassData);
createUnknownMaps();
createKnownMaps();

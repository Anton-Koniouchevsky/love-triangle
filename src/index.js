/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  preferences.forEach((spichonee, index) => {
    if((spichonee - 1 != index) && (preferences[preferences[spichonee - 1] - 1] - 1 == index)) count++
  });
  return count / 3;
};

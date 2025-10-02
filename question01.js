function lowerCaseWords(input) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(input)) {
      return reject(new TypeError("Input must be an array"));
    }

    const result = input
      .filter(v => typeof v === "string")
      .map(s => s.toLowerCase());

    if (result.length === 0) {
      return reject(new Error("No string elements found"));
    }

    resolve(result);
  });
}

if (require.main === module) {
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
  lowerCaseWords(mixedArray)
    .then(console.log)     
    .catch(err => console.error(err.message));
}

module.exports = { lowerCaseWords };
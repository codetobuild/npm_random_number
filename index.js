function getRandom(start = 0, end = 10) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

module.exports = {
  getRandom,
};

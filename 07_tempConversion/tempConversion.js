const ftoc = function(num) {
  let cel = (num - 32) * (5/9)
  cel = Math.round(cel * 10) / 10
  return cel
};

const ctof = function(num) {
  let far = (num * (9/5)) + 32
  far = Math.round(far * 10) / 10
  return far
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

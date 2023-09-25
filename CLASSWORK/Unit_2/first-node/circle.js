module.exports = {
    area,
    circumference
}

function area(radius) {
    return Math.PI * Math.pow(radius, 2);
  };
  
function circumference(radius) {
    return 2 * Math.PI * radius;
  };
  
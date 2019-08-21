// Given a time in 12-hour AM/PM format, convert
// it to military (24-hour) time.

//Sample Input
//07:05:45PM

//Sample Output 0
//19:05:45

function timeConversion(s) {
  let e, x = parseFloat(s);
  let newString = s.slice(2, s.length - 2);
  let hourFormat = s.slice(s.length - 2, s.length);
  let withOutFormat = s.slice(0, s.length - 2);

  if (hourFormat === 'PM' && x != 12) {
      x += 12;

      if (x >= 24) {
          e = x - 24;
          x = e;
          x.toString();
          newString = x + newString;
      } else {
          newString = x + newString;
      }
      return newString;

  } else if (hourFormat === 'AM' && x === 12) {
      newString = '00' + newString;
      return newString;
  } else {
      return withOutFormat;
  }
}

// This problem is from https://www.hackerrank.com/

export default function colorCodeConverter(color) {
  //expected color is "#hex" format in a string data type
  let colorinUpperCase = color.toUpperCase();
  let onlyHexString = colorinUpperCase.substring(1, colorinUpperCase.length);
  let stringInRGBArray = onlyHexString.match(/.{1,2}/g);
  let colorInRGBArray = stringInRGBArray.map(element => {
    //converting a hex string to its decimal equivalent
    return parseInt(element, 16);
  });
  let rgb = `rgb(${colorInRGBArray[0]},${colorInRGBArray[1]},${
    colorInRGBArray[2]
  })`;
  let rgba = `rgba(${colorInRGBArray[0]},${colorInRGBArray[1]},${
    colorInRGBArray[2]
  },1)`;
  let hex = onlyHexString;
  let _hex = `#${hex}`;

  return { hex, _hex, rgb, rgba };
}

const chunkArray = (myArray, chunkSize) => {
  //console.log({ myArray, chunkSize });
  let results = [];
  if (myArray && myArray.length)
    while (myArray.length) {
      results.push(myArray.splice(0, Math.ceil(chunkSize)));
    }

  return results;
};
export default chunkArray;

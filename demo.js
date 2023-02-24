function countAlpha(myName) {
    const counts = {};
    for (let i = 0; i < myName.length; i++) {
      const character = myName[i];
      counts[character] = (counts[character] || 0) + 1;
    }
    return counts;
  }
  function output(object) {
    const result = JSON.stringify(object,null,2);
    console.log(result);
  }
  const myName = 'suganesh ranga';
  const counts = countAlpha(myName);
  output(counts);
  
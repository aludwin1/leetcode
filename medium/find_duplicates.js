const findDuplicates = nums => {
  const newArr = [];
  while(nums.length) {
      let num = nums.shift();
      if(nums.indexOf(num) > -1) newArr.push(num);
  }
  return newArr;
};

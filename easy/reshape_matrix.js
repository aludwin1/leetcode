const matrixReshape = (nums, r, c) => {
    if(r * c > nums.length * nums[0].length) return nums;
    let flatArr = nums.reduce((acc, row) => acc.concat(row), []);
    let reshapedMatrix = [];
    for(let i = 0; i < r; i++) {
        let newRow = [];
        for(let j = 0; j < c; j++) {
            newRow.push(flatArr.shift());
        }
        reshapedMatrix.push(newRow);
    }
    return reshapedMatrix;
};

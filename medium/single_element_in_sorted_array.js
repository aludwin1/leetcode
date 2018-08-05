/* Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once. */

const singleNonDuplicate = (nums) => {
    const numsClone = nums.slice();
    for(let i = 0; i < numsClone.length; i++) {
        nums.splice(nums.indexOf(numsClone[i]), 1);
        if(nums.indexOf(numsClone[i]) === -1) return numsClone[i];
        i++;
    }
};

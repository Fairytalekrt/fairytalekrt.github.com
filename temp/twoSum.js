const towSum = (nums, target) => {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                arr = [i, j];
                break;
            }
        }
        
    }
    return arr;
};
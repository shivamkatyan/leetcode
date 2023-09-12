function majorityElement(nums: number[]): number {
  let k;
  let m = 0;
  nums.forEach((num) => {
    if (m === 0) {
      k = num;
    }
    m += num === k ? 1 : -1;
  });
  return k;
}

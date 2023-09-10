function removeElement(nums: number[], val: number): number {
	let key = 0;

	for (let i = 0; i < nums.length; i++) {
		if (val !== nums[i]) {
			nums[key] = nums[i];
			key++;
		}
	}

	return key;
}
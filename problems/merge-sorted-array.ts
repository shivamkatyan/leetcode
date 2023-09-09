/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1.splice(m + i, 1, nums2[i]);
  }
  nums1 = nums1.sort((a, b) => a-b);
}

/**
 * alt: to further simplify
 * for loop could be replaced with nums1.splice(m, n, ...nums2); 
 */

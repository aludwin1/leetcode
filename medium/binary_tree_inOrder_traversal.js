const inorderTraversal = function(root) {
  if(!root) return [];
  let nums = [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
  return nums;
};

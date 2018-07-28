const inorderTraversal = root => {
  if(!root) return [];
  const nums = [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
  return nums;
};

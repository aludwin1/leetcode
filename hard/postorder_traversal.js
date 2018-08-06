const postorderTraversal = (root) => {
    if(!root) return [];
    return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat(root.val);
};

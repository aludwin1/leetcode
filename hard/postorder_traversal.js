const postorderTraversal = (root) => {
    if(!root) return [];
    if(root.left && root.right) return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat(root.val);
    else if(root.right) return postorderTraversal(root.right).concat(root.val);
    else if(root.left) return postorderTraversal(root.left).concat(root.val);
    return [root.val];
};

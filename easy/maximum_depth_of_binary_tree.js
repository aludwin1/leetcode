const maxDepth = (root) => {
    if(!root) return 0;
    else if(root.right && root.left) return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
    else if(root.left) return 1 + maxDepth(root.left);
    else if(root.right) return 1 + maxDepth(root.right);
    return 1;
};

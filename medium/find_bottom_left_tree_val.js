const findBottomLeftValue = root => {
  const nodes = [root];
  while (nodes.length > 0) {
      root = nodes.shift();
      if(root.right) nodes.push(root.right);
      if(root.left) nodes.push(root.left);
  }
  return root.val;
};

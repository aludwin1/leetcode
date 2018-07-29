const findBottomLeftValue = root => {
  const nodes = [root];
  let lastNode;
  while (nodes.length > 0) {
      lastNode = nodes.shift();
      if(lastNode.right) nodes.push(lastNode.right);
      if(lastNode.left) nodes.push(lastNode.left);
  }
  return lastNode.val;
};

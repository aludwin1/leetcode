const findBottomLeftValue = root => {
  const allNodes = [root];
  let lastNode;
  while (allNodes.length > 0) {
      lastNode = allNodes.shift();
      if(lastNode.right) allNodes.push(lastNode.right);
      if(lastNode.left) allNodes.push(lastNode.left);
  }
  return lastNode.val;
};

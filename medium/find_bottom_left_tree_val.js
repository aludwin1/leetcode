const findBottomLeftValue = root => {
  let nodes = [root];
  let allNodes = [];
  while (nodes.length > 0) {
      let currentNode = nodes.shift();
      if(currentNode.right) {
          nodes.push(currentNode.right);
          allNodes.push(currentNode.right);
      }
      if(currentNode.left) {
          nodes.push(currentNode.left);
          allNodes.push(currentNode.left);
      }
  }
  if(allNodes.length === 0) return root.val;
  else return allNodes.pop().val;
};

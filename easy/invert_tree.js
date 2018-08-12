const invertTree = node => {
    if(!node) return null;
    else [node.left, node.right] = [invertTree(node.right), invertTree(node.left)]
    return node;
}

const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }
  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addNewNode(this.treeRoot, data);

    function addNewNode(node, data) {

      if (!node) return new Node(data);

      if (node.data === data) return node;

      if (data < node.data) {
        node.left = addNewNode(node.left, data);
      } else {
        node.right = addNewNode(node.right, data);
      }

      return node;

    }
  }

  has(data) {
    // return this.find(data) ? true : false;
  }

  find(data) {
    // return searchIn(this.treeRoot, data);

    // function searchIn(node, data) {

    //   if (!node) return null;

    //   if (node.data === data) return node;

    //   if (data < node.data) {
    //     return searchIn(node.left, data)
    //   } else {
    //     return searchIn(node.right, data);
    //   }
    // }
  }

  remove(data) {
    // this.treeRoot = removeNode(this.treeRoot, data);

    // function removeNode(node, data) {

    //   if (!node) return null;

    //   if (data < node.data) {
    //     node.left = removeNode(node.left, data);
    //     return node;
    //   } else if (node.data < data) {
    //     node.right = removeNode(node.right, data);
    //     return node;
    //   } else {

    //     if (!node.left && !node.right) {
    //       return;
    //     }

    //     if (!node.left) {
    //       node = node.right;
    //       return node;
    //     }

    //     if (!node.right) {
    //       node = node.left;
    //       return node;
    //     }

    //     let minRight = node.right;
    //     while (minRight.left) {
    //       minRight = minRight.left;
    //     }
    //     node.data = minRight.data;

    //     node.right = removeNode(node.right, minRight.data);

    //     return node;
    //   }
    // }
  }

  min() {
    // if (!this.treeRoot) return null;

    // let min = this.treeRoot;

    // while (min.left) min = min.left;

    // return min.data;
  }

  max() {
    // if (!this.treeRoot) return null;

    // let max = this.treeRoot;

    // while (max.right) max = max.right;

    // return max.data;
  }
}

module.exports = {
  BinarySearchTree
};
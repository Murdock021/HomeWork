'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
 }
 
 BinarySearchTree.prototype.size = function() {
   let leftSize = 0;
   let rightSize = 0;
   if (this.left) {
     leftSize = this.left.size();
   }
   if (this.right) {
     rightSize = this.right.size();
   }
   return leftSize + rightSize + 1;
 };
 
 BinarySearchTree.prototype.insert = function (value) {
   if (value < this.value) { // es mejor ? 
     if (this.left) {       // this.Left  !== null
       this.left.insert(value);
      } else {
       this.left = new BinarySearchTree(value);
      }
   } else {
     if (this.right) { // Es major o igual ? 
       this.right.insert(value);
      } else {
      this.right = new BinarySearchTree(value);
     }
   }
 };
 
 BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) {
     return true;
   } else if (value < this.value) {
     return !!this.left && this.left.contains(value);
   } else {
     return !!this.right && this.right.contains(value);
   }
 };
 
 BinarySearchTree.prototype.depthFirstForEach = function (
   callback,
   order = "in-order"
 ) {
   if (order === "pre-order") {
     callback(this.value);
   }
   if (this.left) {
     this.left.depthFirstForEach(callback, order);
   }
   if (order === "in-order") {
     callback(this.value);
   }
   if (this.right) {
     this.right.depthFirstForEach(callback, order);
   }
   if (order === "post-order") {
     callback(this.value);
   }
 };
 
 BinarySearchTree.prototype.breadthFirstForEach = function (callback) {
   let queue = [this];
   while (queue.length > 0) {
     let node = queue.shift();
     callback(node.value);
     if (node.left) {
       queue.push(node.left);
     }
     if (node.right) {
       queue.push(node.right);
     }
   }
 };
 
  
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};

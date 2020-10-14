/*
This is a middle of the road solution, uses plain javascript, adds the flavor list item 
to the DOM on each iteration
*/

//select list
var list = document.getElementsByClassName("ice-cream-list");

//iterate through the array if array exists and its not empty
if (typeof iceCreamFlavors !== "undefined" && iceCreamFlavors.length > 0){
  iceCreamFlavors.forEach((flavor) => {
    //create new list node
    var node = document.createElement("LI");
    //add class
    node.className = "ice-cream-flavor";
    //add flavor
    var listItem = document.createTextNode(flavor);
    node.appendChild(listItem);
    //append list element to list
    list[0].appendChild(node);
  });
}
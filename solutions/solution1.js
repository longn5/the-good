/*
This solution is the slowest in terms of speed of accessing the DOM, jQuery has overhead
when creating jQuery objects.
*/

//iterate through the array if array exists and its not empty
if (typeof iceCreamFlavors !== "undefined" && iceCreamFlavors.length > 0) {
  $(document).ready(function () {
    //iterate through flavor array
    iceCreamFlavors.forEach((flavor) => {
      //append list item to list
      $(".ice-cream-list").append(`<li class="ice-cream-flavor">${flavor}</li>`);
    });
  });
}
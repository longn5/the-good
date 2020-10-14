/*
This solution is the fastest out of the three because it only modifies the DOM once, not
like solution 2 where it modify the DOM through each iteration of the flavor array.
*/

//iterate through the array if array exists and its not empty
if (typeof iceCreamFlavors !== "undefined" && iceCreamFlavors.length > 0){
    //create an empty arry to store list items
    var listItemArray = [];
    //iterate through flavor array and push to list item array
    iceCreamFlavors.forEach((flavor => {
        listItemArray.push(`<li class="ice-cream-flavor">${flavor}</li>`);
    }))
    //adding the flavor array to the DOM once
    document.getElementsByClassName("ice-cream-list")[0].innerHTML = listItemArray.join('');
}
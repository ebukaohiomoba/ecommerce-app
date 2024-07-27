let productcount = 0;
let thumbnailpictures = document.getElementsByTagName("img")
let userSearch = parseInt(document.getElementsByClassName("search-input").innerText)
document.getElementById("product-count").innerText = productcount;

function deleteproduct() {
    if (productcount <= 0){
        alert("There should be at least 1")
        return false;
    } else {
        productcount = productcount - 1 
        document.getElementById("product-count").innerText = productcount;
    }
}

function addproduct() {
    if (productcount >= 20){
        alert("You've added the maximum number")
    } else {
        productcount = productcount + 1 
        document.getElementById("product-count").innerText = productcount;
    }
}

function productLookup(){
    for(let i =0; i<= userSearch.length;i++){
        console.log( 'We have the item' + userSearch + " available.")
    }
}
// for(let i=0; i <= thumbnailpictures.length; i++){
//     thumbnailpictures[i].onmouseover = function (){
//         this.style.borderColor = "red";
//     }
//     thumbnailpictures[i].onmouseout = function (){
//         this.style.borderColor = "grey";
//     }
// }





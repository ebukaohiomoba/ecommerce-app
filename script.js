let productcount = 0;
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



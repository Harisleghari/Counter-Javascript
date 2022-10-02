let count = 0;

function increaseValue() {
    count++;
    document.getElementById("number").innerHTML = count;
    
}

function decreaseValue() {
    count--;
    document.getElementById("number").innerHTML = count;
}

function resetValue() {
    document.getElementById("number").innerHTML = 0;
}
function button() {
    if (document.getElementById("fname").value !== ""){
    document.getElementById("welcome").innerHTML = `Tervetuloa, ${document.getElementById("fname").value}!`;
} else {
    return;
}
}
let icon = document.getElementsByClassName("share-icon");
let share = document.getElementsByClassName("share")[0];
for (let i = 0; i < icon.length; i++){

    icon[i].addEventListener("click", function() {
        if (getComputedStyle(share).display == "none") {
            share.style.display = "flex";
        }
        else {
            share.style.display = "none";
        }
    })
}
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const altText = { 0: "a human eye", 1: "a rock", 2: "flowers", 3: "Ancient Egypt glyphs", 4: "a butterfly" };

/* Looping through images */
for (let i = 0; i < filenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', altText[i]);
    newImage.addEventListener("click", () => {
        displayedImage.src = filenames[i];
        displayedImage.alt = altText[i];
    })
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    btn.getAttribute("class") == "dark" ? (btn.setAttribute("class", "light"), btn.textContent = "Lighten", overlay.style.backgroundColor = "rgb(0 0 0 / 50%)") : (btn.setAttribute("class", "dark"), btn.textContent = "Darken", overlay.style.backgroundColor = "rgb(0 0 0 / 0%)");
})
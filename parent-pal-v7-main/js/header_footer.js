// Loads header and footer
fetch("/html/include/header.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("header").innerHTML = data;
});

fetch("/html/include/footer.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("footer").innerHTML = data;
});


// not signed in

// signed in

function updateProgress(percent) {
    const fill = document.getElementById("progress-fill");
    const runner = document.getElementById("runner");
    const text = document.getElementById("point-text");
    fill.style.width = percent + "%";

    runner.style.left = `calc(${percent}% - 15px)`; // offset to keep it visually inside

//   text.textContent = percent + "%";
}
setTimeout(() => updateProgress(90), 1000);

window.addEventListener('DOMContentLoaded', () => {
    const fill = document.getElementById("progress-fill");
    const runner = document.getElementById("runner");
    const initialPercent = parseFloat(fill.style.width) || 70; // fallback to 70
    runner.style.left = `calc(${initialPercent}% - 15px)`;
});

const decreseBtn = document.getElementById("decreseBtn");
const increseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increseBtn.onclick = () => {
    count++;
    countLabel.textContent = count;
}

decreseBtn.onclick = () => {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = () => {
    count = 0;
    countLabel.textContent = count;
}
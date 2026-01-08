document.getElementById("year").textContent = new Date().getFullYear();

const jumpMenu = document.getElementById("jumpMenu");
jumpMenu.addEventListener("change", () => {
    const v = jumpMenu.value;
    if (v) window.location.hash = v;
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".thumb").forEach(btn => {
    btn.addEventListener("click", () => {
        const src = btn.getAttribute("data-img"); // ✅ matches the HTML now
        modalImg.src = src;
        modal.classList.add("show");
    });
});

function closeModal() {
    modal.classList.remove("show");
    modalImg.src = "";
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

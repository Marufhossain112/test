const links = document.querySelectorAll(".sidebar-option");

for (const link of links) {
    link.addEventListener("click", function () {
        for (const otherLink of links) {
            otherLink.classList.remove("active");
        }
        this.classList.add("active");
    });
}
const yearLinks = document.querySelectorAll(".years li");

for (const link of yearLinks) {
    link.addEventListener("click", function () {
        for (const otherLink of yearLinks) {
            otherLink.classList.remove("selected");
        }
        this.classList.add("selected");
    });
}
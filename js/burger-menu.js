document.addEventListener("DOMContentLoaded", () => {
    const buttonBugger = document.querySelector("#menu-bugger");

    function toggleMenu() {
        this.classList.toggle('menu-open');
    }

    if (buttonBugger) {
        buttonBugger.addEventListener("click", toggleMenu);
    }
})
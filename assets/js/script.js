const toggleDarkMode = document.getElementById("dark-mode-toggle");
// const toggleInner = document.getElementById("dark-mode-toggle").innerText;
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

if (theme === "dark") {
    toggleDarkMode.innerText = "☀️";
} else if (theme === "light") {
    toggleDarkMode.innerText = "🌑";
} 

toggleDarkMode.addEventListener("click", () => {
    let currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
        toggleDarkMode.innerText = "🌑";
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        toggleDarkMode.innerText = "☀️";
    }
});



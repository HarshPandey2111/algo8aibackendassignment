
function toggleTheme() {
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    
    // Toggle between dark and light mode
    if (currentTheme === "light") {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark"); // Save user's preference
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  }
  
// last prefference save 
  window.onload = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  };
  

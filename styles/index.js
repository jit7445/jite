document.getElementById("menu").addEventListener("click", function () {
  document.getElementById('hamburger_menu').style.right = "0%";
  console.log("clicked");
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById('hamburger_menu').style.right = "-147%";
  console.log("cut");
});
  const container = document.getElementById("project");
  const showProjectButton = document.getElementById("showproject");

  showProjectButton.addEventListener('click', function () {
    if (container.style.display === 'none' || container.style.display === '') {
      container.style.display = 'grid';
    } else {
      // container.style.display = 'none';
      console.log("clicked")
      container.style.transition = 'all 2s ease-in';
        container.style.opacity = '0'; 
        setTimeout(() => {
            container.style.display = 'none';
            // container.style.opacity = '1'; 
            container.style.transition = ''; 
        }, 3000);
    }
  })
  function download(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
 
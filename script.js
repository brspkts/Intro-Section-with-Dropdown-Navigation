

function showMenu1() {
    const x = document.getElementById('toggle1');
    const a = document.getElementById("arrow-down1");
    
    if (x.style.display === 'none') {
        x.style.display = 'block';
        a.src = "./images/icon-arrow-up.svg";
    } else {
    x.style.display = 'none';
    a.src ="./images/icon-arrow-down.svg";
    }
}

function showMenu2(){
    const b = document.getElementById("arrow-down2");

    const y= document.getElementById("toggle2");
    if (y.style.display=== 'none'){
        y.style.display = 'block';
        b.src ="./images/icon-arrow-up.svg";
    } else {
        y.style.display = 'none';
        b.src = "./images/icon-arrow-down.svg"
    }
}
function openNavbar() {
    const x = document.getElementById("navbar");
    let c = document.getElementById("menu-close");
    
    if (x.style.display === "block") {
      x.style.display = "none"
      c.src ="./images/icon-menu.svg"
    } else {
      x.style.display = "block";
      c.src = "./images/icon-close-menu.svg"
    }
  }

  


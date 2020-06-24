document.addEventListener("mousemove", (e)=> {
  var container = document.querySelector(".container");
  var butterfly = document.createElement('span')
  
  var x = e.offsetX;
  var y = e.offsetY;
  
  butterfly.style.left = `${x}px`;
  butterfly.style.top = `${y}px`;

  var size = Math.random() * 50;
  
  butterfly.style.width = `${30+size}px`
  butterfly.style.height = `${30+size}px`

  container.appendChild(butterfly)

  setTimeout(()=> {
    butterfly.remove();
  }, 3500)
})
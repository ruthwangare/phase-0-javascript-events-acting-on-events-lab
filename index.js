const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const left = parseInt(dodger.style.left)
    if (left > 0) {
      dodger.style.left = `${left - 4}px`
    }
  }
  function moveDodgerRight() {
    const rightnumbers = dodger.style.left.replace("px","");
    const right = parseInt(rightnumbers, 10);
    if (right > 0) {
      dodger.style.left = `${right + 1}px`;
    }
  }

  document.addEventListener("keydown", function (e){
       if (e.key === "ArrowRight"){
        moveDodgerright();
       }
  });




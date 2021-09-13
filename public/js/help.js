function showPropDisplay(ans) {
  const helpDisplay = document.getElementById('helpDisplay');
  const propDisplay = document.getElementById('propDisplay');
  const displayText = document.getElementById('displayText')

  helpDisplay.style.display="none";
  propDisplay.style.display="block";

  if(ans===true) {
    displayText.innerHTML = "Thank you for participating! " + displayText.innerHTML;
  } else {
    displayText.innerHTML = "Well FUCK YOU! Go hug a tree you loser";
  }

}

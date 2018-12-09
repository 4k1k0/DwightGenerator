window.onload = () => {
  let button = document.getElementById('button');
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  let img = new Image();
  img.onload = function(){
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    context.drawImage(img, 0, 0);
  }
  img.src = 'dwight.jpg';
  button.onclick = () => {
    let phrase = document.getElementById('phrase').value.trim();
    if(phrase === null || phrase === '') {
      return;
    }
    phrase = '(' + phrase + ' playing on car stereo)';
    phrase = phrase.toUpperCase();
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let img = new Image();
    img.src = "dwight.jpg";
    img.onload = () => {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    context.drawImage(img, 0, 0);
    context.font = "25pt Calibri";
    context.fillStyle = 'white';
    context.textAlign="center";
    let x = img.naturalWidth / 2;
    let y = img.naturalHeight - 50;
    context.fillText(phrase, x, y);
    }
  }
}

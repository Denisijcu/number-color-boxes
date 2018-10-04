 const boxes = document.querySelectorAll('.column');

 const colors = [
   'rgb(255, 255, 255)', //0
   'rgb(255, 165, 0)', //1
   'rgb(0, 128, 0)', //2
   'rgb(128, 0, 128)', //3
   'rgb(255, 192, 203)' //4
 ];


 for (let i = 0; i < boxes.length; i++) {
   boxes[i].textContent = i + 1;
 }

 class Squares {
   constructor(colors) {
     this.colors = colors;
     this.addClickHandlers();
   }
   changeNumber(num) {
     //console.log("Running changeNumber");
     for (let i = num; i > 0; i--) {
       let value = parseInt(boxes[i - 1].textContent);
       value = (value >= 12) ? 1 : value + 1;
       boxes[i - 1].textContent = value;
       console.log(value);
     }
   }
   changeColor(num) {
     //console.log("Runing changeColor");
     for (let i = num; i > 0; i--) {
       let style = window.getComputedStyle(boxes[i - 1]);
       let index = this.colors.indexOf(style.backgroundColor);
       index = (index >= this.colors.length - 1) ? 0 : index + 1;
       boxes[i - 1].style.backgroundColor = this.colors[index];
       //  console.log(style);
     }

   }

   addClickHandlers() {
     boxes.forEach(box => {
       box.addEventListener('click', e => {
         this.changeNumber(box.dataset.place);
         this.changeColor(box.dataset.place);
       });
     })
   }
 }


 const newSquare = new Squares(colors);
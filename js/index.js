$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

document.querySelector('.arrow')
 .addEventListener('click', slideImg);


const imgArray = [
  'img/industrial-design-two.jpg',
];
let imgIdx = 0;

function slideImg() {
  imgIdx = imgIdx >= imgArray.length - 1 ? 0 : imgIdx + 1;

  const img = document.querySelector('.card img');
  img.src = imgArray[imgIdx];
}

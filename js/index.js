$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

document.querySelector('.arrow')
 .addEventListener('click', slideImg);


const imgArray = [
  'https://via.placeholder.com/150x300/aaa/fff',
  'https://via.placeholder.com/150x300/f09/fff',
  'https://via.placeholder.com/150x300/bbb/ccc'
];
let imgIdx = 0;

function slideImg() {
  imgIdx = imgIdx >= imgArray.length - 1 ? 0 : imgIdx + 1;

  const img = document.querySelector('.card img');
  img.src = imgArray[imgIdx];
}
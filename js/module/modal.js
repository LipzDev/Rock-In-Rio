export default function initModal(){
  const button = document.querySelector('.background button');
  const closeButton = document.querySelector('.close--button');
  const modal = document.querySelector('.modal');

  function modalEvent(){
    modal.classList.toggle('ativo');
  }

  button.addEventListener('click', modalEvent);
  closeButton.addEventListener('click', modalEvent);
}
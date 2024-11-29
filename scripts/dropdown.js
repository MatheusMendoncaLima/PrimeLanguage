const perfil = document.querySelector('.perfil')
const menu = document.querySelector('.menu')

perfil.onclick = () => {
  menu.classList.toggle('ativo');
}

const hamburguer = document.querySelector('.hamburguer')
const drop_nivel = document.querySelector('.drop-nivel')
hamburguer.onclick = () => {
  drop_nivel.classList.toggle('ativo');
}
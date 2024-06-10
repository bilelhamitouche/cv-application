
export function expandHandler(e) {
  e.target.parentNode.childNodes[1].classList.toggle('visible');
  console.log(e.target.parentNode.childNodes);
}

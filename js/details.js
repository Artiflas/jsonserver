// javascript for details.html

const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('details');

const renderDetails = async () => {
  const res = await fetch('http://localhost:5500/posts/' + id);
  const post = await res.json();

  const template = `
  <h1>${post.title}</h1>
  <p>${post.body}</p>  
  `

}

window.addEventListener('DOMContentLoaded', () => renderDetails());

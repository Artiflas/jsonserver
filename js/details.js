// javascript for details.html

const id = new URLSearchParams(window.location.search).get('id');

const renderDetails = async () => {
  const res = await fetch('http://localhost:5500/posts/' + id);
  const post = await res.json();
  

}

window.addEventListener('DOMContentLoaded', () => renderDetails());

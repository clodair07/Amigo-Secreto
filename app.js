let amigoSecreto = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let sortearNome = document.getElementById("resultado");

let amigos = [];

// Adicina o nome do amigo na lista.
function adicionarAmigo() {
  const amigo = amigoSecreto.value;
  if (amigo && !amigos.includes(amigo.toUpperCase())) {
    amigos.push(amigo.toUpperCase());
    listaAmigos.textContent = amigos.join(", ");
    amigoSecreto.value = "";
  }
}

// Sortea os nomes na lista.
function sortearAmigo() {
  sortearNome.innerHTML = "";

  embaralhaNomes(amigos);
  for (a = 0; a < amigos.length; a++) {
    if (a == amigos.length - 1) {
      sortearNome.innerHTML += `${amigos[a]} --> ${amigos[0]}<br>`;
    } else {
      sortearNome.innerHTML += `${amigos[a]} --> ${amigos[a + 1]}<br>`;
    }
  }
}

// Embaralhas os nomes;
function embaralhaNomes(arr) {
  for (let a = arr.length - 1; a > 0; a--) {
    const b = Math.floor(Math.random() * (a + 1));
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
}

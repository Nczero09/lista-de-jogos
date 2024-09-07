function pesquisar() {
  console.log ("ping")
  let section = document.getElementById("resultados-pesquisa")
console.log (section)

let campoPesquisa = document.getElementById ("campo-pesquisa").value
console.log ()
if (!campoPesquisa) {
  section.innerHTML = "<p>nada foi encotrado</p>"
  return
}

compoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {
  titulo = dado.titulo.toLowerCase ()
  descricao = dado.descricao.toLowerCase ()
  tags = dado.tags.toLowerCase ()

  if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ||tags.includes(campoPesquisa)) {
      resultados += `
      <div class="item-resultado">
        <h2>
          ${dado.titulo}
        </h2>
        <p>${dado.descricao}</p>
        <p>${dado.tags}</p>
        <a href="${dado.link}" target="_blank"> Compre clique aqui </a>
      </div>
    `;

  }
  
  }
  if (!resultados) { 
 resultados = "<p>nada foi encotrado</p>"
}
section.innerHTML = resultados

}





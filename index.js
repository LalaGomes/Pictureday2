let buscarButton = document.getElementById("buscar");
// let dados = ''
buscarButton.addEventListener('click', ()=>{
    console.log('Botão pressionado')
   sendApiRequest()
})


async function sendApiRequest (){
    let data = document.getElementById("buscarTermo").value;
    let API_KEY = "kdGKLWvAv78JgJ3VVaAUtJbR3eZjKOzqju2h9962";
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${data}`);
    const result = await response.json();
    let dados = result;
    console.log(result);
    useApiData(dados)
    };

function useApiData(dados){
    document.querySelector("#title").innerHTML += dados.title;
    document.querySelector("#content").innerHTML = dados.explanation;
    if (dados.media_type === "image") {
        document.querySelector("#content").innerHTML +=
        `<section id="imagem">
            <img src="${dados.url}" alt="">
        </section>
    `
    } else {
        document.querySelector("#content").innerHTML =
       ` <section id="img">
            <iframe width="560" height="315" src="${dados.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>`
    }
    // // document.querySelector("#content").innerHTML = dados.title;
    // document.querySelector("#content").innerHTML += `<img src="${dados.url}">`;
    // document.querySelector("#content").innerHTML =
    //    ` <section id="imagem">
    //         <iframe width="560" height="315" src="${dados.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //     </section>;`
}




// // composicao.classList.add("destaques");
// //             detalhes.classList.remove("destaques")
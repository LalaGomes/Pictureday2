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
    document.querySelector("#content").innerHTML = dados.explanation;
    // document.querySelector("#content").innerHTML = dados.title;
    document.querySelector("#content").innerHTML += `<img src="${dados.url}">`;
}
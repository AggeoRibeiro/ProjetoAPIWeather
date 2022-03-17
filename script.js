const apiKey=""
const url_tempo= "http://api.openweathermap.org/data/2.5/weather?"
const url_cidade="http://api.openweathermap.org/geo/1.0/direct?"
var latitude
var longitude
var resposta1
var posicao
var minima
var maxima
var descricao
var avisoAoUsuario


function result(){
    var cidadePesquisada=document.getElementById('cidadePesquisada').value
    var response=document.getElementById('response')
    fetch(`${url_cidade}q=${cidadePesquisada}&limit=5&appid=${apiKey}`).then(result=>result.json()).then(result=>{
            for(var i=0; i<result.length; i++){
                var resposta= JSON.stringify(result)
                console.log(resposta)
                localStorage.setItem('resposta', resposta)
                posicao=i
            if (typeof result[i].state==='undefined'){
                var linka=document.createElement('div')
                latitude=result[i].lat
                longitude=result[i].lon
                linka.innerText+= "País: " + result[i].country + "\n" + "Infelizmente não sabemos o estado dessa localização" + "\n" 
                linka.setAttribute('onclick', `clicou (${posicao})`)
                response.appendChild(linka)


                } else if(typeof result[i].lon==='undefined'){
                var linka=document.createElement('div')
                linka.innerText+= "País: " + result[i].country + "\n" + result[i].state + "\n" + "Longitude: " + '\n' + "Infelizmente não temos a longitude dessa localização"+"\n"
                linka.setAttribute('onclick', 'clicou()', )
                response.appendChild(linka)

            }else if(typeof result[i].lat==='undefined'){
                var linka=document.createElement('div')
                linka.innerText+= "País: " + result[i].country + "\n" + result[i].state + "\n" +"Latitude: " + '\n' + "infelizmente não temos a latitude dessa localização"+ "Longitude: " +result[i].lon + "\n"
                linka.setAttribute('onclick', `clicou(${posicao})`)
                response.appendChild(linka)
            }

            else{
                var linka=document.createElement('div')
                latitude=result[i].lat
                longitude=result[i].lon
                linka.innerText+= "País: " + result[i].country + "\n" + "Estado: "+result[i].state + "\n"
                linka.setAttribute('onclick', `clicou (${posicao})`)
                response.appendChild(linka) 
                avisoAoUsuario=document.getElementById("pedirParaClicar")
                avisoAoUsuario.innerText="Clique em um dos resultados para exibir a temperatura instantânea do local"
            }
    }  

    })
    response.innerText=' '
}
function clicou (posicao){
    resposta1=localStorage.getItem('resposta')
    var resposta2=JSON.parse(resposta1)  
    let latitude=resposta2[posicao].lat
    let longitude=resposta2[posicao].lon
    fetch(`${url_tempo}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=pt_br`).then(result1=>result1.json()).then(result1=>{
        var resultadoTempo= JSON.stringify(result1)
        console.log(result1)
        localStorage.setItem('resultadoTempo', resultadoTempo)
    window.open('pag-02.html', '_blank') 
    })
}





























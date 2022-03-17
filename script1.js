var resultadoTempo=localStorage.getItem('resultadoTempo')
var resultadoTempo1=JSON.parse(resultadoTempo)
console.log(resultadoTempo1)  
var icon = resultadoTempo1.weather[0].icon
console.log(icon)
function carregarDados(){
    minima=resultadoTempo1.main.temp_min
    maxima=resultadoTempo1.main.temp_max
    descricao=resultadoTempo1.weather[0].description
    console.log(descricao)
    document.getElementById('exemplo').innerText=`Temperatura minima: ${minima} °C \n Temperatura maxima: ${maxima} °C \n descrição: ${descricao}`
    
}
function mudarIcone(){
    var icones = document.getElementById('imagens')
    if(icon=='01d'){
        icones.src = 'imagens/01d.png'
    } 
    else if(icon=='01n'){
        icones.src = 'imagens/01n.png'
    }
           
    else if(icon=='02d'){
        icones.src = 'imagens/02d.png'
    }
            

    else if(icon=='02d'){
        icones.src = 'imagens/02n.png'
    }
            

    else if(icon=='03d'){    
        icones.src = 'imagens/03d.png'
    }

    else if(icon=='03n'){    
        icones.src = 'imagens/03n.png'
    }

    else if(icon=='04d'){
        icones.src = 'imagens/04d.png'
    }

    else if(icon=='04n'){    
        icones.src = 'imagens/04n.png'
    }

    else if(icon=='09d'){   
        icones.src = 'imagens/09d.png'
    }

    else if(icon=='09n'){
        icones.src = 'imagens/09n.png'
    }
            
    else if(icon=='10d'){
        icones.src = 'imagens/10d.png'
    }

    else if(icon=='10n'){   
        icones.src = 'imagens/10n.png'
    }
        
    else if(icon=='11d'){
        icones.src = 'imagens/11d.png'
    }

    else if(icon=='11n'){
        icones.src = 'imagens/11n.png'
    }
        
    else if(icon=='13d'){   
        icones.src = 'imagens/13d.png'
    }

    else if(icon=='13n'){       
        icones.src = 'imagens/13n.png'
    }
        
    else if(icon=='50d'){    
        icones.src = 'imagens/50d.png'
    }

    else {   
        icones.src = 'imagens/50n.png'
    }


    
    
}
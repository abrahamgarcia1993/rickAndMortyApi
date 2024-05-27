const input= document.querySelector("input")
input.addEventListener("input",obtenerPersonajes)
async function obtenerPersonajes(){
    try{
        const url = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(url);
        
        if(!response.ok){
            throw new Error("se produjo un error");
        }
        const pepito= await response.json();
        const personajes= pepito.results
        


            mostrarPersonajes(personajes)


    }catch(error){
        console.error("Error hubo un problema con la solicitud de la API,"+error)
        
    }
}
function mostrarPersonajes(personajes){
    const listado = document.querySelector(".listado")
    listado.innerHTML=""
    personajes.forEach(personaje => {
        const personajeDiv= document.createElement("div")
        personajeDiv.classList.add("personajeDiv")
        
        
        const image=document.createElement("img")
        image.src=personaje.image
        
        const nombre= document.createElement("p")
        nombre.textContent=personaje.name
        
        const status= document.createElement("p")
        status.textContent=personaje.status
        
        const species= document.createElement("p")
        species.textContent=personaje.species
        
        const origin= document.createElement("p")
        origin.textContent= personaje.origin
        
        const location= document.createElement("p")
        location.textContent= personaje.location.name
        
        personajeDiv.appendChild(image)
        personajeDiv.appendChild(nombre)
        personajeDiv.appendChild(status)
        personajeDiv.appendChild(species)
        personajeDiv.appendChild(origin)
        personajeDiv.appendChild(location)
        listado.appendChild(personajeDiv)
        personajeDiv.addEventListener("click",()=>{
            window.location.href=`detalle.html?id=${personaje.id}`
        })
        
    })
    
    
}

    async function  filtrarCaracters(){
        const valor= input.value.toLowerCase()
        console.log(valor)
        if(valor==""){
            obtenerPersonajes()
        }else{
            try{
               const response=await fetch(`https://rickandmortyapi.com/api/character/?name=${valor}`)
               console.log(response)
                if(!response.ok){
                    throw new Error("Error el la red")
                }
                const data= await response.json()
                const resultados= data.results
                mostrarPersonajes(resultados)
            }catch(error){
                console.error("la estas cagando pisha"+error)
            }
        }
    }
    input.addEventListener("input",filtrarCaracters)


document.addEventListener("DOMContentLoaded",obtenerPersonajes)
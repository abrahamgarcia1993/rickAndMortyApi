document.addEventListener("DOMContentLoaded",async()=>{
    const params = new URLSearchParams(window.location.search)
     const id =params.get("id")
     if(id){

         try{
             const url = `https://rickandmortyapi.com/api/character/${id}`;
             const response = await fetch(url);
             if(!response.ok){
                 throw new Error("se produjo un error");
             }
             const pepito= await response.json();
             
             mostrarPersonajes(pepito)
             
             console.log(response)
         }catch(error){
             console.error("Error hubo un problema con la solicitud de la API,"+error)
             
         }
     }

     function mostrarPersonajes(personajes){
        console.log(personajes)

            const listado = document.querySelector(".personajillos")
            const titulo= document.querySelector(".tittle")
            const personajeDiv= document.createElement("div")
            personajeDiv.classList.add("personajeDiv")
            console.log(personajes)
            
        
            const image=document.createElement("img")
            image.src=personajes.image
            
            titulo.textContent=personajes.name
            
            const status= document.createElement("p")
            status.textContent=personajes.status
        
        const species= document.createElement("p")
        species.textContent=personajes.species
        
        const origin= document.createElement("p")
        origin.textContent= personajes.origin
    
        const location= document.createElement("p")
        location.textContent= personajes.location.name
        personajeDiv.appendChild(image)
        personajeDiv.appendChild(status)
        personajeDiv.appendChild(species)
        personajeDiv.appendChild(origin)
        personajeDiv.appendChild(location)
        listado.appendChild(personajeDiv)   
    }

})
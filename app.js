


document.addEventListener('DOMContentLoaded', async () => {
    await getMovieData();
    
    
})




const getMovieData = async () => {
    
    
    
    let url = 'https://ghibliapi.herokuapp.com/films';
    await fetch(url)
        .then(response => response.json())
        .then(data => { 
            root.innerHTML = listOfData(data)
        })


    
    
    
    
}

function listOfData(films, ) {
    let Info = films.map(film => 
       
   `
   <li id="${film.id}" class="card">

    
    
    
    
    
    <h2 class="card-title">${film.title}</h2>
    <h3 class="card-info">Director: ${film.director} , Score: ${film.rt_score}</h3>
    <p class= "description">${film.description}</p>
    
    </li>
    
    `).join("\n");
      
    return `<ul class="list">${Info}</ul>`;
    
    


}












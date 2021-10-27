import Navbar from "./navbar.js"


const handleLoad = async ()=>{
    const response= await fetchReciepe()
    if(response.meals){
        console.log(response.meals)
        showReciepe(response.meals)
    }
    else{
        alert('No results found')
    }
}

const showReciepe= (response)=>{
    const cont= document.getElementById('result')
    const h1= document.createElement('h1')
    h1.textContent= response.strMeal
    const h2= document.createElement('h2')
    h2.innerHTML= response.strDescription
    cont.append(h1,h2)
}

const fetchReciepe= (dish)=>{
    return fetch(`https://www.themealdb.com/api/json/v1/1/latest.php`)
    .then((res)=>{
        return res.json()
    })
}

window.addEventListener('load',function(){
    const cont= document.getElementById('nav-bar')
    cont.innerHTML= Navbar()
    handleLoad()
})
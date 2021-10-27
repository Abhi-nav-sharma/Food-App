import Navbar from "./navbar.js"

window.addEventListener('load',function(){
    const cont= document.getElementById('nav-bar')
    cont.innerHTML= Navbar()
    const btn= document.getElementById('search-btn')
    btn.addEventListener('click',handleSearch)
})

const handleSearch = async ()=>{
    const dish = document.getElementById('search').value
    const response= await fetchReciepe(dish)
    if(response.meals){
        showReciepe(response)
    }
    else{
        alert('No results found')
    }
}

const showReciepe= (response)=>{
    const cont= document.getElementById('result')
    cont.textContent=null
    for(let r of response.meals){
        console.log(r)
        cont.append(createCard(r))
    }
}

const createCard= (r)=>{
    const div= document.createElement('div')
    const meal= document.createElement('h1')
    meal.textContent= r.strMeal
    const area= document.createElement('p')
    area.textContent= `Area- ${r.strArea}`
    const imgDiv= document.createElement('div')
    const img= document.createElement('img')
    img.src= r.strMealThumb
    imgDiv.append(img)
    imgDiv.style.margin='20px'
    imgDiv.style.width='500px'
    img.style.width='500px'
    img.style.height='350px'
    img.style.objectFit='fill'
    imgDiv.style.float='left'
    const textDiv= document.createElement('div')
    textDiv.append(createIngredients(r))
    textDiv.style.float='left'
    textDiv.style.width='50%'
    textDiv.style.textAlign='left'
    const clear= document.createElement('div')
    clear.style.clear= 'both'
    const instr= document.createElement('p')
    instr.textContent= r.strInstructions
    const link= document.createElement('a')
    link.href= r.strYoutube
    link.textContent= `See Video`
    div.append(meal,area,imgDiv,textDiv,clear,instr,link)
    return div
}

const createIngredients = (r) =>{
    const list= document.createElement('ul')
    list.textContent= 'Ingredients:'
    const l1= document.createElement('li')
    l1.textContent= `${r.strIngredient1} - ${r.strMeasure1}`
    const l2= document.createElement('li')
    l2.textContent= `${r.strIngredient2} - ${r.strMeasure2}`
    const l3= document.createElement('li')
    l3.textContent= `${r.strIngredient3} - ${r.strMeasure3}`
    const l4= document.createElement('li')
    l4.textContent= `${r.strIngredient4} - ${r.strMeasure4}`
    const l5= document.createElement('li')
    l5.textContent= `${r.strIngredient5} - ${r.strMeasure5}`
    const l6= document.createElement('li')
    l6.textContent= `${r.strIngredient6} - ${r.strMeasure6}`
    const l7= document.createElement('li')
    l7.textContent= `${r.strIngredient7} - ${r.strMeasure7}`
    const l8= document.createElement('li')
    l8.textContent= `${r.strIngredient8} - ${r.strMeasure8}`
    const l9= document.createElement('li')
    l9.textContent= `${r.strIngredient9} - ${r.strMeasure9}`
    const l10= document.createElement('li')
    l10.textContent= `${r.strIngredient10} - ${r.strMeasure10}`
    const l11= document.createElement('li')
    l11.textContent= `${r.strIngredient11} - ${r.strMeasure11}`
    const l12= document.createElement('li')
    l12.textContent= `${r.strIngredient12} - ${r.strMeasure12}`
    const l13= document.createElement('li')
    l13.textContent= `${r.strIngredient13} - ${r.strMeasure13}`
    const l14= document.createElement('li')
    l14.textContent= `${r.strIngredient14} - ${r.strMeasure14}`
    const l15= document.createElement('li')
    l15.textContent= `${r.strIngredient15} - ${r.strMeasure15}`
    const l16= document.createElement('li')
    l16.textContent= `${r.strIngredient16} - ${r.strMeasure16}`
    const l17= document.createElement('li')
    l17.textContent= `${r.strIngredient17} - ${r.strMeasure17}`
    const l18= document.createElement('li')
    l18.textContent= `${r.strIngredient18} - ${r.strMeasure18}`
    const l19= document.createElement('li')
    l19.textContent= `${r.strIngredient19} - ${r.strMeasure19}`
    const l20= document.createElement('li')
    l20.textContent= `${r.strIngredient20} - ${r.strMeasure20}`
    list.append(l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20)
    return list
}

const fetchReciepe= (dish)=>{
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`)
    .then((res)=>{
        return res.json()
    })
}
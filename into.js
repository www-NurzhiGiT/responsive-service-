

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services";

let result = document.querySelector(".result")

async function getService (){
    try{
        const res = await fetch (API)
        const data = await res.json()

        showService(data)
        console.log(data);
    }catch (error){
        console.log(error);
    }
}

getService();

function showService(data) {
    result.innerHTML = data.map ((item) => {
        return`  
            <div class="product">
                <img src="${item.image}" alt="">
                <p>${item.name}</p>
                <p>${item.category}</p>
            </div>
        `
    }).join("")
}
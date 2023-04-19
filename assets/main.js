const container = document.getElementById("elementContainer");
const title = document.getElementById("title");


async function vinylsJson() {
    try {
        var vinylsApi = await fetch('https://apimocha.com/oldschoolapi/posts')
        vinylsApi = await vinylsApi.json()

        console.log(vinylsApi);


    } catch (error) {
        console.log(error);
    }

    const card = vinylsApi

    console.log(card);

    const homeCards = card.filter(() => title.text.includes("Vinilos"))

    let cardsMerged = [...homeCards]

    console.log(cardsMerged);

    cardsMerged.forEach(getCard)
}
vinylsJson()


function getCard(articulos) {
    container.innerHTML += `
    <div class="card d-flex flex-column gap-1">
    <img src="${articulos.imagen}" class="card-img" alt="${articulos.nombre}">
    <p class="card-text Stock: ${articulos.stock}</p>
    <div class="card-info">
        <p class="text-title">${articulos.nombre}</p>
        <p class="text-title">${articulos.artista}</p>
        <p class="text-body">${articulos.descripcion}</p>
        <span class="text-title">Stock: ${articulos.stock}</span>
        <span class="text-title">Precio: $${articulos.precio}</span>  
    </div>
</div>
`;
}
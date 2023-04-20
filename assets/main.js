const container = document.getElementById("elementContainer");
const title = document.getElementById("title");


async function vinylsJson() {
    try {
        var vinylsApi = await fetch('https://apimocha.com/oldschoolapi/posts')
        vinylsApi = await vinylsApi.json()
    } catch (error) {
        console.log(error);
    }

    const card = vinylsApi
    card.forEach(getCard)
}
vinylsJson()


function getCard(articulos) {
    container.innerHTML += `
    <div class="card d-flex flex-column gap-1">
    <img src="${articulos.imagen}" class="card-img" alt="${articulos.nombre}">
    <p class="card-text Stock: ${articulos.stock}</p>
    <div class="card-info">
        <div class="d-flex flex-column justify-content-center align-items-center container-artistas">
            <p class="text-title">${articulos.nombre}</p>
            <p class="text-title">${articulos.artista}</p>
        </div>
        <p class="text-body">${articulos.descripcion}</p>
        <span class="text-title2">Stock: ${articulos.stock}</span>
        <span class="text-title3">Precio: $${articulos.precio}</span>  
    </div>
</div>
`;
}


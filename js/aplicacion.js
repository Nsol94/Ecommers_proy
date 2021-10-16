let ImgVec, imagenG, contenedorC
let IMG1=document.getElementById("IMG1")
let ContChico1=document.getElementById("ContChico1")
let IMG2=document.getElementById("IMG2")
let ContChico2=document.getElementById("ContChico2")
let IMG3=document.getElementById("IMG3")
let ContChico3=document.getElementById("ContChico3")
let IMG4=document.getElementById("IMG4")
let ContChico4=document.getElementById("ContChico4")
let IMG5=document.getElementById("IMG5")
let ContChico5=document.getElementById("ContChico5")

imagenesChicas1=[
    "https://martimx.vteximg.com.br/arquivos/ids/305487-1150-1150/1127863971-1.png?v=637012233400830000",
    "https://martimx.vteximg.com.br/arquivos/ids/305894-1150-1150/1127863971-2.png?v=637012235546770000",
    "https://martimx.vteximg.com.br/arquivos/ids/306264-1150-1150/1127863971-3.png?v=637012237821130000",
    "https://martimx.vteximg.com.br/arquivos/ids/306587-1150-1150/1127863971-4.png?v=637012240108370000"
]
imagenesChicas2=[
    "https://martimx.vteximg.com.br/arquivos/ids/487867-1150-1150/1127876489-1.png?v=637345048559200000",
    "https://martimx.vteximg.com.br/arquivos/ids/488109-1150-1150/1127876489-2.png?v=637345050218100000",
    "https://martimx.vteximg.com.br/arquivos/ids/488348-1150-1150/1127876489-3.png?v=637345051950700000",
    "https://martimx.vteximg.com.br/arquivos/ids/488589-1150-1150/1127876489-4.png?v=637345053782370000"
]
imagenesChicas3=[
    "https://martimx.vteximg.com.br/arquivos/ids/693541-1150-1150/1127887893-1.png?v=637661285108700000",
    "https://martimx.vteximg.com.br/arquivos/ids/693542-1150-1150/1127887893-2.png?v=637661285418170000",
    "https://martimx.vteximg.com.br/arquivos/ids/693543-1150-1150/1127887893-3.png?v=637661285590230000",
    "https://martimx.vteximg.com.br/arquivos/ids/693544-1150-1150/1127887893-4.png?v=637661285989700000"
]
imagenesChicas4=[
    "https://martimx.vteximg.com.br/arquivos/ids/745914-1150-1150/1127890603-1.png?v=637697377630700000",
    "https://martimx.vteximg.com.br/arquivos/ids/745915-1150-1150/1127890603-2.png?v=637697377642630000",
    "https://martimx.vteximg.com.br/arquivos/ids/745916-1150-1150/1127890603-3.png?v=637697377653900000",
    "https://martimx.vteximg.com.br/arquivos/ids/745917-1150-1150/1127890603-4.png?v=637697377664700000"
]
imagenesChicas5=[
    "https://martimx.vteximg.com.br/arquivos/ids/681166-1150-1150/1127887841-1.png?v=637647440348700000",
    "https://martimx.vteximg.com.br/arquivos/ids/681167-1150-1150/1127887841-2.png?v=637647440353570000",
    "https://martimx.vteximg.com.br/arquivos/ids/681168-1150-1150/1127887841-3.png?v=637647440359170000",
    "https://martimx.vteximg.com.br/arquivos/ids/681169-1150-1150/1127887841-4.png?v=637647440364330000"
]


function Cargar_Imagen(ImgVec, imagenG, contenedorC) {
    
    for(let i=0;i<ImgVec.length;i++){
        let nvImagen=document.createElement("img");
        nvImagen.setAttribute("src",ImgVec[i]);
        contenedorC.appendChild(nvImagen)

        nvImagen.addEventListener("click", function (e) {
            let cambioImg=e.target.getAttribute("src");
            cambiar(cambioImg);
        })
    }
    function cambiar(cambioImg) {
        imagenG.setAttribute("src",cambioImg)
    }
}

Cargar_Imagen(imagenesChicas1, IMG1, ContChico1)
Cargar_Imagen(imagenesChicas2, IMG2, ContChico2)
Cargar_Imagen(imagenesChicas3, IMG3, ContChico3)
Cargar_Imagen(imagenesChicas4, IMG4, ContChico4)
Cargar_Imagen(imagenesChicas5, IMG5, ContChico5)


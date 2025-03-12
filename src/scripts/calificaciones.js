const contenedor = document.querySelector('#subjects_cards');
const promedioValue = document.querySelector('#promedio span');
const promedioImg = document.querySelector('#promedio img'); 
console.log(promedioImg);
const calificaciones = [
    {
        subject: "Matemáticas",
        icon: "./src/images/math.png",
        score: 85
    },
    {
        subject: "Ciencias",
        icon: "./src/images/ciencias.png",
        score: 92
    },
    {
        subject: "Historia",
        icon:"./src/images/historia.png",
        score: 78
    },
    {
        subject: "Literatura",
        icon: "./src/images/literatura.png",
        score: 90
    },
    {
        subject: "Arte",
        icon: "./src/images/arte.png",
        score: 88
    },
    {
        subject: "Música",
        icon: "./src/images/musica.png",
        score: 95
    },
    {
        subject: "Geografía",
        icon: "./src/images/geografia.png",
        score: 64
    },
    {
        subject: "Educación Física",
        icon: "./src/images/educacion-fisica.png",
        score: 89
    },
    {
        subject: "Informática",
        icon: "./src/images/informatica.png",
        score: 91
    },
    {
        subject: "Idiomas",
        icon: "./src/images/idiomas.png",
        score: 87
    }
];


/**
 * @description Funcion para insertar las tarjetas de las materias en el html
 * @param {Array} array - lista de materias con sibjec,icon,score
 * @param {Node} elmenetoHTML  - Elemento html que recibe las tarjetas en el documento html.
 */
function loadSubjectsCards(array, elmenetoHTML) {
    elmenetoHTML.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        const subject = array[i];
        let color = "text-green-600";
        if(subject.score <80){
            color = "text-red-600";
        }
        const template = `
             <div class="text-center w-full h-32 border p-2 rounded-md border-gray-300 shadow-md text-sm flex flex-col justify-center">
                    <h2 class="font-bold">${subject.subject}</h2>
                    <img src="${subject.icon}" alt="${subject.subject}" width="32" class="mx-auto my-2">
                    <p class="text-blue-500 font-bold">Score: <span class="${color} font-bold">${subject.score}</span></p>
            </div> 
        `;
        elmenetoHTML.innerHTML += template
    }

}

/**
 * @description obtener y establecer el promedio de las calificaciones
 * @param {Array} array 
 * @param {Node} elmenetoHTML 
 */
function setPromedio(array, elmenetoHTML,ElementoImagenHTML) {
    let promedio = 0;
    let img = "./src/images/otorgar.png";
    let color = "text-green-500";
    
    for (let i = 0; i < array.length; i++) {
        const subject = array[i];
        promedio+= subject.score / array.length;
    }
    if(promedio < 80){
        img = "./src/images/perdedor.png";
        color = "text-red-500";
    }
    elmenetoHTML.textContent = promedio.toFixed(1);
    elmenetoHTML.classList.add(color);
    ElementoImagenHTML.src = img;
}

loadSubjectsCards(calificaciones, contenedor);
setPromedio(calificaciones, promedioValue, promedioImg);
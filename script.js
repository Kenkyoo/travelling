// Theme toogle

const themeStitcher = document.getElementById("themingSwitcher");
const isSystemThemeSetToDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// set toggler position based on system theme
if (isSystemThemeSetToDark) {
    themeStitcher.checked = true;
}

// add listener to theme toggler
themeStitcher.addEventListener("change", (e) => {
    toggleTheme(e.target.checked);
});

const toggleTheme = (isChecked) => {
    const theme = isChecked ? "dark" : "light";

    document.documentElement.dataset.mdbTheme = theme;
}

// add listener to toggle theme with Shift + D
document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "D") {
        themeStitcher.checked = !themeStitcher.checked;
        toggleTheme(themeStitcher.checked);
    }
});

// Animated navbar when scroll

const navbar = document.getElementById("main-navbar")

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add("bg-opacity-75", "navbar-after-scroll")
    } else {
        navbar.classList.remove("bg-opacity-75", "navbar-after-scroll")
    }
});

// Animated search form

const searchForm = document.querySelector(".form-control");

searchForm.addEventListener("focus", () => {
    searchForm.classList.add("animated-search")
    //Remove class when click outside
    document.addEventListener("click", function (e) {
        if (e.target !== searchForm) {
            searchForm.classList.remove("animated-search");
        }
    });

})

// Open close Sidebar

const sidebar = document.getElementById("sidebar");
const body = document.body;
const openSidebar = document.getElementById("openSidebar");

openSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("sidenav");
    body.classList.toggle("sidebody");
})

// Travels section

const travels = [
    {
        place: "Nueva York",
        descr: "Nueva York, la ciudad que nunca duerme, es conocida por sus impresionantes rascacielos, su diversidad cultural, sus emblemáticos lugares de interés como Times Square y Central Park, y su vibrante escena artística y gastronómica.",
        price: 130,
        image: "images/travels/pexels-christian-catamo-12468323.jpg",
        continent: "América",
        type: "Ciudad"
    },
    {
        place: "Londres",
        descr: "Londres, la capital del Reino Unido, es una ciudad llena de historia y modernidad. Desde el imponente Palacio de Buckingham hasta el emblemático Big Ben, pasando por el bullicioso mercado de Camden, Londres ofrece algo para todos los gustos.",
        price: 110,
        image: "images/travels/pexels-pixabay-460672.jpg",
        continent: "Europa",
        type: "Ciudad"
    },
    {
        place: "Barcelona",
        descr: "Barcelona, la joya de la costa española, es conocida por su arquitectura única, sus playas de arena dorada y su animada vida nocturna. Desde la Sagrada Familia hasta el Parque Güell, Barcelona cautiva a los visitantes con su encanto mediterráneo.",
        price: 120,
        image: "images/travels/pexels-aleksandar-pasaric-1388030.jpg",
        continent: "Europa",
        type: "Ciudad"
    },
    {
        place: "Bangkok",
        descr: "Bangkok, la capital de Tailandia, es una metrópolis bulliciosa llena de templos antiguos, mercados flotantes, exquisita cocina callejera y una animada vida nocturna. Con su mezcla única de tradición y modernidad, Bangkok ofrece una experiencia inolvidable.",
        price: 100,
        image: "images/travels/pexels-te-lensfix-1374377.jpg",
        continent: "Asia",
        type: "Ciudad"
    },
    {
        place: "Sídney",
        descr: "Sídney, la ciudad más grande de Australia, es conocida por su icónica Ópera y su impresionante Puente del Puerto. Con sus hermosas playas, parques naturales y una escena cultural vibrante, Sídney es un destino imperdible para los viajeros.",
        price: 140,
        image: "images/travels/pexels-kate-branch-11122389.jpg",
        continent: "Oceanía",
        type: "Ciudad"
    },
    {
        place: "Río de Janeiro",
        descr: "Río de Janeiro, la ciudad maravillosa de Brasil, es famosa por sus espectaculares playas, su animado carnaval y su imponente estatua del Cristo Redentor. Con su estilo de vida relajado y su impresionante belleza natural, Río es un paraíso para los amantes del sol y el surf.",
        price: 125,
        image: "images/travels/pexels-caroline-cagnin-1959065.jpg",
        continent: "América",
        type: "Ciudad"
    },
    {
        place: "Venecia",
        descr: "Venecia, la ciudad de los canales, es conocida por su encantadora arquitectura renacentista, sus románticos paseos en góndola y su famoso Carnaval. Con sus calles estrechas y sus impresionantes palacios, Venecia es uno de los destinos más románticos del mundo.",
        price: 135,
        image: "images/travels/pexels-jan-zakelj-10294376.jpg",
        continent: "Europa",
        type: "Ciudad"
    },
    {
        place: "Estambul",
        descr: "Estambul, la puerta entre Oriente y Occidente, es una ciudad llena de historia, cultura y belleza. Desde la majestuosa Mezquita Azul hasta el bullicioso Gran Bazar, Estambul ofrece una experiencia única para los visitantes.",
        price: 115,
        image: "images/travels/pexels-the-peassa-12478240.jpg",
        continent: "Asia",
        type: "Ciudad"
    },
    {
        place: "Dubái",
        descr: "Dubái, la ciudad de los récords, es conocida por sus impresionantes rascacielos, sus lujosos centros comerciales y su estilo de vida opulento. Con sus playas de arena blanca y su emocionante vida nocturna, Dubái es un destino de ensueño para muchos.",
        price: 150,
        image: "images/travels/pexels-aleksandar-pasaric-823696.jpg",
        continent: "Asia",
        type: "Ciudad"
    },
    {
        place: "Praga",
        descr: "Praga, la ciudad de las cien torres, es famosa por su arquitectura medieval, sus pintorescos callejones y su animada escena cultural. Desde el imponente Castillo de Praga hasta el encantador Puente de Carlos, Praga cautiva a los visitantes con su encanto histórico.",
        price: 105,
        image: "images/travels/pexels-anna-11790478.jpg",
        continent: "Europa",
        type: "Ciudad"
    },
    {
        place: "Kioto",
        descr: "Kioto, la antigua capital de Japón, es conocida por sus impresionantes templos, jardines zen y tradiciones milenarias. Desde el icónico Templo Kinkaku-ji hasta el histórico barrio de Gion, Kioto ofrece una visión fascinante de la cultura japonesa.",
        price: 130,
        image: "images/travels/pexels-belle-co-402028.jpg",
        continent: "Asia",
        type: "Ciudad"
    },
    {
        place: "Ámsterdam",
        descr: "Ámsterdam, la ciudad de los canales, es famosa por su arquitectura distintiva, sus museos de clase mundial y su ambiente relajado. Desde el Museo Van Gogh hasta el Barrio Rojo, Ámsterdam ofrece una experiencia única para los visitantes.",
        price: 115,
        image: "images/travels/pexels-liene-ratniece-1329510.jpg",
        continent: "Europa",
        type: "Ciudad"
    },
    {
        place: "Hong Kong",
        descr: "Hong Kong, la vibrante ciudad asiática, combina la modernidad con la tradición de una manera única. Desde los rascacielos futuristas hasta los templos antiguos, Hong Kong ofrece una experiencia inolvidable para los visitantes.",
        price: 125,
        image: "images/travels/pexels-jimmy-chan-1337144.jpg",
        continent: "Asia",
        type: "Ciudad"
    },
    {
        place: "Berlín",
        descr: "Berlín, la capital de Alemania, es una ciudad llena de historia, arte y cultura. Desde el icónico Muro de Berlín hasta la animada escena de clubes nocturnos, Berlín ofrece una experiencia única para los visitantes.",
        price: 110,
        image: "images/travels/pexels-annam-w-1057840.jpg",
        continent: "Europa",
        type: "Ciudad"
    },
    {
        place: "Machu Picchu",
        descr: "Machu Picchu, la legendaria ciudad inca, es uno de los destinos arqueológicos más impresionantes del mundo. Ubicada en lo alto de los Andes peruanos, Machu Picchu ofrece vistas espectaculares y una fascinante historia antigua.",
        price: 145,
        image: "images/travels/pexels-chelsea-cook-2929906.jpg",
        continent: "América",
        type: "Histórico"
    },
    {
        place: "Las Vegas",
        descr: "Las Vegas, la ciudad del pecado, es conocida por sus extravagantes casinos, sus impresionantes espectáculos y su animada vida nocturna. Con su brillantez deslumbrante y su ambiente festivo, Las Vegas es un destino popular para aquellos que buscan diversión y emoción.",
        price: 135,
        image: "images/travels/pexels-david-vives-2837909.jpg",
        continent: "América",
        type: "Ciudad"
    },
    {
        place: "Florencia",
        descr: "Florencia, la cuna del Renacimiento, es famosa por su impresionante arquitectura, sus increíbles museos y su rica historia cultural. Desde la majestuosa Catedral de Santa María del Fiore hasta la icónica Galería Uffizi, Florencia es un tesoro artístico.",
        price: 120,
        image: "images/travels/pexels-maegan-white-981686.jpg",
        continent: "Europa",
        type: "Ciudad"
    },
    {
        place: "San Francisco",
        descr: "San Francisco, la ciudad de la bahía, es conocida por su impresionante puente Golden Gate, sus empinadas colinas y su ecléctica cultura. Con su vibrante escena artística, gastronómica y tecnológica, San Francisco atrae a visitantes de todo el mundo.",
        price: 130,
        image: "images/travels/pexels-tae-fuller-1141853.jpg",
        continent: "América",
        type: "Ciudad"
    },
    {
        place: "Cairo",
        descr: "El Cairo, la bulliciosa capital de Egipto, es conocida por sus impresionantes pirámides, su fascinante historia antigua y su animada vida callejera. Desde las majestuosas pirámides de Giza hasta el bullicioso zoco de Khan el-Khalili, El Cairo ofrece una experiencia única para los visitantes.",
        price: 125,
        image: "images/travels/pexels-thais-cordeiro-3873681.jpg",
        continent: "África",
        type: "Ciudad"
    },
    {
        place: "Copenhague",
        descr: "Copenhague, la capital de Dinamarca, es conocida por su diseño innovador, su deliciosa cocina y su estilo de vida relajado. Desde el icónico parque de atracciones Tivoli hasta la famosa escultura de la Sirenita, Copenhague ofrece una experiencia encantadora.",
        price: 115,
        image: "images/travels/pexels-julia-volk-5193476.jpg",
        continent: "Europa",
        type: "Ciudad"
    }
];

const cardContainer = document.getElementById('cardContainer');

let places = '';

travels.forEach(travel => {
    // Agregar un párrafo para cada objeto en el array
    places += `
          <div class="card ${travel.continent} animate__animated animate__fadeIn mx-2" id="${travel.place}">
            <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                <img src="${travel.image}" class="card-img img-fluid w-100 object-cover" style="height: 200px";/>
                <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
            </div>
            <div class="card-body text-center">
                <h5 class="card-title card-header">${travel.place}</h5>
                <p class="card-txt">${travel.descr}</p>
                <h5 class="mb-4">
                    <strong>$ ${travel.price}</strong>
                </h5>
            </div>
          </div>
  `;
});


cardContainer.innerHTML = places;

// Filter menu

const radios = document.querySelectorAll(".form-check-input");
const cards = document.querySelectorAll(".card");

radios.forEach(radio => {
    radio.addEventListener("change", function () {
        const filter = this.value;
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            if (filter === 'Todos' || card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Modal cards

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        const cardImg = this.querySelector('.card-img');
        const cardImgSrc = cardImg.src;
        const modalCardImg = document.getElementById("modalCardImg");

        const cardTxt = this.querySelector(".card-txt");
        const cardText = cardTxt.textContent;
        const modalCardText = document.getElementById("modalCardText");
        modalCardText.textContent = cardText;

        const cardHeader = this.querySelector(".card-header");
        const cardHeading = cardHeader.textContent;
        const modalCardHeader = document.getElementById("modalCardHeader");
        modalCardHeader.textContent = cardHeading;

        const modal = new mdb.Modal(modalCard)
        modalCardImg.src = cardImgSrc;
        modal.show()
        });
    });

// Input select travels

const travelsOptions = document.getElementById("travels");

let options = '';

travels.forEach(travel => {
    options += `

    <option value="${travel.place}">${travel.place}</option>
    
    `;

    travelsOptions.innerHTML = options;
});


// Snackbar submit form

const submitform = document.getElementById("submit-form");
const snackbar = document.getElementById("snackbar");

submitform.addEventListener("click", () => {
    snackbar.classList.add("show");
    snackbar.classList.add('animate__fadeInUp')

   snackbar.addEventListener("animationend", () => {
    snackbar.classList.remove("animate__fadeInUp")
    snackbar.classList.add("animate__fadeOutDown")
   })
});

// Testimonials 

const testimonials = [
    {
        id: 1,
        name: 'lucas fernandez',
        job: 'travel critic',
        img: 'images/testimonials/person3.jpg',
        text: "Gracias a Travelling, pude cumplir mi sueño de visitar Machu Picchu en Perú. Fue una experiencia inolvidable y estoy muy agradecido por el excelente servicio y la atención personalizada que recibí durante todo el viaje.",
        score: 4,
    },
    {
        id: 2,
        name: 'marta rodriguez',
        job: 'traveler enthusiast',
        img: 'images/testimonials/person1.jpg',
        text: "¡Recomiendo Travelling a todos mis amigos y familiares! Mi viaje a Italia fue espectacular, desde la comida deliciosa hasta los paisajes impresionantes. Sin duda, volveré a viajar con ellos en el futuro.",
        score: 5,
    },
    {
        id: 3,
        name: 'carlos gomez',
        job: 'traveler blogger',
        img: 'images/testimonials/person2.jpg',
        text: "¡Increíble servicio al cliente! Tuve un problema con mi vuelo y el equipo de Travelling lo resolvió rápidamente y sin complicaciones. Definitivamente, son una empresa en la que puedes confiar para tus viajes.",
        score: 5,
    },
    {
        id: 4,
        name: 'ana martinez',
        job: 'traveler explorer',
        img: 'images/testimonials/person4.jpg',
        text: "¡Una experiencia única! Viajé sola a Japón con Travelling y me sentí segura y bien cuidada en todo momento. Los itinerarios fueron perfectos y pude disfrutar al máximo de mi aventura japonesa.",
        score: 3,
    },
    {
        id: 5,
        name: 'nicolas diaz',
        job: 'travel connoisseur',
        img: 'images/testimonials/person5.jpg',
        text: "¡Los mejores viajes son con Travelling! He viajado con ellos a varios destinos y siempre superan mis expectativas. El equipo es profesional, atento y se asegura de que cada detalle esté cuidado.",
        score: 4,
    },
    {
        id: 6,
        name: 'laura sanchez',
        job: 'travel critic',
        img: 'images/testimonials/person8.jpg',
        text: "¡Increíble atención al cliente! Tuve que hacer cambios de última hora en mi itinerario y Travelling lo gestionó todo sin problemas. Estoy muy agradecida por su flexibilidad y profesionalismo.",
        score: 5,
    },
    {
        id: 7,
        name: 'juan perez',
        job: 'travel lover',
        img: 'images/testimonials/person10.jpg',
        text: "¡Una experiencia inolvidable en cada destino! Viajé con Travelling a varios países de América del Sur y cada lugar superó mis expectativas. Recomiendo sus servicios a todos los amantes de los viajes.",
        score: 4,
    },
    {
        id: 8,
        name: 'mariana lopez',
        job: 'travelling connoisseur',
        img: 'images/testimonials/person12.jpg',
        text: "¡Increíble experiencia! Viajé con Travelling a Tailandia y no puedo estar más feliz con el servicio. Los guías fueron muy amables y conocedores, y cada detalle del viaje fue perfecto.",
        score: 5,
    },
];

const testimonial = document.getElementById('testimonial');
let currentItem = 0;

function showCurrentItem() {
  const item = testimonials[currentItem];
  testimonial.innerHTML = `
            <div class="carousel-item p-3 active animate__animated animate__fadeIn">
                <img class="rounded-circle shadow-1-strong mb-4"
                    src="${item.img}" alt="${item.name}" style="width: 150px;" />
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                        <h5 class="mb-3">${item.name}</h5>
                        <p>${item.job}</p>
                        <p class="text-muted">
                            <i class="fas fa-quote-left pe-2"></i>
                            ${item.text}
                        </p>
                    </div>
                </div>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>`;

    const stars = document.querySelectorAll(".fa-star");

    let score = item.score;

    stars.forEach((star, index) => {
        if (index < score) {
            star.classList.add("checked");
        }
    });
}

window.addEventListener('DOMContentLoaded', showCurrentItem);

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > testimonials.length - 1) {
    currentItem = 0;
  }
  showCurrentItem();
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimonials.length - 1;
  }
  showCurrentItem();
});

// Filter search places

const filterInput = document.getElementById("filterInput");

filterInput.addEventListener("focus", () => {
    filterInput.classList.add("animated-search");

    document.addEventListener("click", function (e) {
        if (e.target !== filterInput) {
            filterInput.classList.remove("animated-search");
        }
    });
});

filterInput.addEventListener("input", function () {
    const filterValue = filterInput.value.toLowerCase();
    const filterElements = document.querySelectorAll(".card");

    filterElements.forEach(element => {
        const classes = element.getAttribute("id");
        if (classes && classes.toLowerCase().includes(filterValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});

// Gallery images

const arrayImages = [
    "images/gallery/img01.jpg",
    "images/gallery/img02.jpg",
    "images/gallery/img03.jpg",
    "images/gallery/img04.jpg",
    "images/gallery/img05.jpg",
    "images/gallery/img06.jpg",
    "images/gallery/img07.jpg",
    "images/gallery/img08.jpg",
    "images/gallery/img09.jpg",
    "images/gallery/img10.jpg",
    "images/gallery/img11.jpg",
    "images/gallery/img12.jpg",
    "images/gallery/img13.jpg",
    "images/gallery/img14.jpg",
    "images/gallery/img15.jpg"
];

const gallery = document.getElementById("gallery");

let images = "";

for (let index = 0; index < arrayImages.length; index++) {
    const image = arrayImages[index];
    
    images += `
          <div class="col"> 
            <img src="${image}" alt="" width="600" height="400">
          </div> `;
}    
    gallery.innerHTML = images;


const imgs = document.querySelectorAll(".gallery img");
const imgModal = document.getElementById("imgModal");

imgs.forEach(function(img) {
    img.addEventListener("click", function() {
        const imgSrc = this.src;
        const miDivE = document.getElementById("miDivE");
        const mdbModal = new mdb.Modal(miDivE);
        imgModal.src = imgSrc;
        mdbModal.show();
    })
})

// App random place

const appRandom = document.getElementById("appRandom");
const btnRandom = document.getElementById("btnRandom");

let currentIndex = randomPlace();

function showRandomPlace() {
    const idx = travels[currentIndex];
    appRandom.innerHTML = `
            <div class="card places ${idx.continent} animate__animated animate__flip" id="${idx.place}">
            <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                <img src="${idx.image}" class="img-fluid w-100" width= 500 height= 500/>
                <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
            </div>
            <div class="card-body text-center">
                <h5 class="card-title">${idx.place}</h5>
                <h5>
                    <strong>$ ${idx.price}</strong>
                </h5>
            </div>
        </div> `;
}

window.addEventListener("DOMContentLoaded", showRandomPlace);

function randomPlace() {
   return Math.floor(Math.random() * travels.length);
}

btnRandom.addEventListener("click", () => {
    currentIndex = randomPlace();
    showRandomPlace();
})


// Show subscription form on load page

let subscriptionForm;

setTimeout(() => {
    subscriptionForm = document.getElementById("subscription-form");

    subscriptionForm.style.display = "block";
    subscriptionForm.classList.add("show"); 

}, 10000);

const btnClose = document.getElementById("btnClose");

btnClose.addEventListener("click", () => {
    subscriptionForm.classList.remove("show");
    subscriptionForm.style.display = "none";
})

// Chart

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Barcelona', 3],
        ['Berlin', 1],
        ['Londres', 1],
        ['Nueva York', 1],
        ['Rio de janeiro', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'Descubre los Lugares Más Buscados por Nuestros Viajeros',

        titleTextStyle: {
            color: 'blue',
            fontName: 'Times New Roman',
                    fontSize: 20, 
                        bold: 'true',
                        align: 'center',
                            italic: 'true'
    },
        'legend': { position: 'bottom', align: 'center', textStyle: { color: 'blue', fontSize: 16 } },
        'is3D': true,
        'backgroundColor': 'none',
        slices: {
            0: { offset: 0.2 },
        },
        'colors': ['#10002b', '#240046', '#3c096c', '#5a189a', '#7b2cbf', '#9d4edd', '#c77dff', '#e0aaff']
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

// Faq render

const faq = [

    {
        id: 'headingOneY',
        datamdb: '#collapseOneY',
    aria: 'collapseOneY',
    question: '¿Cuáles son los métodos de pago aceptados por Travelling?',
    answer: 'Aceptamos pagos con tarjeta de crédito/débito (Visa, Mastercard, American Express) y transferencias bancarias.'

},

{
    id: 'headingTwoY',
        datamdb: '#collapseTwoY',
            aria: 'collapseTwoY',
                question: '¿Qué medidas toma Travelling en relación con la seguridad de los viajes?',
                    answer: 'En Travelling, la seguridad de nuestros clientes es nuestra máxima prioridad. Trabajamos con proveedores de servicios confiables y seguimos estrictos estándares de seguridad en todos nuestros destinos.'
},

{
    id: 'headingThreeY',
        datamdb: '#collapseThreeY',
            aria: 'collapseThreeY',
                question: '¿Puedo realizar cambios en mi reserva una vez confirmada?',
                    answer: ' Sí, en la medida de lo posible, podemos ayudarte a realizar cambios en tu reserva. Sin embargo, ten en cuenta que pueden aplicarse cargos adicionales según las políticas de cancelación y cambios de cada proveedor.'
},

{
    id: 'headingFourY',
        datamdb: '#collapseFourY',
            aria: 'collapseFourY',
                question: '¿Ofrecen seguro de viaje para mis vacaciones con Travelling?',
                    answer: 'Sí, ofrecemos opciones de seguro de viaje para garantizar que estés cubierto en caso de imprevistos durante tu viaje. Puedes consultar con nuestro equipo para obtener más información sobre nuestras opciones de seguro.'
},

{
    id: 'headingFiveY',
        datamdb: '#collapseFiveY',
            aria: 'collapseFiveY',
                question: '¿Cómo puedo ponerme en contacto con el servicio al cliente de Travelling?',
                    answer: 'Puedes ponerte en contacto con nuestro equipo de servicio al cliente a través de nuestro formulario en línea en la sección de contacto de nuestro sitio web, por correo electrónico a info@travelling.com o por teléfono al +XX-XXXX-XXXX.'

},

];

const accordion = document.getElementById("accordion");

let faqs = '';

faq.forEach(fq => {
  faqs += ` 
                <div class="accordion-item">
                <h2 class="accordion-header" id="${fq.id}">
                    <button data-mdb-collapse-init class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="${fq.datamdb}" aria-expanded="false" aria-controls="${fq.aria}">
                        <i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>${fq.question}
                    </button>
                </h2>
                <div id="${fq.aria}" class="accordion-collapse collapse" aria-labelledby="${fq.id}"
                    data-mdb-parent="#accordion">
                    <div class="accordion-body">
                        <p>${fq.answer}</p>
                    </div>
                </div>
            </div>
    
    `;
});

accordion.innerHTML = faqs;

const users = document.getElementById("users");
const clients = document.getElementById("clients");
const trips = document.getElementById("trips");

let dataBase = {
    usuariosRegistrados: 100,
    clientesActivos: 50,
    viajesRealizadas: 200
};

function updateCounter() {
    let dataNumbers = Object.keys(dataBase)
    for (let index = 0; index < dataNumbers.length; index++) {
        let key = dataNumbers[index];
        dataBase[key]++;
    }
    renderData();
}

function renderData() {
   users.innerHTML = dataBase.usuariosRegistrados;
   clients.innerHTML = dataBase.clientesActivos;
   trips.innerHTML = dataBase.viajesRealizadas;
}

// User rating section

setInterval(updateCounter, 7000);

const userRating = [5, 3, 5, 4, 5, 2, 3, 4, 1, 2, 3, 5, 4, 2, 1, 3, 4, 5, 1, 2];
const scores = document.querySelectorAll(".stars");

const usersReviews = document.getElementById("usersReviews");

updateAverage();
updateCounter();
updateUsers();

function updateUsers() {
    usersReviews.innerHTML = userRating.length;
}

function updateAverage() {
    let sum = 0;
    for (const iterator of userRating) {
        sum += iterator;
    }
    const average = sum / userRating.length;

    const averageResult = document.getElementById("average");
    averageResult.innerHTML = average.toFixed(2);

    const startsReviews = document.querySelectorAll(".rating");

    let rating = Math.round(average);

    startsReviews.forEach((star, index) => {
        if (index < rating) {
            star.classList.add("checked");
        }
    });
}

function handleStarClick(score) {
    userRating.push(parseInt(score));

    scores.forEach(score => {
        score.classList.remove("checked");
    });

    for (let index = 0; index < score; index++) {
        const element = scores[index];
        element.classList.add("checked")
    }
    updateAverage();
    updateUsers();
}

scores.forEach(score => {
    score.addEventListener("click", () => {
        const dataValue = score.dataset.value;
        handleStarClick(dataValue);
    });
});

function generateScoreColumns() {
    const scoreColumns = document.getElementById("scoreColumns");
    let columns = "";

    for (let index = 5; index >= 0; index--) {
        let columnCount = 0;
        for (let i = 0; i < userRating.length; i++) {
            if (userRating[i] === index) {
                columnCount++;
            }
        }
        const percentage = (columnCount / userRating.length) * 100;
        columns += `<div class="col d-flex justify-content-center align-items-center gap-2">
                        <div>${index}</div>
                        <div class="progress" style="height: 20px; width: 100%;">
                            <div class="progress-bar" role="progressbar" style="width: ${percentage}%;"
                                aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div>${columnCount}</div>
                    </div>`;
    }

    // Establecer el contenido del contenedor después de que se hayan generado todas las columnas
    scoreColumns.innerHTML = columns;
}

generateScoreColumns();








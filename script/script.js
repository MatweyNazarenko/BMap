//typeUse
const buttonsArr = document.querySelectorAll('#typeUse li button');
const useMenus = document.querySelectorAll('.useVaried');
const goBtn = document.querySelectorAll('.modal #go');
const carRoute = document.getElementById('carRoute');
const busRoute = document.getElementById('busRoute');    
const footerRoute = document.getElementById('footerRoute');    
const deleteRoute = document.getElementById('deleteRoute');                      
const routePanel = document.getElementById('routePanel');




// const closeBtn = document.querySelector('.closeBtn');
// const helperMenu = document.querySelector('.helper-menu');
// const leftBtn = document.getElementById('leftBtn');
// const rightBtn = document.getElementById('rightBtn');
// const helpText = document.getElementById('helpText');
// let indexPage = 1;
// let endPage = 6;
// //helpMenu
// function update() {
//     if (indexPage == 1) {
//         leftBtn.textContent = 'Нет';
//         rightBtn.textContent = 'Да';
//         helpText.textContent = 'Хочешь, я расскажу тебе о сайте?';
//     } else {
//         leftBtn.textContent = 'Назад';
//         rightBtn.textContent = 'Далее';
//     }
// }

// update();
// closeBtn.addEventListener('click', ()=>{
//     helperMenu.style.display = "none";
// })
// leftBtn.addEventListener('click', ()=>{
//     if(indexPage == 1){
//         helperMenu.style.display = "none";
//     }else{
//         indexPage--
//         update();
//     }
//     if(indexPage == endPage){
//             rightBtn.style.backgroundColor = '#9790909d';
//             rightBtn.style.cursor = 'inherit';
//         }else{
//             rightBtn.style.backgroundColor = '#fff';
//             rightBtn.style.cursor = 'pointer';
//         }
// })

// rightBtn.addEventListener('click', ()=>{
//     if(indexPage < endPage){
//         indexPage++;
//         console.log(indexPage);
//         update();
//     }
//     if(indexPage == 1){

//     }
//     if(indexPage == endPage){
//             rightBtn.style.backgroundColor = '#9790909d';
//             rightBtn.style.cursor = 'inherit';
//         }else{
//             rightBtn.style.backgroundColor = '#fff';
//             rightBtn.style.cursor = 'pointer';
//         }
// })











ymaps.ready(['multiRouter.MultiRoute']).then(init);

function getUserLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userPosiiton = [position.coords.latitude, position.coords.longitude];
                if(callback) {
                    callback(userPosiiton);
                }
            },
            (err) => {
                console.log("Ошибка геолокации:", err.message);
                console.warn("Не удалось определить ваше местоположение!");
            }
        );
    } else {
        alert("Геолокация не поддерживается вашим браузером!");
    }
}

// Можно сразу получить координаты при загрузке карты:



function hideUse(){
    useMenus.forEach(item =>{
        item.style.display = "none";
    })
    buttonsArr.forEach(it =>{
        it.classList.remove('active');
    })
}
function showUse(i=0){
    buttonsArr[i].classList.add('active');
    useMenus[i].style.display = "block";
}
hideUse();
showUse();
buttonsArr.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            hideUse();
            showUse(i);
    })
})


function addPlacemark(nameEach){
    let placemark = new ymaps.Placemark([nameEach.lat, nameEach.lon], {}, {
        iconLayout: nameEach.iconLayout,
        iconImageHref: nameEach.iconImageHref,
        iconImageSize: nameEach.iconImageSize,
        iconImageOffset: nameEach.iconImageOffset
    });
    return placemark;
}
//lineTime

const nowYear = document.querySelector('#nowYear'),
      timeLine = document.querySelector('#timeLine'),
      min = parseInt(nowYear.min),
      max = parseInt(nowYear.max);

//map
let categoryPoints = {
    category1: [
    {
        lat: 53.1325,
        lon: 25.1688,
        name: "Белостокско-Минское сражение",
        time: "22 июня — 9 июля 1941 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it1",
        year: 1941
    },
    {
        lat: 53.64,
        lon: 27.34,
        name: "Минская операция",
        time: "29 июня — 4 июля 1944 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it2",
        year: 1944
    },
    {
        // lat: 52.0457,
        // lon: 23.3914,
        lat: 51.94638567440506, 
        lon: 23.699613244830573,
        name: "Оборона Брестской крепости",
        time: "22 июня — 23 июля 1941 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it7",
        year: 1941
    },
    {
        lat: 55.3,
        lon: 30.48,
        name: "Витебское сражение",
        time: "6 июля — 16 июля 1941 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it8",
        year: 1941
    },
    {
        lat: 53.91,
        lon: 30.35,
        name: "Могилёвская оборона",
        time: "3 июля — 26 июля 1941 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it9",
        year: 1941
    },
    {
        lat: 54.9,
        lon: 30.18,
        name: "Витебско-Оршанская операция",
        time: "23 июня — 28 июня 1944 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it10",
        year: 1944
    },
    {
        lat: 52.51,
        lon: 30.55,
        name: "Гомельско-Речицкая наступательная операция",
        time: "10 ноября — 30 ноября 1943 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it11",
        year: 1943
    },
    {
        lat: 55.495576,
        lon: 28.478349,
        name: "Полоцкая наступательная операция",
        time: "29 июня — 4 июля 1944 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it12",
        year: 1944
    },
    {
        lat: 53.09,
        lon: 29.15,
        name: "Бобруйская операция",
        time: "24 июня — 29 июня 1944 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it13",
        year: 1944
    },
    {
        lat: 53.05,
        lon: 30.01,
        name: "Рогачёвско-Жлобинская операция",
        time: "21 февраля — 26 февраля 1944 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it14",
        year: 1944
    },
    {
        lat: 53.91,
        lon: 30.,
        name: "Могилёвская операция",
        time: "23 июня — 28 июня 1944 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it15",
        year: 1944
    }
    ], 
    category2: [
    {
        lat: 54.335000,
        lon: 27.944167,
        name: "Мемориальный комплекс «хатынь»",
        time: "5 июля 1969 г.",
        iconLayout: 'default#image',
        iconImageHref: 'img/monument-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it3",
        year: 1969
    },
    {
        lat: 52.737772,
        lon: 29.664905,
        name: "Мемориальный комплекс «Ола»",
        time: "Лето 2020 г.",
        iconLayout: 'default#image',
        iconImageHref: 'img/monument-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it4",
        year: 2020
    },
    {
        lat: 54.019166669906,
        lon: 27.89777777982,
        name: "Курган Славы в Минске",
        time: "5 июля 1969 г.",
        iconLayout: 'default#image',
        iconImageHref: 'img/monument-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it16",
        year: 1969
    },
    {
        lat: 52.083314448631704, 
        lon: 23.65957176582804,
        name: "Мемориальный комплекс «Брестская крепость-герой»",
        time: "25 сентября 1971 г.",
        iconLayout: 'default#image',
        iconImageHref: 'img/monument-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it17",
        year: 1971
    },
    {
        lat: 52.03854, 
        lon: 29.237590,
        name: "Курган Славы в Мозыре",
        time: "1967 год",
        iconLayout: 'default#image',
        iconImageHref: 'img/monument-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it18",
        year: 1967
    }
    ],
    category3: [
    {
        lat: 53.2749,
        lon: 26.4648,
        name: "Якуб Колас",
        time: "22 октября 1882г.",
        iconLayout: 'default#image',
        iconImageHref: 'img/user-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it5",
        year: 1882
    },
    {
        lat: 55.485576,
        lon: 28.768349,
        name: "Франциск Скорина",
        time: "около 1490г.",
        iconLayout: 'default#image',
        iconImageHref: 'img/user-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it6",
        year: 1490
    },
    {
        lat: 55.0241597741464,
        lon: 30.792299211400554,
        name: "Марк Шагал",
        time: "24 июня 1887г.",
        iconLayout: 'default#image',
        iconImageHref: 'img/user-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it19",
        year: 1887
    },
    {
        lat: 54.8789,
        lon: 26.9371,
        name: "Игнатий Домейко",
        time: "31 июля 1802г.",
        iconLayout: 'default#image',
        iconImageHref: 'img/user-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it20",
        year: 1802
    },
    {
        lat: 52.7673,
        lon: 25.1256,
        name: "Тадеуш Костюшко",
        time: "	4 февраля 1746г.",
        iconLayout: 'default#image',
        iconImageHref: 'img/user-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it21",
        year: 1746
    }
    ]
};

let center = [53.88292819423452,27.74879671867493];
let startZoom = 7;
function init(){

    //Создание карты
    let map = new ymaps.Map("map",{
        center: center,
        zoom: startZoom,
        // type: 'yandex#hybrid'
    });

    // // Добавление дополгительных кнопок
    // let myButton  = new ymaps.control.Button(
    //     {
    //         data: {
    //             content: 'Тест',
    //             title: 'отжимаюсь сама',
    //         }
    //     }, {
    //         selectONClick: false
    //         }
    // );
    // myButton.events.add(
    //     'click',
    //     function (){
    //         alert('Щёлк');
    //     }
    // );
    // map.controls.add(myButton);



    // let clusterer = new ymaps.Clusterer({
    //     preset: 'islands#invertedVioletClusterIcons',

    //     // true - если хотеть кластелизовать точки только с одинаковыми координатами
    //     groupByCoordinates: false,


    //     clusterDisableClickZoom: true,
    //     clusterHideIconOnBalloonOpen: false,
    //     geoObjectHideIconOnBalloonOpen: false
    // })

    // let getPointData = function (index){
    //     return{
    //         balloonContentFooter: '<font size=1>Информация представлена: </font> балуном <strong>метки' + index + '</strong>',
    //         clusterCaption: 'Метка <strong>'+index+'</strong>'
    //     }
    // }
    // let getPointOptions = function(){
    //     return {
    //         preset: 'island#violetIcon'
    //     };
    // }
    // let points = [
    // // category1
    // [53.1325, 25.1688],
    // [53.64, 27.34],
    // [51.94638567440506, 23.699613244830573],
    // [55.3, 30.48],
    // [53.91, 30.35],
    // [54.9, 30.18],
    // [52.51, 30.55],
    // [55.495576, 28.478349],
    // [53.09, 29.15],
    // [53.05, 30.01],
    // [53.91, 30.0],

    // // category2
    // [54.335, 27.944167],
    // [52.737772, 29.664905],
    // [54.019166669906, 27.89777777982],
    // [52.083314448631704, 23.65957176582804],
    // [52.03854, 29.23759],

    // // category3
    // [53.2749, 26.4648],
    // [55.485576, 28.768349],
    // [55.0241597741464, 30.792299211400554],
    // [54.8789, 26.9371],
    // [52.7673, 25.1256]
    // ];
    //  geoObjects = [];

    // for(var i = 0, len = points.length; i < len; i++) {
    //     geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());
    // }

    // clusterer.options.set({
    //     gridSize: 80,
    //     clusterDisableClickZoom: true
    // });
    // clusterer.add(geoObjects);
    // map.geoObjects.add(clusterer);
    // map.setBounds(clusterer.getBounds(), {
    //     checkZoomRange: true
    // });





    let placemarksByCategoryOnMap = {};





//Геокодинг

// let myGeocoder = ymaps.geocode([53.893952156452926,27.56112157157786],{kind:'metro'});

// myGeocoder.then(
//     function(res){
//         let nearest = res.geoObjects.get(0);
//         let name = nearest.properties.get('name');
//         nearest.properties.set('iconContent', name);
//         nearest.option.set('preset', 'twirl#redStretchyIcon');
//         map.geoObjects.add(res.geoObjects);l
//     },
//     function(err){
//         console.warn('Ошибка');
//     }
// )


//МАРШРУТИЗАЦИЯ

// let multiRoute = new ymaps.multiRouter.MultiRoute({
//     referencePoints: [
//         [59.9956, 29.7663],       // Кронштадт
//         // [59.93328, 30.342791],    // Центр СПб
//         [59.9554, 30.3556]        // Финляндский вокзал
//     ],
//     params: {
//         routingMode: 'auto' // auto | masstransit | pedestrian
//     }
// }, {
//     boundsAutoApply: true
// });

// map.geoObjects.add(multiRoute);


//ДОБАВЛЕНИЕ КАРТЫ БЕЛАРУСИ

    // var lastCollection = 0,
    //     lng = 'ru',      // язык интерфейса
    //     level = '1';

    // ymaps.regions.load('BY', {
    //     lang: lng,
    //     quality: level
    // }).then(function (result) {
    //     lastCollection = result.geoObjects;
    //     map.geoObjects.add(lastCollection);
    // }, function () {
    //     console.error('Не удалось загрузить регионы Беларуси');
    // });




    // Отключаем некоторые включенные по умолчанию поведения:
    // - drag - перемещение карты при нажатой левой кнопки мыши;
    // - rightMouseButtonMagnifier - увеличение области, выделенной
    // правой кнопкой мыши.
    // .disable(['drag', 'rightMouseButtonMagnifier']);
    // Включаем измеритель расстояний, активирующийся при
    // щелчке левой кнопкой мыши.
    // .enable('ruler');



    getUserLocation(function(userPosition){
        goBtn.forEach(item =>{
            let targetCoords = [
                parseFloat(item.dataset.lat),
                parseFloat(item.dataset.lon)
            ]
            item.addEventListener('click',()=>{
                routePanel.style.display = "flex";
                let multiRoute = new ymaps.multiRouter.MultiRoute({
                    referencePoints: [
                        userPosition,       // Кронштадт
                        // [59.93328, 30.342791],    // Центр СПб
                        targetCoords       // Финляндский вокзал
                    ],
                    params: {
                        routingMode: 'auto', // auto | masstransit | pedestrian
                        avoidTrafficJams: true
                    }
                }, {
                    boundsAutoApply: true
                });

                map.geoObjects.add(multiRoute);

                carRoute.addEventListener('click', ()=>{
                    multiRoute.model.setParams({ routingMode: 'auto' }, true);
                    carRoute.classList.add('active');
                    busRoute.classList.remove('active');
                    footerRoute.classList.remove('active');
                })

                busRoute.addEventListener('click', ()=>{
                    multiRoute.model.setParams({ routingMode: 'masstransit'}, true);
                    carRoute.classList.remove('active');
                    busRoute.classList.add('active');
                    footerRoute.classList.remove('active');
                })

                footerRoute.addEventListener('click', ()=>{
                    multiRoute.model.setParams({ routingMode: 'pedestrian'}, true);
                    carRoute.classList.remove('active');
                    busRoute.classList.remove('active');
                    footerRoute.classList.add('active');
                })

                deleteRoute.addEventListener('click', ()=>{
                    routePanel.style.display = "none";
                    carRoute.classList.add('active');
                    busRoute.classList.remove('active');
                    footerRoute.classList.remove('active');
                    map.geoObjects.remove(multiRoute);
                })
            })
        })
    });






    //startCheckbox
    document.querySelector('#use-hide').querySelectorAll('li').forEach(item =>{
    const checkbox = item.querySelector('input[type="checkbox"]');
    if(checkbox){
        let category = checkbox.dataset.category;
        // document.querySelector('#checkboxButton').addEventListener('click', ()=>{
        //     if(checkbox.checked){
        //     if(!placemarksByCategoryOnMap[category]){
        //         placemarksByCategoryOnMap[category] = [];
        //     }
        //     if(categoryPoints[category]){
        //         categoryPoints[category].forEach(point => {
        //         let placemark = addPlacemark(point);
        //         placemark.events.add('click', function (e) {
        //             document.querySelectorAll('.modal').forEach(item =>{
        //                 item.classList.remove('show');
        //             });
        //             document.querySelector(`[data-item="${point.dataItem}"]`).classList.add('show');
        //         });
        //         map.geoObjects.add(placemark);
        //         placemarksByCategoryOnMap[category].push(placemark);
        //     });
        // }
        //     }
        // })
        if (checkbox.checked) {
            if(!placemarksByCategoryOnMap[category]){
                placemarksByCategoryOnMap[category] = [];
            }
            if(categoryPoints[category]){
                categoryPoints[category].forEach(point => {
                let placemark = addPlacemark(point);
                placemark.events.add('click', function (e) {
                    document.querySelectorAll('.modal').forEach(item =>{
                        item.classList.remove('show');
                    });
                    document.querySelector(`[data-item="${point.dataItem}"]`).classList.add('show');
                });
                map.geoObjects.add(placemark);
                placemarksByCategoryOnMap[category].push(placemark);
            });
        }
    }
            
//checkbox-hide
        checkbox.addEventListener('change', ()=>{
            if(checkbox.checked){
                  if (!placemarksByCategoryOnMap[category]) {
                        placemarksByCategoryOnMap[category] = [];
                  }
                categoryPoints[checkbox.dataset.category].forEach(item =>{
                    let placemark = addPlacemark(item);
                    placemark.events.add('click', function (e) {
                    document.querySelectorAll('.modal').forEach(it =>{
                        it.classList.remove('show');
                    });
                    document.querySelector(`[data-item="${item.dataItem}"]`).classList.add('show');
                    });
                    map.geoObjects.add(placemark);
                    placemarksByCategoryOnMap[category].push(placemark);
                });
            }else{
            if (placemarksByCategoryOnMap[category]) {
            placemarksByCategoryOnMap[category].forEach(it => {
                map.geoObjects.remove(it);
            });
            delete placemarksByCategoryOnMap[category];
        }
            }
        })

// // Построение маршрута.
// // По умолчанию строится автомобильный маршрут.
// var multiRoute = new ymaps.multiRouter.MultiRoute({   
//     // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
//     referencePoints: [
//         'Москва, метро Смоленская',
//         'Москва, метро Арбатская',
//         [55.734876, 37.59308], // улица Льва Толстого.
//     ]
// }, {
//       // Автоматически устанавливать границы карты так,
//       // чтобы маршрут был виден целиком.
//       boundsAutoApply: true
// });

// // Добавление маршрута на карту.
// map.geoObjects.add(multiRoute);

// Определение местоположения пользователя.
// var location = ymaps.geolocation.get();
// Метод geolocation.get() возвращает Promise, который
// будет разрешен коллекцией <u />.
// Ссылка на эту коллекцию будет доступна в поле res.geoObjects.
// location.then(function (res) {
//     // Получение адреса местоположения пользователя.
//     var userTextLocation = /*res.geoObjects.get(0).properties.get('text')*/ [position.coords.latitude, position.coords.longitude];
//     console.log(userTextLocation);
//     control.routePanel.state.set({
//         // В качестве начальной точки маршрута будет установлено
//         // местоположение пользователя.
//         type: 'masstransit',
//         fromEnabled: true,
//         from: userTextLocation,
//         // Адрес конечной точки.
//         toEnabled: true,
//         to: 'Москва, ул. Льва Толстого, 16'
//     });
// });


// let endPoint = [53.88292819423452,27.74879671867493];
//lineTimeViewPoint

function TimelinePoints(year){
    for (let category in categoryPoints) {
        if (placemarksByCategoryOnMap[category]) {
            placemarksByCategoryOnMap[category].forEach(it => {
                map.geoObjects.remove(it);
            });
            placemarksByCategoryOnMap[category] = [];
        }else{
            placemarksByCategoryOnMap[category] = [];
        }
        categoryPoints[category].forEach(item => {
        if (item.year <= year) {
            let placemark = addPlacemark(item);
        placemark.events.add('click', ()=> {
            document.querySelectorAll('.modal').forEach(item =>{
                item.classList.remove('show');
            });
            document.querySelector(`[data-item="${item.dataItem}"]`).classList.add('show');
            });
        map.geoObjects.add(placemark);
        placemarksByCategoryOnMap[category].push(placemark);
        }
        });
    }
}


document.querySelector('#lineButton').addEventListener('click', ()=>{
    TimelinePoints(parseInt(timeLine.value));
    timeLine.addEventListener('input', () => {
        TimelinePoints(parseInt(timeLine.value));
    });
    nowYear.addEventListener('input', () => {
        TimelinePoints(parseInt(nowYear.value));
    });
})
    }
});

    //Местоположение
    getUserLocation(function(userPosition){
        let placemark = new ymaps.Placemark(userPosition, {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/logo.svg',
            iconImageSize: [20,20],
            iconImageOffset: [0,0]
        });

        map.geoObjects.add(placemark);

    }
    );
    
   


    map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально) 
}

//modal
const modal = document.querySelectorAll('#modal').forEach(item =>{
        close = item.querySelector('#close');
        close.addEventListener('click', ()=>{
            item.classList.remove('show');
        });
        document.addEventListener('keydown', (event)=>{
            if(event.key == "Escape"){
                item.classList.remove('show');
            }
        })
});



//lineTime
timeLine.addEventListener('input', () => {
      nowYear.value = timeLine.value;
});
nowYear.addEventListener('input', () => {
      timeLine.value = nowYear.value;
});


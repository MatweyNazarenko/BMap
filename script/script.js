//typeUse
const buttonsArr = document.querySelectorAll('#typeUse li button');
const useMenus = document.querySelectorAll('.useVaried');
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
        lat: 52.0457,
        lon: 23.3914,
        name: "Оборона Брестской крепости",
        time: "22 июня — 23 июля 1941 года",
        iconLayout: 'default#image',
        iconImageHref: 'img/sword-icon.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        dataItem: "it7",
        year: 1941
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
    ]
};

let center = [53.88292819423452,27.74879671867493];
let startZoom = 7;
function init(){
    let map = new ymaps.Map("map",{
        center: center,
        zoom: startZoom
    });
    let placemarksByCategoryOnMap = {};
//startCheckbox
    document.querySelector('#use-hide').querySelectorAll('li').forEach(item =>{
    const checkbox = item.querySelector('input[type="checkbox"]');
    if(checkbox){
        let category = checkbox.dataset.category;
        document.querySelector('#checkboxButton').addEventListener('click', ()=>{
            if(checkbox.checked){
            if(!placemarksByCategoryOnMap[category]){
                placemarksByCategoryOnMap[category] = [];
            }
            if(categoryPoints[category]){
                categoryPoints[category].forEach(point => {
                const placemark = new ymaps.Placemark([point.lat, point.lon], {}, {
                    iconLayout: point.iconLayout,
                    iconImageHref: point.iconImageHref,
                    iconImageSize: point.iconImageSize,
                    iconImageOffset: point.iconImageOffset
                });
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
        })
        if (checkbox.checked) {
            if(!placemarksByCategoryOnMap[category]){
                placemarksByCategoryOnMap[category] = [];
            }
            if(categoryPoints[category]){
                categoryPoints[category].forEach(point => {
                const placemark = new ymaps.Placemark([point.lat, point.lon], {}, {
                    iconLayout: point.iconLayout,
                    iconImageHref: point.iconImageHref,
                    iconImageSize: point.iconImageSize,
                    iconImageOffset: point.iconImageOffset
                });
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
                    let placemark = new ymaps.Placemark([item.lat, item.lon], {}, {
                        iconLayout: item.iconLayout,
                        iconImageHref: item.iconImageHref,
                        iconImageSize: item.iconImageSize,
                        iconImageOffset: item.iconImageOffset
                    });
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
            const placemark = new ymaps.Placemark([item.lat, item.lon], {}, {
                iconLayout: item.iconLayout,
                iconImageHref: item.iconImageHref,
                iconImageSize: item.iconImageSize,
                iconImageOffset: item.iconImageOffset
        });
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

    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально) 
}
ymaps.ready(init);


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

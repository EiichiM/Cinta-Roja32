const request = require('request');

// const URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-11-18&end_date=2018-11-21&api_key=YYg2ef0DVR6DzspWzeELyJdVqSRcCfb24MjtbY7y'

// request.get(URL,(err,response,body) => {
//     const json = JSON.parse(body);
//     console.log(json.near_earth_objects['2018-11-21'][0].id);
//     console.log(json['near_earth_objects']['2018-11-21'][0]['id']);
// });
const URL_NASA = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-29&end_date=2019-08-05&api_key=';
const API_KEY = 'YYg2ef0DVR6DzspWzeELyJdVqSRcCfb24MjtbY7y';
let URL_NASA_FINAL = URL_NASA + API_KEY;

// request.get( URL_NASA_FINAL, (error, response, body) => {
//     if (response.statusCode === 200) {
//         let asteroides = JSON.parse(body).near_earth_objects;
        
//         Object.keys(asteroides).forEach(function(key) {
//             asteroidesPeligrosos = asteroides[key].map( asteroide => {
//                 if (asteroide.is_potentially_hazardous_asteroid){
//                     console.log(`${asteroide.name} ----- ES PELIGROSO PARA LA TIERRA` );
//                 } else console.log(`${asteroide.name} ----- no es peligroso`);
//             })
//         });
//     } else console.log (error);
// });

const nasaPromise = new Promise ((resolve, reject)=>{
    request.get( URL_NASA_FINAL, (error,response,body)=>{
        
        if (response.statusCode === 200)    {
            const fechas = Object.keys(JSON.parse(body).near_earth_objects)
            const dangeorusAsteroids= []

            console.log(fechas)
            fechas.forEach( fecha =>{
                fecha.forEach(asteroide=> {
                    if(asteroide.is_potentially_hazardous_asteroid)
                   dangeorusAsteroids.push(asteroide.id)
                    
                })
            })
            resolve(dangeorusAsteroids)
       }else {reject(new Error (`Error, codigo ${resolve.statusCode}`))}
        
    })
});
nasaPromise.then(()=>console.log(`Peticion exitosa del asteroide con el id ${response.id}`)).then(respuesta=>{console.log(respuesta)}).catch(error=>(error))


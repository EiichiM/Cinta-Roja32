const request = require('request');
const URL = `http://pokeapi.co/api/v2/pokemon/151`

// const getPokemon = (idPokemon) =>{
//     const URL = `http://pokeapi.co/api/v2/pokemon/${idPokemon}`;
//     request.get(URL,(error,response, body)=>{
//         response.statusCode === 200
//         ?
//         JSON.parse(body).moves.forEach((element,indice,array) => {
            
//             console.log(element.move.name)
//         })
//         :
//         console.log(`No se hizo la peticion ${response.statusCode}`)
//     })
// }
// getPokemon(150)

// request.get( URL, (error, response, body) => { 
//     response.statusCode == 200 
//     ? console.log(                          
//         `Types: ` +                         
//         JSON.parse(body)                    
//             .types                          
//             .map(type => type.type.name)    
//     )                                       
//     : console.log(error);
// });    


// const getMovesByIdPokemon=(idPokemon)=>{
//     const URL_BASE = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
//     request.get(URL_BASE,(error,response,body) => {
//         const json = JSON.parse(body);
//         const listaMoves = []
//         if(response.statusCode === 200){
//             for(let i = 0; i < json.moves.length; i++){
//                 listaMoves.push(json.moves[i].move.name)
//             }
//             console.log(listaMoves);
//         }else{
//             console.log('Petición incorrecta');
//         }
//     })
// }



// getMovesByIdPokemon(150)

const pokemonByIDPromise = new Promise((resolve,reject)=>{
    request.get(URL,(err,res,body)=>{
        res.statusCode === 200
        ?resolve(JSON.parse(body))
        :reject(new Error (`Error, codigo: ${res.statusCode}`))
    })

})
pokemonByIDPromise.then(respuesta =>{console.log(respuesta.name)}).catch(UnError=>{console.log(UnError)})
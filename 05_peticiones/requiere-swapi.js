const request = require('request');

const getPeoplebyID = (id) => {
    const URL = `https://swapi.co/api/people/${id}/`
    request.get(URL, (err, response, body) => {
        const json = JSON.parse(body);
        //const json2 = JSON.parse(body);

        console.log(json.name);
        jason2.forEach(urls => {
            jason2 = urls
            request.get(json.films[0], (err, response, body) => {
                const film = JSON.parse(body).title
                console.log(film);


            });


        });
    });
};
// // const getNameByIdPeople=(idPeople)=>{
// //     const URL = `https://swapi.co/api/people/${idPeople}/`
// //     request.get(URL,(error,response,body) => {
// //         console.log(`Status code ----> ${response.statusCode}`);
// //         const respuestaBody = JSON.parse(body)
// //         if(response.statusCode === 200){
// //             console.log('Petición Correcta');
// //             console.log(respuestaBody.name);
// //         }else{
// //             console.log('Peticion incorrecta');
// //             console.log(respuestaBody.detail);
// //         }    
// //     });
// // }
// //getNameByIdPeople(9)
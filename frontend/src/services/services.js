const routes = {


/* Récupérer les offres  */
async getOffres(){
    var res = await fetch('http://localhost:8000/offres/', {
        method: 'GET',
        mode: 'cors'
    })

    return await res.json()

    // .then(async (res) => {
    //     offres = await res.json().then((data) => {
    //         return data
    //     })
    //     console.log(offres)
    //     return offres     
    // });

},

sendOffre(body){
        fetch('http://localhost:8000/offres/', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                mode: 'cors', 
                body:JSON.stringify(body)
             }
        ).then((res) => {
            console.log(res)
        });
    }
}



export default routes 
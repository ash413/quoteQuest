document.addEventListener("DOMContentLoaded", function(){
    let btn = document.querySelector('#new-qoute');
    let quote = document.querySelector('.quote');
    let person = document.querySelector('.person');

    async function fetchData(){
        try {
            /*fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            });*/
            let response = await fetch("https://type.fit/api/quotes");
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("Error is:" + error)
        }
    }
    console.log(fetchData());
    btn.addEventListener("click", function(){
        
    })
})
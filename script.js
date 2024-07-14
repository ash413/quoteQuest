document.addEventListener("DOMContentLoaded", function(){
    let btn = document.querySelector('#new-qoute');
    let quote = document.querySelector('.quote');

    async function fetchData(){
        try {
            let response = await fetch("https://api.quotable.io");
            let data = response.json();
            console.log(data);
        } catch (error) {
            console.log("Error is:" + error)
        }
    }
    console.log(fetchData());
    btn.addEventListener("click", function(){
        fetchData();
    })
})
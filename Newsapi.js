let div = document.getElementById("div");
async function apifetch(){
    let url = "https://newsapi.org/v2/everything?q=apple&from=2024-09-02&to=2024-09-02&sortBy=popularity&apiKey=7bd00cb506564aae86765357cf95a9bb";
    let connect = await fetch(url);
    let data = await connect.json();
    console.log(data);
    let articles = data.articles;
    articles.map((val)=>{
        div.innerHTML += `<div class="card" style="width: 18rem;">
                <img src=${val.urlToImage ?? "default_photo.jpg"} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${val.title.slice(0,60)}...</h5>
                  <p class="card-text">${val.author}</p>
                  <a href=${val.url} class="btn btn-dark">Read More...</a>
                </div>
              </div>`;
    })
    
}
apifetch();
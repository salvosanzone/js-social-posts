const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
console.log(posts);

/**
 Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Utilizzaimo la base dati fornita e anche il codice HTML/CSS
- Gli oggetti nell’array di oggetti rappresentano tutti i post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
- Stampiamo i post del nostro feed.
- Sotto al nome NON inseire il calcolo della data (es 4 mesi fa) ma la data i formato italiano (GG/MM/AAAA)
 */

//aggancio il container in cui successivamente andrò a scrivere con js
// 1. inizializzo e aggancio usando l'id
const container = document.getElementById('container');
console.log('ho agganciato:',container);


//do una stringa vuota al container per pulirlo
// 1. utilizzo innerHtml che va a scrivere sull'html
container.innerHTML = '';



//faccio un ciclo di lunghezza pari all'array in cui:
for(let i = 0; i < posts.length; i++){
    console.log('iterazione:',i);
    //creo un elemento div che sarà la struttura base del post
    const post = document.createElement('div');
    console.log('elemento creato:',post);
    //a questo div do una classe gia creata in css
    post.className = 'posts-list';
    //tramite un template inserisco tutti gli oggetti presenti nell'array usando innerHTML
    post.innerHTML = `
    
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts[i].media}"alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].name}</div>
                        <div class="post-meta__time">${posts[i].created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].content}.</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=171" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button"${posts[i].id}>
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    
    
    `;






    //appendo al container il post
    container.append(post);
}





 








  
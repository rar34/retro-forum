const cardContainer = document.getElementById('card-container');
const titleContainer = document.getElementById('title-container');
const latestPostContainer = document.getElementById('latest-post-container');


const loadData = () => {
    const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
    fetch(url)
        .then(response => response.json())
        .then(data => displayCard(data))
}

const displayCard = (data) => {
    const posts = data.posts;
    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'bg-[#F3F3F5] p-10 rounded-3xl flex gap-7';
        card.innerHTML = `
        <div class="bg-[#F3F3F5] p-2 lg:p-10 rounded-3xl flex gap-7">
            <div class="relative">
                <img class="w-20 h-20 rounded-2xl" src="${post.image}" alt="">
                <div class="bg-green-500 w-4 h-4 -top-1 -right-1 rounded-full absolute"> </div>
            </div>
            <div class="space-y-3">
                <div class="flex gap-10 font-inter font-medium">
                    <p># <span>${post.category}</span></p>
                    <p>Author : <span>${post.author.name}</span></p>
                </div>
                <h3 class="text-xl font-bold text-primary-color font-mulish">${post.title}</h3>
                <p class="text-[#12132D99] w-full">${post.description}</p>
                <hr class="my-6">
                <div class="flex items-center justify-between">
                    <div class="flex gap-7 font-inter">
                        <div class="flex items-center gap-2 mt-4">
                            <img src="./images/comment.png" alt="">
                            <p>${post.comment_count}</p>
                        </div>
                        <div class="flex items-center gap-2 mt-4">
                            <img src="./images/seen.png" alt="">
                            <p>${post.view_count}</p>
                        </div>
                        <div class="flex  items-center gap-2 mt-4">
                            <img src="./images/time.png" alt="">
                            <p>${post.posted_time}</p>
                        </div>
                    </div>
                    <div>
                        <button><img class="btn-email" src="images/email.png" alt=""></button>
                    </div>
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(card);
        displayTitle(post);
    });
}

const displayTitle = (post) =>{
    const allBtn = document.getElementsByClassName('btn-email');
    for (const btn of allBtn){
        btn.addEventListener('click', function(){
            const div = document.createElement('div');
            div.className = 'bg-white p-4 rounded-3xl flex justify-between mb-3 gap-4 items-center';
            const titleP = document.createElement('p');
            titleP.innerText = post.title;
            div.appendChild(titleP);
            titleContainer.appendChild(div);
        })
    }
}


const latestPosts = () =>{
    const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
    fetch(url)
    .then(res => res.json())
    .then(posts => {
        posts.forEach(post => {
            const div = document.createElement('div');
            div.className = 'card card-compact bg-white border p-10';
            div.innerHTML = `
            <figure><img src="${post.cover_image}" alt="" /></figure>
                    <div class="flex gap-2 items-center">
                        <img class="w-4 h-4" src="./images/icon.JPG" alt="">
                        <p class="text-[#12132D99]">29 January 2024</p>
                    </div>
                    <div class="card-body">
                      <h2 class="card-title text-xl font-extrabold">${post.title}</h2>
                      <p class="text-[#12132D99]">${post.description}</p>
                      <div class="">
                        <div class="avatar flex gap-5">
                            <div class="w-14 h-14 rounded-full">
                              <img src="${post.profile_image}" />
                            </div>
                            <div>
                                <h3 class="font-bold text-lg">${post.author.name}</h3>
                                <p class="text-[#12132D99]">${post.author?.designation}</p>
                            </div>
                          </div>
                      </div>
                    </div>
            `;
            latestPostContainer.appendChild(div);
        });
    })
}


loadData();
latestPosts();
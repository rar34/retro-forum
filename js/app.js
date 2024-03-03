const cardContainer = document.getElementById('card-container');


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
        <div class="bg-[#F3F3F5] p-10 rounded-3xl flex gap-7">
            <div class="relative">
                <img src="./images/pp.png" alt="">
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
                <div class="relative">
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
                    <div class="absolute right-4 bottom-1">
                        <button><img src="images/email.png" alt=""></button>
                    </div>
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(card);
    });
}

loadData();
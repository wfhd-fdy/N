const defaultPosts = [
{ id: 1, user: "سارة_تصميم", title: "ديكور داخلي هادئ وبسيط للمنازل العصرية", img: "https://unsplash.com", likes: 124, liked: false },
{ id: 2, user: "عدسة_مسافر", title: "غروب الشمس بين الجبال والطبيعة الخلابة", img: "https://unsplash.com", likes: 89, liked: false },
{ id: 3, user: "عالم_القهوة", title: "قهوة الصباح المختصة مع أجواء هادئة", img: "https://unsplash.com", likes: 215, liked: false },
{ id: 4, user: "فن_العمارة", title: "تصميم معماري هندسي مذهل", img: "https://unsplash.com", likes: 64, liked: false },
{ id: 5, user: "تقنية_وإبداع", title: "تجهيز مكتب عمل مريح للمبرمجين والمصممين", img: "https://unsplash.com", likes: 340, liked: false },
{ id: 6, user: "طبيعة_صامتة", title: "نباتات منزلية تضفي حياة للمكان", img: "https://unsplash.com", likes: 152, liked: false }
];

let posts = JSON.parse(localStorage.getItem('pingram_posts')) || defaultPosts;

function renderPosts(filter = "") {
const gallery = document.getElementById('gallery');
gallery.innerHTML = "";

const filtered = posts.filter(p => p.title.includes(filter) || p.user.includes(filter));

filtered.forEach(post => {
const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
<img src="${post.img}" alt="${post.title}" loading="lazy">
<div class="card-info">
<div class="card-header">
<span class="user-name">@${post.user}</span>
<button class="like-btn ${post.liked ? 'liked' : ''}" onclick="toggleLike(${post.id})">♥</button>
</div>
<p class="card-title">${post.title}</p>
<span class="likes-count">${post.likes} إعجاب</span>
</div>
`;
gallery.appendChild(card);
});
}

function toggleLike(id) {
posts = posts.map(post => {
if (post.id === id) {
post.liked = !post.liked;
post.likes += post.liked ? 1 : -1;
}
return post;
});
saveAndRender();
}

function openModal() { document.getElementById('postModal').style.display = 'flex'; }
function closeModal() { document.getElementById('postModal').style.display = 'none'; }

function addPost() {
const user = document.getElementById('userName').value.trim() || "مستخدم_جديد";
const title = document.getElementById('postTitle').value.trim();
const img = document.getElementById('imageUrl').value.trim();

if (!title || !img) { alert("يرجى إدخال وصف الصورة ورابطها!"); return; }

posts.unshift({ id: Date.now(), user, title, img, likes: 0, liked: false });
saveAndRender();
closeModal();

document.getElementById('userName').value = "";
document.getElementById('postTitle').value = "";
document.getElementById('imageUrl').value = "";
}

function saveAndRender() {
localStorage.setItem('pingram_posts', JSON.stringify(posts));
renderPosts(document.getElementById('searchInput').value);
}

document.getElementById('searchInput').addEventListener('input', (e) => renderPosts(e.target.value));

renderPosts();

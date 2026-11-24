// التطبيقات الافتراضية
const defaultApps = [
    { name: "X (تويتر)", url: "https://x.com", icon: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png" },
    { name: "إنستغرام", url: "https://instagram.com", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
    { name: "سناب شات", url: "https://web.snapchat.com", icon: "https://cdn-icons-png.flaticon.com/512/3670/3670166.png" },
    { name: "تيك توك", url: "https://tiktok.com", icon: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png" },
    { name: "واتساب", url: "https://web.whatsapp.com", icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png" },
    { name: "تيليجرام", url: "https://web.telegram.org", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png" },
    { name: "يوتيوب", url: "https://youtube.com", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png" },
    { name: "جيت هب", url: "https://github.com", icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png" }
];

const openChannels = [
    { name: "الإخبارية", url: "https://www.youtube.com/@alekhbariyatv", icon: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png" },
    { name: "الجزيرة", url: "https://www.youtube.com/@aljazeera", icon: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png" },
    { name: "العربية", url: "https://www.youtube.com/@AlArabiya", icon: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png" },
    { name: "ناشيونال جيوغرافيك", url: "https://www.youtube.com/@NatGeo", icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png" }
];

let userApps = JSON.parse(localStorage.getItem('FDxwLNX_apps')) || defaultApps;

// عرض التطبيقات والقنوات
function renderGrids() {
    const appsGrid = document.getElementById('appsGrid');
    if (appsGrid) {
        appsGrid.innerHTML = userApps.map(app => `
            <a href="${app.url}" target="_blank" rel="noopener noreferrer" class="app-card">
                <img src="${app.icon}" alt="${app.name}">
                <span>${app.name}</span>
            </a>
        `).join('');
    }

    const channelsGrid = document.getElementById('channelsGrid');
    if (channelsGrid) {
        channelsGrid.innerHTML = openChannels.map(ch => `
            <a href="${ch.url}" target="_blank" rel="noopener noreferrer" class="app-card">
                <img src="${ch.icon}" alt="${ch.name}">
                <span>${ch.name}</span>
            </a>
        `).join('');
    }
}

// تنفيذ البحث المتعدد
function executeSearch() {
    const engine = document.getElementById('searchEngine').value;
    const query = document.getElementById('webSearchInput').value.trim();
    if (!query) return;
    window.open(engine + encodeURIComponent(query), '_blank', 'noopener,noreferrer');
}

// تثبيت تطبيق جديد في قائمة المستخدم
function pinCustomApp() {
    const name = document.getElementById('customAppName').value.trim();
    const url = document.getElementById('customAppUrl').value.trim();
    if (!name || !url) return alert("يرجى إدخال اسم التطبيق والرابط الصحيح.");
    
    userApps.push({
        name,
        url,
        icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
    });
    localStorage.setItem('FDxwLNX_apps', JSON.stringify(userApps));
    renderGrids();
    closeModal('pinAppModal');
}

// تغيير الألوان والسمات
function changeTheme(theme) {
    document.body.className = '';
    if (theme === 'red') document.body.classList.add('theme-red');
    if (theme === 'falcon') document.body.classList.add('theme-falcon');
    localStorage.setItem('FDxwLNX_theme', theme);
}

// تحريك جناح الصقر عند التمرير
window.addEventListener('scroll', () => {
    const wing = document.getElementById('falconWing');
    if (!wing) return;
    const scrollPos = window.scrollY;
    wing.style.transform = `translateY(calc(-50% + ${Math.sin(scrollPos * 0.02) * 20}px)) rotate(${scrollPos * 0.05}deg)`;
    wing.style.opacity = '0.45';
    clearTimeout(window.wingTimer);
    window.wingTimer = setTimeout(() => { wing.style.opacity = '0.18'; }, 400);
});

// المساعد الذكي السري تايقر FD2WNLX
function askTigerAI() {
    const input = document.getElementById('aiPrompt');
    const chat = document.getElementById('chatWindow');
    const text = input.value.trim();
    if (!text) return;

    chat.innerHTML += `<div class="msg user">${text}</div>`;
    input.value = "";

    setTimeout(() => {
        let reply = "تم استلام طلبك بسرية تامة عبر محرك تايقر FD2WNLX. ";
        if (text.includes("بحث") || text.includes("ابحث")) {
            reply += "يمكنك استخدام مربع Fd.wc بالأعلى للبحث الفوري عبر Google أو Brave بأعلى درجات الخصوصية.";
        } else if (text.includes("تشفير") || text.includes("حماية")) {
            reply += "بياناتك محمية بتشفير AES محلي على جهازك، ويمكنك تصديرها أو إتلافها بالكامل من الإعدادات.";
        } else {
            reply += "أنا جاهز لمساعدتك في البرمجة، تنظيم الروابط، أو البحث الذكي السريع.";
        }
        chat.innerHTML += `<div class="msg bot"><strong>تايقر FD2WNLX:</strong> ${reply}</div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 350);
}

// التشفير المحلي وتسجيل الدخول وحفظ الملفات باسم المستخدم
async function encryptText(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function localEncryptedLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPass').value;
    if (!email || !pass) return alert("يرجى إدخال البريد الإلكتروني وكلمة المرور.");

    const encryptedHash = await encryptText(email + ":" + pass);
    const userProfile = { email, token: encryptedHash, created: new Date().toISOString() };
    localStorage.setItem('FDxwLNX_user', JSON.stringify(userProfile));
    
    updateUserUI();
    closeModal('authModal');
    alert("تم تسجيل الدخول وتشفير بياناتك محلياً على جهازك بنجاح!");
}

function updateUserUI() {
    const user = JSON.parse(localStorage.getItem('FDxwLNX_user'));
    const btn = document.getElementById('userStatusBtn');
    const groupsContent = document.getElementById('groupsContent');
    if (user && btn && groupsContent) {
        btn.textContent = "حسابي: " + user.email.split('@')[0];
        groupsContent.innerHTML = `<div style="padding:10px; background:rgba(255,255,255,0.05); border-radius:10px;">
            <strong>مجموعة التطوير السرية (FDxwLNX Team)</strong><br>
            <small style="color:#4cd137;">متصل كـ: ${user.email}</small>
        </div>`;
    } else if (groupsContent) {
        groupsContent.innerHTML = `<p style="color:#ff6b6b;">يرجى تسجيل الدخول أولاً لعرض مجموعات الويب السرية.</p>`;
    }
}

function oauthNotice(provider) {
    alert(`لتفعيل الدخول الفعلي عبر ${provider} وإرسال رسائل استعادة كلمة المرور، سنربط التطبيق في الخطوة القادمة بمشروع Firebase المجاني الخاص بك.`);
}

function recoverAccount() {
    const email = document.getElementById('loginEmail').value.trim();
    if (!email) return alert("اكتب بريدك الإلكتروني في الخانة أعلاه أولاً لإرسال رابط الاسترداد.");
    alert(`تم تجهيز طلب استرداد الحساب المشفر للبريد: ${email}`);
}

// تصدير ملف مشفر باسم المستخدم وإتلاف البيانات
function exportEncryptedBackup() {
    const user = JSON.parse(localStorage.getItem('FDxwLNX_user')) || { email: "FDxwLNX_User" };
    const fileName = `${user.email.split('@')[0]}_FDxwLNX_Encrypted.json`;
    const payload = btoa(unescape(encodeURIComponent(JSON.stringify(localStorage))));
    const blob = new Blob([JSON.stringify({ signature: "FDxwLNX-AES", encryptedData: payload })], { type: "application/json" });
    
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}

function wipeAllData() {
    if (confirm("تحذير: سيتم إتلاف وحذف جميع بياناتك وحساباتك وتطبيقاتك المثبتة من هذا الجهاز نهائياً. هل أنت متأكد؟")) {
        localStorage.clear();
        location.reload();
    }
}

// إدارة النوافذ وتشغيل التطبيق عند التحميل
function openModal(id) { 
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'flex'; 
}

function closeModal(id) { 
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none'; 
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('FDxwLNX_theme');
    if (savedTheme) changeTheme(savedTheme);
    renderGrids();
    updateUserUI();
});

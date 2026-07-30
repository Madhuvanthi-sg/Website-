// ==========================================
// 1. DATA SOURCES
// ==========================================

const brandName = "MadhuVerse";

const experiences = [
  {
    id: 1,
    title: "Teaching Practice Session",
    category: "Teaching",
    likes: 142,
    comments: 18,
    desc: "Interactive teaching sessions with 4th-grade students covering story-telling and grammar.",
    fullStory: "On February 17th and 18th, I conducted teaching practice sessions at Guru Nanak School for 4th-standard students. We explored story analysis and Hindi grammar through engaging classroom activities.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "ELA Memories",
    category: "Personal",
    likes: 98,
    comments: 12,
    desc: "Reflections and classroom moments from my English Language Arts sessions.",
    fullStory: "ELA Memories is a collection of short essays, classroom snapshots, and reflections from my English Language Arts classes. I documented reading circles, student responses, and creative writing exercises.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Eco-Friendly Festival Stall",
    category: "Event & Management",
    likes: 210,
    comments: 34,
    desc: "Organizing and running an eco-friendly gift stall during our college festival event.",
    fullStory: "Coordinating a multi-day stall with my project team provided real-world experience in product curation, budgeting, team collaboration, and engaging with diverse event visitors.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80"
  }
];

const followersData = [
  { name: "Priya Sharma", username: "@priya_tech", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" },
  { name: "Rahul Verma", username: "@rahul_dev", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" },
  { name: "Ananya Roy", username: "@ananya_creative", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" },
  { name: "Karthik Raja", username: "@karthik_cs", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" }
];

// ==========================================
// 2. RENDER FEED POSTS
// ==========================================

function renderFeed() {
  const grid = document.getElementById('experiences-grid');
  if (!grid) return;

  grid.innerHTML = experiences.map(item => `
    <article class="post-card">
      <div class="post-header">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" class="post-avatar" alt="Madhuvanthi">
        <span class="post-user">madhuvanthi_g</span>
      </div>
      
      <img src="${item.image}" alt="${item.title}" class="post-img" onclick="openStoryDetail(${item.id})">
      
      <div class="post-actions">
        <i class="fa-regular fa-heart" onclick="toggleLike(this)"></i>
        <i class="fa-regular fa-comment" onclick="openNavModal('contact')"></i>
        <i class="fa-regular fa-paper-plane" onclick="openNavModal('contact')"></i>
      </div>
      
      <div class="post-body">
        <div style="font-size:0.8rem; font-weight:600; color:var(--accent);">${item.category}</div>
        <h4 class="post-title" onclick="openStoryDetail(${item.id})">${item.title}</h4>
        <p class="post-desc">${item.desc}</p>
        <button class="btn btn-primary" onclick="openStoryDetail(${item.id})" style="margin-top:0.75rem; width:100%;">Read Full Post</button>
      </div>
    </article>
  `).join('');
}

function toggleLike(icon) {
  icon.classList.toggle('fa-regular');
  icon.classList.toggle('fa-solid');
  if (icon.classList.contains('fa-solid')) {
    icon.style.color = '#ed4956';
  } else {
    icon.style.color = 'inherit';
  }
}

// ==========================================
// 3. MODAL NAVIGATION SYSTEM
// ==========================================

function openNavModal(type) {
  const modal = document.getElementById('app-modal');
  const container = document.getElementById('modal-dynamic-content');
  if (!modal || !container) return;

  let html = '';

  if (type === 'about') {
    html = `
      <div style="text-align:center;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" style="width:90px; height:90px; border-radius:50%; object-fit:cover; margin-bottom:0.75rem; border: 3px solid var(--accent);">
        <h2>About Madhuvanthi G</h2>
        <p style="color:var(--muted); font-size:0.9rem;">Computer Science Student & Content Creator</p>
        <p style="text-align:left; font-size:0.95rem; line-height:1.6; margin-top:1rem;">
          Welcome to <strong>${brandName}</strong>! I am pursuing my degree in Computer Science while actively exploring software engineering, database design, teaching, and story writing.
        </p>
        <p style="text-align:left; font-size:0.95rem; line-height:1.6;">
          This interactive platform acts as my open forum where I share learning updates, stories, and directly answer questions submitted by visitors!
        </p>
      </div>
    `;
  } else if (type === 'stories') {
    html = `
      <h3><i class="fa-solid fa-book-open"></i> Stories & Experiences</h3>
      <p style="color:var(--muted); font-size:0.85rem; margin-bottom:1rem;">Select a topic to read the full entry:</p>
      <div style="display:flex; flex-direction:column; gap:0.75rem;">
        ${experiences.map(item => `
          <div onclick="openStoryDetail(${item.id})" style="display:flex; gap:0.75rem; align-items:center; background:#f8fafc; padding:0.65rem; border-radius:8px; cursor:pointer;">
            <img src="${item.image}" style="width:60px; height:60px; border-radius:6px; object-fit:cover;">
            <div>
              <strong style="font-size:0.9rem; display:block;">${item.title}</strong>
              <span style="font-size:0.75rem; color:var(--accent);">${item.category}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (type === 'contact') {
    html = `
      <h3><i class="fa-regular fa-paper-plane"></i> Ask a Question / Comment</h3>
      <p style="color:var(--muted); font-size:0.85rem; margin-bottom:1rem;">Leave a query or comment and I will respond to it on my feed!</p>
      <form id="qa-form" onsubmit="handleFormSubmit(event)">
        <div style="margin-bottom:0.75rem;">
          <label style="font-size:0.85rem; font-weight:600;">Your Name</label>
          <input type="text" name="name" required placeholder="e.g. Priya" style="width:100%; padding:0.6rem; border:1px solid var(--border); border-radius:8px; margin-top:0.25rem;">
        </div>
        <div style="margin-bottom:0.75rem;">
          <label style="font-size:0.85rem; font-weight:600;">Email Address</label>
          <input type="email" name="email" required placeholder="your@email.com" style="width:100%; padding:0.6rem; border:1px solid var(--border); border-radius:8px; margin-top:0.25rem;">
        </div>
        <div style="margin-bottom:1rem;">
          <label style="font-size:0.85rem; font-weight:600;">Question or Comment</label>
          <textarea name="message" rows="3" required placeholder="Write your question here..." style="width:100%; padding:0.6rem; border:1px solid var(--border); border-radius:8px; margin-top:0.25rem; font-family:inherit;"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;">Post Question</button>
      </form>
      <div id="qa-result" style="margin-top:0.75rem; font-size:0.9rem; color:#16a34a; font-weight:600;"></div>
    `;
  } else if (type === 'followers') {
    html = `
      <h3><i class="fa-solid fa-user-group"></i> Network & Community</h3>
      <div style="display:flex; border-bottom:1px solid var(--border); margin-bottom:1rem; gap:1rem; font-weight:600; font-size:0.9rem; padding-bottom:0.5rem;">
        <span style="color:var(--accent); border-bottom:2px solid var(--accent); padding-bottom:0.25rem;">1.2k Followers</span>
        <span style="color:var(--muted);">450 Following</span>
      </div>
      <div>
        ${followersData.map(f => `
          <div class="user-row">
            <div class="user-info">
              <img src="${f.img}" alt="${f.name}">
              <div class="user-names">
                <strong>${f.name}</strong>
                <span>${f.username}</span>
              </div>
            </div>
            <button class="btn btn-secondary" style="color:var(--text); background:#f1f5f9; font-size:0.75rem; padding:0.35rem 0.75rem;" onclick="this.textContent = this.textContent === 'Following' ? 'Follow' : 'Following'">Following</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  container.innerHTML = html;
  modal.classList.remove('hidden');
}

function openStoryDetail(id) {
  const item = experiences.find(x => x.id === id);
  if (!item) return;

  const modal = document.getElementById('app-modal');
  const container = document.getElementById('modal-dynamic-content');

  container.innerHTML = `
    <img src="${item.image}" style="width:100%; height:200px; object-fit:cover; border-radius:10px; margin-bottom:0.85rem;">
    <span style="font-size:0.75rem; font-weight:700; color:var(--accent); text-transform:uppercase;">${item.category}</span>
    <h2 style="margin:0.25rem 0 0.75rem 0;">${item.title}</h2>
    <p style="line-height:1.6; font-size:0.95rem; color:var(--text);">${item.fullStory}</p>
    
    <div style="margin-top:1.25rem; padding-top:0.75rem; border-top:1px solid var(--border);">
      <button class="btn btn-primary" onclick="openNavModal('contact')" style="width:100%;">Comment on this Story</button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeAppModal() {
  const modal = document.getElementById('app-modal');
  if (modal) modal.classList.add('hidden');
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = new FormData(form).get('name');
  const resultDiv = document.getElementById('qa-result');
  
  if (resultDiv) {
    resultDiv.textContent = `Thanks ${name}! Your question has been submitted. I'll post a reply soon.`;
  }
  form.reset();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderFeed();
  
  // Close modal when clicking dark backdrop
  const modal = document.getElementById('app-modal');
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeAppModal();
  });
});

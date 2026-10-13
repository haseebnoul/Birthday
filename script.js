/* =============================================================
   BIRTHDAY WEBSITE FOR IFRA YOUSAF
   script.js — complete vanilla JavaScript
   Author: Haseeb Ahmad (via prompt)
   ============================================================= */

/* =============================================================
   CONFIGURATION — Edit everything here freely!
============================================================= */
const CONFIG = {
  /* Personal names */
  giftGiver: 'Haseeb Ahmad',
  birthdayPerson: 'Ifra Yousaf',
  birthday: 'November 9',

  /* Nicknames (used throughout) */
  nicknames: [
    { nick: 'Meli Jan', emoji: '❤️' },
    { nick: 'Meli Shahzadi', emoji: '👑' },
    { nick: 'Meli Ladu', emoji: '🍡' },
    { nick: 'Meli Shareek-e-Hayat', emoji: '💍' },
    { nick: 'Meli Mehza', emoji: '🌸' },
    { nick: 'Meli Mahrukh', emoji: '🌙' },
    { nick: 'Meli Begum Jan', emoji: '💗' },
  ],

  /* Audio: set the path to your mp3 file. Leave empty to hide the player. */
  audioSrc: '', // e.g. 'music/song.mp3'

  /* Photo gallery: add { src: 'photos/pic1.jpg', caption: 'Caption text' } objects. */
  /* Galleries are rendered if photos array has entries. */
  photos: [],
};

/* =============================================================
   CONTENT DATA
============================================================= */

/* Section 1 — "Why You Are Special" cards */
const SPECIAL_CARDS = [
  {
    icon: '🌸',
    title: 'You are rare, Meli Jan.',
    body: 'There are people who make a room brighter just by being in it. You are one of those people. Not because you try to be — but because something about your presence carries a kind of warmth that stays even after you\'ve left. I notice it, even when you don\'t.',
  },
  {
    icon: '💗',
    title: 'Your happiness matters to me.',
    body: 'Meli Begum Jan, your smile is not just something I love to see — it is something I genuinely want to protect. Whether life gives you easy days or challenging ones, I want you to know that your joy matters to me. Not just on birthdays. Every ordinary day.',
  },
  {
    icon: '✨',
    title: 'You deserve to be celebrated.',
    body: 'Meli Shahzadi, sometimes people spend so much time making others feel valued that they forget to remind themselves of their own worth. Today, and every day, you deserve to be reminded: you are appreciated, you are admired, and you are genuinely loved — not for what you do, but for who you are.',
  },
  {
    icon: '🌙',
    title: 'I notice the little things.',
    body: 'Meli Mahrukh, the things that make you you — the way you speak, the things that make you laugh, the care you carry for the people you love — these are not small things to me. They are the things I think about. They are the things that make my world a little more beautiful.',
  },
  {
    icon: '🧸',
    title: 'You are allowed to be human.',
    body: 'Meli Jan, you do not have to be perfect to be precious to me. You are allowed to have difficult days, quiet days, emotional days, and days when you do not feel like smiling. I hope you always know that your feelings deserve kindness and your heart deserves care — from the world, and from me.',
  },
  {
    icon: '💌',
    title: 'You matter beyond words.',
    body: 'Meli Begum Jan, there are things I may never explain perfectly, but one thing I want you to understand is this: you matter to me. Not only when everything is beautiful and easy, but also when life requires patience, understanding, and effort. You matter consistently. You matter genuinely.',
  },
];

/* Section 2 — Heart petal messages */
const HEART_MESSAGES = [
  {
    icon: '❤️',
    label: 'Something I adore about you',
    title: 'The way you care.',
    body: 'Meli Jan, what I adore most about you is the sincerity with which you love the people in your life. You care deeply — not for show, but because it is simply who you are. That kind of genuine warmth is rare, and I never want you to stop knowing how beautiful it is.',
  },
  {
    icon: '🌸',
    label: 'Something I wish for you',
    title: 'Peace that stays.',
    body: 'Meli Mehza, if I could wish one thing for you beyond all the obvious things — happiness, health, success — it would be peace. The quiet kind. The kind that stays even on difficult days. The kind that makes you feel okay even when life is asking a lot of you.',
  },
  {
    icon: '💗',
    label: 'Something I want you to remember',
    title: 'You are not alone.',
    body: 'Meli Mahrukh, if there is one thing I wish I could give you on every birthday and every ordinary day in between, it is the feeling of being genuinely appreciated. I hope you never have to wonder whether your dreams matter, whether your happiness matters, or whether your voice deserves to be heard. I want to be someone who listens, learns, supports you, celebrates you, and keeps choosing kindness even when life is not easy.',
  },
  {
    icon: '🤲',
    label: 'Something I pray for',
    title: 'Goodness in every chapter.',
    body: 'Meli Jan, I pray that the path ahead of you is filled with moments that restore you, people who appreciate you, and opportunities that push you gently toward the best version of yourself. I pray that your life becomes exactly the kind of life your heart quietly hopes for.',
  },
  {
    icon: '🌙',
    label: 'Something I hope we build together',
    title: 'A life made of genuine moments.',
    body: 'Meli Shareek-e-Hayat, I hope we build something real — not a relationship of beautiful words alone, but one of quiet understanding, honest communication, and the kind of loyalty that shows up even when it is inconvenient. I hope we become each other\'s safe place, consistently and sincerely.',
  },
];

/* Nickname gift messages */
const GIFT_MESSAGES = [
  {
    nick: 'Meli Jan',
    emoji: '❤️',
    giftIcon: '🎁',
    body: 'Home is not always a place. Sometimes it is the comfort of knowing someone matters to your heart. You are a very special part of my world, and today I want you to feel every bit of that.',
  },
  {
    nick: 'Meli Shahzadi',
    emoji: '👑',
    giftIcon: '🎀',
    body: 'Royal treatment for the birthday princess. Your only responsibilities today are to smile, enjoy your cake, and accept an unreasonable — and fully deserved — amount of affection. Your Haseeb has decreed it.',
  },
  {
    nick: 'Meli Ladu',
    emoji: '🍡',
    giftIcon: '🧁',
    body: 'Warning: This website contains dangerously high levels of cuteness because its owner is hopelessly fond of one particular Ladu. Side effects may include smiling uncontrollably and feeling very, very appreciated.',
  },
  {
    nick: 'Meli Shareek-e-Hayat',
    emoji: '💍',
    giftIcon: '💝',
    body: 'My hope is that we keep learning how to be good to each other, support each other\'s dreams, and build a future with sincerity, respect, and Allah\'s guidance. One sincere step at a time.',
  },
  {
    nick: 'Meli Mehza',
    emoji: '🌸',
    giftIcon: '🌺',
    body: 'Some people make ordinary moments feel a little more beautiful just by being in them. You have that quality, and you have a very special place in my heart. I hope today reminds you of that.',
  },
  {
    nick: 'Meli Mahrukh',
    emoji: '🌙',
    giftIcon: '⭐',
    body: 'If I could send a little prayer to the moon for you tonight, it would be that Allah fills your heart with peace, lights your path gently, and gives you countless reasons to smile — today and every day.',
  },
  {
    nick: 'Meli Begum Jan',
    emoji: '💗',
    giftIcon: '🎊',
    body: 'Dear Begum Jan, your birthday decree is officially approved: extra happiness, unlimited cake, absolutely no shortage of affection, and a lifetime supply of sincere little messages. All approved. All deserved.',
  },
];

/* Mini quiz data */
const QUIZ_QUESTIONS = [
  {
    q: 'Meli Ladu, your birthday cake has only one slice left. What do we do?',
    options: [
      { label: 'Share it together. ❤️', reaction: 'This is exactly why you are my favourite person. Equal slices, equal happiness. 💗' },
      { label: 'Take the bigger half and smile innocently. 😇', reaction: 'Meli Jan! I saw that smile. Totally innocent. I completely believe you. 😂' },
      { label: 'Demand another cake. 🎂', reaction: 'Absolutely correct answer. Birthday Shahzadi demands a second cake. Your Haseeb agrees unconditionally. 👑🎂' },
    ],
  },
  {
    q: 'Meli Shahzadi, what should your birthday superpower be?',
    options: [
      { label: 'Making everyone around me smile. 🌸', reaction: 'Meli Jan, you already have this one. You just don\'t always notice it. 💗' },
      { label: 'Getting unlimited hugs. 🧸', reaction: 'Consider this officially granted. Hug delivery: ongoing and unlimited. 🐼🧸' },
      { label: 'Making all my dreams come true. ✨', reaction: 'Ya Allah, please grant this for her. Ameen. And I\'ll do my small part too. ❤️' },
    ],
  },
  {
    q: 'If our little love story had a mascot, what would it be?',
    options: [
      { label: 'Two cuddly pandas. 🐼🐼', reaction: 'Soft, round, and dedicated to bamboo and each other. Iconic. Absolutely iconic. 🐼' },
      { label: 'A bear and a panda. 🐻🐼', reaction: 'Different in some ways, perfect together. This is canon. This is us. 🐻🐼❤️' },
      { label: 'Two sleepy animals refusing to leave their cozy spot. 😂', reaction: 'The most accurate answer I have ever read. Meli Jan, this is genuinely us and I am not ashamed. 😂💗' },
    ],
  },
];

/* Prayer cards */
const PRAYER_CARDS = [
  { icon: '💚', text: 'Ya Allah, bless Ifra with good health, inner peace, and a life filled with goodness. Protect her from harm, sadness, and every difficulty she has not even imagined yet.' },
  { icon: '📚', text: 'Ya Allah, grant her success in her education, her work, and every good endeavour her heart is set upon. Make her path easy and her efforts fruitful.' },
  { icon: '🌟', text: 'Ya Allah, strengthen her faith and keep her heart connected to what is good, what is kind, and what is true. Let her find comfort in Your remembrance.' },
  { icon: '👨‍👩‍👧‍👦', text: 'Ya Allah, bless her parents and family with health, protection, happiness, dignity, peace, and barakah. Ease their difficulties and grant them goodness in this life and the Hereafter.' },
  { icon: '💞', text: 'Ya Allah, if a future together is written for us, make it filled with love, mercy, patience, honesty, and mutual respect — the kind that strengthens both our faith and our lives.' },
  { icon: '🌈', text: 'Ya Allah, put goodness in our intentions toward each other, and guide us toward what is best for both of us. Let whatever You have decreed for us be a source of peace and not worry.' },
  { icon: '🌍', text: 'Ya Allah, help us both become sources of happiness for the families who love us, rather than sources of worry. Bless us in this world and the next. Ameen.' },
];

/* Timeline hopes */
const TIMELINE_HOPES = [
  { icon: '🌱', title: 'Growing together', text: 'I hope we keep choosing to learn about each other — not just in the beginning, but as a consistent commitment to understanding.' },
  { icon: '🎯', title: 'Supporting each other\'s dreams', text: 'Your ambitions matter to me. I want to be the one cheering for you when you achieve them and encouraging you when they feel far away.' },
  { icon: '💬', title: 'Honest, gentle communication', text: 'I hope we learn to speak to each other with honesty that is kind, and with care that is brave enough to say the difficult things calmly.' },
  { icon: '🤝', title: 'Facing challenges as a team', text: 'I hope that when life brings difficulty, we face it side by side — not as opponents, but as two people who have chosen each other.' },
  { icon: '🏡', title: 'A peaceful, loving home', text: 'If Allah grants us a shared future, I pray it is a home filled with peace, gratitude, laughter, and the warmth of two people who genuinely try for each other.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Families who are proud and happy', text: 'I hope we become a source of happiness and goodness for the families who love us — not a worry, but a joy.' },
  { icon: '🌙', title: 'Ordinary moments made precious', text: 'The big moments matter, but it is the small ones — a quiet evening, a shared laugh, a gentle conversation — that I hope become the fabric of our lives.' },
];

/* Birthday wishes (rotating) */
const BIRTHDAY_WISHES = [
  `Meli Jan, on your birthday, I wish you much more than a beautiful day. I wish you a beautiful life.\n\nI pray that the worries you carry become lighter, the dreams you hold become closer, and the days ahead bring you reasons to smile that you cannot even imagine today.\n\nI hope you get opportunities that help you grow, people who appreciate your heart, and moments that remind you how precious your life is.\n\nI want you to succeed in the things that matter to you. I want you to feel proud of yourself. I want you to keep discovering your strengths and becoming the person you dream of being.\n\nAnd whenever life feels difficult, I hope you remember that you deserve patience, understanding, and kindness.\n\nHappy Birthday, Meli Shahzadi. May your life be filled with goodness, and may Allah protect your beautiful smile. ❤️`,

  `Meli Mehza, another year is not just a number — it is another chapter of a story that I hope is becoming more and more beautiful for you.\n\nI wish that this year brings you clarity on the things that matter to you, courage for the steps that feel uncertain, and the kind of happiness that does not depend on everything being perfect.\n\nYou deserve to thrive, not just survive. And I mean that with my whole heart.`,

  `Meli Begum Jan, if birthdays are a time to make wishes, then here are mine for you:\n\nMay every good thing you deserve find its way to you. May your health stay strong, your heart stay soft, and your spirit stay hopeful.\n\nMay the people who are good for you stay close, and may Allah ease whatever has been making life heavy for you lately.\n\nYou are worth every single good prayer. Happy Birthday, Ifra Yousaf. ❤️`,

  `Meli Mahrukh, I hope this birthday feels like a gentle beginning — a reminder that you are stepping into another year carrying everything that has made you who you are, and everything that is still ahead.\n\nMay Allah write goodness for you in this year that you cannot yet see. May your days be full of meaning, your nights full of peace, and your heart full of hope.`,
];

/* The personal letter */
const LETTER_PARAGRAPHS = [
  { text: 'Meli Jan,', cls: 'script' },
  { text: 'Sometimes I wish I could take everything I feel in my heart and place it in front of you — just so you could see how much you mean to me. Words are beautiful, but sometimes they feel too small for the feelings they are trying to carry.' },
  { text: 'I may not always find the perfect words, and I know that love is something a person must show through actions, not only sentences. But I want to keep learning, keep understanding you, and keep becoming someone who brings goodness into your life — not just on your birthday, but in the ordinary moments that matter most.' },
  { text: 'Meli Ladu, you are someone I want to see smiling, dreaming, growing, and finding happiness in your own life. I want to celebrate your strengths and be gentle with your vulnerable moments. I want to be someone you can speak to honestly, and someone whose presence adds to your peace rather than taking from it.' },
  { text: 'Meli Shahzadi, the respect I have for you is not just about words. It is about wanting the best for you — your health, your success, your faith, your happiness, and the wellbeing of the family you love. Because you love them, they matter to me too. That is simply how it works.' },
  { text: 'I pray for you, sincerely and often. Not because prayer is easy, but because you deserve to be prayed for — you deserve someone who asks Allah to be kind to you, to ease your path, to protect your heart, and to fill your life with more goodness than you imagined.' },
  { text: 'Meli Mahrukh, as for the future — I cannot promise what only time and Allah know. But I can tell you what I hope for. I hope we keep growing together, keep being honest with each other, and keep choosing kindness even when it requires effort. I hope we become each other\'s gentle place in a world that is not always gentle.' },
  { text: 'And on your birthday, I pray that Allah gives you more goodness than you ask for, more peace than you expect, and opportunities that bring out the best in you. I pray that every prayer you have ever made quietly in the dark is heard and answered in the most beautiful way.' },
  { text: 'Whatever life holds, I hope you always know that this birthday website was created with a simple intention: to make you feel special. Because you truly are special to me, Ifra Yousaf. Not occasionally. Genuinely.' },
  { text: 'Happy Birthday, my Ifra Yousaf.', cls: 'script' },
  { text: 'Meli Jan. Meli Shahzadi. Meli Ladu. Meli Mehza. Meli Mahrukh. Meli Begum Jan. Meli Shareek-e-Hayat.', cls: 'script' },
  { text: 'So many names — and every single one carries a little piece of my affection for you.', cls: 'script' },
  { text: 'With love, duas, and all the feelings behind these words,', cls: 'script' },
  { text: 'Your Haseeb Ahmad. ❤️', cls: 'script' },
];

/* YES button captions (cycle as user tries to click NO) */
const YES_CAPTIONS = [
  'Ohooo, Meli Jan! What was that? 😂',
  'Meli Shahzadi, that button is running away from your own love story! 😭',
  'Meli Ladu, I think the NO button knows it has no chance. 😂',
  'Begum Jan, please select the correct answer before Haseeb starts writing sad poetry. 😔',
  'Your Honour, I believe the answer is YES! ❤️',
  'The NO button has a very busy schedule today. It\'s unavailable. 😇',
  'Meli Jan, the NO button is in witness protection. You\'ll never find it. 😂',
];

/* Ambient emoji particles */
const PARTICLE_EMOJIS = ['💗', '🌸', '✨', '💕', '⭐', '🌷', '💖', '🤍', '🌺', '💝'];

/* =============================================================
   STATE
============================================================= */
let currentSection = 0;
let specialCardIndex = 0;
let quizIndex = 0;
let wishIndex = 0;
let yesNoCount = 0;
let yesAnswered = false;
let letterAnimating = false;
let giftsOpened = new Set();

/* =============================================================
   UTILITY FUNCTIONS
============================================================= */

/** Safely get an element. Logs warning if missing. */
function el(id) {
  const e = document.getElementById(id);
  if (!e) console.warn('[Birthday] Element not found:', id);
  return e;
}

/** Show element by removing 'hidden' class */
function show(elem) { if (elem) elem.classList.remove('hidden'); }

/** Hide element by adding 'hidden' class */
function hide(elem) { if (elem) elem.classList.add('hidden'); }

/** Navigate to a section by index */
function goToSection(index) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((s, i) => {
    if (i === index) {
      s.classList.remove('hidden');
      s.classList.add('active', 'fade-in');
    } else {
      s.classList.add('hidden');
      s.classList.remove('active', 'fade-in');
    }
  });

  // Update progress dots
  document.querySelectorAll('.progress-dot').forEach((dot, i) => {
    dot.classList.remove('active');
    if (i < index) dot.classList.add('visited');
    if (i === index) dot.classList.add('active');
  });

  currentSection = index;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Create and launch confetti particles in a container */
function launchConfetti(containerId, count = 40) {
  const container = el(containerId);
  if (!container) return;
  container.innerHTML = '';

  const colors = ['#e05080', '#ffb3c8', '#ffd700', '#a0c4ff', '#b5ead7', '#ff9eb5', '#fff0a0'];

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    particle.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * -10}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${1.2 + Math.random() * 1.8}s;
      animation-delay: ${Math.random() * 0.8}s;
    `;
    container.appendChild(particle);
  }
}

/** Create ambient floating particles */
function initAmbientParticles() {
  const container = el('ambient-particles');
  if (!container) return;

  const isMobile = window.innerWidth < 600;
  const count = isMobile ? 10 : 18;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'ambient-particle';
    p.setAttribute('aria-hidden', 'true');
    p.textContent = PARTICLE_EMOJIS[Math.floor(Math.random() * PARTICLE_EMOJIS.length)];
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      animation-duration: ${8 + Math.random() * 12}s;
      animation-delay: ${Math.random() * 10}s;
      font-size: ${0.7 + Math.random() * 0.8}rem;
    `;
    container.appendChild(p);
  }
}

/* =============================================================
   SECTION 0 — LANDING / ENVELOPE
============================================================= */
function initSection0() {
  const openBtn = el('open-btn');
  const envelope = el('envelope');
  const revealOverlay = el('reveal-overlay');
  const beginJourneyBtn = el('begin-journey-btn');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      // Animate envelope opening
      if (envelope) envelope.classList.add('opened');

      // Short delay then show reveal overlay
      setTimeout(() => {
        show(revealOverlay);
        // Hide nav during landing transition
        el('progress-nav')?.classList.remove('nav-hidden');
      }, 700);
    });
  }

  if (beginJourneyBtn) {
    beginJourneyBtn.addEventListener('click', () => {
      hide(revealOverlay);
      goToSection(1);
      initSection1();
    });
  }
}

/* =============================================================
   SECTION 1 — WHY YOU ARE SPECIAL
============================================================= */
function initSection1() {
  renderSpecialCard(0);
  updateSpecialNav();

  const prevBtn = el('prev-special');
  const nextBtn = el('next-special');

  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (specialCardIndex > 0) { specialCardIndex--; renderSpecialCard(specialCardIndex); updateSpecialNav(); }
  });

  if (nextBtn) nextBtn.addEventListener('click', () => {
    if (specialCardIndex < SPECIAL_CARDS.length - 1) { specialCardIndex++; renderSpecialCard(specialCardIndex); updateSpecialNav(); }
  });

  el('s1-next')?.addEventListener('click', () => { goToSection(2); initSection2(); });
}

function renderSpecialCard(index) {
  const container = el('special-cards');
  if (!container) return;
  const card = SPECIAL_CARDS[index];

  container.innerHTML = `
    <div class="reveal-card">
      <div class="reveal-card-icon">${card.icon}</div>
      <h3>${card.title}</h3>
      <p>${card.body}</p>
    </div>
  `;
}

function updateSpecialNav() {
  const prevBtn = el('prev-special');
  const nextBtn = el('next-special');
  const counter = el('special-counter');

  if (prevBtn) prevBtn.disabled = specialCardIndex === 0;
  if (nextBtn) nextBtn.disabled = specialCardIndex === SPECIAL_CARDS.length - 1;
  if (counter) counter.textContent = `${specialCardIndex + 1} / ${SPECIAL_CARDS.length}`;
}

/* =============================================================
   SECTION 2 — HEARTS GARDEN
============================================================= */
function initSection2() {
  const garden = el('hearts-garden');
  if (!garden) return;
  garden.innerHTML = '';

  HEART_MESSAGES.forEach((msg, i) => {
    const petal = document.createElement('button');
    petal.className = 'heart-petal';
    petal.setAttribute('role', 'listitem');
    petal.setAttribute('aria-label', `Open heart: ${msg.label}`);
    petal.innerHTML = `
      <div class="heart-petal-icon">${msg.icon}</div>
      <div class="heart-petal-label">${msg.label}</div>
    `;
    petal.style.animationDelay = `${i * 0.08}s`;
    petal.addEventListener('click', () => openHeartMessage(msg));
    petal.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openHeartMessage(msg); } });
    garden.appendChild(petal);
  });

  // Close panel
  el('close-heart-msg')?.addEventListener('click', () => hide(el('heart-message-panel')));

  el('s2-next')?.addEventListener('click', () => { goToSection(3); initSection3(); });
}

function openHeartMessage(msg) {
  const panel = el('heart-message-panel');
  if (!panel) return;

  panel.querySelector('.heart-msg-icon').textContent = msg.icon;
  panel.querySelector('.heart-msg-title').textContent = msg.title;
  panel.querySelector('.heart-msg-body').textContent = msg.body;
  show(panel);
  panel.querySelector('.close-panel').focus();
}

/* =============================================================
   SECTION 3 — OUR CUTE LITTLE CORNER
============================================================= */
function initSection3() {
  renderGifts();
  renderQuiz(0);
  el('s3-next')?.addEventListener('click', () => { goToSection(4); initSection4(); });
}

function renderGifts() {
  const row = el('gifts-row');
  if (!row) return;
  row.innerHTML = '';

  GIFT_MESSAGES.forEach((gift, i) => {
    const box = document.createElement('button');
    box.className = 'gift-box';
    box.setAttribute('role', 'listitem');
    box.setAttribute('aria-label', `Open gift for ${gift.nick}`);
    box.innerHTML = `
      <div class="gift-box-icon">${giftsOpened.has(i) ? gift.emoji : gift.giftIcon}</div>
      <div class="gift-box-label">${gift.nick}</div>
    `;
    if (giftsOpened.has(i)) box.classList.add('opened');

    box.addEventListener('click', () => openGiftMessage(i, gift, box));
    row.appendChild(box);
  });

  el('close-gift-msg')?.addEventListener('click', () => hide(el('gift-message-panel')));
}

function openGiftMessage(index, gift, box) {
  giftsOpened.add(index);
  box.classList.add('opened');
  box.querySelector('.gift-box-icon').textContent = gift.emoji;

  const panel = el('gift-message-panel');
  if (!panel) return;

  panel.querySelector('.gift-msg-emoji').textContent = gift.emoji;
  panel.querySelector('.gift-msg-nickname').textContent = gift.nick;
  panel.querySelector('.gift-msg-body').textContent = gift.body;
  show(panel);
  panel.querySelector('.close-panel').focus();
}

/* Mini quiz rendering */
function renderQuiz(index) {
  const container = el('quiz-container');
  if (!container) return;

  if (index >= QUIZ_QUESTIONS.length) {
    container.innerHTML = `<div class="quiz-reaction">🎉 Meli Jan, you have completed the little quiz! Every answer was perfectly you. 💗</div>`;
    return;
  }

  const q = QUIZ_QUESTIONS[index];
  container.innerHTML = `
    <div class="quiz-q">
      <p>${q.q}</p>
      <div class="quiz-options">
        ${q.options.map((opt, oi) => `
          <button class="quiz-opt-btn" data-qi="${index}" data-oi="${oi}" aria-label="${opt.label}">
            ${opt.label}
          </button>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi = parseInt(btn.dataset.qi);
      const oi = parseInt(btn.dataset.oi);
      showQuizReaction(qi, oi);
    });
  });
}

function showQuizReaction(qi, oi) {
  const container = el('quiz-container');
  if (!container) return;
  const reaction = QUIZ_QUESTIONS[qi].options[oi].reaction;

  container.innerHTML = `
    <div class="quiz-reaction">${reaction}</div>
    <button class="btn-secondary quiz-next-btn" aria-label="Next question">
      ${qi < QUIZ_QUESTIONS.length - 1 ? 'Next Question →' : 'Finish Quiz 🎉'}
    </button>
  `;

  container.querySelector('.quiz-next-btn').addEventListener('click', () => {
    renderQuiz(qi + 1);
  });
}

/* =============================================================
   SECTION 4 — PRAYERS
============================================================= */
function initSection4() {
  const prayerCardsEl = el('prayer-cards');
  if (!prayerCardsEl) return;
  prayerCardsEl.innerHTML = '';

  PRAYER_CARDS.forEach((card, i) => {
    const div = document.createElement('div');
    div.className = 'prayer-card';
    div.style.animationDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <div class="prayer-card-icon">${card.icon}</div>
      <p class="prayer-card-text">${card.text}</p>
    `;
    prayerCardsEl.appendChild(div);
  });

  el('s4-next')?.addEventListener('click', () => { goToSection(5); initSection5(); });
}

/* =============================================================
   SECTION 5 — HOPES / TIMELINE + YES GAME
============================================================= */
function initSection5() {
  renderTimeline();
  initYesGame();
}

function renderTimeline() {
  const container = el('hopes-timeline');
  if (!container) return;
  container.innerHTML = '';

  TIMELINE_HOPES.forEach((hope, i) => {
    const li = document.createElement('div');
    li.className = 'timeline-stone';
    li.setAttribute('role', 'listitem');
    li.style.animationDelay = `${i * 0.1}s`;
    li.innerHTML = `
      <div class="stone-dot">${hope.icon}</div>
      <div class="stone-content">
        <h4>${hope.title}</h4>
        <p>${hope.text}</p>
      </div>
    `;
    container.appendChild(li);
  });
}

function initYesGame() {
  const showQuestionBtn = el('show-yes-question');
  const yesIntro = el('yes-intro');
  const yesQuestion = el('yes-question');
  const yesButtons = el('yes-buttons');
  const yesCaption = el('yes-caption');
  const btnYes = el('btn-yes');
  const btnNo = el('btn-no');

  // Show the "can I ask a question" trigger
  if (showQuestionBtn) {
    // Show the initial intro, then after a pause show the button
    setTimeout(() => {
      showQuestionBtn.classList.remove('hidden');
    }, 800);

    showQuestionBtn.addEventListener('click', () => {
      hide(showQuestionBtn);
      show(yesQuestion);
      show(yesButtons);
      show(yesCaption);
      yesCaption.textContent = '';
    });
  }

  // YES button
  if (btnYes) {
    btnYes.addEventListener('click', () => {
      if (yesAnswered) return;
      handleYesClick();
    });
  }

  // NO button — moves away
  if (btnNo) {
    const moveNoBtn = () => {
      if (yesAnswered) return;
      yesNoCount++;
      updateYesCaption();
      const container = el('yes-buttons');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const btnRect = btnNo.getBoundingClientRect();

      // Generate a safe random offset within the parent container
      const maxX = containerRect.width - btnRect.width;
      const maxY = containerRect.height - btnRect.height;

      const newX = Math.max(0, Math.min(maxX, Math.random() * maxX));
      const newY = Math.max(0, Math.min(maxY, Math.random() * maxY));

      // Use absolute positioning inside relative container
      btnNo.style.position = 'absolute';
      btnNo.style.left = newX + 'px';
      btnNo.style.top = newY + 'px';

      // Make container relative with enough height
      container.style.position = 'relative';
      container.style.minHeight = '100px';
    };

    // Mouse: move when cursor gets within 60px
    btnNo.addEventListener('mousemove', moveNoBtn);
    btnNo.addEventListener('touchstart', (e) => { e.preventDefault(); moveNoBtn(); }, { passive: false });
    btnNo.addEventListener('click', moveNoBtn); // fallback

    // Keyboard: if focus reaches NO, describe what's happening
    btnNo.addEventListener('focus', () => {
      if (yesAnswered) return;
      yesNoCount++;
      updateYesCaption();
      // Visually signal but don't actually move for keyboard users — allow escape
    });

    // If keyboard user presses Enter/Space on NO
    btnNo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        moveNoBtn();
      }
    });
  }
}

function updateYesCaption() {
  const captionEl = el('yes-caption');
  if (!captionEl) return;
  const idx = Math.min(yesNoCount - 1, YES_CAPTIONS.length - 1);
  captionEl.textContent = YES_CAPTIONS[idx % YES_CAPTIONS.length];
}

function handleYesClick() {
  yesAnswered = true;
  hide(el('yes-game'));
  const yesResult = el('yes-result');
  show(yesResult);
  launchConfetti('yes-confetti', 60);

  // Show section continue button
  const s5next = el('s5-next');
  if (s5next) {
    setTimeout(() => show(s5next), 1500);
    s5next.addEventListener('click', () => { goToSection(6); initSection6(); });
  }
}

/* =============================================================
   SECTION 6 — ONE LAST LETTER
============================================================= */
function initSection6() {
  // Birthday wishes
  renderBirthdayWish(0);
  el('another-wish-btn')?.addEventListener('click', () => {
    wishIndex = (wishIndex + 1) % BIRTHDAY_WISHES.length;
    const msgEl = el('bday-message');
    if (msgEl) {
      msgEl.style.opacity = '0';
      setTimeout(() => {
        renderBirthdayWish(wishIndex);
        msgEl.style.opacity = '1';
      }, 300);
    }
  });

  // Letter envelope click
  const letterEnvelope = el('letter-envelope');
  if (letterEnvelope) {
    const openLetter = () => {
      hide(letterEnvelope.parentElement);
      const letterContent = el('letter-content');
      show(letterContent);
      animateLetter();
    };
    letterEnvelope.addEventListener('click', openLetter);
    letterEnvelope.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLetter(); }
    });
  }

  // Skip animation button
  el('skip-letter-anim')?.addEventListener('click', () => {
    letterAnimating = false;
    renderFullLetter();
    revealFinalCelebration();
  });

  // Hug button
  el('hug-btn')?.addEventListener('click', () => {
    const hugResult = el('hug-result');
    show(hugResult);
    el('hug-btn')?.setAttribute('disabled', 'true');
  });
}

function renderBirthdayWish(index) {
  const msgEl = el('bday-message');
  if (!msgEl) return;
  // Convert newlines to paragraphs
  const paragraphs = BIRTHDAY_WISHES[index].split('\n\n').map(p => `<p>${p}</p>`).join('');
  msgEl.innerHTML = paragraphs;
}

function animateLetter() {
  const paper = el('letter-paper');
  if (!paper) return;
  letterAnimating = true;
  paper.innerHTML = '';

  let paraIndex = 0;

  const addNextPara = () => {
    if (!letterAnimating) return;
    if (paraIndex >= LETTER_PARAGRAPHS.length) {
      // Letter done
      letterAnimating = false;
      revealFinalCelebration();
      return;
    }

    const paraData = LETTER_PARAGRAPHS[paraIndex];
    const p = document.createElement('p');
    p.className = `letter-para${paraData.cls ? ' ' + paraData.cls : ''}`;
    p.style.opacity = '0';
    p.style.transform = 'translateY(10px)';
    p.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    p.textContent = paraData.text;
    paper.appendChild(p);

    // Trigger fade-in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
      });
    });

    paraIndex++;
    paper.scrollTop = paper.scrollHeight;
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    // Delay between paragraphs (reduce for final sign-off)
    const delay = paraIndex >= LETTER_PARAGRAPHS.length - 4 ? 1200 : 1800;
    setTimeout(addNextPara, delay);
  };

  addNextPara();
}

function renderFullLetter() {
  const paper = el('letter-paper');
  if (!paper) return;
  paper.innerHTML = '';

  LETTER_PARAGRAPHS.forEach(paraData => {
    const p = document.createElement('p');
    p.className = `letter-para${paraData.cls ? ' ' + paraData.cls : ''}`;
    p.textContent = paraData.text;
    paper.appendChild(p);
  });
}

function revealFinalCelebration() {
  const finalCelebration = el('final-celebration');
  if (!finalCelebration) return;
  setTimeout(() => {
    show(finalCelebration);
    launchConfetti('final-confetti', 80);
  }, 600);
}

/* =============================================================
   AUDIO PLAYER
============================================================= */
function initAudio() {
  const audioSrc = CONFIG.audioSrc;
  const player = el('audio-player');
  const toggleBtn = el('audio-toggle');
  const iconEl = el('audio-icon');
  const labelEl = el('audio-label');
  const audioEl = el('bg-audio');
  const sourceEl = el('audio-source');

  if (!audioSrc || !player) {
    if (player) player.style.display = 'none';
    return;
  }

  sourceEl.src = audioSrc;
  audioEl.load();
  player.style.display = 'flex';

  let playing = false;

  const toggle = () => {
    if (playing) {
      audioEl.pause();
      playing = false;
      iconEl.textContent = '🎵';
      labelEl.textContent = 'Play Music';
      toggleBtn.setAttribute('aria-label', 'Play background music');
    } else {
      audioEl.play().then(() => {
        playing = true;
        iconEl.textContent = '⏸️';
        labelEl.textContent = 'Pause Music';
        toggleBtn.setAttribute('aria-label', 'Pause background music');
      }).catch(() => {
        console.warn('[Birthday] Audio play failed — user gesture required.');
      });
    }
  };

  toggleBtn.addEventListener('click', toggle);
  player.addEventListener('click', toggle);
}

/* =============================================================
   PROGRESS NAV CLICKS
============================================================= */
function initProgressNav() {
  document.querySelectorAll('.progress-dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      const sectionIndex = parseInt(dot.dataset.section);
      if (!isNaN(sectionIndex)) {
        goToSection(sectionIndex);
        // Re-init sections when jumping back
        if (sectionIndex === 1) initSection1();
        else if (sectionIndex === 2) initSection2();
        else if (sectionIndex === 3) initSection3();
        else if (sectionIndex === 4) initSection4();
        else if (sectionIndex === 5) { initSection5(); }
        else if (sectionIndex === 6) initSection6();
      }
    });
  });
}

/* =============================================================
   KEYBOARD ACCESSIBILITY — ESC closes any open panel
============================================================= */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hide(el('heart-message-panel'));
    hide(el('gift-message-panel'));
    hide(el('reveal-overlay'));
  }
});

/* =============================================================
   INITIALISE ON DOM READY
============================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initAmbientParticles();
  initAudio();
  initSection0();
  initProgressNav();

  // Hide progress nav on initial screen until journey begins
  el('progress-nav')?.classList.add('nav-hidden');

  // Reveal nav once journey starts (observer on section 1 becoming active)
  const observer = new MutationObserver(() => {
    const s1 = el('section-1');
    if (s1 && !s1.classList.contains('hidden')) {
      el('progress-nav')?.classList.remove('nav-hidden');
    }
  });

  const s1 = el('section-1');
  if (s1) observer.observe(s1, { attributes: true, attributeFilter: ['class'] });
});

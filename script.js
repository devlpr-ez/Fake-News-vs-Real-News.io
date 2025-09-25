    function openModal(id){ document.getElementById(id).style.display='flex'; }

    // Always show login modal when website is opened
    document.addEventListener('DOMContentLoaded', function() {
      openModal('loginModal');
    });
    function closeModal(id){ document.getElementById(id).style.display='none'; }
    function switchModal(closeId, openId){
      closeModal(closeId);
      openModal(openId);
    }
    // Close modal when clicking outside
    window.onclick = function(e){
      document.querySelectorAll('.modal').forEach(m=>{
        if(e.target==m){ m.style.display='none'; }
      });
    }
    let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;

  document.querySelectorAll(".quiz-question").forEach(q => q.style.display = "none");
  document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).style.display = "block";

  document.getElementById("nextBtn").style.display = "inline-block";
  document.getElementById("resetBtn").style.display = "none";
  document.getElementById("score").style.display = "none";
}

function nextQuestion() {
  const currentQ = document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`);
  const selected = currentQ.querySelector(".quiz-option.selected");

  if (!selected) {
    alert("Please choose an answer before proceeding!");
    return;
  }

  if (selected.dataset.answer === "real" && currentQuestion == 1 ||
      selected.dataset.answer === "fake" && (currentQuestion == 0 || currentQuestion == 2)) {
    score++;
  }

  currentQuestion++;

  document.querySelectorAll(".quiz-question").forEach(q => q.style.display = "none");

  if (currentQuestion < document.querySelectorAll(".quiz-question").length) {
    document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).style.display = "block";
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("resetBtn").style.display = "inline-block";

  const total = document.querySelectorAll(".quiz-question").length;
  const scoreBox = document.getElementById("score");
  scoreBox.style.display = "block";
  scoreBox.innerHTML = `You scored <strong>${score}</strong> out of <strong>${total}</strong>`;
}

function resetQuiz() {
  document.querySelectorAll(".quiz-option").forEach(opt => opt.classList.remove("selected"));
  startQuiz();
}

// Option selection
document.addEventListener("click", function(e){
  if (e.target.classList.contains("quiz-option")) {
    const parent = e.target.parentElement;
    parent.querySelectorAll(".quiz-option").forEach(opt => opt.classList.remove("selected"));
    e.target.classList.add("selected");
  }
  function startQuiz() {
  currentQuestion = 0;
  score = 0;

  // Hide all questions
  document.querySelectorAll(".quiz-question").forEach(q => q.style.display = "none");

  // Show the first one
  document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).style.display = "block";

  // Hide start button, show next button
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "inline-block";
  document.getElementById("resetBtn").style.display = "none";
  document.getElementById("score").style.display = "none";
}
let slideIndex = 0;
let autoSlide;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
const totalSlides = slides.length;
const slideWidth = 600; // must match CSS width

function moveSlide(direction) {
  slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Auto slide every 5s
function startAutoSlide() {
  autoSlide = setInterval(() => moveSlide(1), 5000);
}

// Pause on hover
document.querySelector(".carousel-container").addEventListener("mouseenter", () => clearInterval(autoSlide));
document.querySelector(".carousel-container").addEventListener("mouseleave", startAutoSlide);

startAutoSlide();

// ✅ Swipe support
let startX = 0;
let endX = 0;

track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  let diff = startX - endX;
  if (Math.abs(diff) > 50) { // minimum swipe distance
    if (diff > 0) {
      moveSlide(1); // swipe left → next
    } else {
      moveSlide(-1); // swipe right → prev
    }
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });
  // Close sidebar when clicking outside
  document.addEventListener('click', function(e) {
    if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove('active');
    }
    function openModal(modalId) {
  // Check how many times the login modal has been opened
  let loginCount = parseInt(localStorage.getItem('loginCount')) || 0;

  if (modalId === 'loginModal') {
    if (loginCount < 2) {
      document.getElementById(modalId).style.display = 'flex';
      loginCount++;
      localStorage.setItem('loginCount', loginCount);
    } else {
      console.log('Login modal has reached the maximum number of displays.');
    }
  } else {
    // For other modals like signup, just open normally
    document.getElementById(modalId).style.display = 'flex';
  }
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Optional: click outside modal to close
window.onclick = function(event) {
  const modal = document.getElementById('loginModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Switch between login and signup
function switchModal(closeId, openId) {
  closeModal(closeId);
  openModal(openId);
}
  });
});
});


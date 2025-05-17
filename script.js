const quotes = [
  "Parents are hard on their kids because they're proud of them.",
  "There could be no positivity without negativity to contrast it.",
  "You are allowed to rest without earning it.",
  "Growth is not linear. Bad days are still progress.",
  "Doing nothing is doing something—especially when healing.",
  "It's okay to not be okay right now.",
  "You're doing your best, and that's enough."
];

function newQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = quote;
}

function startMeditation() {
  let seconds = 30;
  const meditationText = document.getElementById('meditation-text');
  meditationText.textContent = "Close your eyes and breathe...";

  const interval = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(interval);
      meditationText.textContent = "Good job. Open your eyes when you're ready.";
    }
  }, 1000);
}

window.onload = newQuote;

const buddhaQuotes = [
  "Peace comes from within. Do not seek it without. — Buddha",
  "You will not be punished for your anger; you will be punished by your anger.",
  "The mind is everything. What you think, you become.",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.",
  "Holding onto anger is like drinking poison and expecting the other person to die.",
  "Suffering is not holding you. You are holding suffering.",
  "A calm mind brings inner strength and self-confidence.",
  "The obstacle is the path.",
  "You cannot stop the waves, but you can learn to surf.",
  "Let go or be dragged."
];

function newBuddhaQuote() {
  const quote = buddhaQuotes[Math.floor(Math.random() * buddhaQuotes.length)];
  document.getElementById('buddha-quote').textContent = quote;
}

window.onload = function () {
  newQuote();
  newBuddhaQuote();
};

const quotes = [
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Study while others are sleeping, work while others are dreaming.",
  "Your future is created by what you do today, not tomorrow.",
  "Don’t watch the clock; do what it does—keep going.",
  "Small progress is still progress.",
  "Push yourself, because no one else is going to do it for you.",
  "Difficult roads often lead to beautiful destinations.",
  "Focus on your goal, not your fear.",
  "You don’t have to be perfect, just consistent.",
  "The pain of studying is temporary, but the success is permanent.",
  "Discipline is choosing between what you want now and what you want most.",
  "Every expert was once a beginner.",
  "The harder you work, the luckier you get.",
  "Don’t limit your challenges, challenge your limits.",
  "Dream big, start small, act now.",
  "Your only competition is who you were yesterday.",
  "Consistency beats motivation every time.",
  "Failure is not the opposite of success, it’s part of it.",
  "You are one decision away from a completely different life.",
  "Make yourself proud."
];
 function generateQuote()
{
 const index = Math.floor(Math.random() * quotes.length)
 document.getElementById("quote").innerHTML = quotes[index]

}
//color
const backgrounds = [
  "linear-gradient(135deg, #e0e7ff, #f1f5f9)",  // soft bluish
  "linear-gradient(135deg, #eef2ff, #e0e7ff)",  // light indigo
  "linear-gradient(135deg, #f1f5f9, #e2e8f0)",  // cool gray
  "linear-gradient(135deg, #e0f2fe, #f0f9ff)",  // soft sky blue
  "linear-gradient(135deg, #f8fafc, #e2e8f0)",  // very light gray
  "linear-gradient(135deg, #e6f0ff, #f5faff)",  // pale blue
  "linear-gradient(135deg, #edf2ff, #f8fafc)",  // smooth blend
  "linear-gradient(135deg, #e0f7fa, #f1f5f9)"   // slight cyan touch
];

function changecolor() {
  const index = Math.floor(Math.random() * backgrounds.length);
  document.body.style.background = backgrounds[index];
}

// run every 2 seconds
setInterval(changecolor, 500);
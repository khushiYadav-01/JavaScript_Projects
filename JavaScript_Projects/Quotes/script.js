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
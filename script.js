function orderCoffee(){

alert("Thanks for choosing BeanCraft Coffee ☕");

}


/* FAQ accordion */

const questions = document.querySelectorAll(".faq-question")

questions.forEach(q=>{

q.addEventListener("click",()=>{

const answer = q.nextElementSibling

answer.style.display =
answer.style.display === "block"
? "none"
: "block"

})

})

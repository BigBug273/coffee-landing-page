function orderCoffee(){

alert("Thank you for choosing BeanCraft Coffee ☕");

}


/* FAQ accordion */

const questions = document.querySelectorAll(".faq-question")

questions.forEach(question => {

question.addEventListener("click", () => {

const answer = question.nextElementSibling

if(answer.style.display === "block"){

answer.style.display = "none"

}else{

answer.style.display = "block"

}

})

})

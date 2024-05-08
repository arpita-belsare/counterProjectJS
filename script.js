let count = 0;
const val = document.querySelector('#zero');
const buts = document.querySelectorAll(".but");
buts.forEach(function (but) {
    but.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;      
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            zero.style.color = "green"
        }
        if (count < 0) {
            zero.style.color = "red";
        }
        if (count === 0) {
            zero.style.color = "#222";
        }
            val.textContent = count;
           })
 })


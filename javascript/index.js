const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click", function(whichBtn){
        const styles = whichBtn.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count++;
        } else if(styles.contains("reset")){
            count = 0;
        }

        if(count < 0){
            document.getElementById("value").style.color = "red";
        } else if(count > 0){
            document.getElementById("value").style.color = "green";
        } else{
            document.getElementById("value").style.color = "#02023b";
        }

        value.textContent = count;
    });
});
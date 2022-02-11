let count = 10;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const ts = document.getElementsByTagName("h1")





btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        console.log(e);
        const styles = e.currentTarget.classList;
        console.log(styles);
        if(styles.contains("decrease")) {
                count--;
        }
        else if (styles.contains("increase")){
            count++;
        }else{
            count = 20;
        }
        if(count > 0){
            value.style.color ="blue";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count ===0){
            value.style.color = "pink";
        }
        value.textContent = count;
    });
});
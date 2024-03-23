const btn = document.getElementsByClassName("toggle-btn");

let elm;

for (elm = 0; elm < btn.length; elm++) {

    btn[elm].addEventListener("click", function() {

        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });

}
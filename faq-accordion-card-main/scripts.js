let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        let image = this.lastChild;
        if (getComputedStyle(panel).display == "block") {
            panel.style.display = 'none';
            this.style.color = 'var(--very-dark-grayish-blue)';
            this.style.fontWeight = '400';
            image.style.transform = 'rotate(360deg)';
        } else {
            panel.style.display = 'block';
            this.style.color = 'var(--very-dark-desaturated-blue)';
            this.style.fontWeight = '700';
            image.style.transform = 'rotate(180deg)';
        }
    })
}
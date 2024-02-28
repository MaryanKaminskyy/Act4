class ObjecteEnMoviment {
    constructor(imatge, mida) {
        this.imatge = imatge;
        this.mida = mida;
        this.velocitatX = Math.random() * 5;
        this.velocitatY = Math.random() * 5;
        this.angle = 0;
        this.velocitatRotacio = Math.random() * 10;

        this.element = document.createElement("img");
        this.element.src = this.imatge;
        this.element.style.width = `${this.mida}px`;
        this.element.style.position = "absolute";
        document.body.appendChild(this.element);
    }

    moure() {
        this.angle += this.velocitatRotacio;
        this.element.style.transform = `translate(${this.velocitatX}px, ${this.velocitatY}px) rotate(${this.angle}deg)`;

        if (this.element.offsetLeft + this.velocitatX > window.innerWidth - this.mida || this.element.offsetLeft + this.velocitatX < 0) {
            this.velocitatX *= -1;
        }

        if (this.element.offsetTop + this.velocitatY > window.innerHeight - this.mida || this.element.offsetTop + this.velocitatY < 0) {
            this.velocitatY *= -1;
        }

        this.element.style.left = `${this.element.offsetLeft + this.velocitatX}px`;
        this.element.style.top = `${this.element.offsetTop + this.velocitatY}px`;
    }
}
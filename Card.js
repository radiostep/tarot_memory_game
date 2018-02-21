class Card {
    constructor(arcana, place){
        this.arcana = arcana;
        this.place = place;
        this.path = path;
    }
    getView(){
        this.cardView = document.createElement("div");
        cardView.innerHTML = "<img src='img/Tarot/" + this.arcana.imgPath + "'>";
    }
}
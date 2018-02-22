Tarot = {
    init: function(){
        //    Создание игрового поля
        const feald = [];

        //    выборка карт и    
        //    раскладка карт в случайном порядке
        //    на игровом поле

        function randomGen(a){
            return Math.floor(Math.random() * a)
        }
       
        // Количество мест на раскладке
        let places = [];
        for (let i = 0; i < 18; i++) {
            places.push(i)
        }

        // Время на запоминание
        let timeout = 10000;

        // Карты на столе
        let cardsSet = new Array(18);

        // Стол
        let desk = document.getElementById("theGame");
        desk.className = "desk";

        //    ведение счёта очков
        let counter = 0;

        let cardsBuf = this.cards;
        let fealdBuf = [];

        // 
        this.clicked = undefined;

        for (let i = 0; i < 9; i++ ) {
            let card = new this.card(cardsBuf);
            for (let k = 0; k < 2; k++ ) {
                let place = getPlace(places);
                cardsSet[place] = card;
            }
        }

        // Разложить перемешанные карты на стол
        for (let i = 0; i < cardsSet.length; i++) {
            desk.appendChild(cardsSet[i].getView())
        }

        while(fealdBuf.length > 0) {
            let random = randomGen(fealdBuf.length);
            feald.push(fealdBuf[random]);
            fealdBuf.splice(random, 1);
        }

        // Получить случайное место в раскладке
        function getPlace (places) {
            let i = Math.floor(Math.random() * places.length);
            let place = places[i];
            places.splice(i, 1);
            return place
        }

        // Показать/скрыть все карты
        function showAll(desk, show) {
            console.log(desk.children.length)
            for (let i = 0; i < desk.children.length; i++) {
                if (show){
                    desk.children[i].classList.add("show");
                }
                else {
                    desk.children[i].classList.remove("show");
                }
            }
        }

        
        setTimeout(()=>showAll(desk, true),2000);

        // Game start
        setTimeout(() => {
                desk.addEventListener("click", game, false);
                showAll(desk, false);
            }, timeout);



        // События на столе
        function game (e) {
            e.preventDefault();
            e.stopPropagation();
            if (e.target.parentNode.dataset.arcana){
                if (!this.clicked) {
                    e.target.parentNode.classList.add("selected");
                    this.clicked = e.target.parentNode;
                }
                else if (this.clicked != e.target.parentNode) {
                    if (this.clicked.dataset.arcana == e.target.parentNode.dataset.arcana) {
                        this.clicked.classList.add("show");
                        e.target.parentNode.classList.add("show");
                    }
                    this.clicked.classList.remove("selected");
                    e.target.parentNode.classList.add("selected");
                    this.clicked = e.target.parentNode;
                }
            }
        }

    },
    card: class Card {
        constructor(cards){
            this.cards = cards;
            this.arcana = this.getArcana(this.cards);
        }

        getArcana(cards){
            let random = this.randomGen(cards.length);
            let arcana = cards[random];
            cards.splice(random, 1);
            return arcana;
        }

        getView(){
            this.cardView = document.createElement("div");
            this.cardView.classList.add("card");
            this.cardView.dataset.arcana = this.arcana.id;
            this.cardView.innerHTML = "<img src='img/Tarot/" + this.arcana.imgPath + "'>";
            return this.cardView;
        }
        
        randomGen(a){
            return Math.floor(Math.random() * a)
        }

    },
    cards:
        [{"id": 0, "imgPath": "rw02cups.jpg"}, {"id": 1, "imgPath": "rw02pentacles.jpg"}, {"id": 2, "imgPath": "rw02swords.jpg"}, {"id": 3, "imgPath": "rw02wands.jpg"}, {"id": 4, "imgPath": "rw03cups.jpg"}, {"id": 5, "imgPath": "rw03pentacles.jpg"}, {"id": 6, "imgPath": "rw03swords.jpg"}, {"id": 7, "imgPath": "rw03wands.jpg"}, {"id": 8, "imgPath": "rw04cups.jpg"}, {"id": 9, "imgPath": "rw04pentacles.jpg"}, {"id": 10, "imgPath": "rw04swords.jpg"}, {"id": 11, "imgPath": "rw04wands.jpg"}, {"id": 12, "imgPath": "rw05cups.jpg"}, {"id": 13, "imgPath": "rw05pentacles.jpg"}, {"id": 14, "imgPath": "rw05swords.jpg"}, {"id": 15, "imgPath": "rw05wands.jpg"}, {"id": 16, "imgPath": "rw06cups.jpg"}, {"id": 17, "imgPath": "rw06pentacles.jpg"}, {"id": 18, "imgPath": "rw06swords.jpg"}, {"id": 19, "imgPath": "rw06wands.jpg"}, {"id": 20, "imgPath": "rw07cups.jpg"}, {"id": 21, "imgPath": "rw07pentacles.jpg"}, {"id": 22, "imgPath": "rw07swords.jpg"}, {"id": 23, "imgPath": "rw07wands.jpg"}, {"id": 24, "imgPath": "rw08cups.jpg"}, {"id": 25, "imgPath": "rw08pentacles.jpg"}, {"id": 26, "imgPath": "rw08swords.jpg"}, {"id": 27, "imgPath": "rw08wands.jpg"}, {"id": 28, "imgPath": "rw09cups.jpg"}, {"id": 29, "imgPath": "rw09pentacles.jpg"}, {"id": 30, "imgPath": "rw09swords.jpg"}, {"id": 31, "imgPath": "rw09wands.jpg"}, {"id": 32, "imgPath": "rw10cups.jpg"}, {"id": 33, "imgPath": "rw10pentacles.jpg"}, {"id": 34, "imgPath": "rw10swords.jpg"}, {"id": 35, "imgPath": "rw10wands.jpg"}, {"id": 36, "imgPath": "rwacecups.jpg"}, {"id": 37, "imgPath": "rwacepentacles.jpg"}, {"id": 38, "imgPath": "rwaceswords.jpg"}, {"id": 39, "imgPath": "rwacewands.jpg"}, {"id": 40, "imgPath": "rwchariot.jpg"}, {"id": 41, "imgPath": "rwdeath.jpg"}, {"id": 42, "imgPath": "rwdevil.jpg"}, {"id": 43, "imgPath": "rwemperor.jpg"}, {"id": 44, "imgPath": "rwempress.jpg"}, {"id": 45, "imgPath": "rwfool.jpg"}, {"id": 46, "imgPath": "rwhangedman.jpg"}, {"id": 47, "imgPath": "rwhermit.jpg"}, {"id": 48, "imgPath": "rwhierophant.jpg"}, {"id": 49, "imgPath": "rwhighpriestess.jpg"}, {"id": 50, "imgPath": "rwjudgement.jpg"}, {"id": 51, "imgPath": "rwjustice.jpg"}, {"id": 52, "imgPath": "rwkingcups.jpg"}, {"id": 53, "imgPath": "rwkingpentacles.jpg"}, {"id": 54, "imgPath": "rwkingswords.jpg"}, {"id": 55, "imgPath": "rwkingwands.jpg"}, {"id": 56, "imgPath": "rwknightcups.jpg"}, {"id": 57, "imgPath": "rwknightpentacles.jpg"}, {"id": 58, "imgPath": "rwknightswords.jpg"}, {"id": 59, "imgPath": "rwknightwands.jpg"}, {"id": 60, "imgPath": "rwlovers.jpg"}, {"id": 61, "imgPath": "rwmagician.jpg"}, {"id": 62, "imgPath": "rwmoon.jpg"}, {"id": 63, "imgPath": "rwpagecups.jpg"}, {"id": 64, "imgPath": "rwpagepentacles.jpg"}, {"id": 65, "imgPath": "rwpageswords.jpg"}, {"id": 66, "imgPath": "rwpagewands.jpg"}, {"id": 67, "imgPath": "rwqueencups.jpg"}, {"id": 68, "imgPath": "rwqueenpentacles.jpg"}, {"id": 69, "imgPath": "rwqueenswords.jpg"}, {"id": 70, "imgPath": "rwqueenwands.jpg"}, {"id": 71, "imgPath": "rwstar.jpg"}, {"id": 72, "imgPath": "rwstrength.jpg"}, {"id": 73, "imgPath": "rwsun.jpg"}, {"id": 74, "imgPath": "rwtemperance.jpg"}, {"id": 75, "imgPath": "rwtower.jpg"}, {"id": 76, "imgPath": "rwwheelfortune.jpg"}, {"id": 77, "imgPath": "rwworld.jpg"}]
}
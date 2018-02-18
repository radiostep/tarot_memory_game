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

        let cardsBuf = this.cards;
        let fealdBuf = [];
        for (let i = 0; i < 9; i++ ) {
            let random = randomGen(cardsBuf.length);
            let card = cardsBuf[random];
            cardsBuf.splice(random, 1);
            for (let k = 0; k < 2; k++ ) {
                fealdBuf.push(card);
            }
        }

        while(fealdBuf.length > 0) {
            let random = randomGen(fealdBuf.length);
            feald.push(fealdBuf[random]);
            fealdBuf.splice(random, 1);
        }
        console.log(feald);


        let desk = document.getElementById("theGame");
        let cardsImages = "";
        desk.className = "desk";
        for ( let i = 0; i < feald.length; i++ ) {
            if (feald[i]) {
                cardsImages = cardsImages + "<img src=img/Tarot/"+ feald[i].imgPath +">";
            }
        }
        desk.innerHTML = cardsImages;

        //    Буфер выборки пользователя, куда записывается
        //    активная(кликнутая) карта

        //    Игровое событие: совпадение или несовпадение,
        //    ведение счёта очков

    },
    card:{

        // Значение
        arcana: null,

        // Текущая позиция
        pos: null

    },
    cards:
        [{"id": 0, "imgPath": "rw02cups.jpg"}, {"id": 1, "imgPath": "rw02pentacles.jpg"}, {"id": 2, "imgPath": "rw02swords.jpg"}, {"id": 3, "imgPath": "rw02wands.jpg"}, {"id": 4, "imgPath": "rw03cups.jpg"}, {"id": 5, "imgPath": "rw03pentacles.jpg"}, {"id": 6, "imgPath": "rw03swords.jpg"}, {"id": 7, "imgPath": "rw03wands.jpg"}, {"id": 8, "imgPath": "rw04cups.jpg"}, {"id": 9, "imgPath": "rw04pentacles.jpg"}, {"id": 10, "imgPath": "rw04swords.jpg"}, {"id": 11, "imgPath": "rw04wands.jpg"}, {"id": 12, "imgPath": "rw05cups.jpg"}, {"id": 13, "imgPath": "rw05pentacles.jpg"}, {"id": 14, "imgPath": "rw05swords.jpg"}, {"id": 15, "imgPath": "rw05wands.jpg"}, {"id": 16, "imgPath": "rw06cups.jpg"}, {"id": 17, "imgPath": "rw06pentacles.jpg"}, {"id": 18, "imgPath": "rw06swords.jpg"}, {"id": 19, "imgPath": "rw06wands.jpg"}, {"id": 20, "imgPath": "rw07cups.jpg"}, {"id": 21, "imgPath": "rw07pentacles.jpg"}, {"id": 22, "imgPath": "rw07swords.jpg"}, {"id": 23, "imgPath": "rw07wands.jpg"}, {"id": 24, "imgPath": "rw08cups.jpg"}, {"id": 25, "imgPath": "rw08pentacles.jpg"}, {"id": 26, "imgPath": "rw08swords.jpg"}, {"id": 27, "imgPath": "rw08wands.jpg"}, {"id": 28, "imgPath": "rw09cups.jpg"}, {"id": 29, "imgPath": "rw09pentacles.jpg"}, {"id": 30, "imgPath": "rw09swords.jpg"}, {"id": 31, "imgPath": "rw09wands.jpg"}, {"id": 32, "imgPath": "rw10cups.jpg"}, {"id": 33, "imgPath": "rw10pentacles.jpg"}, {"id": 34, "imgPath": "rw10swords.jpg"}, {"id": 35, "imgPath": "rw10wands.jpg"}, {"id": 36, "imgPath": "rwacecups.jpg"}, {"id": 37, "imgPath": "rwacepentacles.jpg"}, {"id": 38, "imgPath": "rwaceswords.jpg"}, {"id": 39, "imgPath": "rwacewands.jpg"}, {"id": 40, "imgPath": "rwchariot.jpg"}, {"id": 41, "imgPath": "rwdeath.jpg"}, {"id": 42, "imgPath": "rwdevil.jpg"}, {"id": 43, "imgPath": "rwemperor.jpg"}, {"id": 44, "imgPath": "rwempress.jpg"}, {"id": 45, "imgPath": "rwfool.jpg"}, {"id": 46, "imgPath": "rwhangedman.jpg"}, {"id": 47, "imgPath": "rwhermit.jpg"}, {"id": 48, "imgPath": "rwhierophant.jpg"}, {"id": 49, "imgPath": "rwhighpriestess.jpg"}, {"id": 50, "imgPath": "rwjudgement.jpg"}, {"id": 51, "imgPath": "rwjustice.jpg"}, {"id": 52, "imgPath": "rwkingcups.jpg"}, {"id": 53, "imgPath": "rwkingpentacles.jpg"}, {"id": 54, "imgPath": "rwkingswords.jpg"}, {"id": 55, "imgPath": "rwkingwands.jpg"}, {"id": 56, "imgPath": "rwknightcups.jpg"}, {"id": 57, "imgPath": "rwknightpentacles.jpg"}, {"id": 58, "imgPath": "rwknightswords.jpg"}, {"id": 59, "imgPath": "rwknightwands.jpg"}, {"id": 60, "imgPath": "rwlovers.jpg"}, {"id": 61, "imgPath": "rwmagician.jpg"}, {"id": 62, "imgPath": "rwmoon.jpg"}, {"id": 63, "imgPath": "rwpagecups.jpg"}, {"id": 64, "imgPath": "rwpagepentacles.jpg"}, {"id": 65, "imgPath": "rwpageswords.jpg"}, {"id": 66, "imgPath": "rwpagewands.jpg"}, {"id": 67, "imgPath": "rwqueencups.jpg"}, {"id": 68, "imgPath": "rwqueenpentacles.jpg"}, {"id": 69, "imgPath": "rwqueenswords.jpg"}, {"id": 70, "imgPath": "rwqueenwands.jpg"}, {"id": 71, "imgPath": "rwstar.jpg"}, {"id": 72, "imgPath": "rwstrength.jpg"}, {"id": 73, "imgPath": "rwsun.jpg"}, {"id": 74, "imgPath": "rwtemperance.jpg"}, {"id": 75, "imgPath": "rwtower.jpg"}, {"id": 76, "imgPath": "rwwheelfortune.jpg"}, {"id": 77, "imgPath": "rwworld.jpg"}]
}
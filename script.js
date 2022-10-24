import { loadKampus } from "./lib/getData.js";
import { emptyCard } from "./utils/cardEmpty.js";

(async function(){
    let listCard = document.getElementById('listCard')
    const kampus = await loadKampus()
    console.log(kampus);
    kampus.forEach(element => {
        listCard.innerHTML += emptyCard(element.namaKampus, element.lokasi, element.image, element.id)
    });
})();



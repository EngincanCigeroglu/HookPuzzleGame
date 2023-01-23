
const row = 10;
const column = 10;
let cars = ["BMW", "AUDI","VOLVO","HONDA","TOYOTA","TOFAS","FERRARI","KIA","VOLKSWAGEN"];

$(document).ready(function () {



    //KELİMLERİ BÖLÜP EKRANA YAZDIRMA 

    yarat()

    function yarat() {
        // const nav = document.getElementById('navbar')
        // let nava_ekle_div = document.createElement('div');




        const box = document.getElementById('container');
        for (let i = 0; i < row; i++) {
            let ekle = document.createElement('div');
            ekle.setAttribute('id', `g-${i}`);
            ekle.setAttribute('class', "grid");
            box.appendChild(ekle);
            for (let j = 0; j < column; j++) {
                let buton = document.createElement('button');
                buton.setAttribute('id', `${i}-${j}`);
                buton.setAttribute('onclick', "oyun(this)");
                ekle.appendChild(buton);
            }
        }
        const kelime = document.getElementById('kelime');
        console.log(kelime)
        cars = cars.sort((a, b) => a.length - b.length);
        for(let i = 0; i < cars.length; i++)
        {
            let ekle1 = document.createElement('div');
            ekle1.setAttribute('id', `kelime-${i}`);
            ekle1.setAttribute('class', "grid kelimeler");
            ekle1.innerHTML = cars[i];
            kelime.appendChild(ekle1);
        }
        baslangıc(cars)
        random_doldur()
    }

    function baslangıc(cars)
    {
        let z = 0
        let yeni = []
        let myArray = []
        console.log("Before:  " +cars)

        yeni = cars.reverse()
        

        yeni = cars.map((x)=> {
            return x;
        })

        cars.reverse()

        console.log("After:  " +yeni)

        for(z = 0; z < yeni.length ; z++)
        {
            myArray = yeni[z].split("");
            console.log(myArray)
        

            let hangi_fonk = Math.floor(Math.random() * (3 - 0)) + 0

            if(hangi_fonk == 0)
            {
                console.log(0)
                cengel_genel(myArray, row, column)
                
            }else if(hangi_fonk == 1)
            {
                console.log(1)

                yan_genel(myArray, row, column)

            }else if(hangi_fonk == 2)
            {                
                console.log(2)

                alt_genel(myArray, row, column)
            }

        }

    }

    // random_doldur()


    // ------------------------ KELİME DOLDURMA ------------------------


    //EĞER KELİME 3 HARFLİYSE RANDOM OLUŞACAK ROW NUMARASI MAKSİMUM EN ALT SINIRIN -2 (UZUNLUK -1)GERİSİ OLABİLİR
    //EĞER KELİME 3 HARFLİYSE RANDOM OLUŞACAK COLUMN NUMARASI MAKSİMUM EN GENİŞ SINIRIN -2 (UZUNLUK-1) GERİSİ OLABİLİR
    // ------------------------ GENEL FONSKİYONLAR ------------------------

    function alt_genel(Array, genel_sınır_row, genel_sınır_column) {
        let a = 0;
        while (a !== 1) {
            let alt_row = random_i_alt(Array, genel_sınır_row)
            let alt_column = random_j_alt(genel_sınır_column)


            if (check_alt(Array, alt_row, alt_column) === true) {
                alt(Array, alt_row, alt_column)
                a = 1
            }

        }
    }

    function cengel_genel(Array, genel_sınır_row, genel_sınır_column) 
    {
        let a = 0
        while (a !== 1) {
            let cengel_row = random_i_cengel(Array, genel_sınır_row)
            let cengel_column = random_j_cengel(Array, genel_sınır_column)

            if (check_cengel(Array, cengel_row, cengel_column) === true) {
                cengel(Array, cengel_row, cengel_column)
                a = 1
            }
        }
    }

    function yan_genel(Array, genel_sınır_row, genel_sınır_column) {

        // sınır_column = genel_sınır_column - (Array.length) + 1

        // randomi_YAN = Math.floor(Math.random() * (genel_sınır_row - 0)) + 0;
        // randomj_YAN = Math.floor(Math.random() * (sınır_column - 0)) + 0;
        let a = 0;

        while (a !== 1) {
            let yan_row = random_i_yan(genel_sınır_row)
            let yan_column = random_j_yan(Array, genel_sınır_column)

            if (check_yan(Array, yan_row, yan_column) === true) {
                yan(Array, yan_row, yan_column)
                a = 1

            }
        }

    }

    // ------------------------ RANDOM İNDEX YARATMA İŞLEMLERİ ------------------------

    // YAN RANDOM
    function random_i_yan(genel_sınır_row) {
        let randomi_YAN = Math.floor(Math.random() * (genel_sınır_row - 0)) + 0;
        return randomi_YAN;
    }

    function random_j_yan(Array, genel_sınır_column) {

        sınır_column = genel_sınır_column - (Array.length) + 1

        let randomj_YAN = Math.floor(Math.random() * (sınır_column - 0)) + 0;
        return randomj_YAN;
    }

    // CENGEL RANDOM
    function random_i_cengel(Array, genel_sınır_row) {

        sınır_row = genel_sınır_row - (Array.length) + 1

        let randomi_CENGEL = Math.floor(Math.random() * (sınır_row - 0)) + 0;

        return randomi_CENGEL;
    }

    function random_j_cengel(Array, genel_sınır_column) {

        sınır_column = genel_sınır_column - (Array.length) + 1

        let randomj_CENGEL = Math.floor(Math.random() * (sınır_column - 0)) + 0;


        return randomj_CENGEL;
    }

    // ALT RANDOM
    function random_j_alt(genel_sınır_column) {
        let randomi_ALTs = Math.floor(Math.random() * (genel_sınır_column - 0)) + 0;
        return randomi_ALTs;
    }

    function random_i_alt(Array, genel_sınır_row) {

        sınır_row = genel_sınır_row - (Array.length) + 1
        let randomj_ALT = Math.floor(Math.random() * (sınır_row - 0)) + 0;
        return randomj_ALT;
    }

    // ------------------------- CHECK VE YAZDIRMA ------------------------
    // ALT CHECK
    function check_alt(Array, row, column) {
        let uzunluk = Array.length
        let maks_uzunluk = uzunluk + row;

        for (row; row < maks_uzunluk; row++) {

            if (document.getElementById(`${row}-${column}`).innerHTML !== "") {
                return false;
            }
        }
        return true;
    }

    // ALT YAZDIRMA
    function alt(Array, row, column) {
        let uzunluk = Array.length
        let k = 0
        let maks_uzunluk = uzunluk + row;
        for (row; row < maks_uzunluk; row++) {

            document.getElementById(`${row}-${column}`).innerHTML = Array[k]
            // document.getElementById(`${row}-${column}`).style.color = "red";
            k++;
        }
    }

    // YAN CHECK
    function check_yan(Array, row, column) {
        let uzunluk = Array.length
        let maks_uzunluk = uzunluk + column;

        for (column; column < maks_uzunluk; column++) {

            if (document.getElementById(`${row}-${column}`).innerHTML !== "") {
                return false;
            }
        }
        return true;
    }

    // YAN YAZDIRMA
    function yan(Array, row, column) {
        let uzunluk = Array.length
        let k = 0
        let maks_uzunluk = uzunluk + column;
        for (column; column < maks_uzunluk; column++) {

            document.getElementById(`${row}-${column}`).innerHTML = Array[k]
            // document.getElementById(`${row}-${column}`).style.color = "red";
            k++;
        }
    }

    // ÇENGEL YAZDIRMA
    function cengel(Array, row, column) {
        let uzunluk = Array.length
        let k = 0
        let maks_uzunluk = uzunluk + row;

        for (row; row < (maks_uzunluk); row++) {
            {
                document.getElementById(`${row}-${column}`).innerHTML = Array[k]
                // document.getElementById(`${row}-${column}`).style.color = "red";
                column++;
                k++;
            }
        }
    }

    // ÇENGEL CHECK
    function check_cengel(Array, row, column) {
        let uzunluk = Array.length
        let maks_uzunluk = uzunluk + row;

        for (row; row < maks_uzunluk; row++) {
            {

                if (document.getElementById(`${row}-${column}`).innerHTML !== "") {
                    return false;
                }
                column++;
            }
        }
        return true;
    }


    // ------------------------- RANDOM İÇERİYİ DOLDURMA ------------------------

    // RANDOM İÇERİYİ DOLDURMA
    function random_doldur() {
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let randomElement

        for (i = 0; i < row; i++) {
            for (j = 0; j < column; j++) {
                if (document.getElementById(`${i}-${j}`).innerHTML === "") {
                    randomElement = alphabet[Math.floor(Math.random() * alphabet.length)];
                    document.getElementById(`${i}-${j}`).innerHTML = randomElement
                }

            }

        }
    }

})



// ---------------------------------- KELİME BULMA -------------------------------


let secilen_harf = []
$(document).keydown(function(){
    for (i = 0; i < row; i++) {
        for (j = 0; j < column; j++) {

            if (document.getElementById(`${i}-${j}`).classList.contains("secili")) {
                 document.getElementById(`${i}-${j}`).classList.remove("secili");
            }

        }
        
    }
    secilen_harf  = [];
})

let yedek = cars.map((x)=> {
    return x;
})
console.log(cars)

// let cars = ["BMW", "AUDI","VOLVO"];

function oyun(id) {
    
    if (id.classList.contains("secili") === false ) {
        id.classList.add("secili")
        let value = id.innerHTML
        secilen_harf.push(value)
    }
    
    console.log(secilen_harf )
    let sonuc1 = secilen_harf.join("");

    if (yedek.length !== 0)
    {
        if(findCommonElement(cars,sonuc1))
        {   
    
                console.log("Buldundan önce yedek: " + yedek)
                console.log("Buldundan önce cars: " + cars)
    
                console.log(sonuc1)
        
                Buldun(sonuc1)
                let index2 = yedek.indexOf(sonuc1)
                yedek.splice(index2, 1);
    
                console.log("Buldundan sonra cars: " + cars)
                console.log("Splicedan sonra yedek: " + yedek)
                secilen_harf  = [];
        }

    }else{
        alert("Tüm kelimeleri buldun")
        secilen_harf  = [];
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                if (document.getElementById(`${i}-${j}`).classList.contains("secili")) { 
                    document.getElementById(`${i}-${j}`).classList.classList.remove("secili");
                }
            }
        }
    }

    

}

function findCommonElement(arr1, sonuc) {
    return arr1.includes(sonuc)
}


function Buldun(sonuc1)
{
    for (i = 0; i < row; i++) {
        for (j = 0; j < column; j++) {
            if (document.getElementById(`${i}-${j}`).classList.contains("secili")) { 
                document.getElementById(`${i}-${j}`).classList.replace("secili", "buldun");
            }

        }
    }
    
    let indexim = cars.indexOf(sonuc1)
    document.getElementById(`kelime-${indexim}`).classList.add("bulundu");

}


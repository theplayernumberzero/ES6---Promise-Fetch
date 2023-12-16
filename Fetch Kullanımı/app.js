//Ajax ın yerine kullanabileceğimiz asenkron bir veri alma ve veri gönderme API ı.
//fetch fonksiyonu window objesi içinde bulunur

//Text dosyasından veri alma
function getTextFile(){

    fetch("example.txt")    //fetch bize promise yapısı döndürecek
    .then(response => response.text())    //text fonksiyonu kullanılırsa respond içindeki texti, 
    .then(data => console.log(data))      //response.text() promise chain ile yazdırma
    .catch(err => console.error(err));
}

//Localdeki Jsondan veri alma
function getJsonFile(){

    fetch("exapmle.json")
    .then(response => response.json)
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.error(err));
}

//Uzaktaki API dan veri alma
function getExternalAPI(){

    fetch("api.exchangeratesapi.io/latest")
    .then(response => response.json)
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

getTextFile();

getJsonFile();

getExternalAPI();
function getData(data){ //Promise objesi döndüren fonksiyonumuz
    
    return new Promise(function(resolve, reject){

        setTimeout(function(){

            resolve("Olumlu Sonuç");
            //reject("Olumsuz Sonuç");
        },2000);
    });
}

function getStringData(data){
    
    return new Promise(function(resolve, rejecet){

        setTimeout(function(){
            if(typeof data === "string"){
                resolve(data);
            }
            else{
                reject(new Error("Lütfen string bir değer giriniz.."));    //Error tipinde bir değer gönderme
            }
        },2000);
    });
}

function addTwo(number){
    
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number + 2);
            }
            else{
                reject(new Error("Lütfen bir sayi giriniz."));
            }
        },3000);
    })
}

//console.log(getData("Merhaba"))   -->10 saniye sonra status=resolved, value="Olumlu Sonuç"
//                                  -->10 saniye sonra status=rejected, value="Olumsuz Sonuç" 


//Olumlu Yakalama
getData("Merhaba").then(function(response){     //status resolved olduğunda çalışır
    
    console.log("Olumlu Sonuç");    //-->Resolve ile gelen değeri yakalama
});

//Olumsuz Yakalama
// getData("Merhaba").catch(function(err){

//     console.log(err);    -->Reject ile gelen değeri yakalama
// });

//Then ve Catch bağlama
getStringData(58)
.then(response => console.log("Gelen Değer: "+response))    //Arrow function
.catch(err => console.error(err));

//Promise Chain
addTwo(58)
.then(response => {
    console.log(response);
    return response + 2;    //Promise yapısında return eder, parametreye gelen değeri güncelleme
})
.then(response2 => console.log(response2))
.catch(err => console.err(err));    //catch sadece 1 defa kullanılır
class Request{

    get(url){  //GET request
        return new Promise(function(resolve, reject){

        fetch(url)  //fetch in default kullanımı 
        .then(response => response.json())
        .then(data => resolve(data))    //resolve ile olumlu işlemi dış tarafa gönderme
        .catch(err => reject(err));     //reject ile olumsuz işlemi dıla gönderme

        });
        
    }
    post(url, data){
        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json)
            .then(json => resolve(json))
            .catch(err => reject(err))

        });
        
    }
}

const request = new Request();
let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums);    //asenkron çalıştığı için albums değer aldığı anda yazdırılmaya çalışılmalı
})
.catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums",{userId:1, title:"Harry Potter", })
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));
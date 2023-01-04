//var pageno = 1
var url_data =  `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2`

async function res_fetching(){
    var url_fetch = await fetch(url_data)             // ----------- common 1
    var res = await url_fetch.json();                 // ----------- common 2
    console.log(res);
    for (let i of res){
        console.log(i);
        console.log('This is the text',i['text']);
        var child_ele = document.createElement('p');
        child_ele.innerText = i['text'];
        document.querySelector('body').append(child_ele);
    }
// By using the .then method
//  var url_fetch = fetch(url_data);
//   console.log(url_fetch);
//   url_fetch
 //  .then(res=>{
 //   console.log(res);
//    return res.json();                          // ----------- common 1
 //  })
 //  .then(final_res=>{ 
 //   console.log(final_res)                     // ----------- common 2
 //  })
}
res_fetching()
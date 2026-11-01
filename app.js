

//  fetch(url)
//  .then((res) => {
//  return res.json();
//     })

//     .then((data) => {
//         console.log("data1=",data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 = ",data2.fact);
//     })

//  .catch((err) => {
//     console.log("ERROR - ", err);
//  });

// async function getsFacts() {

//     try{
//      let res = await fetch(url);  
// let data = await res.json();
// console.log(data.fact);     
//     } catch(e){
//         console.log("error -",e);
//     }
//   console.log("bye");
// }
let btn = document.querySelector("button");
let url2 ="https://dog.ceo/api/breeds/image/random"

btn.addEventListener("click", async() => {
let link = await getImage();
let img = document.querySelector("#result");
img.setAttribute("src",link);
 console.log(link);
});



async function getImage() {

    try{
     let res = await axios.get(url2);  
      return res.data.message;     
    } catch (e) {
        console.log("error -",e);
        return "no image found"
    }
}


// btn.addEventListener("click", async() => {
//    let fact = await getFacts();
//     // console.log(fact);
//     let p= document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";


// async function getFacts() {

//     try{
//      let res = await axios.get(url);  
//       return res.data.fact;     
//     } catch (e) {
//         console.log("error -",e);
//         return "no fact found"
//     }
// }


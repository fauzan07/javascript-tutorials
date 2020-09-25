// Promise: Best video on promises
// -resolve
// -reject
// -pending

//promises is object in javascript that can be resolve, reject or pending depending upon condition, use in substitution of callback
//promises are often use when you are fetching json Api doing some Ajax work.

// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log('Function: Your promise has been resolved')
//                 resolve();
//             }
//             else {
//                 console.log('Function: Your promise has not been resolved')
//                 reject('Sorry not fulfilled');
//             }
//         }, 2000);
//     })
// }

// func1().then(function(){
//     console.log("Harry: Thanks for resolving")
// }).catch(function(error){
//     console.log("Harry: Very bad bro. Reason: " + error)
// })

//if callback function or promise is resolve then print output else give it to catch if rejected.

//-------------------------------------------------------------------------------------------------------------------------------//

//Async Await

//Async will return promise.
//Await will asynchronously handle the function i.e it will wait for sometime untill it perform another task.

const apikey = '3429ec34cbf645c6bc884346206c1fe9';

async function getNews()
{
    const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + apikey;
    const response=await fetch(url);
    const user=await response.json();
    return user;
}


let news=getNews();
console.log(news);
news.then((data)=>{
    let output = ''
    data.articles.forEach(function(article){
        <h1>${article.title}</h1>
    });
});
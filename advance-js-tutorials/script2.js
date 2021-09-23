// https://www.educative.io/edpresso/what-is-object-destructuring-in-javascript?aid=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=edpresso-dynamic&utm_term=&utm_campaign=Dynamic+-+Edpresso&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=8092184362&hsa_grp=86276435689&hsa_ad=397226000870&hsa_src=g&hsa_tgt=aud-470210443636:dsa-837376625453&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw4eaJBhDMARIsANhrQABwy3f0Px2CmrRx_n5MVvtXO8JWPUWpLRHVVCwoN1BZ-z-wI76IQLMaAudAEALw_wcB

const person  = {
    name : "haris",
    country : "india",
    insta : "haris@!2"
}

const firstname = person.name;
const mycountry = person.country;
const myacount = person.insta;

// Object destructuring

const {name, country, insta} = person

var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into variables with
// different names than the object variables
var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
console.log( fn, ln, dob);


//swapping

let haris = "engineering";
let aquib = "bcom";
// console.log(haris);

[haris, aquib] = [aquib, haris]

console.log(haris);

//spread operator
const feature = ['chees', 'chicken', 'veggiess'];
const speciality = ['meat', 'greenveggiess', 'shawrma'];

let pizza = [...feature, ...speciality];
console.log(pizza);


let array1 = ['h', 'e', 'y'];
let array2 = [...array1];
console.log(array2);


let baked_desserts = ['cake', 'cookie', 'donut'];
let desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
console.log(desserts);
//Appending baked_desserts after flan
let desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
console.log(desserts2);

//https://www.educative.io/edpresso/what-is-the-spread-operator-in-javascript?aid=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=edpresso-dynamic&utm_term=&utm_campaign=Dynamic+-+Edpresso&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=8092184362&hsa_grp=86276435689&hsa_ad=397226000870&hsa_src=g&hsa_tgt=aud-470210443676:dsa-837376625453&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw4eaJBhDMARIsANhrQAArbBUNqZCC9lPM1cQtNuTtJkBSTjAnFlUZzOzr1Oq6UkD2dQSGEGoaArVQEALw_wcB


//rest parameter 

const runner = ["dhoni", 123, 5,6,7,8,9]

const[names, id, ...runs] = runner

console.log(runs);

// https://www.educative.io/edpresso/what-is-the-rest-parameter-in-javascript?aid=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=edpresso-dynamic&utm_term=&utm_campaign=Dynamic+-+Edpresso&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=8092184362&hsa_grp=86276435689&hsa_ad=397226000870&hsa_src=g&hsa_tgt=aud-961065952942:dsa-837376625453&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw4eaJBhDMARIsANhrQADjVWx6FdiDCq0LlphRTv-Bewi5Qq5Fowe5DnI99Nh7w113tNBN9RMaAps5EALw_wcB



//local storage and session storage

// localStorage.setItem('name', "salim");
// alert( localStorage.getItem('name') );
// console.log(localStorage.length)
// localStorage.removeItem('persondata');
// localStorage.clear();

// https://javascript.info/localstorage
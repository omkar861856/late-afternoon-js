console.log("Callback")

function avg(a,b, sum){
    return sum(a,b)/2;
}


console.log(avg(1,2,(a,b)=>{
    return a+b;
}))

console.log('Callbackhell or Pyramid of doom');

function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}

fetchData((message) => {
    console.log(message); // 'Data received'
    fetchData((message) => {
        console.log(message); // 'Data received'
        fetchData((message) => {
            console.log(message); // 'Data received'
            fetchData((message) => {
                console.log(message); // 'Data received'
                fetchData((message) => {
                    console.log(message); // 'Data received'
                });
            });
        });
    });
});




console.log(`Promises`)

function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received from promise');
        }, 1000);
    });
}

fetchData1().then((message) => {
    console.log(message); // 'Data received'
    fetchData1();
}).catch((err)=>{console.log(err)})





console.log("async/await")

function b(){

   return new Promise((resolve, reject)=>{

    setTimeout(()=>{

        reject("pormise rejected")

    }, 4000)

   })
   
}

async function c(){
    
    try {

    const p = await b();
    console.log(p);
        
    } catch (error) {

        console.log(error);
        
    }
}

c();


console.log('line no 5')

function f(a){
    return a+5;
}

console.log(f(3))

function hoursToMinutes(a){
    return a*60;
}

console.log(hoursToMinutes(24))

console.log(`line no 6`);

//spread and rest operators

const numbers = [1,2,3,4,5];

console.log(...numbers);

function sum(...args){
    return args.reduce((acc, curr) => acc + curr, 0);
}

// rest function

function sum1(a,...args){
    return args.reduce((acc, curr) => acc + curr, a);
}

console.log(sum1(1,2,3,4,5));

// copy an array

const arr = [1,2,3,4,5];

const copy = [...arr];

arr[1] = 10;

console.log(copy);

let finalData = []

async function Fetch(){
    try {
        const url = "https://restcountries.com/v3.1/all?fields=name,flags"
        const response = await fetch(url)
        const data = await response.json()
        return data;
        
    } catch (error) {

        console.log(error);
        
    }
}



Fetch().then((data) => finalData = data)

console.log(finalData);


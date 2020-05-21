

let car = {
    manufacturer:"porsche",
    model:"taycan",
    horsepower:590,
    year:2015,
    color:"blue",
    price:241.500
}
let car1 = {
    manufacturer:"porsche",
    model:"panamera",
    horsepower:493,
    year:2009,
    color:"white",
    price:187.700
}
let car2 = {
    manufacturer:"mercedes",
    model:"amg gt",
    horsepower:456,
    year:2014,
    color:"green",
    price:120.000
}
let car3 = {
    manufacturer:"ferrari",
    model:"448",
    horsepower:661,
    year:2015,
    color:"red",
    price:301.000
}

let cars = [];

cars.push(car);
cars.push(car1);
cars.push(car2);
cars.push(car3);

// for(let i =0; i < cars.length; i++){
//     console.log(`მანქანის შესახებ: მარკა  ${cars[i].manufacturer} მოდელი ${cars[i].model} ფერი ${cars[i].color} წელი ${cars[i].year} ფასი ${cars[i].price}`)
// }

let ძვირადღირებული = [];
let სამწუხაროდამფასშიმანქანასვერშეიძენ = [];

for(let i = 0; i < cars.length; i++){
    if(cars[i].price > 200.000){
        ძვირადღირებული.push(cars[i]);
    }else{
        სამწუხაროდამფასშიმანქანასვერშეიძენ.push(cars[i]);
    }
}

console.log(ძვირადღირებული);
console.log(სამწუხაროდამფასშიმანქანასვერშეიძენ);
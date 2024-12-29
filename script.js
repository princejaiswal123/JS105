let temp= [2,4,6,8,10,12,14];

let newTemp= temp[3]+2;

console.log(newTemp)

//question 12

let arr = ["Reading", "Eating", "Cooking", "Coding", "Problem-solving"];
arr.unshift("Playing");
arr.pop();
console.log(arr)

//question

let scores= [10,20,30,40,50,60,70,80,90,100];

for(let i=0; i<=scores.length; i++){
    if(scores[i]<40){
        scores[i]+=20;
    }else if(scores[i]>90){
scores[i]=90;
    }
   
    console.log(scores)
}

let finalCount=0;
for(let i=0; i<=scores.length; i++){
    if(scores[i]>=50){
        finalCount++
    }
}
console.log(finalCount)

//14

let arr14= ['Playing', 'Gameing', 'Eating', 'Cooking', 'Reading'];

arr14.shift()

arr14= ['Cricketing', 'Flying'].concat(arr14)

arr14[arr14.length-1] = 'Watching'
console.log(arr14)


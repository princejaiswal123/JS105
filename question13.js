let scores= [10,20,30,40,50,60,70,80,90,100];

for(let i=0; i<=scores.length; i++){
    if(scores[i]<40){
        scores[i]+=20;
    }else if(scores[i]>90){
scores[i]=90;
    }
   
}

let finalCount=0;
for(let i=0; i<=scores.length; i++){
    if(scores[i]>=50){
        finalCount++
    }
}
console.log(finalCount)
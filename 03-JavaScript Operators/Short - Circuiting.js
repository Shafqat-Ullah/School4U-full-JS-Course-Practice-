
                            // Short - Circuiting
//  OR ma or ko jab be tryth value mel jie to os ka output ture ho chiea vo 1st value ho 2nd ho ye last
let result = (""||"shafqat"||null)
console.log(result); //output is shafqat beacuse the shafqat is truthy value ;
 

let or = ("khan"||"ahmad"||null);
console.log(or);//the output is khan beacuse khan is the frist truthy value

// AND  AND ma agar and ko false ghia be  ho to val serip false show karige other wasie LAST MA  jo be truthy value ho to vo show kariga
let AND = ("KHAN"&&"AHMAD"&&undefined);
console.log(AND);//OUTPUT IS UNDFINE

let AND2 = ("SHAFQAT"&&"ULLAH"&&"KHAN");
console.log(AND2);


// 3. ?? (Nullish Coalescing): Returns the right-hand value only if the left is null or undefined.
//  (Better than || when dealing with falsy values like 0 or "" that are still valid.)

let Nullish = (null ?? "ABBBB");
console.log(Nullish);
let Nullish2 = ("ABCDSC"?? null);
console.log(Nullish2);




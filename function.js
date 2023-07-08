nums = [5, 4, 12, 45];

// for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     if(element % 2 == 0){
//         console.log(element, ": is even number");
//     }
//     else{
//         console.log(element * 2, ": is odd number");
//     }
// }


function evenIFodd(element) {
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(element % 2 == 0){
            console.log(element, ": is even number");
        }
        else{
            console.log(element * 2, ": is odd number");
        }
    }
    
}

nums = [5, 4, 12, 45];
evenIFodd(nums);


firend_agg = [17, 28, 12, 13, 15];
evenIFodd(firend_agg);
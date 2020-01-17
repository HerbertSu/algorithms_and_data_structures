
let maxK = function(k,n,arr=[5,2,-1,0,3]){
    let max = 0;
    for(let i = 0; i < k; i++){
        max += arr[i];
    };
    let current_sum = max;
    for(let i = 1; i <= n - k; i++){
        current_sum = current_sum - arr[i - 1] + arr[i + k - 1];
        if(current_sum > max){
            max = current_sum;
        };
    };
    return max;
};

// console.log(maxK(4,9, [1,4,2,10,23,3,1,0,20]))
console.log(maxK(3, 5))
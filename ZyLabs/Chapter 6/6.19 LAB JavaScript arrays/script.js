// Put your solution here
function divideArray(nums) {
    var even = nums.filter(function (num) {
        return num % 2 == 0;
    }).sort(function (a, b) {
        return a - b;
    });

    var odd = nums.filter(function (num) {
        return num % 2 != 0;
    }).sort(function (a, b) {
        return a - b;
    });

    console.log("Even numbers:");
    if (even.length == 0)
        console.log("None");
    else {
        for (var i = 0; i < even.length; i++) {
            console.log(even[i]);
        }
    }
    console.log("Odd numbers:");
    if (odd.length == 0)
        console.log("None");
    else {
        for (var i = 0; i < odd.length; i++) {
            console.log(odd[i]);
        }
    }

}
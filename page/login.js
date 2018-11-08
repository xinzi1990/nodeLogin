// window.onload = function () {
//
//     xmlHttp=new XMLHttpRequest();
//     xmlHttp.open("GET","/getData",true);
//     xmlHttp.send(null);
//
//     xmlHttp.onreadystatechange=function () {
//         if (xmlHttp.readyState ==4 && xmlHttp.status ==200){
//             let res = xmlHttp.responseText;
//             var arr = res.split(',');
//             var html = '';
//             for (var i = 0;i < arr.length; i++){
//                 html += '<li>' + arr[i] +'</li>'
//             }
//             document.getElementById('ul').innerHTML = html;
//             console.log(res);
//             console.log(typeof res)
//         }
//     }
// };

// var obj = {name:'张三',age:18};
// var newKey = ''
// Object.defineProperty(obj,'class', {
//     set: function (newValue) {
//         console.log('你要赋值给我，我的新值是' + newValue)
//         newKey = newValue
//     },
//     get:function () {
//         console.log('你取我得值' + typeof newKey);
//         return newKey;
//     }
// })
// // obj.class = 1;
// console.log(obj.class)
//
// const keys = Object.keys(obj);
// for(let i = 0; i < keys.length; i++){
//     defineReactive(obj, keys[i], obj[keys[i]])
// }
// var arr= [10,1,3,11,5,9,8,4,2,6,111];
// function quickSort(arr){
//     if(arr.length <= 1){ return arr}
//     var pivotIndex = Math.floor(arr.length/2);
//     var pivot = arr.splice(pivotIndex,1)[0];
//     var left = [];
//     var right = [];
//     for (var i = 0;i<arr.length;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat([pivot],quickSort(right));
// }
// console.log(quickSort(arr))
// var arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7,8,8,0,8,6,3,4,56,2];
// // var arr2 = arr.filter((x, index,self)=>self.indexOf(x)===index)
// var arr2 = arr.filter((x, index, self) => {
//     return self.indexOf(x) == index
// })
// console.log(arr2);
// var num = [1,2,3,4,5];
// var res = num.reduce(function(total,num){
    // return total+num;
// });
// Array.prototype.myReduce = function(fn,init){
//     var len = this.length;
//     var prev = init;
//     var i = 0;
//     if(typeof init == 'undefined'){
//         prev = this[0];
//         i = 1;
//     }
//     for( i; i < len; i++){
//         prev = fn(prev, this[i], i, this);
//     }
//     return prev;
// }
// var res = num.myReduce(function(prev,num,index,array){
//     return prev + num;
// })
// console.log(res);



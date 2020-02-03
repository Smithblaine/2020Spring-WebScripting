var list = new Array(   Math.floor(Math.random() * -10) + 3, 
                        Math.floor(Math.random() * -10) + 3, 
                        Math.floor(Math.random() * -10) + 3,);

const btn = document.getElementById("squeaks")
const first = document.getElementById("firstArray");
const second = document.getElementById("secondArray");

var numZeros = 0;
var numNeg = 0;
var numPos = 0;


btn.addEventListener("click",function() { 
    counter(list)
});


function counter(num){
    
    first.append(num);
    
    for (var i = 0; i <= num.length; i++){
        if (num[i] > 0){
            numPos++;
        }
        else{}
        if (num[i] == 0){
            numZeros++;
        }
        else{}
        if (num[i] < 0){
            numNeg++;
        }
        else {}
    }

    second.innerHTML = ('<table border="1" cellpadding="2">'+
        '<tbody>'+
            '<tr>'+
                '<td>Positive numbers</td>'+
                '<td>' + numPos + '</td>'+
            '</tr>'+
            '<tr>'+
                '<td>Number of Zeros</td>'+
                '<td>' + numZeros + '</td>'+
            '</tr>'+
            '<tr>'+
                '<td>Negative numbers</td>'+
                '<td>' + numZeros + '</td>'+
            '</tr>'+
        '</tbody>'+
    '</table>');
};
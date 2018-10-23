var tablica=[1,2,3];
console.log(tablica[0]);
console.log(tablica[1]);
console.log(tablica[2]);
<!-- ważne: nr tablicy zaczynają się od "0"-->

    var owoce=["mango","jabłko","gruszka"];
console.log(owoce[0]);
console.log(owoce[owoce.length-1]);
for(var i=0;i<owoce.length;i++){
console.log(owoce[i])}

var liczby=[1,5,3,6,2,3,7];
var sum=0;
for (var i=0;i<liczby.length;i++){
    sum=sum+liczby[i]
}
    console.log(sum);
//zad. 4
var parzyste=[1,5,3,6,2,3,7,8,10];
var suma=0
for(var i=0;i<parzyste.length;i++){
    if(parzyste[i]%2==0){
        suma=suma+parzyste[i]
    }

} console.log(suma);
//zad.5
var tab=[1,5,3,52,2,3,7,8,10];
max=0
for (var i=0;i<tab.length;i++){
    if(max<=tab[i]){
        max=tab[i]
    }
}
console.log(max)
// Zad.6
var arr = [11,20,99,2,3,5,1,4,4];
var arrIndex = undefined;
for(var i = 0; i < arr.length; i ++) {
    for (var j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]){
            arrIndex = i;
            break;
        }
    }
    if(arrIndex){    // jesli nie wyjdziemy zobu ppętli nie działa
        break;
    }
}
console.log(arrIndex);


// zad.7
var ostatnia=[10,12,3,45,41,9,3,2,52,6];
var odkonca=0;
for(i=ostatnia.length-1;i>=0;i--){
    for(j=ostatnia.length-1;j>=0;j--){
    }
    console.log(ostatnia[i]);
}



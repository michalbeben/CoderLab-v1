
// Zadanie 4
var pierwsza=9
var druga=45
var trzecia=65
if (pierwsza>druga)
    console.log(pierwsza)
else
    console.log(druga)
//liczba "45" jest wyświetlana
if (pierwsza>druga && pierwsza>trzecia)
    console.log(pierwsza)
else if(druga>pierwsza && druga>trzecia)
    console.log(druga)
else
    console.log(trzecia)
// liczba 65 jest największa

for (i=1;i<=10;i=i+1)
    console.log("Lubie JavaScript")
//10 x Lubie JS
var result=0, i;
for(var i=0;i<=10;i++)
{result +=i;}
console.log(result)
//
var n = 5;
for (var i = 0; i <= n; i++)
{
if(i % 2 == 0)
    console.log(i+" - nieparzysta")
else
    console.log(i+" - parzysta");
}
// bardzo ważne żeby warunki if else były w ciele pętli, inaczejniedziała
for(var i=0; i<5; i++) {
    for(var j=0; j<5; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}
// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}
//zadanie 8
var x = 10;

var lineofstars = "";

for(var y = 0; y < x; y++) {
    lineofstars = "";
    for(var z = 0; z < y; z++) {
        lineofstars = lineofstars + "*";
    }
    console.log(" ");

    console.log(lineofstars);
}


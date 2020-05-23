var temp = {
    Belarus: 15,
    Russia: 10,
    Ukrain: 20 
}

var sum = 0;

for(var values in temp){
    sum += temp[values];
}

var len = Object.values(temp).length;

var midleTemp = sum / len;

var max = Object.keys(temp).map(function(key){ 
    return temp[key]; 
  })

var maxTemp = Math.max.apply( null, max );


alert('Средняя температура: ' + midleTemp);
alert('Максимальная температура: ' + maxTemp);
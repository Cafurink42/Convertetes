console.log('Initializing... run !')

function send1(){
    var dado1 = document.getElementById('box-int-1').value;
    var byte = 8;
    var total = byte*dado1;


    var result = document.getElementById('resp_one');
    result.textContent = dado1 + ' Bytes = ' + total + 'bits';

    if (dado1==1){
        var result = document.getElementById('resp_one');
        result.textContent = dado1 + 'Byte = ' +  total +  'bits';
    }
    if (dado1==''){
        var result = document.getElementById('resp_one');
        result.textContent = 'Ops.. você não digitou nada :(';
    }
}

function send2(){
    var dado1 = document.getElementById('box-int-2').value;
    var bit = 8;
    var total = dado1/bit;


    var result = document.getElementById('resp_two');
    result.textContent = dado1 + 'Bits =' + total + ' Bytes';

    if (dado1==1){

        var result = document.getElementById('resp_two');
        result.textContent = dado1  +  ' Bit =  '  +  total + ' Bytes';

    }
    if (dado1==''){
        var result = document.getElementById('resp_two');
        result.textContent = 'Ops.. você não digitou nada :(';
    }
}
function send3(){
    var dado1 = document.getElementById('box-int-3').value;
    var dado2 = 1.8
    var total = dado1*dado2+32

    var result = document.getElementById('resp_three');
    result.textContent = dado1 + 'Celsius = ' + total + ' Fahrenheit';

    
    if (dado1==''){
        var result = document.getElementById('resp_three');
        result.textContent = 'Ops.. você não digitou nada :(';
    }
}
function send4(){
    var dado1 = document.getElementById('box-int-4').value;
    var dado2 = 1.8
    var dado3 = 32
    var subtotal = dado1-dado3
    var total = subtotal/dado2;

    var result = document.getElementById('resp_four');
    
    result.textContent = dado1 + ' Fahrenheit = ' + total + ' Celsius'

    if (dado1==''){
        var result = document.getElementById('resp_four');
        result.textContent = 'Ops.. você não digitou nada :(';
    }
}
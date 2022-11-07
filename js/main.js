function ex1() {
    var soK = document.getElementById('sok').value*1;

    var rs=0;

    for (var i = 1; i <= soK; i++) {
        rs+=i;
        if(rs>soK){
            rs=i;
            break;
        }
        
    }
    document.getElementById('result1').innerHTML=rs;
}

function ex2() {
    var x = document.getElementById('sox').value*1;
    var n = document.getElementById('son').value*1;

    var rs=0;

    for (var i = 1; i <=n; i++) {
        rs+=Math.pow(x, i);
        
    }
    document.getElementById('result2').innerHTML="Tong S("+n+") = " +rs;
    
}

function ex3() {
    var n = document.getElementById('numberN').value*1;

    var rs=1;

    for (var i = 1; i <=n; i++) {
        rs*=i;
        
    }
    document.getElementById('result3').innerHTML=n+"! = " + rs;
}

function in1TheDiv(bg, i) {
    return '<div class="tagDiv '+bg+' mt-2">'+i+'</div>'+'\n';
}
function inTheDiv() {
    var soTheDiv = document.getElementById('sothediv').value*1;
    var rs='';

    for (var i = 1; i <=soTheDiv; i++) {
        if(i%2===0){
            rs+=in1TheDiv('bg-danger', i);
        }else{
            rs+=in1TheDiv('bg-primary', i);
        }
    }
    console.log(rs);
    document.getElementById('result4').innerHTML=rs;
}


function checkSNT(number) {
    var check= true;
    for (var i = 2; i <=Math.sqrt(number); i++) {
        if(number%i===0){
            check=false;
            break;
        }
        
    }
    return check;
    
}
function ex5() {
    var n = document.getElementById('soNBai5').value*1;
    var rs='';
    for (var i = 2; i <=n; i++) {
        var check = checkSNT(i);
        if(check){
            rs+=i+" ";
        }
        
    }
    document.getElementById('result5').innerHTML=rs;
}


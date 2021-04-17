/*
    Variables
*/

var bf1 = document.getElementById("F1")
var bf2 = document.getElementById("F2")
var bf3 = document.getElementById("F3")

var bm1 = document.getElementById("M1")
var bm2 = document.getElementById("M2")
var bm3 = document.getElementById("M3")

var bk1 = document.getElementById("K1")
var bk2 = document.getElementById("K2")
var bk3 = document.getElementById("K3")

let fuckarray = []
let marryarray = []
let killarray = []


/*
    Fuck buttons
*/

bf1.addEventListener('click', function(){

    if( bf1.classList.contains('active')){

        bf1.classList.remove('active');

    }

    else{

        bf1.classList.add('active');
        bm1.classList.remove('active');
        bk1.classList.remove('active');
    }

});

bf2.addEventListener('click', function(){

    if( bf2.classList.contains('active')){

        bf2.classList.remove('active');

    }

    else{

        bf2.classList.add('active');
        bm2.classList.remove('active');
        bk2.classList.remove('active');
    }

});

bf3.addEventListener('click', function(){

    if( bf3.classList.contains('active')){

        bf3.classList.remove('active');

    }

    else{

        bf3.classList.add('active');
        bm3.classList.remove('active');
        bk3.classList.remove('active');
    }

});

/*
    Marry buttons
*/

bm1.addEventListener('click', function(){

    if( bm1.classList.contains('active')){

        bm1.classList.remove('active');

    }

    else{

        bm1.classList.add('active');
        bf1.classList.remove('active');
        bk1.classList.remove('active');
    }

});

bm2.addEventListener('click', function(){

    if( bm2.classList.contains('active')){

        bm2.classList.remove('active');

    }

    else{

        bm2.classList.add('active');
        bf2.classList.remove('active');
        bk2.classList.remove('active');
    }

});


bm3.addEventListener('click', function(){

    if( bm3.classList.contains('active')){

        bm3.classList.remove('active');

    }

    else{

        bm3.classList.add('active');
        bf3.classList.remove('active');
        bk3.classList.remove('active');
    }

});

/*
    Kill buttons
*/

bk1.addEventListener('click', function(){

    if( bk1.classList.contains('active')){

        bk1.classList.remove('active');

    }

    else{

        bk1.classList.add('active');
        bf1.classList.remove('active');
        bm1.classList.remove('active');
    }

});

bk2.addEventListener('click', function(){

    if( bk2.classList.contains('active')){

        bk2.classList.remove('active');

    }

    else{

        bk2.classList.add('active');
        bf2.classList.remove('active');
        bm2.classList.remove('active');
    }

});

bk3.addEventListener('click', function(){

    if( bk3.classList.contains('active')){

        bk3.classList.remove('active');

    }

    else{

        bk3.classList.add('active');
        bf3.classList.remove('active');
        bm3.classList.remove('active');
    }

});


/*
    Check Buttons
*/

function check(){

   var validation = 0;

   let list1 = [bf1.classList.contains('active'), bm1.classList.contains('active'), bk1.classList.contains('active')]

   let list2 = [bf2.classList.contains('active'), bm2.classList.contains('active'), bk2.classList.contains('active')]

   let list3 = [bf3.classList.contains('active'), bm3.classList.contains('active'), bk3.classList.contains('active')]

    console.log(list1);
    console.log(list2);
    console.log(list3);

        /*
            Assign Value to First Character
        */

        if(list1[0] == true){
            var charfuck = $("#char1name").text();
        }
        else if(list1[1] == true){
            var charmarry = $("#char1name").text();
        }
        else if(list1[2] == true){
            var charkill = $("#char1name").text();
        }

      /*
            Assign Value to Second Character
      */

        if(list2[0] == true){
            charfuck = $("#char2name").text();
        }
        else if(list2[1] == true){
            charmarry = $("#char2name").text();
        }
        else if(list2[2] == true){
            charkill = $("#char2name").text();
        }

     /*
            Assign Value to Third Character
     */

        if(list3[0] == true){
            charfuck = $("#char3name").text();
        }
        else if(list3[1] == true){
            charmarry = $("#char3name").text();
        }
        else if(list3[2] == true){
            charkill = $("#char3name").text();
        }

     /*
            Validation
     */
   
   if(list1.includes(true) && list2.includes(true) && list3.includes(true)){

        for(var i= 0; i < list1.length; i++ ){

            if(list1[i] == true && list2[i] == true || list1[i] == true && list3[i] == true || list2[i] == true && list3[i] == true){
                
                validation += 1;

            }

        }
    }

    else {
        validation += 2;
    }

    switch (validation){

        case 0:

            fuckarray.push(charfuck);
            marryarray.push(charmarry);
            killarray.push(charkill);

            store(charfuck, charmarry, charkill);

            break;

        case 1:
            alert("You chose two or more buttons with the same parameter");
            break;

        case 2:
            alert("You left a button unchecked");
            break;
    }

}

/*
    Store Into Browser
*/


function store(charfucked, charmarried, charkilled){

    var minimun = localStorage.getItem("iterations");
    var maximum = localStorage.getItem("rounds") - 1;

    if (maximum == null){

        maximum = 3
    }

         /*
            Fetch from All entries
        */

        var fuckbox = JSON.parse(localStorage.getItem("fuck_box"));
        var marrybox = JSON.parse(localStorage.getItem("marry_box"));
        var killbox = JSON.parse(localStorage.getItem("kill_box"));

        if(fuckbox == null || marrybox == null || killbox == null) {

            fuckbox = []
            marrybox = []
            killbox = []

        } 

        /*
            Push current entry
        */

        fuckbox.push(charfucked);
        marrybox.push(charmarried);
        killbox.push(charkilled);


        localStorage.setItem("fuck_box", JSON.stringify(fuckbox));
        localStorage.setItem("marry_box", JSON.stringify(marrybox));    
        localStorage.setItem("kill_box", JSON.stringify(killbox));

        /*
            Push into all entries
        */

        iterations = fuckbox.length;

        localStorage.setItem("iterations", iterations)

        if (minimun >= maximum){

            console.log("ha sido logrado");
            location.replace('results');

        }

        else if(minimun <= maximum){
            location.reload();
        }
        




    
}





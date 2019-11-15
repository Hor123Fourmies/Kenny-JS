/**
 * Created by sstienface on 07/10/2018.
 */

// I


var compteur = 0;

// haut

document.getElementById('up').addEventListener('click',function ()

    {
        var t = parseInt(document.getElementById('kenny').style.top);

        if (t>0)
        {
            t=t-10;
            document.getElementById('kenny').style.top = t+'px';
        }
    }
);



// gauche
document.getElementById('left').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.left);


    if (t>0)
    {
        t=t-10;
        document.getElementById('kenny').style.left = t+'px';
    }

    if (t<82)


    {
        alert ('kenny est mort');

        document.getElementById('kenny').style.top =  "200px";
        document.getElementById('kenny').style.left =  "200px";

        compteur = compteur+1;
        alert('Kenny est mort' +compteur+ 'fois');
    }



});


// droite

document.getElementById('right').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.left);

    if (t<468)
    {
        t=t+10;
        document.getElementById('kenny').style.left = t+'px';
    }

});


// bas
document.getElementById('down').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.top);

    if (t<468)
    {
        t=t+10;
        document.getElementById('kenny').style.top = t+'px';
    }
});


var divRouge = document.createElement("div");
document.getElementById('viewport').appendChild(divRouge);

divRouge.style.background = "red";
divRouge.style.height = "500px";
divRouge.style.width = "100px";


/*
document.getElementById('kenny').addEventListener('click', function ()
    {
        alert('Mon élément a été cliqué');
    },
    false);
*/


/*
document.onkeypress=function(e){e=e||window.event;
    var key=e.which?e.which:event.keyCode;
    if (key==32) alert('Frappe de la touche espace !');
    else alert('Frappe de la touche de code '+key)
*/

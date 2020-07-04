function showtext() {
    var text = "My name is saurabh negi I am 2nd year student in IIT Roorkee I am pursuing integrated chemistry and I am intrested in software development, web designing, data science and computational chemistry";
    document.getElementById("textarea").innerHTML = text;
}

function like(x) {

    var n = document.getElementById("countLikes");

    if (n.innerHTML == "&nbsp;4") {
        x.style.color = "blue";
        n.innerHTML = "&nbsp5";
    } else {
        x.style.color = "black";
        n.innerHTML = "&nbsp;4";
    }
}

function like2(x) {

    var n = document.getElementById("countLikes2");

    if (n.innerHTML == "&nbsp;89") {
        x.style.color = "blue";
        n.innerHTML = "&nbsp90";
    } else {
        x.style.color = "black";
        n.innerHTML = "&nbsp;89";
    }
}

function showtext2() {
    var text = "\"Opportunities multiply as they are seized\" <br> In the light of the above statement, <br>I would like to extend my gratitude to Prof. Snape for the opportunity and also to my friends, Ron weasley and Hermini for their constant support.Thanks,<br>Hogwarts for the mention! :) ";
    document.getElementById("textarea2").innerHTML = text;
}
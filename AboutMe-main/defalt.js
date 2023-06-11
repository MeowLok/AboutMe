var text = [
    '要過愉快的生活、要從新做人，不很難，把條件降低一點，知足，常樂。 -蔡瀾',
    '失敗的次數愈來愈多，便麻木了，就知道怎麼去刻服它，這是人生學得聰明的過程。 -蔡瀾',
    '謙虛是美德，過份謙虛變成造作。 -蔡瀾',
    '安息日是為人設立的，人不是為安息日設立的。 -馬可福音2:27',
    '恨能挑啟爭端；愛能遮掩一切過錯。 -箴言10:12',
    '因為我們行事為人是憑著信心，不是憑著眼見。 -哥林多後書 5:7',
    '別對自己太嚴苛！世上沒有人通曉一切智慧。 -伊莉莎白二世',
    '當遇見生活中的困難，期許自己當那個為了未來起身奮鬥的人，而不是直接屈服於失敗。-伊莉莎白二世',
    '膽小的人可以逃跑，但危機往往由具有高貴膽識的人解決。-伊莉莎白二世',
    '樹大必有枯枝，人多必有白痴。 -佚名',
    '忍一句，息一怒，饒一着，退一步。 -佚名',
    '轉一轉，舔一舔，泡一泡。 -OREO'
];
setInterval('document.getElementById("footer").innerHTML=text[Math.floor(Math.random()*text.length)]',5000);
    
function d(){
    var x=Math.floor(Math.random()*999);
    while ((x+++"").length<3){
        x="0"+x;
    }
    return x;
}
setInterval('document.getElementById("d").innerHTML=d();',50);
    
function hr(){
    var x=Math.floor(Math.random()*23);
    while ((x+++"").length<2){
        x="0"+x;
    }
    return x;
}
setInterval('document.getElementById("hr").innerHTML=hr();',50);
                
function min(){
    var x=Math.floor(Math.random()*60);
    while ((x+++"").length<2){
        x="0"+x;
    }
    return x;
}
setInterval('document.getElementById("min").innerHTML=min();',50);
                
function sec(){
    var x=Math.floor(Math.random()*60);
    while ((x+++"").length<2){
        x="0"+x;
    }
    return x;
}
setInterval('document.getElementById("sec").innerHTML=sec();',50);            
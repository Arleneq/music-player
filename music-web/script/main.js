var btn = document.getElementsByClassName("icon")[0];
var myMusic = document.getElementById("myMusic");
var txt = document.getElementById("txt");
var con = document.getElementsByClassName("content")[0];
var mark = true;

btn.onclick = function(){
    if (mark){
        this.className += " rotate";
        myMusic.play();
        mark = false;
    } else {
        this.className = "icon";
        myMusic.pause();
        mark = true;
    }
}
btn.ondblclick = function(){
    if (mark){
        this.className += " rotate";
        myMusic.play();
        mark = false;
    } else {
        this.className = "icon";
        myMusic.load();
        mark = true;
    }
}

var lrc = txt.innerHTML;
var lrcArr = lrc.split("[");
// console.log(lrcArr);
var html = "";
for (var i = 0 ; i < lrcArr.length ; i++){
    var arr = lrcArr[i].split("]");
    var time = arr[0].split(".");
    var timer = time[0].split(":");
    var ms = timer[0] * 60 + timer[1] * 1
    var text = arr[1];
    if (text){
        html += "<p id=" + ms +">"+ text +"<p>";
    }

    console.log(html);
    con.innerHTML = html;
}

var num = 0;
var op = con.getElementsByTagName("p");
myMusic.addEventListener("timeupdate",function(){
    var curTime = parseInt(this.currentTime)
    if(document.getElementById(curTime)){
        for (var i = 0 ; i < op.length ; i++){
            op[i].style.cssText = "font-size: 15px;"
        }
        document.getElementById(curTime).style.cssText = "background: linear-gradient(-3deg,rgb(120, 81, 228) 0%,#474afa 100%);-webkit-background-clip: text;color: transparent;font-size: 20px;position: relative;"
        if(op[7 + num].id == curTime){
            con.style.top = -20 * num + "px";
            num++;
        }
    }
})
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
        con.style.top = 0+"px";
    }
}

var lrc = txt.value;
var lrcArr = lrc.split("[");
var html = "";
for (var i = 0 ; i < lrcArr.length ; i++){
    var arr = lrcArr[i].split("]");
    var time = arr[0].split(".");
    var timer = time[0].split(":");
    var ms = timer[0] * 60 + timer[1] * 1;
    var text = arr[1];
    if (text){
        html += "<p id=" + ms +">"+ text +"</p>";
    }

    con.innerHTML = html;
}

var num = 0;
var op = con.getElementsByTagName("p");
myMusic.addEventListener("timeupdate",function(){
    var curTime = parseInt(this.currentTime);
    if(document.getElementById(curTime)){
        for (var i = 0 ; i < op.length ; i++){
            op[i].style.cssText = "font-size: 15px;";
        }
        document.getElementById(curTime).style.cssText = "background: linear-gradient(-3deg,rgb(120, 81, 228) 0%,#474afa 100%);-webkit-background-clip: text;color: transparent;font-size: 20px;";
        if(op[3 + num].id == curTime){
            con.style.top = -35 * num + "px";
            num++;
        }
    }
})

window.onload=init;		
function init() {			
    var o=document.getElementById('box');			
    var speed=5;//速度			
    var timemouse;			//鼠标事件			
    o.onmouseenter=function(){				
        clearInterval(timemouse);//清除定时器				
        timemouse=setInterval(moveRight,50);			
    };			//鼠标离开事件			
    o.onmouseleave=function(){				
        clearInterval(timemouse);//清除定时器				
        timemouse=setInterval(moveLeft,50);			
    }; 			//滑块移动			
    function moveRight(){				
        var l=o.offsetLeft;//左边距				
        if(l>=0){					
            clearInterval(timemouse);//停止				
        }else{					
            o.style.left=l+speed+'px';	//移动				
        }							
    }			//向左移动			
    function moveLeft(){							
        var l=o.offsetLeft;//左边距						
        if(l<=-200){					
            clearInterval(timemouse);				
        }else{					
            o.style.left=l-speed+'px';					
        }			
    }		
}


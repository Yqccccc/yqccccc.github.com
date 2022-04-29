/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-11 14:16:50
 * @version $Id$
 */
doClick()
function doClick(){
	document.getElementById("p1").addEventListener("click",DoClick)
}

function DoClick(e){
	e.target.style.color="red"
}

var a = document.getElementById("p2")
var b = document.getElementById("p21")
console.log(b.innerText)
a.onclick=function (){
	var date=new Date()
	var seperator1="-"
	var year=date.getFullYear()
	var month=date.getMonth()+1
	var strDate=date.getDate()
	if(month>=1&&month<=9){
		month="0"+month
	}
	if(strDate>=0&&strDate<=9){
		strDate="0"+strDate
	}
	var currentdate=year+seperator1+month+seperator1+strDate
	b.innerText=currentdate
}

var c= document.getElementById("p3")
c.onclick=function(){
	c.classList.add("fn-active")
}

var d=document.getElementById("p41")
var e=document.getElementById("p8")
var g=document.getElementById("p4")
g.onclick=function(){
	d.removeChild(e)
}

var f=document.getElementById("p5")
f.onclick=function(){
	window.open("https://www.taobao.com")
}

var j=document.getElementById("p6")
j.onclick=function(){
	var h=document.createElement('li')
    h.innerHTML='p9'
    document.getElementById("p41").appendChild(h)
}

var ul = document.querySelector('ul');  
var list = document.querySelectorAll('ul li');  
ul.addEventListener('click', function(ev){  
    var ev = ev || window.event 
    var target = ev.target || ev.srcElemnt
    for(var i = 0, len = list.length; i < len; i++){  
        if(list[i] == target){  
            alert(i+1)
        }  
    }  
})

var o=document.getElementById("p7")
o.onclick=function(){
	var winWidth = window.screen.width
	var myDiv = document.getElementById("hezi")
	myDiv.style.width = winWidth + 'px'
}
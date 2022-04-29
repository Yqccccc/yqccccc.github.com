/*JQuery*/
/*first*/
$(function(){  
    $(".pic").click(function(){  
        var _this = $(this); 
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  
    });  
});  
 
function imgShow(outerdiv, innerdiv, bigimg, _this){  
    var src = _this.attr("src"); 
    $(bigimg).attr("src", src);      

    $("<img/>").attr("src", src).load(function(){   
        var realWidth = this.width; 
        var realHeight = this.height;
        var scale = 0.2;  
        var bigWidth = realWidth*scale;
        var bigHeight = realHeight*scale;

        $(bigimg).css("width",bigWidth);
        $(bigimg).css("height",bigHeight);

        var bwidth = ($("#outerdiv").width());
        var bheight = ($("#outerdiv").height());

        var leftside = (bwidth-bigWidth)/2.2;  
        var topside = (bheight-bigHeight)/4;

        $(innerdiv).css({"top":topside, "left":leftside});
        $(outerdiv).show();
    });  
          
        $(outerdiv).click(function(){
            $(this).hide(); 
        });  
}

/*second*/
function hn(){
  $('.menu:first-child').trigger("click");
}

$(document).ready(function(){
  window.onload=hn;
})

$('.menu').click(function(){
    $(this).parent().next().children().eq(
      $(this).index()).show().siblings().hide();
 })

$('.menu').click(function(){
  $('.menu').css("background",'#fff');
  $(this).css("background",'#ccc');
 })

/*third*/
var index =1;
var newindex;
$(".order").each(function(){
  newindex=$(this).html(index++);
})

$(function(){
    $("#tab3-2").on("click",".delbtn",function(){
      $(this).parent().parent().remove(); 
            index=1;
            $(".order").each(function(){
            $(this).html(index++);
        })
    })  
});

$(function(){  
    $(".addbtn").click(function(){
      $("#tab3-2").append("<tr><td><span class=\"order\"></span></td><td></td><td><button class=\"delbtn\">delete</button></td></tr>")
    var index =1;
    var newindex;
    $(".order").each(function(){
    newindex=$(this).html(index++);
     }) 
  })   
});
            
/*JS*/
/*first*/
var lis=document.getElementById('jss1').getElementsByTagName('img');
var box=document.getElementById('js1');
    for(var i=0;i<lis.length;i++){
           lis[i].onclick=function fc(e){
            var  newDiv=document.createElement('div');
                 newDiv.className='bg';
                 box.appendChild(newDiv);

            var  newImg=document.createElement('img');
                 newImg.className='maxpic';
                 newImg.src = e.currentTarget.getAttribute("src");
                 box.appendChild(newImg);

              newDiv.onclick=function(){
                box.removeChild(newDiv);
                box.removeChild(newImg);
              }

           }

    }

/*second*/
var aLi = document.getElementsByClassName('menu2');
var adivs = document.getElementsByClassName('content2');
var view = document.getElementById('no1');

for(var i=0;i<aLi.length;i++){
  aLi[i].index=i;
  aLi[i].onclick = function(){
    for(var f=0;f<aLi.length;f++){
      if(f==this.index){
        aLi[f].style.background ='#ccc';
        adivs[f].style.display = 'block';
        view.style.display = 'none';

      }else{
        aLi[f].style.background ='#fff';
        adivs[f].style.display = 'none';
        view.style.display = 'none';
      }
    }
  }
}

/*third*/
function del(obj){
  var tr = obj.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
  numCheck();
}

var btn = document.getElementById('addd');

btn.onclick = function(){
  var num = document.getElementById('table').getElementsByTagName('tr').length;
  var tab = document.getElementById('table');
  var trr=document.createElement('tr');
  var xl=document.createElement('td');
  var xm=document.createElement('td');
  var xr=document.createElement('td');
  var nbtn = document.createElement('button');
  nbtn.innerHTML = 'delete';
  nbtn.setAttribute('onclick','del(this)');

  xl.innerHTML=num+1;

  trr.appendChild(xl);
  trr.appendChild(xm); 
  xr.appendChild(nbtn);
  trr.appendChild(xr);
  tab.appendChild(trr);
  trr.className = "xvhao";

}

function numCheck() {
  var hang = document.getElementById('table').getElementsByTagName('tr');
  var xvhao = [];
  var s=1;
  var hangshu = hang.length;
  for(i=0;i<hangshu;i++){
    xvhao[i]=i+1;
  }
  for(i=0;i<hangshu;i++){  
    document.getElementById('table').rows[i].cells[0].innerHTML=xvhao[i];
  }
}
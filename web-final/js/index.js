/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-06-03 12:16:13
 * @version $Id$
 */
/*转换城市*/
const init1 =() => {
	$(".m-search li:eq(1) span").on('click',trans)
}

function trans() {
	$(document).ready(function(){
		var e1 = $(".m-search li:eq(2) span:eq(1)").text()
		var e2 = $(".m-search li:eq(0) span:eq(1)").text()
		var e3 = $(".m-search li:eq(2) span:eq(2)").text()
		var e4 = $(".m-search li:eq(0) span:eq(2)").text()
		$(".m-search li:eq(0) span:eq(1)").each(function(){
			$(this).html(e1)
		})
		$(".m-search li:eq(2) span:eq(1)").each(function(){
			$(this).html(e2)
		})
		$(".m-search li:eq(0) span:eq(2)").each(function(){
			$(this).html(e3)
		})
		$(".m-search li:eq(2) span:eq(2)").each(function(){
			$(this).html(e4)
		})
		if($(".m-search li:eq(2) span:eq(2)").css("color")!=$(".m-search li:eq(0) span:eq(2)").css("color")){
			var a = $(".m-search li:eq(2) span:eq(2)").css("color")
			var b = $(".m-search li:eq(0) span:eq(2)").css("color")
			$(".m-search li:eq(2) span:eq(2)").css("color" ,b)
			$(".m-search li:eq(0) span:eq(2)").css("color" ,a)
			var a1 = $(".m-search li:eq(2) span:eq(2)").css("border-color")
			var b1 = $(".m-search li:eq(0) span:eq(2)").css("border-color")
			$(".m-search li:eq(2) span:eq(2)").css("border-color" ,b1)
			$(".m-search li:eq(0) span:eq(2)").css("border-color" ,a1)
		}
	})
}

/*查询跳转，返回*/
const init2 =() => {
	$(".m-chaxun").on('click',turnto)
	$(".m-back").on('click',back)
}

const turnto =() => {	
	$(".m-page2").show()
	$(".m-page1").hide()
	var e1 = $(".m-search li:eq(0) span:eq(1)").text()
	var e2 = $(".m-search li:eq(2) span:eq(1)").text()
	$(".m-title:eq(0) li").each(function(){
		$(this).html("离开"+e1)
	})
	$(".m-title:eq(1) li").each(function(){
		$(this).html("进入"+e2)
	})
}

const back =() => {
	$(".m-page2").hide()
	$(".m-page1").show()
}

/*city页面返回page1*/
const init3 =() => {
	$(".m-tp span:eq(0)").on('click',page1)	
}

const page1 =() => {
	$(".m-city").hide()
	$(".m-page1").show()
}

/*选择好城市返回page1*/
var x

const init4 =() => {
	$(".m-search li:eq(0) span:eq(0)").on('click',function(){
	x=0
	$(".m-city").show()
	$(".m-page1").hide()	
	})
	$(".m-search li:eq(2) span:eq(0)").on('click',function(){
	x=1
	$(".m-city").show()
	$(".m-page1").hide()
	})
}

const init5 =() => {
	$(".m-all").on('click',"li",function(){
		var e = $(this).text()
		$(document).ready(function(){
			if(x==0){
				$(".m-search li:eq(0) span:eq(1)").each(function(){
				$(this).html(e)
				})
			}
			if(x==1){
				$(".m-search li:eq(2) span:eq(1)").each(function(){
				$(this).html(e)
				})
			}
		
		})
		$(page1)
	})
	$(".m-part").on('click',"span",function(){
		var e = $(this).text()
		$(document).ready(function(){
			if(x==0){
				$(".m-search li:eq(0) span:eq(1)").each(function(){
				$(this).html(e)
				})
			}
			if(x==1){
				$(".m-search li:eq(2) span:eq(1)").each(function(){
				$(this).html(e)
				})
			}
		
		})
		$(page1)
	})
}

/*city跳转*/
const init6 =() => {
	$(".m-right").on('click',"li",function(){
		var e = $(this).index()-1
		console.log(e)
		var loca = $(".m-all div:eq("+e+")").offset().top
		console.log(loca)
		$("body,html").animate({
			scrollTop:loca
		},50)
	})
}

/*获取数据*/
$(".m-chaxun").on('click',function(){
	$.ajax({
		type:'get',
		url:'data/data.json',
		dataType:'json',
		success: function(data){
			var e1 = $(".m-search li:eq(0) span:eq(1)").text();
			var d = data[0].name;
			for(var i=0;i<data.length;i++){
				d = data[i].name;
				if(d == e1){
					var l1 = data[i].high;
					var l2 = data[i].fengkong;
					var l3 = data[i].detail;
					var l4 = "数据来源:"+e1+"发布";
					$(".m-detail:eq(0) li:first-child").html("中高风险地区："+l1+"个");
					$(".m-detail:eq(0) li:eq(1)").html("封管地区："+l2+"个");
					$(".m-detail:eq(0) li:eq(2)").html(l3);
					$(".m-detail:eq(0) li:eq(3)").html(l4);
				}
			}
		}
	})
})

$(".m-chaxun").on('click',function(){
	$.ajax({
		type:'get',
		url:'data/datareturn.json',
		dataType:'json',
		success: function(data){
			var e1 = $(".m-search li:eq(2) span:eq(1)").text();
			var d = data[0].name;
			for(var i=0;i<data.length;i++){
				d = data[i].name;
				if(d == e1){
					var l1 = data[i].high;
					var l2 = data[i].fengkong;
					var l3 = data[i].detail;
					var l4 = "数据来源:"+e1+"发布";
					$(".m-detail:eq(1) li:first-child").html("中高风险地区："+l1+"个");
					$(".m-detail:eq(1) li:eq(1)").html("封管地区："+l2+"个");
					$(".m-detail:eq(1) li:eq(2)").html(l3);
					$(".m-detail:eq(1) li:eq(3)").html(l4);
				}
			}
		}
	})
})
var ele  = "低风险地区"
const init7 =() => {
	$(".m-all").on('click',"li",function(){
		var e = $(this).text()
		$.ajax({
		type:'get',
		url:'data/data.json',
		dataType:'json',
		success: function(data){
			var d = data[0].name;
			for(var i=0;i<data.length;i++){
				d = data[i].name;
				if(d == e){
					if(data[i].high==0 && data[i].fengkong == 0){
						ele  = "低风险地区"
						if(x==0){
						$(".m-search li:eq(0) span:eq(2)").each(function(){
						$(this).html(ele)
						$(this).css("color","#4CAF50")
						$(this).css("border-color","#4CAF50")
						})
						}
						if(x==1){
						$(".m-search li:eq(2) span:eq(2)").each(function(){
						$(this).html(ele)
						$(this).css("color","#4CAF50")
						$(this).css("border-color","#4CAF50")
						})
						}
					}
					else{
						ele = "中高风险地区"
						if(x==0){
						$(".m-search li:eq(0) span:eq(2)").each(function(){
						$(this).html(ele)
						$(this).css("color","orange")
						$(this).css("border-color","orange")
						})
						}
						if(x==1){
						$(".m-search li:eq(2) span:eq(2)").each(function(){
						$(this).html(ele)
						$(this).css("color","orange")
						$(this).css("border-color","orange")
						})
						}
					}
				}
			}
		}
	})
		$(page1)
	})


	$(".m-part").on('click',"span",function(){
		var e = $(this).text()
		$.ajax({
		type:'get',
		url:'data/data.json',
		dataType:'json',
		success: function(data){
			var d = data[0].name;
			for(var i=0;i<data.length;i++){
				d = data[i].name;
				if(d == e){
					if(data[i].high==0 && data[i].fengkong == 0){
						ele  = "低风险地区"
						if(x==0){
						$(".m-search li:eq(0) span:eq(2)").each(function(){
						$(this).html(ele)
						$(this).css("color","#4CAF50")
						$(this).css("border-color","#4CAF50")
						})
						}
						if(x==1){
						$(".m-search li:eq(2) span:eq(2)").each(function(){
						$(this).html(ele)
						$(this).css("color","#4CAF50")
						$(this).css("border-color","#4CAF50")
						})
						}
					}
					else{
						ele = "中高风险地区"
						if(x==0){
						$(".m-search li:eq(0) span:eq(2)").each(function(){
						$(this).html(ele)
						$(this).css("color","orange")
						$(this).css("border-color","orange")
						})
						}
						if(x==1){
						$(".m-search li:eq(2) span:eq(2)").each(function(){
						$(this).html(ele)
						$(this).css("color","orange")
						$(this).css("border-color","orange")
						})
						}
					}
				}
			}
		}
	})
		$(page1)
	})
}



$(init1)
$(init2)
$(init3)
$(init4)
$(init5)
$(init6)
$(init7)


$(function(){
	
	 
	$(document).scroll(function(){
		var scrollTop=$(document).scrollTop();
		console.log(scrollTop)
		var w=$(window).width();
		//导航向下滑有吸顶效果
		if(scrollTop>=450){
			$("#nav").css({'position':'fixed','top':'0px','left':'0px','width':w, 'z-index':'999'})
		} 
		else if(scrollTop<=450){
			$("#nav").css({'position':'relative','z-index':'99'})
		}
		//回到顶部显示隐藏结束
		if(scrollTop>500){
			$("#top").css("display",'block')
		}else{
			$("#top").css("display",'none')
		}
		})
		
		//点击回到顶部
		$("#top").click(function(){
			$("body,html").animate({'scrollTop':0},500);
			return ;
		})
		
		 var scrollTop=$(document).scrollTop();
	     var navlist=$("#nav>ul>li");
	     console.log(navlist[5])
	     
	      $(navlist[0]).click(function(){
		  	    $('body,html').animate({'scrollTop':'550px'},500)
		      	return false;
		  })
	      $(navlist[1]).click(function(){
		  	    $('body,html').animate({'scrollTop':'600px'},500)
		      	return false;
		  })
             $(navlist[2]).click(function(){
		  	    $('body,html').animate({'scrollTop':'800px'},500)
		      	return false;
		  })
              $(navlist[3]).click(function(){
		  	    $('body,html').animate({'scrollTop':'1150px'},500)
		      	return false;
		  })
               $(navlist[4]).click(function(){
		  	    $('body,html').animate({'scrollTop':'1950px'},500)
		      	return false;
		  })
                $(navlist[5]).click(function(){
		  	    $('body,html').animate({'scrollTop':'2100px'},500)
		      	return false;
		  })
                 $(navlist[6]).click(function(){
		  	    $('body,html').animate({'scrollTop':'2300px'},500)
		      	return false;
		  })
                 $(navlist[7]).click(function(){
		  	    $('body,html').animate({'scrollTop':'2500px'},500)
		      	return false;
		  })
		  
		  console.log($(".more_aboutme>ul"))  
		  
	})



        let oSpan = document.getElementsByTagName("span")[0];
        function disposeTime(oldtime){
        var date1 = new Date(oldtime)
        var s2= Date.parse(new Date());//获取1970.1.1.8.00.00到当前时间的毫秒数
        var s1 = date1.getTime()//获取1970.1.1.8.00.00到设定时间的毫秒数
        // alert(s2)
        var total = (s2 - s1)/1000;//将毫秒转换为秒
        var day = parseInt(total / (24*60*60));//计算整数天数
        var afterDay = total - day*24*60*60;//取得算出来天数后剩余的秒数
			var hour = parseInt(afterDay/(60*60));//计算整数小时百数
			
			var afterHour = total - day*24*60*60 - hour*60*60;//取得算出小时数后剩余的秒数
			var min = parseInt(afterHour/60);//计算整数分
			
			var afterMin = total - day*24*60*60 - hour*60*60 - min*60;//取得算出分后度剩余的秒数
			
			if(day){
				return  day + "天"+ hour + "小时"+ min + "分钟"+afterMin + "秒"
			}
			if(hour){
				return  hour + "小时"+ min + "分钟"+afterMin + "秒"
			}
			if(min){
				return  min + "分钟"+afterMin + "秒"
			}
			if(afterMin){
				return  afterMin + "秒"
			}
		}
		// console.log(disposeTime('2018-11-27 8:00:00'))
        setInterval(function(){
            oSpan.innerHTML = disposeTime('2018-11-27 8:00:00');
        },1000)

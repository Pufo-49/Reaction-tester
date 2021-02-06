 var start = new Date().getTime();
			 function getRandomColor() 
			 {
          	var letters = '0123456789ABCDEF'.split('');
 			 var color = '#';
  			for (var i = 0; i < 6; i++) {
    		color += letters[Math.floor(Math.random() * 16)];
  				}
 			 return color;
			}
 
			

			function interval()
             { 
             	var top= Math.random()* 400;
                var left=Math.random()*500;
                var width=(Math.random()*300+5);
                if(Math.random() > 0.5)
			{
				document.getElementById("shape").style.borderRadius="50%";
			}
			else
			{

				document.getElementById("shape").style.borderRadius="0";
			}

               
               document.getElementById("shape").style.top= top+"px";
               document.getElementById("shape").style.left= left+"px";
               document.getElementById("shape").style.width=width+"px";
               document.getElementById("shape").style.backgroundColor=getRandomColor();
             document.getElementById("shape").style.display="block";
              start = new Date().getTime();
               
            
            }
   
    function afterdelay() {
    	setTimeout(interval,Math.random()*2000);
    	
    }
       
        document.getElementById("shape").onclick=function()
        {

        	document.getElementById("shape").style.display="none";
        	var end= new Date().getTime();
        	var timetaken=(end-start)/1000;
        	document.getElementById("timetaken").innerHTML=timetaken;
        	
           afterdelay();
             

        }
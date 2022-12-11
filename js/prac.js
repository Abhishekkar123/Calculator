var x=document.querySelector('.input');
var y=document.querySelector('.inputEq');
var Hist=document.querySelector(".history-div");
// var num_part=document.querySelector('.input').value.split('.');
// num_part=num_part[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")
ans=[];
eq1=[];

 function setVal(val){
	
	if(x.value==0)
       {
	    x.value=val;
       }
     else
       {
   	 x.value+=val;
       }
   	
   	
 }
 function clearVal()
 {
   y.value="";
	x.value=0;
 }
 

 function getAns()
  {
   eq=x.value+"=";
   eq1.push(eq);
   ans.push(eval(x.value));
  // console.log(eq1+""+ans);
   y.value=x.value;
	x.value=eval(x.value);
   }
  function backVal(){
      var str=x.value;
      if((str.length-1)>0){
str=str.substr(0,str.length-1);
      x.value=str;
   }
   else{
      x.value=0;
   }

  }


   function showHistory(){
     Hist.innerHTML="";
     for(let i=0;i<ans.length;i++)
       {
      Hist.innerHTML+="<span>"+eq1[i]+" "+ans[i]+"</span><br>"
       }
   }

 removeVal=()=>
{
   var status=confirm("you want to delete history?");
   if(status)
    {
   Hist.innerHTML=""; 
   ans=[];
   eq1=[];
    }

}
   
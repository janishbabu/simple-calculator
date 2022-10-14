$(document).ready(function(){
 let value="";
 $('.btn').on('click', function(){
  if(!value && ($(this).val() == '*' || $(this).val() == "/")){
    $('#input').val('ERROR')
   }
   else{
  value +=$(this).val();
  $('#input').val(value);
  }
})
$('#ac').on('click', function(){
  value="";
  $('#input').val(value);
 })
$('#equal').on('click',function(){

  var len=value.length;
  var flag=0;
  var sample="";


 for(var i=0; i<len;i++){

     if((value[i]=='.')&&(flag == 0)){
        flag=1;
        sample=sample.concat(value[i]);
        console.log(sample);
      }
     else if((value[i]=='.')&&(flag==1)){
     console.log('error')
     }
     else if(value[i]=='*'){
      flag=0;
      sample=sample.concat(value[i]);
       }
     else if(value[i]=='+'){
      flag=0;
      sample=sample.concat(value[i]);
       }
     else if(value[i]=='-'){
      flag=0;
      sample=sample.concat(value[i]);
       }
     else if(value[i]=='/'){
      flag=0;
      sample=sample.concat(value[i]);
       }
     else{
      sample=sample.concat(value[i]);
      console.log(sample);
      }


  }
  var print=eval(sample);
  $('#input').val(print);

})

})

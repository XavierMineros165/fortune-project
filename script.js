$("button").click(function(){
 var name = $(".name").val();
 console.log(name);
 var old = $(".old").val();
 console.log(old);
 var age = $(".age").val();
 console.log(age);
 age = (2050- parseInt(age)) + parseInt(old);
 $(".question").append(name + " in 2050 you will be " + age + " years old ");
 });
 
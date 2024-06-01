let massage2 = document.getElementById('massage2')
let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
let mas = document.getElementById('mas')
let api = document.getElementById('api')
let all = document.getElementById('all')
let body = document.getElementsByTagName('body')
let menue = document.getElementById('menue')
let over = document.getElementById('over')
let h3 = document.getElementsByTagName("h3")
window.oncontextmenu = function(){
    menue.innerHTML=`        
    <h4>Reload</h4>
    <h4>ahmed</h4>
    <h4>mohamed</h4>
    <h4>omer</h4>
    `
}




inp.onchange = function(){
    inp.focus()
}
// body.o= function(){
//     menue.style.display="none"
//     console.log("body")
// }
     

btn.onclick = function(){

    if(inp.value != ""){

    mas.innerHTML+=`
    <h3>${inp.value}</h3>
    `
    }
  
    // massage.innerHTML = inp.valu

if(inp.value =="hello"){
    
    setTimeout(function(){

    
         api.innerHTML+=`
    <h3>hello</h3>
    `

     
    },1000)
    




    // massage2.innerHTML="hello"

    
}else if(inp.value =="hi"){
    setTimeout(function(){
api.innerHTML+=`
    <h3>hello</h3>
    `
},2000)


}
else if(inp.value =="good morning"){
    setTimeout(function(){

       api.innerHTML+=`
    <h3>good morning</h3>
    `
    },2000)
    
 
}
else if(inp.value =="how are you"){
    setTimeout(function(){
api.innerHTML+=`
    <h3>good nice and you?</h3>
    `
    
    },2000)
    
    
}
else if(inp.value =="اهلا"){
    setTimeout(function(){

       api.innerHTML+=`
    <h3>اهلا بك </h3>
    `
    },2000)
    
 
}
else if(inp.value =="صباح الخير"){
    
    setTimeout(function(){

    
         api.innerHTML+=`
    <h3>صباح النور والسرور</h3>
    `
     
    },2000)
    


}
else if(inp.value =="كيف حالك"||inp.value =="اهلا كيفك"||inp.value =="ازيك يسطا"||inp.value =="عامل اي"){
    
    setTimeout(function(){

    
         api.innerHTML+=`
    <h3>انا تمام وانت عامل اي</h3>
    `
     
    },2000)
    


}
else if(inp.value ==" انا تمام"||inp.value =="تمام"||inp.value =="انا بخير"||inp.value =="بخير"||inp.value =="الحمد لله"){
    
    setTimeout(function(){

    
         api.innerHTML+=`
    <h3>يارب دايما,انا رايح اجيب حاجه وجي  </h3>
    `
     
    },2000)
    


}
else if(inp.value =="احه"||inp.value =="يلعنك"||inp.value =="احه"){

    
    setTimeout(function(){

    
    api.innerHTML+=`
    <h3>عيب</h3>
    `
     
     
    },2000)
    

}
else if(inp.value =="انااحبك"||inp.value =="انا بحبك"||inp.value =="انت قمر"||inp.value ==" شكرا لك"||inp.value =="سعدت بلقائك"){
    
    setTimeout(function(){

    
        api.innerHTML+=`
    <h3>انا سعيد جدا </h3>
    `
     
    },2000)
    

 
}else if(inp.value =="السلام عليكم"||inp.value =="سلام عليكم"||inp.value =="سلمعليكو"||inp.value ==" سلام"||inp.value =="السلام عليكم ورحمة الله وبركاته"){
   
    setTimeout(function(){

    
         api.innerHTML+=`
    <h3>وعليكم السلام </h3>
    `
     
    },2000)
    


}
else if(inp.value =="اعطني نكته"||inp.value =="قل لي نكته"||inp.value =="هات نكته"||inp.value =="قول نكته"||inp.value =="نكته"||inp.value =="قولي نكته"||inp.value =="نكت مضحكه جدا"||inp.value =="نكته مضحكه"){
   
    setTimeout(function(){

    
         api.innerHTML+=`
    <h3>مره واحد ضرت تيزو اخضرت </h3>
    `
     
    },2000)
    


}
else if(inp.value =="من انت"||inp.value =="انت مين"||inp.value =="ما اسمك"||inp.value =="انت ذكر ام انثي"||inp.value =="من اين انت"||inp.value =="ما هو جنسك"||inp.value =="ما هي جنسيتك"||inp.value =="هل انت متزوج"||inp.value =="هل انتي متزوجه"||inp.value =="هل تقبل ان اتزوجك"||inp.value =="انت بارد"||inp.value =="انت عيل بيضان"||inp.value =="كسمك"||inp.value =="انت غبي"||inp.value =="انت جموسه"||inp.value =="انت حمار"||inp.value =="يلعنك"||inp.value =="يلعن امك"||inp.value =="يلعن ابوك"||inp.value =="من اي بلد انت"){
    
    setTimeout(function(){

    
         api.innerHTML+=`
    <h3>انا عبارة عن برنامج ذكاء اصطناعي تم تطويري بواسطة احمد الهادي وانا ليس لدي مشاعر مثلكم</h3>
    `
     
    },2000)
    


}
 
inp.value = ""



}




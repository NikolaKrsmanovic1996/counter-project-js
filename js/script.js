//immidiate invoked funciton


(function(){

   let counterValue = 0;
      
   let buttons = document.querySelectorAll('.counterBtn');
   let counter = document.getElementById('counter');

   buttons.forEach(function(btn){
       btn.addEventListener('click',function(event){
           
        let value = event.target;
        //console.log(value);

        if(value.classList.contains('prevBtn')){
            counterValue--;
        }
        else if(value.classList.contains('nextBtn')) {
            counterValue++;
        }
        counter.textContent = counterValue;

        //change colors;
        if(counterValue ===0){
            counter.style.color = "red"; 
        }
        else if(counterValue <0){
            counter.style.color = "blue";
        }else if(counterValue >0){
            counter.style.color = "green";
        }
       });
   });

})();
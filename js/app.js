const form = document.querySelector('#message-form');
const message = document.querySelector('#message');
const feedBack = document.querySelector('.feedback');
const messageOutput = document.querySelector('.message-content');


form.addEventListener('submit', function(textInfo){
    textInfo.preventDefault();
    
    if(message.value ===''){
        feedBack.classList.add('show');
        messageOutput.textContent = 'Not Delivered, Try Again'
                            
        setTimeout(function(){
            feedBack.classList.remove('show') 

        }, 2500)
        
    } else {
        messageOutput.textContent = message.value
   
        setTimeout(function(){
                     
                      messageOutput.textContent = 'Message Delivered, Come Again'
                      message.value = message.textContent

            }, 2500)
    }
})




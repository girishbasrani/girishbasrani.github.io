document.addEventListener('DOMContentLoaded', function()
    {
      //CHnage  font color to red  
      document.querySelector('#red').onclick = function()
            {
                document.querySelector('#test').style.color='red';           
            }
    
      {     
        //CHnage  font color to blue  
      document.querySelector('#blue').onclick = function()
            {
                document.querySelector('#test').style.color='blue';           
            }
   
              

      //CHnage  font color to green 
            document.querySelector('#green').onclick = function()
                  {
                      document.querySelector('#test').style.color='green';           
                  }
         
          }

          {
         
            document.querySelector('#bg').onclick = function()
           
                   {
                    document.body.style.backgroundColor = "black";
                    }

            
           
                             
          }

      
    
    }
)
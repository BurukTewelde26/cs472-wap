
const make_adder = (function(inc) {
           let counter = 0;
           
          return {
                   function(inc){
                        counter += inc;    
                  },
                  getCounter :function(){
                      return counter;
                  }
                    
         }
})();








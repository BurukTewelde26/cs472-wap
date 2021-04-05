const employee = (function(){

    let name = null;
    let age = 0;
    let salary = 0;

    function getName(){
        return name;
    }
    function getSalary(){
         return salary
    }
    function getAge(){
        age += 1;
    }
    function setAge(newAge){
        age = newAge;
    }
    function publicGetAge(){
             getAge();
    }
    function setSalary (newSalary){
        salary = newSalary;
    }
    return{
    setAge: setAge,
    setSalary: setSalary,
    setName : function(newName){
        name = newName;
    },
        
    
    increaseSalary:function(percentage){
                     let sal = getSalary();
                     sal += sal + (1 + percentage/100);
                  },
    incrementAge: function(){
                 setAGe(getAge() + 1);

    }
    
    }
          

})();
employee.setAge(50);
employee.setSalary(300);
employee.increaseSalary(0.5);
employee.incrementAge();
employee.setName("ALex")
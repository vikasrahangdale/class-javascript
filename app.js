class human {
 //properties
   wt=80;
   ht =10;
   age = 40;

// behaviour 
   
    walking() {
    console.log("Walking"); 
} 
tell(){
    console.log('telling me ');
    
}

}

let obj = new  human()
console.log(obj.wt);
console.log(obj.tell());




class man {
    name= "vikas";
    age=25;
    surname='Pawar';
    profession = 'software engineer';


    //behaviour

    day(){
        console.log('I am working on a day');
    }
    work(){
        console.log('I am working It company');
    }
}

let manobj = new man();
console.log(manobj.name)
console.log(manobj.day());



//this function is called a class base function

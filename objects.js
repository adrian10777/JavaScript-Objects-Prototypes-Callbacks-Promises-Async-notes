//another alternative to conditionals: the switch case or case switch statement
// works much the same as a if elif elif elif else strucutre

let day = new Date().getDay(); // new keyword is related to object instantiation - we are instantiating a new date object here

let literal_day = new Date().toString();

console.log(day);
console.log(literal_day);

// build a little case switch for days of the week
//syntax for case switch/switch case: switch(<parameter>){case <value>: <code> break, case <value>: <code> break;}

switch(day){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 2: 
        console.log('Wednesday');
        break;
    case 2: 
        console.log('Thursday');
        break;
    case 2: 
        console.log('Friday');
        break;
    case 2: 
        console.log('Saturday');
        break;
        
}

switch(literal_day.slice(0,3)){
    case 'sun':
        console.log('Sunday');
        break;
    case 'mon':
        console.log('Monday');
        break;
    case 'tue': 
        console.log('Tuesday');
        break;
    case 'wed': 
        console.log('Wednesday');
        break;
    case 'thu': 
        console.log('Thursday');
        break;
    case 'fri': 
        console.log('Friday');
        break;
    case 'sat': 
        console.log('Saturday');
        break;
}

console.log('\n\n JavaScript Objects!')
/* JS simple obj (and complete obj) are = to pythons dict
no switch case in python (no) python in conditionals
*/

let person = {
    name:'Joao',
    age:'27'
    favorite_number:'27'

}
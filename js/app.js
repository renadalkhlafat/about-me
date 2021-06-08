'use strict';
let score=0;
let userName =prompt('What is your name?');
alert('Welcome '+userName+' in my website ,I am very happy to visit my website :) ,I will ask you 7 questions about me and guess the answer ,then I will show to you your score ');

    //----------------------------------------First question------------------

let myAge=prompt('Am I 30 years old ?').toLowerCase();

if (myAge ==='yes' || myAge ==='y'){
    alert('I am younger than that ,I am 22 years old ');
    }else if(myAge ==='no' || myAge ==='n'){
        // console.log (myAge);
        score++;
        alert('This is true ,good job my friend');
    }else{
        alert('please enter yes/y or no/n ')
    }

    //----------------------------------------second question------------------
let studyField = prompt('Do you think that I have studied anything related to IT ?' ).toLowerCase();

if (studyField ==='yes' ||studyField === 'y'){
// console.log (studyField);
score++;
alert('This is true, I studied CIS at TTU ');
}else if(studyField === 'no' ||studyField === 'n'){
    alert('I studied CIS at TTU');
}else{
    alert('please enter yes/y or no/n ')
}
    //----------------------------------------third question------------------
let livingLocation =prompt('Do you think I live in Amman,Jordan ?').toLowerCase();

if (livingLocation === 'yes' || livingLocation === 'y'){
    alert('I love to live in Amman ,but I am from Tafila,Jordan');
    }else if(livingLocation === 'no'|| livingLocation=== 'n'){
        // console.log (livingLocation);
        score++;
        alert('Yes ,I am from Tafila,Jordan');
    }else{
        alert('please enter yes/y or no/n ')
    }
        //----------------------------------------fourth question------------------
    let skills=prompt('Do you think I can program in C++? ').toLowerCase();

    if (skills === 'yes'|| skills === 'y'){
        // console.log (skills);
        score++;
        alert('This is true, I studied it in the university and I am good in c++ programming ');
        }else if(skills === 'no'||skills=== 'n'){
            alert('I studied it in the university .So I am good in c++ programming ');
        }else{
            alert('please enter yes/y or no/n ');
        }
            //----------------------------------------fifth question------------------
    let experience =prompt('Do you think I have any experience in the field of debates?').toLowerCase();

    if (experience ==='yes'|| experience==='y'){
        // console.log (experience);
        score++;
        alert('Yes, I was a member and president of the debate club at Ruwwad Altanmia');
        }else if(experience === 'no' || experience === 'n'){
            alert('I was a member and president of the debate club at Ruwwad Altanmia ,and I can write a good debate speech ');
        }else{
            alert('please enter yes/y or no/n ')
        }
            //----------------------------------------sixth question------------------
            let favFood=['mansaf','shashbarak','pizza','kofta'];
            let food=prompt('what is my favorite food do you think ?').toLowerCase();
            let counter =0;
            
            while(counter<7){
                for(let i=0;i<favFood.length;i++){
                    if (food == favFood[i].toLowerCase()){
                        alert('Amazing ,this is true I like it and i like all these '+ favFood);
                        score++;
                        break;}
                        
                            favFood=prompt('Try again!');
                        }
                    
                    counter++;
                }
                
        // alert('You have exhausted all attempts ,the correct answers are '+favFood);

            //----------------------------------------seventh question------------------

      let sisters= Number(prompt('Guess how meny sisters does I have ?'));
     
      for(let i=0;i<4;i++){
      if (sisters === 4){
           alert('Excellant !');
           score++;
           break;
       }else if (sisters>4){
               alert('Ohhh this is too high');
           }else if(sisters<4){
              alert('Too low') ;
           }
           sisters=Number(prompt('Try to guess again'));}
           alert('You spent all the attempts,So I have 4 sisters');

        
alert('Nice to meet you '+userName+' and thank you for your time :) ,And your score is : ' + score+' out of 7 ');


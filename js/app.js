'use strict';
let score=0;
let userName =prompt('What is your name?');
alert('Welcome '+userName+' in my website ,I am very happy to visit my website :) ,I will ask you 7 questions about me and guess the answer ,then I will show to you your score ');


let myAge=prompt('Am I 30 years old ?').toLowerCase();

if (myAge ==='yes' || myAge ==='y'){
    alert('I am younger than that ,I am 22 years old ');
    }else if(myAge ==='no' || myAge ==='n'){
        score++;
        alert('This is true ,good job my friend');
    }else{
        alert('please enter yes/y or no/n ')
    }



    let studyField = prompt('Do you think that I have studied anything related to IT ?' ).toLowerCase();

if (studyField ==='yes' ||studyField === 'y'){
score++;
alert('This is true, I studied CIS at TTU ');
}else if(studyField === 'no' ||studyField === 'n'){
    alert('I studied CIS at TTU');
}else{
    alert('please enter yes/y or no/n ');
}


let livingLocation =prompt('Do you think I live in Amman,Jordan ?').toLowerCase();

if (livingLocation === 'yes' || livingLocation === 'y'){
    alert('I love to live in Amman ,but I am from Tafila,Jordan');
    }else if(livingLocation === 'no'|| livingLocation=== 'n'){
        score++;
        alert('Yes ,I am from Tafila,Jordan');
    }else{
        alert('please enter yes/y or no/n ')
    }



    let skills=prompt('Do you think I can program in C++? ').toLowerCase();

    if (skills === 'yes'|| skills === 'y'){
        score++;
        alert('This is true, I studied it in the university and I am good in c++ programming ');
        }else if(skills === 'no'||skills=== 'n'){
            alert('I studied it in the university .So I am good in c++ programming ');
        }else{
            alert('please enter yes/y or no/n ');
        }



        let experience =prompt('Do you think I have any experience in the field of debates?').toLowerCase();

    if (experience ==='yes'|| experience==='y'){
        score++;
        alert('Yes, I was a member and president of the debate club at Ruwwad Altanmia');
        }else if(experience === 'no' || experience === 'n'){
            alert('I was a member and president of the debate club at Ruwwad Altanmia ,and I can write a good debate speech ');
        }else{
            alert('please enter yes/y or no/n ')
        }



        let favFood=['mansaf','shashbarak','pizza','kofta'];
            let food=prompt('what is my favorite food do you think ?').toLowerCase();
           for (let num =0;num<7;num++)
           {
               if(food===favFood[0] || food===favFood[1] || food===favFood [2] || food===favFood[3] ){
                alert('Yes ,My favorite foods are : '+favFood);
                score++;
                break;
               } else{
                food=prompt('Try again');
                   }
            }

            
            
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

           alert('I have 4 sisters and me the middle one');

   alert('Nice to meet you '+userName+' and thank you for your time :) ,And your score is : ' + score+' out of 7 ');

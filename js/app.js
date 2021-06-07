'use strict';
let userName =prompt('What is your name?');
alert('Wlcome '+userName+'in my website ,I am very happy to visit my website :)');

    //----------------------------------------First question------------------

let myAge=prompt('Am I 30 years old ?').toLowerCase();

if (myAge ==='yes' || myAge ==='y'){
    alert('Ia m younger than that ,I am 22 years old ');
    }else if(myAge ==='no' || myAge ==='n'){
        // console.log (myAge);
        alert('This is true ,good job my friend');
    }else{
        alert('please enter yes/y or no/n ')
    }

    //----------------------------------------second question------------------
let studyField = prompt('Do you think that I have studied anything related to IT ?' ).toLowerCase();

if (studyField ==='yes' ||studyField === 'y'){
// console.log (studyField);
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
        alert('Yes ,I am from Tafila,Jordan');
    }else{
        alert('please enter yes/y or no/n ')
    }
        //----------------------------------------fourth question------------------
    let skills=prompt('Do you think I can program in C++? ').toLowerCase();

    if (skills === 'yes'|| skills === 'y'){
        // console.log (skills);
        alert('This is true, I studied it in the university and I am good in c++ programming ');
        }else if(skills === 'no'||skills=== 'n'){
            alert('I studied it in the university .So I am good in c++ programming ');
        }else{
            alert('please enter yes/y or no/n ')
        }
            //----------------------------------------fifth question------------------
    let experience =prompt('Do you think I have any experience in the field of debates?').toLowerCase();

    if (experience ==='yes'|| experience==='y'){
        // console.log (experience);
        alert('Yes, I was a member and president of the debate club at Ruwwad Altanmia');
        }else if(experience === 'no' || experience === 'n'){
            alert('I was a member and president of the debate club at Ruwwad Altanmia ,and I can write a good debate speech ');
        }else{
            alert('please enter yes/y or no/n ')
        }

alert('Nice to meet you '+userName+' and thank you for your time :)');
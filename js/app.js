'use strict';
let score = 0;
let userName = prompt('What is your name?');
alert('Welcome ' + userName + ' in my website ,I am very happy to visit my website :) ,I will ask you 7 questions about me and guess the answer ,then I will show to you your score ');



function questions() {
    let myAge = prompt('Am I 30 years old ?').toLowerCase();
    loopOne: while (myAge !== 'yes' || myAge !== 'y' || myAge !== 'no' || myAge !== 'n') {

        if (myAge === 'yes' || myAge === 'y') {
            alert('I am younger than that ,I am 22 years old ');

        } else if (myAge === 'no' || myAge === 'n') {

            score++;
            alert('This is true ,good job my friend');
            break loopOne;
        } else {
            alert('please enter yes/y or no/n ');
        }
        myAge = prompt('Please Try Again by Entering yes/y or no/n');
    }

    let studyField = prompt('Do you think that I have studied anything related to IT ?').toLowerCase();
    loopTwo: while (studyField !== 'yes' || studyField !== 'y' || studyField !== 'no' || studyField !== 'n') {

        if (studyField === 'yes' || studyField === 'y') {

            score++;
            alert('This is true, I studied CIS at TTU ');
            break loopTwo;

        } else if (studyField === 'no' || studyField === 'n') {
            alert('I studied CIS at TTU');
        } else {
            alert('please enter yes/y or no/n ');
        }
        studyField = prompt('Please Try Again by Entering yes/y or no/n');
    }

    let livingLocation = prompt('Do you think I live in Amman,Jordan ?').toLowerCase();
    loopThree: while (livingLocation !== 'yes' || livingLocation !== 'y' || livingLocation !== 'no' || livingLocation !== 'n') {
        if (livingLocation === 'yes' || livingLocation === 'y') {
            alert('I love to live in Amman ,but I am from Tafila,Jordan');
            break;
        } else if (livingLocation === 'no' || livingLocation === 'n') {
            score++;
            alert('Yes ,I am from Tafila,Jordan');
            break loopThree;
        } else {
            alert('please enter yes/y or no/n ');
        }
        livingLocation = prompt('Please Try Again by Entering yes/y or no/n');
    }


    let skills = prompt('Do you think I can program in C++? ').toLowerCase();
    loopFour: while (skills !== 'yes' || skills !== 'y' || skills !== 'no' || skills !== 'n') {

        if (skills === 'yes' || skills === 'y') {
            score++;
            alert('This is true, I studied it in the university and I am good in c++ programming ');
            break loopFour;
        } else if (skills === 'no' || skills === 'n') {
            alert('I studied it in the university .So I am good in c++ programming ');

        } else {
            alert('please enter yes/y or no/n ');
        }
        skills = prompt('Please Try Again by Entering yes/y or no/n');
    }
    let experience = prompt('Do you think I have any experience in the field of debates?').toLowerCase();
    loopFive: while (experience !== 'yes' || experience !== 'y' || experience !== 'no' || experience !== 'n') {

        if (experience === 'yes' || experience === 'y') {
            score++;
            alert('Yes, I was a member and president of the debate club at Ruwwad Altanmia');
            break loopFive;
        } else if (experience === 'no' || experience === 'n') {
            alert('I was a member and president of the debate club at Ruwwad Altanmia ,and I can write a good debate speech ');

        } else {
            alert('please enter yes/y or no/n ');
        }
        experience = prompt('Please Try Again by Entering yes/y or no/n');
    }


}
questions();

function checkFavFood() {
    let favFood = ['mansaf', 'shashbarak', 'pizza', 'kofta'];
    let food = prompt('what is my favorite food do you think ?').toLowerCase();
    looploop: for (let num = 0; num < 7; num++) {
        for (let i = 0; i < favFood.length; i++) {
            if (food === favFood[num]) {
                alert('Yes ,My favorite foods are : ' + favFood);
                score++;
                break looploop;
            }

        }
        food = prompt('Try again');
    }
}

checkFavFood();

function familyMembers() {
    let sisters = Number(prompt('Guess how meny sisters does I have ?'));

    for (let i = 0; i < 4; i++) {
        if (sisters === 4) {
            alert('Excellant !');
            score++;
            break;
        } else if ((sisters >= 2 && sisters <= 3) || (sisters > 4 && sisters <= 6)) {
            alert('Very close');
        } else {
            alert('Far Far');
        }
        sisters = Number(prompt('Try to guess again'));
    }

    alert('I have 4 sisters and me the middle one');
}
familyMembers();
alert('Nice to meet you ' + userName + ' and thank you for your time :) ,And your score is : ' + score + ' out of 7 ');
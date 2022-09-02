var score=0;
const Data=[{
    question: "What is REACT jS",
    a: 'a function',
    b: 'a framwork ',
    c: 'a module',
    d: 'a JS library',
    correct: 'd',
   },
   {
   question: "What is state",
 
    a: 'concept to refer a data change',
    b: 'emutable data',
    c: 'all the above',
    d: 'nether one',
   correct: 'c',
}, 
    { question: "What are react Event",
        a: 'state management ',
        b: 'a react component',
        c: 'perform the user action',
        d: 'all the above',
    correct: 'c',
    },
    { question: "What is redux",
        a: 'a state mangement tool',
        b: 'work with reducer',
        c: 'global sharing state',
        d: 'all the above',
    correct: 'd',
    },
    { question: "What is the container component",
    a: 'used to separate the logic from the JSX ',
    b: 'used to manage state',
    c: 'used to manipulate DOM',
    d: 'used with props',
    correct: 'a',
 }, 
 {question: "What is context",
        a: 'a leberary',
        b: 'globally availlable props',
        c: 'a component',
        d: 'all the above',
    correct: 'b',
    },    
]

let quest=document.getElementById('question')
let a=document.getElementById('a_text')
let b=document.getElementById('b_text')
let c=document.getElementById('c_text')
let d=document.getElementById('d_text')

var current=0;
//get the quize data
function loadQuize(){
    quest.innerHTML=Data[current].question;
    a.innerHTML=Data[current].a;
    b.innerHTML=Data[current].b;
    c.innerHTML=Data[current].c;
    d.innerHTML=Data[current].d;
}
loadQuize()
var answers=document.querySelectorAll('.answer')
///get the checked button
function correct(){
    //console.log('hzyy')
    var ele=undefined
    answers.forEach((answer)=>{
        if(answer.checked){
            ele = answer.id
        }
    })
    return ele
}
//uncheck all the buton
function unChek(){
   answers.forEach((answer)=>{
       return answer.checked=false;
   })
}
function reSult(){
    if(current===Data.length){
        document.getElementById('container').style.display='none'
        document.getElementById('score_container').style.display='block'
        document.getElementById('score').innerHTML=score + '/'+ Data.length
    }
}

document.getElementById('valdate').addEventListener('click', ()=>{
    const insr=correct()
    var cor=document.getElementById(insr)
    var data=document.getElementById(Data[current].correct)
    if(insr && insr=== Data[current].correct){
        cor.classList.add('correct')
        score++;
    }else{
        cor.classList.add('wrong')
        data.classList.add('correct')
    }
    setTimeout(()=>{
        current++;
        if(current < Data.length){
            cor.classList.remove('correct')
            cor.classList.remove('wrong')
            data.classList.remove('correct')
            loadQuize()
            unChek()
        }else{
            reSult()
        }

    }, 500)
})


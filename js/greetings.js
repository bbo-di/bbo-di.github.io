// button이 필요할 시,
// const loginForm = document.querySelector('#login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

// function loginButtonClick(){
//    const username = loginInput.value; 
//    if(username === ''){
//     alert('plese write your name')
//    }
//    else if(username.length > 15){
//     alert('your name is too long')
//    }
// }

// loginButton.addEventListener('click',loginButtonClick)

// submit 새로고침 현상 문제 해결
const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting')
console.log()
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const logOut = document.querySelector('.logout');

function Logout(){
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem('toDos');
    window.location.reload();
}

logOut.addEventListener('click',Logout)

// input 입력된 user name 구하기
function onLoginSubmit(event){
    event.preventDefault(); //어떤 event 기본 행동이든지 발생되지 않도록 막음.
    const username = loginInput.value;
    // local storage user name 저장
    localStorage.setItem(USERNAME_KEY, username) //setItem === local storage에 정보를 저장 'username' === 저장된 아이템의 이름, username === 변수 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    logOut.classList.remove(HIDDEN_CLASSNAME);
    console.log(logOut);
    paintGreetings(username);
}

function paintGreetings(username){
    // greeting.innerText = 'Hello ' + username; //두번째 규칙
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `${username}`; // 
}


//user가 존재하는지 확인
const saveUsername = localStorage.getItem(USERNAME_KEY) //브라우저가 가지고 있는 작은 DB같은 api / getitem은 Storage객체에 저장된 값 반환
console.log(saveUsername)

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    logOut.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit)//show the form
}
else {
    paintGreetings(saveUsername) //input.value값이 아닌, storage에 저장된 user정보를 불러오는 함수
}
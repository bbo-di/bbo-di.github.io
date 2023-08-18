const clock = document.querySelector('#clock');

// Inteval 매번 일어나야하는 무언가를 의미
// setInteval 각 호출 사이에 고정된 시간 지연으로 함수를 반복적으로 호출하거나 코드 스니펫(코드조각)을 실행
function getClock(){
    const date = new Date();
    const getHours = String(date.getHours()).padStart(2,'0'); //String으로 감싸는 이유는 number로 출력되는 값을 string으로 출력되게 변환하여 한자리 문자를 두자리로 바꾸기 위한 방법.
    const getMinutes = String(date.getMinutes()).padStart(2,'0');
    const getSeconds = String(date.getSeconds()).padStart(2,'0');

    clock.innerText = `${getHours}:${getMinutes}:${getSeconds}`;
}
getClock()
setInterval(getClock, 1000)//두번째 argument는 호출되는 function 간격을 몇 ms할지 작성

// setTimeout(sayHello, 5000) //타이머가 만료되면 함수를 실행하는 타이머를 설정
// padStart === string의 길이를 구해서 앞쪽에 string을 추가
// padEnd === string의 길이를 구해서 뒤쪽에 string을 추가
// 다른방법으로는 clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false });
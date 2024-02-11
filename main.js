document.addEventListener('DOMContentLoaded', function() {
  com_count = randomCount();

  let life_div = document.getElementById('life');
  draw_life(life, life_div);
});

let btn_ok = document.getElementById('btn_count');
let btn_re = document.getElementById('btn_re');

btn_ok.addEventListener('click', function() {
  let value = document.getElementById('count').value;
  let life_div = document.getElementById('life');
  let result_div = document.getElementById('result');
  let text = "";
  if(life === 0){
    alert('목숨이 없네? 니가 졌어 리셋버튼이나 눌러');
    return;
  }
  if(value == "" || value == null || value == undefined){
    alert('답 부터 입력하시지');
    return;
  }
  if(value > 100){
    alert('1 부터 100 까지의 숫자란다...');
    return;
  }
  if(value < 1){
    alert('1 부터 100 까지의 숫자란다...');
    return;
  }
  let boolean = true;
  for(let i = 0; i < count_arr.length; i++){
    if(Number(count_arr[i]) === Number(value)){
      boolean = false;
    }
  }

  if(!boolean){
    alert('아까 쓴걸 또 쓰고있니?');
    return;
  }

  if(Number(value) < Number(com_count)){
    life = Number(life) - 1;
    if(life === 0){
      alert('목숨이 없네? 니가 졌어 리셋버튼이나 눌러');
      text = "님 졌음.....ㅜ";
    }else{
      text = "그거보다 UP이야 " + life + "번 남았다.";
      count_arr.push(value);
    }
    
    draw_life(life, life_div);
    result_div.innerText = text;
  }else if(Number(value) > Number(com_count)){
    life = Number(life) - 1;
    if(life === 0){
      alert('목숨이 없네? 니가 졌어 리셋버튼이나 눌러');
      text = "님 졌음.....ㅜ";
    }else{
      text = "그거보다 UP이야 " + life + "번 남았다.";
      count_arr.push(value);
    }
    draw_life(life, life_div);
    result_div.innerText = text;
  }else if(Number(value) === Number(com_count)){
    text = "정답이야!!! 니가 이겼어 다시 시작하려면 리셋을 클릭하렴";
    result_div.innerText = text;
  }
});

btn_re.addEventListener('click', function() {
  alert('게임을 다시 시작하지');

  com_count = randomCount();
  count_arr = [];
  let life_div = document.getElementById('life');
  life = 5;
  draw_life(life, life_div);

  let result_div = document.getElementById('result');
  result_div.innerText = "";
  document.getElementById('count').value = "";
});

function randomCount(){
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

function draw_life(life, target){
  let tempHTML = "";
  for(let i = 0; i < life; i++){
    tempHTML = tempHTML + `<li class="life-li"></li>`;
  }
  target.innerHTML = tempHTML;
}
let rollButton = document.getElementById('rollButton');
let deposit = document.querySelector('.title');
let rollBox = document.getElementById('rollBox');
let creditShow = document.querySelector('.credit');
let payouts = document.querySelector('.payouts');
let lastw = document.querySelector('.lastw');
let lowbet = document.querySelector('.bet50');
let midbet = document.querySelector('.bet100');
let topbet = document.querySelector('.bet200');
let betfo = document.querySelector('.currentbet');
let bonusText = document.querySelector('.bonusText');
let monke = document.querySelector('.monke');
let honke = document.querySelector('.honke');
let sc = document.getElementById('scoutnoise');
let ez = document.getElementById('ez');
let bruh = document.getElementById('bruh');
let coin = document.getElementById('coin');
let loss = document.getElementById('loss');
let boot = document.getElementById('boot');
let chusic = document.getElementById('chusic');
let vslide = document.getElementById('volume');
let leedle = document.getElementById('leedle');
let bonus = false;
let bp;
let bgr;
let brl;
let credit = 500;
let bet = 50;
let bm = 1;
let ctc = 0;
let b;

chusic.volume = vslide.value/100.0;
function bgm(){

  chusic.play();
}

function bonusGame(){

  if(b < brl){
    boot.play();

    rollBox.innerHTML = '';

    let sl = brl - b;
    bonusText.innerHTML = sl + '/' + brl + ' Bonus Spins Left!';

    let st = document.createElement('table');
    let row;
    let cc;
    for(let i = 0; i < 20; i++){
      cc = i % 5;
      if(cc == 0){
        row = document.createElement('tr');
        st.append(row);
        rollBox.append(st);
      }

      let ri = roll(cc);
      let symbol = document.createElement('img');
      symbol.setAttribute('src', symbols[ri].sprite);
      symbol.classList.add('chungSquare');
      if(ri == 5){
        symbol.addEventListener('click', ()=>{


        sc.play();

        });
      }
      if(cc == 0){
        symbol.classList.add('col1');
      }else if(cc == 1){
        symbol.classList.add('col2');
      }else if(cc == 2){
        symbol.classList.add('col3');
      }else if(cc == 3){
        symbol.classList.add('col4');
      }else if(cc == 4){
        symbol.classList.add('col5');
      }
      symbol.classList.add(symbols[ri].name);

      let cell = document.createElement('td');
      cell.append(symbol);
      row.append(cell);
    }

    getPay();
    creditShow.innerHTML = 'credit: ' + credit;
    b = b + 1;
  }else{
    clearInterval(bgr);
    bonusText.innerHTML = '';
    bonus = false;
  }
}

vslide.addEventListener('change', ()=>{
  chusic.volume = (vslide.value/100.0)*0.25;
  sc.volume = vslide.value/100.0;
  ez.volume = vslide.value/100.0;
  bruh.volume = vslide.value/100.0;
  coin.volume = vslide.value/100.0;
  loss.volume = vslide.value/100.0;
  boot.volume = vslide.value/100.0;
});

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

//change bets
lowbet.addEventListener('click', ()=>{
  bet = 50;
  bm = 1;
  betfo.innerHTML = 'Current Bet: <span class="betno">50</span>';
});

midbet.addEventListener('click', ()=>{
  bet = 100;
  bm = 2;
  betfo.innerHTML = 'Current Bet: <span class="betno">100</span>';
});

topbet.addEventListener('click', ()=>{
  bet = 200;
  bm = 4;
  betfo.innerHTML = 'Current Bet: <span class="betno">200</span>';
});

rollButton.addEventListener('click', bgm);
//roll da table
rollButton.addEventListener('click', ()=>{
    if(credit >= bet){
    boot.play();
    rollBox.innerHTML = '';
    credit = credit - bet;
    let st = document.createElement('table');
    let row;
    let cc;
    for(let i = 0; i < 20; i++){
      cc = i % 5;
      if(cc == 0){
        row = document.createElement('tr');
        st.append(row);
        rollBox.append(st);
      }

      let ri = roll(cc);
      let symbol = document.createElement('img');
      symbol.setAttribute('src', symbols[ri].sprite);
      symbol.classList.add('chungSquare');
      if(ri == 5){
        symbol.addEventListener('click', ()=>{


        sc.play();

        });
      }
      if(cc == 0){
        symbol.classList.add('col1');
      }else if(cc == 1){
        symbol.classList.add('col2');
      }else if(cc == 2){
        symbol.classList.add('col3');
      }else if(cc == 3){
        symbol.classList.add('col4');
      }else if(cc == 4){
        symbol.classList.add('col5');
      }
      symbol.classList.add(symbols[ri].name);

      let cell = document.createElement('td');
      cell.append(symbol);
      row.append(cell);
    }

    getPay();
    creditShow.innerHTML = 'credit: ' + credit;
    if(bonus){

      leedle.play();
      b = 0;
      bp = 0;

      brl = 10;
      bgr = setInterval(bonusGame, 1000);

    }
  }else{
    loss.play();
    alert("Insufficient Funds, we don't speak broke");
  }
});


//gimme money cuz u took all mine
deposit.addEventListener('click', ()=>{
  credit = credit + 500;
  creditShow.innerHTML = 'credit: ' + credit;
  ctc = ctc + 1;
  if(ctc > 5){
    alert('greedy today are we?( ͡° ͜ʖ ͡°)');
  }
});

//oh i won?
function getPay(){
  let c1 = document.getElementsByClassName('col1');
  let c2 = document.getElementsByClassName('col2');
  let c3 = document.getElementsByClassName('col3');
  let c4 = document.getElementsByClassName('col4');
  let c5 = document.getElementsByClassName('col5');
  let one = [];
  let two = [];
  let three = [];
  let four = [];
  let five = [];
  let totalPayout = 0;
  let lineLength = 0;
  let amount = 0;
  let cpay = 0;
  let used = [];
  let payfo = '';


  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 12; j++){
      if(c1[i].classList.contains(symbols[j].name)){
        one.push(symbols[j].name);
      }
    }
  }

  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 12; j++){
      if(c2[i].classList.contains(symbols[j].name)){
        two.push(symbols[j].name);
      }
    }
  }

  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 12; j++){
      if(c3[i].classList.contains(symbols[j].name)){
        three.push(symbols[j].name);
      }
    }
  }

  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 12; j++){
      if(c4[i].classList.contains(symbols[j].name)){
        four.push(symbols[j].name);
      }
    }
  }

  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 12; j++){
      if(c5[i].classList.contains(symbols[j].name)){
        five.push(symbols[j].name);
      }
    }
  }

  for(let i = 0; i < 4; i++){
    let wasUsed = false;
    if(used.includes(one[i])){
      wasUsed = true;
    }
    if(!wasUsed){
    lineLength = 1;
    amount = 1;
    cpay = 0
    if(two.includes(one[i]) || two.includes('wild')){
      lineLength = lineLength + 1;
      if(three.includes(one[i]) || three.includes('wild')){
        lineLength = lineLength + 1;
        if(four.includes(one[i]) || four.includes('wild')){
          lineLength = lineLength + 1;
          if(five.includes(one[i]) || five.includes('wild')){
            lineLength = lineLength + 1;
          }
        }
      }
    }

    for(let j = 0; j < 4 && lineLength >= 2; j++){
      if(two[j] == one[i] || two[j] == 'wild'){
        amount = amount + 1;
      }
    }
    for(let j = 0; j < 4 && lineLength >= 3; j++){
      if(three[j] == one[i] || three[j] == 'wild'){
        amount = amount + 1;
      }
    }
    for(let j = 0; j < 4 && lineLength >= 4; j++){
      if(four[j] == one[i] || four[j] == 'wild'){
        amount = amount + 1;
      }
    }
    for(let j = 0; j < 4 && lineLength >= 5; j++){
      if(five[j] == one[i] || five[j] == 'wild'){
        amount = amount + 1;
      }
    }
    let csc = 0;
    for(let j = 0; j < 11; j++){
      if(one[i] == symbols[j].name){
        csc = j;
      }

  }
    if(lineLength >= 3){
      cpay = amount * symbols[csc].pay;
      cpay = Math.floor(cpay * (lineLength / 3));
      cpay = cpay * bm;
    }
    totalPayout = totalPayout + cpay;
    used.push(one[i]);
    if(cpay != 0){
      payfo = payfo + symbols[csc].name + 's paid ' + cpay+ '<br>' ;
    }
    if(bonus){
      if(symbols[csc].name == 'bonus' && cpay != 0){
        leedle.play();
        brl = brl + 3;
      }
    }
    if(symbols[csc].name == 'bonus' && cpay != 0){
      bonus = true;
    }


  }
  }
  payouts.innerHTML = payfo;
  credit = credit + totalPayout;
  let dub = 0;
  if(totalPayout < bet){
    dub = 0;
    bruh.play();
  }else if(totalPayout > (bet * 5)){
    dub = 1;
    ez.play();
  }else{
    dub = 2;
    coin.play();
  }
  lastw.innerHTML = 'Round Pays: <span class="betno">' + totalPayout + '</span>';
  if(dub == 1){
    monke.style.display = 'block';
    setTimeout(function(){monke.style.display = 'none';}, 1000);

  }else if(dub == 2){
    honke.style.display = 'block';
    setTimeout(function(){honke.style.display = 'none';}, 1000);
  }

  if(bonus){
    bp = bp + totalPayout;
    lastw.innerHTML = 'Bonus Pays: <span class="betno">' + bp + '</span>';
  }

}

//odds for rolling
function roll(cc){
  let rolls = 0;
  if(cc == 0 || cc == 4){
    rolls = Math.floor(Math.random() * 102);
  }else{
    rolls = Math.floor(Math.random() * 107);
  }
  if(cc != 0 && cc != 4 && bonus){
    rolls = Math.floor(Math.random() * 110);
  }

  let rollValue = 0;
  if(rolls >= 0 && rolls <= 12){
    rollValue = 0;
  }else if(rolls >= 13 && rolls <= 24){
    rollValue = 1;
  }else if(rolls >= 25 && rolls <= 36){
    rollValue = 2;
  }else if(rolls >= 37 && rolls <= 48){
    rollValue = 3;
  }else if(rolls >= 49 && rolls <= 60){
    rollValue = 4;
  }else if(rolls >= 61 && rolls <= 72){
    rollValue = 5;
  }else if(rolls >= 73 && rolls <= 84){
    rollValue = 6;
  }else if(rolls >= 85 && rolls <= 91){
    rollValue = 7;
  }else if(rolls >= 92 && rolls <= 96){
    rollValue = 8;
  }else if(rolls >= 97 && rolls <= 100){
    rollValue = 9;
  }else if(rolls == 101){
    rollValue = 10;
  }else{
    rollValue = 11;
  }
  return rollValue;
}

//json
let symbols = [
  {
    "name": "ten",
    "sprite": "10.png",
    "rank": 10,
    "pay": 2
  },
  {
    "name": "jack",
    "sprite": "J.png",
    "rank": 9,
    "pay": 3
  },
  {
    "name": "queen",
    "sprite": "Q.png",
    "rank": 8,
    "pay": 4
  },
  {
    "name": "king",
    "sprite": "K.png",
    "rank": 7,
    "pay": 5
  },
  {
    "name": "ace",
    "sprite": "A.png",
    "rank": 6,
    "pay": 6
  },
  {
    "name": "scout",
    "sprite": "Bottom.png",
    "rank": 5,
    "pay": 10
  },
  {
    "name": "minion",
    "sprite": "NextWorst.png",
    "rank": 4,
    "pay": 20
  },
  {
    "name": "pods",
    "sprite": "mid.png",
    "rank": 3,
    "pay": 40
  },
  {
    "name": "glue",
    "sprite": "NextBest.png",
    "rank": 2,
    "pay": 80
  },
  {
    "name": "chungus",
    "sprite": "Top.png",
    "rank": 1,
    "pay": 150
  },
  {
    "name": "bonus",
    "sprite": "Bonus.png",
    "rank": 0,
    "pay": 100
  },
  {
    "name": "wild",
    "sprite": "Wild.png",
    "rank": -1,
    "pay": 100
  }

]

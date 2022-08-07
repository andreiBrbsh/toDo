'use strict';

// const inp = document.querySelector('input');
// inp.addEventListener('keypress', function(ev){
//       if(ev.key === 'a'){
//             alert('hello');
//       }
// })


// Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось. 

// const inp = document.querySelector('input');
// const par = document.querySelector('p');

// inp.addEventListener('keypress', function(event){
//       if(event.key === 'Enter' && inp.value != ''){
//             par.innerHTML += inp.value + '<br>';
//             inp.value = '';
//       }
// })

// const elem = document.querySelector('p');
// elem.addEventListener('click', function(event){
//       if(event.shiftKey){
//             elem.classList.toggle('red');
//       }
// })

// const list = document.querySelector('#test');
// list.addEventListener('click', function(event){
//       if(event.shiftKey){
//             event.target.innerHTML += '?';
//       }else {
//             event.target.innerHTML += '!';
//       }
// })

// Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило. 

// const link = document.querySelector('a');
// link.addEventListener('click', function(event){
//       if(event.shiftKey){
//             event.preventDefault();
//             link.innerHTML += link.href;
//       }
// })

// Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел. 

// const inp = document.querySelectorAll('input');
// const link = document.querySelector('a');
// const res = document.querySelector('p');

// link.addEventListener('click', function(ev){
//       if(ev.shiftKey){
//             ev.preventDefault();
//             let sum = 0;
//             for(let item of inp){
//                   sum += +item.value;
//             };
//             res.innerHTML += sum;
//       }
// })

// const red = document.querySelector('.red');
// const blue = document.querySelector('.blue');
// const green = document.querySelector('.green');

// red.addEventListener('dblclick', function(){
//       console.log('red');
// })
// blue.addEventListener('dblclick', function(){
//       console.log('blue');
// })
// green.addEventListener('dblclick', function(){
//       console.log('green');
// })

// const div = document.querySelector('div');
// div.addEventListener('click', function(e){
//       if(e.target.tagName === 'DIV'){
//             console.log('Click on div');
//       }else if(e.target.tagName === 'P'){
//             console.log('Click on paragraph');
//       }
// })

// Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие. 

// const myDiv = document.querySelector('div');
// myDiv.addEventListener('click', function(ev){
//       if(ev.target.matches('div')){
//             console.log('DIV!!');
//       }else if(ev.target.matches('ul')){
//             console.log('UL!!');
//             ev.target.outerHTML += '<li>New</li>';
//       }else if(ev.target.matches('li')){
//             console.log('LI!!!');
//             ev.target.innerHTML += '!';
//       }
// })

// const first = document.querySelector('#first');
// const second = document.querySelector('#second');
// const third = document.querySelector('#third');

// first.addEventListener('click', function(event){
//       console.log('First!');
// });
// second.addEventListener('click', function(event){
//       console.log('Second!');
//       // event.stopPropagation();
//       event.stopImmediatePropagation();
// });
// second.addEventListener('click', function(event){
//       console.log('SSecond!');
// })
// third.addEventListener('click', function(event){
//       console.log('Third!');
// });

// const but = document.querySelector('#but');
// const dad = document.querySelector('#parent');
// const textBlock = document.querySelector('#text');

// but.addEventListener('click', function(event){
//       textBlock.classList.add('active');
//       event.stopPropagation();
// });
// dad.addEventListener('click', function(event){
//       textBlock.classList.remove('active');
// })

// const red = document.querySelector('#red');
// const blue = document.querySelector('#blue');
// const green = document.querySelector('#green');

// // red.addEventListener('click', function(){
// //       console.log('RED - 1');
// // })
// // blue.addEventListener('click', function(){
// //       console.log('BLUE - 1');
// // }, true)
// // green.addEventListener('click', function(){
// //       console.log('GREEN - 1');
// // })
// red.addEventListener('click', function() {
// 	console.log('RED - погружение');
// }, true);
// // red.addEventListener('click', function() {
// // 	console.log('зеленый - всплытие');
// // }, false);

// blue.addEventListener('click', function() {
// 	console.log('BLUE - погружение');
// }, true);
// // blue.addEventListener('click', function() {
// // 	console.log('голубой - всплытие');
// // }, false);

// green.addEventListener('click', function() {
// 	console.log('GREEN - погружение');
// }, true);
// // green.addEventListener('click', function() {
// // 	console.log('красный- всплытие');
// // }, false);

// const list = document.querySelector('#list');
// const but = document.querySelector('#but');
// const items = list.querySelectorAll('li');
// for(let item of items){
//       item.addEventListener('click', addSymbol);
// }

// but.addEventListener('click', function(){
//       let newItem = document.createElement('li');
//       newItem.innerHTML = 'New Item';
//       newItem.addEventListener('click', addSymbol);
//       list.appendChild(newItem);
// })

// function addSymbol(){
//       this.innerHTML += '!';
// }

// list.addEventListener('click', function(event){
//       event.target.innerHTML += '!';
// })
// but.addEventListener('click', function(){
//       let newItem = document.createElement('li');
//       newItem.innerHTML = 'New item';
//       list.appendChild(newItem);
// })
const list = document.querySelectorAll('ul');
for(let item of list){
      item.addEventListener('click', function(event){
            let it = event.target.closest('li');
            // if(it){
            //       it.innerHTML += '!';
            // }
            it.innerHTML += '!';
      })
}
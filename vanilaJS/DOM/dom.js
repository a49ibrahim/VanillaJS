// // // //Examine the Document Object //

// // // //console.dir(document)
// // // //console.log(document.domain)
// // // //console.log(document.URL)
// // // //console.log(document.title)
// // // //document.title = 123;
// // // //console.log(document.doctype)
// // // //console.log(document.head)
// // // //console.log(document.body)
// // // //console.log(document.all)
// // // //console.log(document.all[10])
// // // //document.all[10].textContent = 'Ali'
// // // //console.log(document.forms)
// // // //console.log(document.links)

// // // //GETELEMENTBYID
// // // //console.log(document.getElementById('header-title'));
// // // //var headerTitle = document.getElementById('header-title')
// // // //var header = document.getElementById('main-header')
// // // //header.style.borderBottom = 'solid 3px #000'

// // // // get elems by class name
// // // //var items = document.getElementsByClassName('list-group-item');
// // // //console.log(items);
// // // //console.log(items[1]);
// // // //items[1].textContent = "Hello 2";
// // // //items[1].style.fontWeight = 'bold';
// // // //items[1].style.backgroundColor = 'yellow';


// // // //for(var i=0; i< items.length; i++){
// // //   //  items[i].style.backgroundColor = '#f4f4f4'
// // // //}

// // // //get elements by tag name
// // // //var li = document.getElementsByTagName('li');
// // // //console.log(li);
// // // //console.log(li[1]);
// // // //li[1].textContent = "Hello 2";
// // // //li[1].style.fontWeight = 'bold';
// // // //items[1].style.backgroundColor = 'yellow';


// // // //for(var i=0; i< li.length; i++){
// // //   //  li[i].style.backgroundColor = '#f4f4f4'
// // // //}

// // // //query selector

// // // //var header = document.querySelector('#main-header')
// // // //header.style.borderBottom = 'solid 4px #ccc'

// // // //var input = document.querySelector('input')
// // // //input.value = 'Hello world'

// // // //var submit = document.querySelector('input[type="submit"]')
// // // //submit.value='Send'

// // // //var item = document.querySelector('.list-group-item');
// // // //item.style.color = 'red';

// // // //var lastItem = document.querySelector('.list-group-item:last-child');
// // // //lastItem.style.color = 'blue'

// // // //var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // // //secondItem.style.color = 'coral'

// // // //query selector all
// // // var titles = document.querySelectorAll('.title')
// // // console.log(titles)
// // // titles[0].textContent = "BDB"

// // // var odd = document.querySelectorAll('li:nth-child(odd)');

// // // var even = document.querySelectorAll('li:nth-child(even)');


// // // for(var i=0; i< odd.length; i++){
// // //     odd[i].style.backgroundColor = 'red';
// // //     even[i].style.backgroundColor = 'blue';
// // // }

// // // Traversing the DOM
// // var itemList = document.querySelector('#items')
// // //parentNode
// // // console.log(itemList.parentNode);
// // // itemList.parentNode.style.backgroundColor = '#f4f4f4'
// // // console.log(itemList.parentNode.parentNode);

// // // //parentElement
// // // console.log(itemList.parentElement);
// // // itemList.parentElement.style.backgroundColor = '#f4f4f4'
// // // console.log(itemList.parentElement.parentElement.parentElement);

// // //child nodes
// // //console.log(itemList.childNodes)

// // // console.log(itemList.children)
// // // console.log(itemList.children[1])
// // // itemList.children[1].style.backgroundColor = 'yellow'

// // // console.log(itemList.firstChild)
// // // //first element child
// // // console.log(itemList.firstElementChild)
// // // itemList.firstElementChild.textContent = 'BDB'

// // // //next sibling
// // // console.log(itemList.nextSibling);
// // // //nextElementSibling
// // // console.log(itemList.nextElementSibling);

// // // //previous sibling
// // // console.log(itemList.previousSibling)
// // // //previous element sibling
// // // console.log(itemList.previousElementSibling)
// // // itemList.previousElementSibling.style.color = 'green'

// // //create element
// // //create a div
// // var newDiv  = document.createElement('div');
// // newDiv.className = 'BDB';
// // newDiv.id = 'Hello BDB'
// // newDiv.setAttribute('title', 'BDB saturday');
// // //create a text node
// // var newDivText = document.createTextNode('goodmorning BDB');
// // newDiv.appendChild(newDivText);

// // var container = document.querySelector('header .container');
// // var h1 = document.querySelector('header h1');
// // console.log(newDiv)
// // newDiv.style.fontSize = '30px';
// // container.insertBefore(newDiv, h1)

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = 'red'
//     //console.log(e)

//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+e.target.id+'</h3>';

//     // console.log(e.type);
//     // console.log(e.clientX + 'x')
//     // console.log(e.clientY + 'y')

//     // console.log(e.offsetX + 'x')
//     // console.log(e.offsetY + 'y')

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);




// }

var button = document.getElementById('button');
var box = document.getElementById('box')

//button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);

// box.addEventListener('mouseenter', runEvent);
// //box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// //box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form')

itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);

form.addEventListener('submit', runEvent)
function runEvent(e){
    console.log('Event TYPE ' + e.type)
    e.preventDefault()
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

    // console.log(e.target.value);
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>'
    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}
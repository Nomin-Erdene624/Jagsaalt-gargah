const input=document.getElementsByTagName("input")[0];
const ol=document.getElementsByTagName("ol")[0];
const addBtn=document.getElementsByTagName("button")[0];
addBtn.addEventListener("click",()=>{
	//alert("click");
	if(input.value==""){
		alert("Cannot be empty");
	}else{
		//li
	let li = document.createElement("li");
	li.innerText=input.value;
	console.log(li);
	ol.append(li);
	// delete button
	let checkBtn=document.createElement('button');
	checkBtn.innerHTML='<i class="bi bi-pencil-square"></i>';
	li.append(checkBtn);
	let delBtn= document.createElement('button');
	delBtn.innerHTML ='<i class="bi bi-trash"></i> ';
	li.append(delBtn);
	delBtn.className="delete";
	input.value="";
	}
	saveData();
});
ol.addEventListener('click',(e)=>{
		console.log(e.target);
		//className-> tag-iin class-iin ner
		let liEl=(e.target).parentElement.parentElement
		if(e.target.className=='bi bi-trash'){
			//.remove() ->tuhain tag-iig ustgana
			liEl.remove();
		}else if(e.target.className=='bi bi-pencil-square'){
			liEl.classList.toggle('checked');
		}
		saveData();
});

function saveData(){
	localStorage.setItem('todo',ol.innerHTML);
}
function getData(){
	let getTodo=localStorage.getItem('todo');
	ol.innerHTML=getTodo;
}
getData();
// localStorage->setItem()->hadgalah,getItem()->avah
localStorage.setItem('name','Nomin-Erdene');
let get=localStorage.getItem('name');
console.log(get);
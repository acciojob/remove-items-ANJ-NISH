//your JS code here. If required.
let btn=document.querySelector('input');

btn.addEventListener('click',()=>{
	let drp=document.getElementById('colorSelect');
	let color=drp.value;

let childarr=drp.children;

for(let i=0;i<childarr.length;i++)
	{
		let ele=childarr[i];
		if(childarr[i].value===color)
		{
			childarr[i].remove();
			break;
		}
	}
})
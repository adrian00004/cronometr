let comentario =[];
let fechaInCr =[];
let o =[];
let y="";
let zz=1000;
function11();
function function1(){//function añadir 
comentario.push(comentCrono.value);
fechaInCr.push(0);
o.push(0);
function4(function2(comentCrono.value,comentario.length-1));
function10();
function13();
}
function function2(comentario,indice){//function crear elemento crono.
return `<tr><td class="timePanel0" id="spantiemp${indice}">00d:00h:00m:00s</td>
<td class="buttonPanel1"><button class="buttonPanee0" id ="PausePlay${indice}" onclick ="function7(${indice})"><img id="imgPoP${indice}" class="imagen" src="play.png"></button></td>
<td class="buttonPanel2"><button class="buttonPanee" id ="Reset${indice}" onclick ="function8(${indice})"><img id="imgRes${indice}" class="imagen" src="reset.png"></button></td>
<td class="buttonPanel3"><button class="buttonPanee" id ="del${indice}" onclick ="function9(${indice})"><img id="imgDel${indice}" class="imagen" src="del.png"></button></td>
<td class="comentarioPanel"><div title="${comentario}">${comentario}</div></td></tr>`;
}
function function3(x){//paso de milisegundos a formato dd:hh:mm:ss
var dias=Math.floor(x/8.64e+7)
var horas=Math.floor((x%8.64e+7)/3600000)
var min=Math.floor(((x%8.64e+7)%3600000)/60000)
var segundos=Math.floor((((x%8.64e+7)%3600000)%60000)/1000)
var d="",h="",m="",s="";
if(dias.toString(10).length<2){d="0";}
if(horas.toString(10).length<2){h="0";}
if(min.toString(10).length<2){m="0";}
if(segundos.toString(10).length<2){s="0";}
return  `${d + dias}d:${h + horas}h:${m + min}m:${s + segundos}s`;
}
function function4(a){//
  y=a+y;
document.getElementById("bloqueAllCrono").innerHTML=y;

}
function function5(a){//play
fechaInCr[a] = new Date() - fechaInCr[a];
function10();
function12(a,2,"pause.png");
console.log("function5");
}
function function6(a){//pause
fechaInCr[a] = new Date()-fechaInCr[a];
function10();
function12(a,0,"play.png");
console.log("function6");
}
function function7(a){//play o pause.
if(o[a]==0){o[a]=1;function5(a);}	
else{o[a]=0;function6(a);}
}
function function8(a){//Reset
fechaInCr[a]= 0;
o[a]=0;
function10();
function12(a,0,"play.png");
document.getElementById(`spantiemp${a}`).innerHTML=function3(0);
}
function function9(a){//Eliminar.
o.splice(a,1);
comentario.splice(a,1);
fechaInCr.splice(a,1);
function10();
y="";
for(z=0;z<comentario.length;z++){
y = function2(comentario[z],z)+y;
}
document.getElementById("bloqueAllCrono").innerHTML=y;
function13();

}
function function10(){//function actualizar cookies.
let z=0;
for (;z<comentario.length;z++){
document.cookie=`comentCrono${z}=${comentario[z]};expires = 01 Jan 9999 00:00:00 UTC;path=/`;
document.cookie=`fechaInCr${z}=${fechaInCr[z]};expires = 01 Jan 9999 00:00:00 UTC;path=/`;
document.cookie=`PauseOPlay${z}=${o[z]};expires = 01 Jan 9999 00:00:00 UTC;path=/`;
}
for (;z<zz;z++){
document.cookie=`comentCrono${z}=${comentario[z]};expires = 01 Jan 1970 00:00:00 UTC;path=/`;
document.cookie=`fechaInCr${z}=${fechaInCr[z]};expires = 01 Jan 1970 00:00:00 UTC;path=/`;
document.cookie=`PauseOPlay${z}=${o[z]};expires = 01 Jan 1970 00:00:00 UTC;path=/`;
}
zz=comentario.length + 1;

}
function function11(){//function getcookies.
let xx=document.cookie;

xx= xx.split(";");
for(t=0,aa=[],cc=[];t<xx.length;t++){
	if(xx[t].includes("fechaInCr")){aa.push(xx[t].trim());}
	else if(xx[t].includes("PauseOPlay")){cc.push(xx[t].trim());}
	else if(xx[t].includes("comentCrono")){var cv=xx[t].split("=");comentario.push(cv[1]);}
	if(t==xx.length-1){//Solo se ejecuta en el ultimo ciclo del for.
		console.log("xx.length=t");
		aa.forEach(function(item,index,arr){
	      var v=item.split("=");
	      fechaInCr[parseInt(item.slice(9,(item.search("="))))]=parseInt(v[1]);
        })
		
		cc.forEach(function(item,index,arr){
	      var v=item.split("=");
	      o[parseInt(item.slice(10,(item.search("="))))]=parseInt(v[1]);
        })
        
	}
}
for(z=0;z<comentario.length;z++){//crea elementos de la tabla como la funccion 2,pero para todos los comentarios.
	y = function2(comentario[z],z)+y;
}
document.getElementById("bloqueAllCrono").innerHTML=y;
function13();
}
function function12(a,b,c){//Cambiar la clase de los elementos segun esten en play o en pause.
	document.getElementById(`spantiemp${a}`).className = `timePanel${b}`;
	document.getElementById(`PausePlay${a}`).className = `buttonPanee${b}`;
	document.getElementById(`imgPoP${a}`).src =`${c}`;
}
function function13(){//Actualizar clase elementos segun esten en play o pause.
  for(z=0;z<o.length;z++){
    if (o[z]==0){
	 function12(z,0,"play.png");
    }
    else{
	 function12(z,2,"pause.png");
    }
  }
}
setInterval(function(){//funcion para alarma.
  for(z=0;z<fechaInCr.length;z++){
	if(fechaInCr[z]!=0 && o[z]==1){
     document.getElementById(`spantiemp${z}`).innerHTML=function3(new Date()-fechaInCr[z]);
    }else{document.getElementById(`spantiemp${z}`).innerHTML=function3(fechaInCr[z]);}
  }
}, 500);

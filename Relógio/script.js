const Horas= document.querySelector("#Horas");
const Minutos= document.querySelector("#Minutos");
const Segundos= document.querySelector("#Segundos");

setInterval(function(){
    data= new Date();
	Hor = data.getHours();
	Min = data.getMinutes();
	Seg = data.getSeconds();
    
	if(Hor<10){
		Hor = "0" + Hor;
	}
	if(Seg<10){
		Seg = "0"+ Seg;
	}
	if(Min<10){
		Min = "0"+ Min;
	}
	
	
	Horas.textContent = Hor;
	Minutos.textContent = Min;
	Segundos.textContent = Seg;

	
	
})


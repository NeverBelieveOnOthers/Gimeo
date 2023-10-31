//Credits : API de funções criada por:Gessandre. 9/1/23
//SVG_ICONS///
var full_screen_icon = `<svg class="svg_icon"  xmlns="http://www.w3.org/2000/svg" fill="none" stroke="red" stroke-linecap="round" stroke-width="2.5" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>	`
var loading_icon =`<svg class="svg_icon_loading"  version="1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
<style>
@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes fillunfill{
0%{stroke-dashoffset:32.3}50%{stroke-dashoffset:0}to{stroke-dashoffset:-31.9}
}

@keyframes rot{0%{transform:rotate(0deg)}to{transform:rotate(-360deg)}}

@keyframes colors{0%,to{stroke:red}

</style>
<g style="animation-duration:1568.63ms;
		 animation-iteration-count:infinite;
		 animation-name:rotate;
		 animation-timing-function:linear;transform-origin:50% 50%;
		 width:16px;height:16px">
		 <path fill="none" d="M8 1.125A6.875 6.875 0 1 1 1.125 8" stroke-width="2.25" stroke-linecap="round" style="animation-duration:1333ms,5332ms,5332ms;
		 animation-fill-mode:forwards;
		 animation-iteration-count:infinite,infinite,infinite;
		 animation-name:fillunfill,rot,colors;
		 animation-play-state:running,running,running;
		 animation-timing-function:cubic-bezier(.4,0,.2,1),steps(4),linear;
		 transform-origin:50% 50%" stroke-dasharray="32.4" stroke-dashoffset="32.4"/>
		 
		 </g>
</svg>`
var loading_icon_foreground = `<svg class="svg_icon" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#000">
    <g fill="none" fill-rule="evenodd" stroke-width="2">
        <circle cx="22" cy="22" r="1">
            <animate attributeName="r"
                begin="0s" dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite" />
            <animate attributeName="stroke-opacity"
                begin="0s" dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="1">
            <animate attributeName="r"
                begin="-0.9s" dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite" />
            <animate attributeName="stroke-opacity"
                begin="-0.9s" dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite" />
        </circle>
    </g>
</svg>`;

var pause_icon=`<svg class="svg_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M4.5 3L6 3V13H4.5V3ZM11.5 3V13H10V3L11.5 3Z" fill="red"/>
</svg>`;
var reload_green_icon=`<svg class="svg_icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.56253 2.51577C3.46348 3.4501 2 5.55414 2 7.99999C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 7.99999C14 5.32519 12.2497 3.05919 9.83199 2.28482L9.52968 3.23832C11.5429 3.88454 13 5.7721 13 7.99999C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 7.99999C3 6.31104 3.83742 4.81767 5.11969 3.91245L5.56253 2.51577Z" fill="#C5C5C5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H2V2H5.5L6 2.5V6H5V3Z" fill="#C5C5C5"/>
</svg>
`;
var resume_icon = `<svg class="svg_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 2H4V2.24001L4 14L2.5 14L2.5 2ZM6 2.18094V14L15 8.06218L6 2.18094ZM12.3148 8.06218L7.50024 5L7.50024 11.1809L12.3148 8.06218Z" fill="red"/>
</svg>`;
var stop_icon = `<svg class="svg_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<rect x="2.625" y="2.625" width="10.75" height="10.75" stroke="#F48771" stroke-width="1.25"/>
</svg>`;
var record_icon = `<svg  class="svg_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
<circle cx="8" cy="8" r="6" fill="red" />
<circle cx="8" cy="8" r="8" fill="red" fill-opacity="0.2" />
</svg>
`;
var no_sound_icon = `<svg class="svg_icon" class="feather feather-volume-x" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19" fill="#d40000" stroke="#d40000" stroke-opacity="1"/><line x1="23" x2="17" y1="9" y2="15" stroke="#d40000" stroke-opacity="1"/><line x1="17" x2="23" y1="9" y2="15" fill="#d40000" stroke="#d40000" stroke-opacity="1"/></svg>
`;
var audio_icon = `	<svg class="svg_icon" style="color:red" class="feather feather-volume-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19" fill="red" stroke="red"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#d2d2d2"/></svg>
`;
var download_icon = `<svg class="svg_icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="#d2d2d2">
  <path d="M3 0v3h-2l3 3 3-3h-2v-3h-2zm-3 7v1h8v-1h-8z" />
</svg>
`;
var screen_video_icon=`<svg class="svg_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" fill="#d2d2d2" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
`;




try {
    //Funções simples de Mostrar/Ocultar visibilidade de elementos DOM usando valores CSS display;
    //XVIDEOS tema;


    function DomHide(id) {
        // DomSetAttribute(id,'class',"out")
        var THIS = DomData(id);
        THIS.style.display = "none"
    }
    function DomShow(id) {
        // DomSetAttribute(id,'class',"in")
        var THIS = DomData(id);
        THIS.style.display = ""
    }

    ///Um jeito mais compacto ao document.getElementById(DOMID);
    ///A função retornará o elemento DOM como objeto.

    function DomData(DOMID) {
        this.IE = DOMID;

        var ELEMENT = document.getElementById(DOMID);
        return ELEMENT;
    }

    //retornar o valor de um atributo a um elemento DOM direcionado pelo valor da id (DOMID)
    //Uso DomGetAttibute("IDDOELEMENTO","NOMEDOATRIBUTO")
    //A função retornará o valor do atributo do elemento apontado.
    function DomGetAttribute(DOMID, AttributeName) {
        var Att = document.getElementById(DOMID).getAttribute(AttributeName);
        return Att;
    }

    //adicionar um atributo a um elemento DOM direcionado pelo valor da id (DOMID)
    //Uso DomSetAttribute("IDDOELEMENTO","ATRIBUTO","VALORDOATRIBUTO")
    function DomSetAttribute(DOMID, AttributeName, AttributeValue) {
        var ELEMENT = document.getElementById(DOMID);
        //alert(ELEMENT.id);
        ELEMENT.setAttribute(AttributeName, AttributeValue);
    }

    //remover um atributo a um elemento DOM direcionado pelo valor da id (DOMID)
    //Uso DomRemoveAttribute("IDDOELEMENTO","ATRIBUTO","VALORDOATRIBUTO")
    function DomRemoveAttribute(DOMID, AttributeName, AttributeValue) {
        var ELEMENT = document.getElementById(DOMID);
        //alert(ELEMENT.id);
        ELEMENT.removeAttribute(AttributeName, AttributeValue);
    }

    //math.round compacto;
    function round(number) {
        var rounded_number = Math.round(number)
        return rounded_number;
    }
    //math.floor compacto;
    function floor(number) {
        var floor_number = Math.floor(number)
        return floor_number;
    }

    //window.resizeTo(w,h) compacto;só functiona em HTAs
    function WindowSize(w, h) {
        window.resizeTo(w, h)
    }

    //Faz com que o elemento se auto delete;
    function DomRemoveSelf(id) {
        document.getElementById(id).remove();
    }

    //Faz com que o elemento escolhido entre em tela cheia.
    function DomGoFullScreen(id) {
        var element_to_fullscreen = DomData(id);
        if (element_to_fullscreen.requestFullscreen) {
            element_to_fullscreen.requestFullscreen();
        }

    }

    //Converte um blob para link URL;
    function DomToUrl(blob_) {
        var converted_blob = URL.createObjectURL(blob_);
        return converted_blob;

        //Precisamos nos certificar de revogar a URL se não precisarmos mais do arquivo. 
        //Se não o fizermos, isso causa vazamentos de memória.	
        URL.revokeObjectURL(converted_blob);
    }

	
		 //Coverte uma string em letras para cada número da posição do alfabeto

function DomGenCode(String){
var Code = String;
var ToCode  = Code.replace(/A/g,"1")
				  .replace(/B/g,"2")
				  .replace(/C/g,"3")
				  .replace(/D/g,"4")
				  .replace(/E/g,"5")
				  .replace(/F/g,"6")
				  .replace(/G/g,"7")
				  .replace(/H/g,"8")
				  .replace(/I/g,"9")
				  .replace(/J/g,"10")
				  .replace(/K/g,"11")
				  .replace(/L/g,"12")
				  .replace(/M/g,"13")
				  .replace(/N/g,"14")
				  .replace(/O/g,"15")
				  .replace(/P/g,"16")
				  .replace(/Q/g,"17")
				  .replace(/R/g,"18")
				  .replace(/S/g,"19")
				  .replace(/T/g,"20") 
				  .replace(/U/g,"21")
				  .replace(/V/g,"22")
				  .replace(/W/g,"23")
				  .replace(/X/g,"24")
				  .replace(/Y/g,"25")
				  .replace(/`/g,"END_CODE")
				  .replace(/Z/g,"26")
				  .replace(/a/g,"1")
				  .replace(/b/g,"2")
				  .replace(/c/g,"3")
				  .replace(/d/g,"4")
				  .replace(/e/g,"5")
				  .replace(/f/g,"6")
				  .replace(/g/g,"7")
				  .replace(/h/g,"8")
				  .replace(/i/g,"9")
				  .replace(/j/g,"10")
				  .replace(/k/g,"11")
				  .replace(/l/g,"12")
				  .replace(/m/g,"13")
				  .replace(/n/g,"14")
				  .replace(/o/g,"15")
				  .replace(/p/g,"16")
				  .replace(/q/g,"17")
				  .replace(/r/g,"18")
				  .replace(/s/g,"19")
				  .replace(/t/g,"20") 
				  .replace(/u/g,"21")
				  .replace(/v/g,"22")
				  .replace(/w/g,"23")
				  .replace(/x/g,"24")
				  .replace(/y/g,"25")
				  .replace(/`/g,"END_CODE")
				  .replace(/z/g,"26")
				  
				  
				  .replace(/é/g,"´")
				  .replace(/ã/g,"~")
				  .replace(/ç/g,",");
				  return ToCode;
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//Pega o Favicon ou melhor o ícone do site pelo URL dado.
	// function DomGetWebsiteFavIcon(Url){
	// try{
	// let Domain = "https://www.google.com/s2/favicons?domain=" + Url;
	// return Domain;
	// console.log("[GETFAVICON] - Favicon picked from url "+Domain+" \n Be careful using this!.")

	// }catch(error){
	// return "favicon.png";
	// console.error("[GETFAVICON] - Failed to get Website Favicon fomr URL "+Url)
// }


	// }

	//Mesma função porém Melhorada pela IA do Bing
	function DomGetWebsiteFavIcon(Url){
try{
let Domain = Url + "/favicon.ico";
return fetch(Domain).then(res => res.blob());
}catch(error){
return "favicon.png";
}
}

	
	
    //Converte uma string para base64
    function to64(string) {
        var toSixtyFour = window.btoa(string);
        return toSixtyFour;
    }
    //Desconverte uma string base64 para seu estado padrão
    function From64(string) {
        var FromSixtyFour = window.atob(string);
        return FromSixtyFour;
    }

    //Retorna a Largura e Altura do elemento indicado pelo DomId
    function DomGetBounds(DomId) {
        var dom = DomData(DomId);
        var DomWidth = dom.offsetWidth;
        var DomHeight = dom.offsetHeight;
        return wh = {
            w: DomWidth,
            h: DomHeight
        };
    }

	
//Gera um número aleatório com "#" para ids
function DomUniqueId(){
return  "#"+Math.abs(Math.round(Math.random(10000) * 5000));
}	
	
	
	
	
var MS_POSITION_BORDER="";
var DomMouseWindowBorders = document.onmousemove = function(e){
        var MaxWidth = document.documentElement.scrollWidth;
        var MaxHeigth = document.documentElement.scrollHeight;
        var W_X = MaxWidth - e.x;	
        var H_Y = MaxHeigth - e.y;	

               if ( e.x <= 6 ) {
           MS_POSITION_BORDER = "LEFT"
		   
		   
        } else if ( e.y <= 6) {
            MS_POSITION_BORDER = "TOP"
			
			
        } else if ( e.x >= W_X*100) {
         MS_POSITION_BORDER = "RIGHT"
		 
		 
        } else{
			MS_POSITION_BORDER="NONE";
			
		}
		
}
	
	// Interpolação linear
function DomLinearInterPolate(A,B,value) {
return A + value * (B - A);

}
	
	
	
	
	
	
	
	
	
var DomTodayTime = "";
var DomTodayCalendar= "";
getDate()
function getDate() {
    let DataAttuale = new Date();

    let giorno = DataAttuale.getDate();
    let mese = DataAttuale.getMonth() + 1; // mese parte da 0
    let anno = DataAttuale.getFullYear();

    let ora = DataAttuale.getHours();
    let minuti = DataAttuale.getMinutes();

    let orarioContainer = document.getElementById("orario-data");
    let calendarioContainer = document.getElementById("calendario-data");

    // se l'ora/minuti è meno di 10, allora si aggiunge uno 0 prima
    if (ora < 10 && minuti < 10) {
        DomTodayTime = "0" + ora + ":" + "0" + minuti;
    } else
    if (ora < 10) {
        DomTodayTime = "0" + ora + ":" + minuti;
    } else
    if (minuti < 10) {
        DomTodayTime = ora + ":" + "0" + minuti;
    } else {
       DomTodayTime = ora + ":" + minuti;
    }

    // se il giorno/mese è meno di 10, allora si aggiunge uno 0 prima
    if (giorno < 10 && mese < 10) {
        DomTodayCalendar = "0" + giorno + "/" + "0" + mese + "/" + anno;
    } else
    if (giorno < 10) {
        DomTodayCalendar = "0" + giorno + "/" + mese + "/" + anno;
    } else
    if (mese < 10) {
      DomTodayCalendar = giorno + "/" + "0" + mese + "/" + anno;
    } else {
       DomTodayCalendar = giorno + "/" + mese + "/" + anno;
    }

    // document.getElementById('sistema-data').title = orarioContainer.innerHTML + "  " + calendarioContainer.innerHTML;

    // ogni minuto si aggiunge l'ora 
    // 1000 = 1 secondo... 1000 * 60 = 60000... 60000 = 1 minuto
    setTimeout(function() {
        getDate();
    }, 60000); // 60 secondi
}
	
	
	
	
	
	
	
	
	
	
	
	//Pega arquivos "dropados"/soltos dentro da janela e os converte para blob e retorna objeto do mesmo
	
	
// ondragover="event.preventDefault()"
document.ondragover = function(ev){
	ev.preventDefault();
}
document.body.ondrop = function(ev){
ev.preventDefault();

	var FileDrop = ev.dataTransfer.files
	ev.preventDefault()
	for(f = 0 ; f < FileDrop.length ; f++){
		var vid = FileDrop[f].name
		// alert(vid)
		OutWarn("Dropped a new file(s) in to list:"+FileDrop[f].name)
		//alert(FileDrop[f].name)
		// DropItemToList(FileDrop[f],FileDrop[f].size)
		var FileObject = {
			name: FileDrop[f].name,
			Data : FileDrop[f],
			size : FileDrop.size,
			
		}
		
	// alert(FileObject.name)
	OutWarn("Loaded Dropped File "+FileObject.name)
	GIMEO.NewVideoAt(FileObject.Data,GimeoCurrentFilesList)
		
	}

	// return FileObject;
	
}


//Console customizado:


function Out(Input){
console.log('%c [GIMEO-CONSOLE]:'+Input+'', 'background: #777;padding:8px;border-left:9px solid lightgray;font-size:14px;font-family:Courier View; color: White');

}
function OutWarn(Input){
console.log('%c [GIMEO-CONSOLE-WARN]:'+Input+'', 'background: orange;padding:8px;border-left:9px solid lightgray;font-size:14px;font-family:Courier View; color: White');

}
function OutError(Input){
console.log('%c [GIMEO-CONSOLE-ERROR]:'+Input+'', 'background: red;color:white;padding:8px;border-left:9px solid lightgray;font-size:14px;font-family:Courier View; color: White');

}


OutWarn("Gimeo Intregration for DomApi was loaded.")


	
	
    ///Requer evento como parametro 1
    //Função retorna o índice da tecla pressionada e também a tecla em "si"
    //Retorna o objeto KB;
    function Keyboard(event, prevent) {
        var Code = event.keyCode;
        //Requer IE 10+
        var Key = event.key;
        //Requer IE 10+
        if (prevent == true) {
            event.preventDefault();
        }
        return KB = {
            Id: Key,
            Index: Code
        };
    }

    function DomDownloadFromLink(Link, FileNameWithExt) {
        try {
            if (Link == '' || Link == undefined || Link == null) {
                throw "DomDownloadError: Link URL must be specified"
            }
            if (FileNameWithExt == '' || FileNameWithExt == undefined || FileNameWithExt == null) {
                throw "DomDownloadError: Download name must be specified, and with extension"
            }
            var DOM_DOWNLOAD = document.createElement("a")
            DOM_DOWNLOAD.download = FileNameWithExt;
            DOM_DOWNLOAD.href = Link;
            DOM_DOWNLOAD.click();
        } catch (err) {//Error Handler;

        }
    }

    function DomDownloadByData(data, downloadName, DownloadExtension) {
        // const DomDownload = new Blob([data],{type : DownloadExtension});
        var downloadLink = document.createElement("a");
        // downloadLink.href=URL.createObjectURL(DomDownload);
        downloadLink.href = data;
        downloadLink.download = downloadName
        downloadLink.click();
    }

    //Função crucial para uso de várias páginas html
    //Essa função retorna o valor do conteúdo de um Form da última pagina onde estava;
    //Nota:Requer suporte do aplicativo;
    function DomGetFormData(DomFormDataName) {
        try {
            var GetFormData = new URLSearchParams(window.location.search)
            var Data = GetFormData.get(DomFormDataName);
            console.log("Data returned, no errors")
            return Data;
        } catch (err) {
            alert(err.message);
            throw "DomGetFormData() error :\n " + err.message;
        }
    }

    //Converte um objeto javascript em Objeto Json;
    function DomToJsonScript(Object) {
        JsonObj = JSON.stringify(Object);
        return JsonObj;
    }

    //Converte um objeto Json em Objeto javascript;
    function DomToJavascript(Object) {
        JavastiptObj = JSON.parse(Object);
        return JavastiptObj;
    }

    ///Retorna o tempo de um video no formato HH:MM:SS do valor currentTime de um video;
 /*    function DomVideoGetTime(videoDom_currentTime) {
        var num = videoDom_currentTime;
        var hours = (num / 60);
        var rhours = floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = round(minutes);
        // var rseconds = floor(num % 60);
        HORAS = 0;
        MINUTOS = 0;
        // SEGUNDOS = 0;
        if (rhours < 10) {
            HORAS = "0" + rhours
        } else {
            HORAS = rhours
        }
        if (rminutes < 10) {
            MINUTOS = "0" + rminutes
        } else {
            MINUTOS = rminutes
        }
        // if(rseconds < 10){SEGUNDOS = "0"+rseconds}else{SEGUNDOS=rseconds}

        return HORAS + ":" + MINUTOS;
        // return HORAS+":"+MINUTOS+":"+SEGUNDOS;
    } */
	
//Mesma função, só que melhorada pela IA do Bing, só que no formato HH:MM:SS
function DomVideoGetTime(videoDom_currentTime) {
  var num = videoDom_currentTime;
  var hours = Math.floor(num / 3600); // 3600 segundos em uma hora
  var minutes = Math.floor((num % 3600) / 60); // minutos restantes depois de subtrair as horas
  var seconds = Math.floor(num % 60); // segundos restantes depois de subtrair as horas e os minutos
  var HORAS = hours < 10 ? "0" + hours : hours; // se hours for menor que 10, adiciona um zero na frente, senão mantém o valor
  var MINUTOS = minutes < 10 ? "0" + minutes : minutes; // mesma lógica para os minutos
  var SEGUNDOS = seconds < 10 ? "0" + seconds : seconds; // mesma lógica para os segundos
  return HORAS + ":" + MINUTOS + ":" + SEGUNDOS; // retorna a string formatada
}	
	
	
	
	
	
	
	
	

    //retorna a porcentagem do valor de acordo com o valor máximo;
    function DomGetPercent(current, max) {
        var per = current * 100 / max;
        return per;
    }

    //

    //faz uma troca de visibilidade de um elemento para outro
    //o último elemento visível sempre dará lugar ao atual selecionado
    current_visible_dom = "";
    function SwapDom(from, to) {
        if (current_visible_dom == "") {
            current_visible_dom = to;
            DomHide(from);
            DomShow(to);
        } else {
            DomHide(current_visible_dom);
            DomShow(to);
            current_visible_dom = to;
            DomData("log").innerHTML = "Last tab:" + current_visible_dom;
        }
        // DomHide(from);	
        // DomShow(to);	
        // current_visible_dom = to;
    }

    ///Apenas pra ser parte das funções Dom
    function DomSay(text) {
        alert("Functions_API - Message:\n" + text);
    }

    function DomPromptBox(text) {
        var return_value = prompt(text)
        return return_value;
    }

    //faz uma troca de visibilidade de um elemento para outro
    //o último elemento visível sempre dará lugar ao atual selecionado
    current_visible_dom = "";
    function SwapDom(from, to) {
        if (current_visible_dom == "") {
            current_visible_dom = to;
            DomHide(from);
            DomShow(to);
        } else {
            DomHide(current_visible_dom);
            DomShow(to);
            current_visible_dom = to;
            DomData("log").innerHTML = "Last tab:" + current_visible_dom;
        }
        // DomHide(from);	
        // DomShow(to);	
        // current_visible_dom = to;
    }

    function DomDynamicVideo(id, mode, path, PanelName) {
        video = DomData(id)
        if (mode == "openwithcontrols") {
            DomShow(PanelName)
            video.src = path;
            // DomSetAttribute(id,"autoplay","")
            // DomSetAttribute(id,"controls","")
            DomSetAttribute(id, "loop", "")
            video.play();
        }

        if (mode == "stopwithoutcontrols") {
            video.src = "";
            DomRemoveAttribute(id, "autoplay", "")
            // DomRemoveAttribute(id,"controls","")
            DomRemoveAttribute(id, "loop", "")
            DomHide(PanelName)

        }
    }

    //Carrega o tempo total do 'DomVideoElementId' para o 'ToProgressbar' em percentual
    function DomSetVideoProgress(DomVideoElementId, ToProgressbar, Mode) {
        var MEDIA = DomData(DomVideoElementId);
        var Progressbar = DomData(ToProgressbar);
        var video_percentage = MEDIA.currentTime * 100 / MEDIA.duration;
        if (Mode == "return") {
            return video_percentage;
        } else if (Mode == "ToDom") {
            Progressbar.value = video_percentage;
            ;
        } else if (Mode == "Both") {
            return video_percentage;
            Progressbar.value = video_percentage;
        }
        // console.debug("MEDIAPERCENT CURRENT TIME PERCENT :"+video_percentage)     ;
    }
    //Define o tempo em 'ms' do vídeo indicado pelo "DomVideoElementId" pelo valor percentual do  'DomProgressChangerId'
/*     function DomSetVideoTime(DomVideoElementId, DomProgressChangerId) {
        var MEDIA = DomData(DomVideoElementId);
        var video_progress_bar = DomData(DomProgressChangerId).value
        var set_video_percentage = video_progress_bar * MEDIA.duration / 100;
        // DomSetAttribute(DomProgressChangerId,"max",MEDIA.duration) 
        MEDIA.currentTime = Math.abs(set_video_percentage);
        console.debug("MEDIAPERCENT DEFINED TIME PERCENT :" + Math.abs(set_video_percentage));
    } */

function DomSetVideoTime(DomVideoElementId, DomProgressChangerId) {
    var MEDIA = DomData(DomVideoElementId);
    var video_progress_bar = DomData(DomProgressChangerId).value
    var set_video_percentage = video_progress_bar * MEDIA.duration / 100;
    // DomSetAttribute(DomProgressChangerId,"max",MEDIA.duration) 
    setTimeout(function() {
        MEDIA.currentTime = Math.abs(set_video_percentage);
        console.debug("MEDIAPERCENT DEFINED TIME PERCENT :" + Math.abs(set_video_percentage));
    }, 1); // 1 milissegundo de atraso
}

	
	
	
	
	
	
	
	
	
    ///Retorna um array de objetos DOM com o conteúdo do DomId apontado,
    //Todos is Elementos encontrados com a classe DomClassName dentro de DomId irão ser retornados na
    //Array de objetos DOM_ARRAY
    function DomGetElementsByClass(DomId, DomClassName) {
        //De onde o loop será feito
        var DOM = DomData(DomId);
        //Os elementos a serem achados  
        //("
        //por classe, exemplo: os elementos com a classe: class='test' 
        //dentro de uma div com o id: id='list'
        //")
        var DOM_ELEMENT = DOM.querySelectorAll("." + DomClassName)
        //Array de objetos
        var DOM_ARRAY = [];
        //Loop para a array
        for (f = 0; f < DOM_ELEMENT.length; f++) {
            //Elementos com a classe indicada pelo parametro irá ser injetado no array
            DOM_ARRAY.push(DOM_ELEMENT[f]);
        }
        //Após o loop o array é retornado;
        return DOM_ARRAY;
        //Após o térmido da função o array é limpo para uma nova injeção;
        DOM_ARRAY = [];
    }

    //////////////////////////////Gravador de Tela//////////////////////////////
    //////////////////////////////Gravador de Tela//////////////////////////////
    //////////////////////////////Gravador de Tela//////////////////////////////
    //////////////////////////////Gravador de Tela//////////////////////////////
    //////////////////////////////Gravador de Tela//////////////////////////////
 IS_RECORDING = false;
 var chunks = [];




var LiveOptions = { 
video: {
video:true,
cursor:true
},
audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100
}
}
/*
		
 function  DomRecordUserScreen() {

        // chunks = []; //Clean repeated chunks
        
        if (IS_RECORDING == false) {
            var confirm_record = confirm("Start Recording Live?")

            if (confirm_record == true) {
                IS_RECORDING = true
				   // const stream = navigator.mediaDevices.getDisplayMedia({video: {mediaSource: "screen"}});
var stream = navigator.mediaDevices.getDisplayMedia({
  video: { mediaSource: "screen" },
  cursor:true,
  audio: {
    echoCancellation: false,
    noiseSuppression: false,
    sampleRate: 44100
}
});

                console.warn("[SCREEN-RECORDER] Recording....")
                var ScreenRecorder = new MediaRecorder(stream);
                ScreenRecorder.ondataavailable = function(e) {
                    chunks.push(e.data);
                    console.warn("Data recorded saved. as " + e.data.type)

                }
                ;
                ScreenRecorder.start();

                ScreenRecorder.onstop = function(a) {
                    console.debug("[SCREEN-RECORDER] Operation Stopped.")
                    console.log(chunks[0]);
                    var completeBlob = new Blob([chunks[0]],{
                        type: "video/webm"
                    });
                    var source = URL.createObjectURL(completeBlob);
                    console.warn(source);
                    DomDownloadFromLink(source, "Test Video.webm");
                    // video.src = source;
                    // video.pause();
                    // window.open(source)	
IS_RECORDING = false;
                }
                //Retornar os valores ao parar a gravação
            }
            //Confirmação da gravação
        } else if(IS_RECORDING == true) {
	IS_RECORDING = false

  
	// DomDownload(source,"GRAVADOR - VID[0]","video/webm")
}

        //Iniciar a  gravação apenas se não houver uma em execução

    }

	*/
	
	////////////////////////////////////////////////
	
	
	
    // var chunks = [];
    // async function RecordScreen(){
    // var stream = await navigator.mediaDevices.getDisplayMedia({
    // video: { mediaSource: "screen" },
    // audio: {
    // echoCancellation: false,
    // noiseSuppression: false,
    // sampleRate: 44100
    // }
    // });
    // ScreenRecorder = new MediaRecorder(stream);

    // ScreenRecorder.ondataavailable = function(e){ chunks.push(e.data);
    // console.warn("Data recorded saved. as "+e.data.type)};
    // ScreenRecorder.start();

    // ScreenRecorder.onstop = function(A_event){
    // console.log(chunks[0]);
    // }

    // }

    //////////////////////////////Gravador de Tela//////////////////////////////
    //////////////////////////////Gravador de Tela//////////////////////////////
    //////////////////////////////Gravador de Tela//////////////////////////////
    //////////////////////////////Gravador de Tela//////////////////////////////
    //////////////////////////////Gravador de Tela//////////////////////////////

    ////AudioVisualizer custom para deixar os elementos "animados" de acordo com o 
    //Audio
    AUDIO_FREQUENCY = 0;
    ALREADY_CONNECTED = false;
    function DomAudioVisualizer(OutPutDataId) {
        // var DataInput =   DomData(InputDataId);
        var audio = DomData(OutPutDataId);

        // audio.src = URL.createObjectURL(DataInput.files[0]);
        // audio.load();
        // audio.play();
        //////////////////////////////////////////
        if (ALREADY_CONNECTED == false) {
            ALREADY_CONNECTED = true;
            console.log("[AUDIO] Connected AudioVisualizer")
            var context = new AudioContext();
            var src = context.createMediaElementSource(audio);
            var analyser = context.createAnalyser();
            src.connect(analyser);
            src.volume = 0.5;
            analyser.connect(context.destination);
            analyser.fftSize = 16 * 256;
            var bufferLength = analyser.frequencyBinCount;
            console.log(bufferLength);
            var dataArray = new Uint8Array(bufferLength);
            function renderFrame() {
                requestAnimationFrame(renderFrame);
                // x = 0;
                analyser.getByteFrequencyData(dataArray);
                Smt = (dataArray[8] + dataArray[12] + dataArray[24] + dataArray[18] + dataArray[1] + dataArray[2]) * 5 + 1;
                AUDIO_FREQUENCY = Smt;
            }
            audio.play();
            renderFrame();
            //////////////////////////////////////////
        } else {
            console.log("[AUDIO] AudioVisualizer is already Connected")
        }

    }
    ;
	
	
	
	
	//Retorna o valor em Byte ,KB , MB e em GB do valor em bytes dado.
	function DomGetFileUnitSize(bytes){
  if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
  else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
  else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
  else if (bytes > 1)           { bytes = bytes + " bytes"; }
  else if (bytes == 1)          { bytes = bytes + " byte"; }
  else                          { bytes = "0 bytes"; }
  return bytes;
}



	
	
//Reproduz instantaneamente um som 
function InstantPlay(soundFile,DebugMode){
	var sound = "";
	if(soundFile == "hover"){sound="item_hover.ogg"}else{sound=soundFile;}
	if(soundFile == "click"){sound="item_click.ogg"}else{sound=soundFile;}
	
	
	if(soundFile == "" || soundFile == null || soundFile == undefined){
		throw "SoundCore_Error: the sound source must be specified.";
	} else {
	pl = new Audio();
	pl.volume=1.0;
	pl.src= sound;
	pl.play();
	logParameters = "debug";
	if(DebugMode == "" || DebugMode == null || DebugMode == undefined){

	} else if(DebugMode == "debug"){
	return "SoundCore_Debug:Playing sound:"+sound;
	}
	return null;
	}	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    /////////////////////////////[APLICATIVO REQUER SUPORTE AO AciveXObject]//////////////////////////////////////////////////////////////
    //'API de arquivos criada/Atualizada por:Gessandre 21/01/2023'
    //var VARNAME = new ActiveXObject(ActiveXObject Name)
    //MIDI_FileSys = new ActiveXObject("Scripting.FileSystemObject")

    //Checa se o arquivo apontado "file" existe e retorna o valor de acordo com o fluxo
    function DomFileExists(File) {
        VBS_CORE = new ActiveXObject("Scripting.FileSystemObject")
        if (VBS_CORE.FileExists(File)) {
            return true
            // Arquivo existe
        } else {
            return false
            //Arquivo não existe
        }
    }

    function DomWriteData(DataString, MIDIAplFileName) {
        MIDI_FileSys = new ActiveXObject("Scripting.FileSystemObject")
        MIDI_FileCore = MIDI_FileSys.CreateTextFile(MIDIAplFileName, 2, true)
        //Cria o arquivo e sobreescreve caso já exista
        MIDI_FileCore.Write(DataString)
        // Grava os dados no arquivo
        MIDI_FileCore.close()
    }

    //'move o arquivo do diretório "From" para o diretório "To"
    //'Nota: Se não tiver permissões suficientes do antivírus ou do sistema em si,
    //'poderá resultar em' Acesso negado'
    function DomMoveFile(From_, To_) {
        MIDI_FileSys = new ActiveXObject("Scripting.FileSystemObject")
        MIDI_FileSys.MoveFile(From_, To_)
    }

    //'copia o arquivo do diretório "From" para o diretório "To"
    //'Nota: Se não tiver permissões suficientes do antivírus ou do sistema em si,
    //'poderá resultar em' Acesso negado'
    function DomCopyFile(From_, To_) {
        MIDI_FileSys = new ActiveXObject("Scripting.FileSystemObject")
        MIDI_FileSys.CopyFile(From_, To_)
    }

    //'Simples , apenas cria a pasta com o nome apontado pelo parametro "FolderName"
    //Nota caso a pasta já exista a função irá perguntar se o usuário queira sobre escreve-la.
    function DomCreateFolder(FolderName) {
        MIDI_FileSys = new ActiveXObject("Scripting.FileSystemObject")
        if (DomFile(FolderName) == true) {
            confirmOverwrite = confirm("The folder " + FolderName + " already exists\nOverwrite?")
            if (confirmOverwrite == true) {
                MIDI_FileSys.CreateFolder(FolderName)
            }
        } else {
            MIDI_FileSys.CreateFolder(FolderName)
        }
    }

    //'Abre o arquivo apontado pelo parâmetro FileDir
    //Parametro 1 (ShowHide): 0 = Abre o arquivo em segundo plano
    //Parametro 1 (ShowHide): 1 = Abre o arquivo de modo padrão (depende do arquivo)
    //Parametro 2 (WaitProcessEnd) : 0 = O script seguinte após a chamada da função é rodado sem a espera do processo terminar
    //Parametro 2 (WaitProcessEnd) : 1  = O script seguinte após a chamada da função espera o processo terminar
    function DomOpenFile(FileDir, ShowHide, WaitProcessEnd) {
        var DomExec = new ActiveXObject("Wscript.shell");
        DOM = DomExec.run(FileDir),
        ShowHide,
        WaitProcessEnd
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

} catch (err) {
    const DomApiMessageError = `
	==============[DomApi_FixedVersion.js]==============\n 
	Um erro ocorreu durante o uso/carregamento de uma função do DomApi_FixedVersion.js\n 
	Razão do erro: [ ` + err.message + ` ]\n
	Código do erro:` + err.number + `\n
	====================================================\n 
	`;
    console.log(err)
    alert(DomApiMessageError);
    reportError(DomApiMessageError);
}
/////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Error Handle///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////GIMEO.JS BY GESSANDRE ///////////////////////////////////////////
console.log("DOM API and GIMEO.JS Created BY GESSANDRE")


currentVolume = 0.5;
maxVolume = 0.9;
minVolume = 0.1;
GimeoCurrentFilesList = "";

setTimeout(function() {
    GIMEO.InitStyles()
}, 900)
var GIMEO = {
    IsAlreadyUsingGimeoStyles: false,

    InitStyles: function() {
        const STYLES = `

/*
@font-face {
    font-family: "Material Design Icons";
    src: local('Material Design Icons'),url("fonts/md-embedded.woff") format("woff");
    font-style: normal;
    font-weight: normal
}
*/

	 
	 
:root {
	
    --nw-orange-color: #fb6614;
    --nw-blue-color: #20aafa;
    --nw-light-color: #f3f3f3;
    --nw-dark-color: #161616;
    --main-font-color: var(--nw-light-color);
    --main-font-disabled-color: #aaa;
    --main-component-bg-color: #202020;
    --main-component-bg-hover-color: #262626;
    --main-component-disabled-bg-color: #36393f;
    --main-component-additional-color: var(--nw-orange-color);
    --main-good-color: var(--nw-blue-color);
    --main-warning-color: #ffd700;
    --main-error-color: #b22222;
    --main-caution-color: #fd5954;
    --main-popup-bg-color: var(--nw-dark-color);
    --windowheader-bg-color: #0f273d;
    --windowheader-control-hover-color: var(--nw-blue-color);
    --windowheader-controlclose-hover-color: var(--main-caution-color);
    --headerbutton-bg-color: #00000084;
    --headerbutton-bg-hover-color: #082742;
    --headerbutton-font-color: var(--main-font-color);
    --page-bg-color: #283140;
    --pagebackbutton-font-hover-color: #888;
    --panel-bg-color: #4242422d;
    --paneldashboard-bg-color: #00000051;
    --alert-bg-color: var(--nw-dark-color);
    --boxtitle-font-color: #888;
    --scrollbox-bg-color: #262e3c;
    --scrollbar-bg-color: #000e17b7;
    --mainmenu-bg-color: #212a39;
    --button-highlighted-bg-color: #2a618a;
    --button-highlighted-bg-hover-color: #224c71;
    --progressbar-bg-color: #14222f;
    --progressbarindicator-bg-color: var(--nw-blue-color);
    --link-font-color: #0882ff;
    --link-font-hover-color: var(--nw-blue-color);
    --toggle-active-bg-color: var(--main-component-bg-color);
    --toggle-inactive-bg1-color: var(--nw-light-color);
    --toggle-inactive-bg2-color: #9a9999;
    --list-header-font-color: #4a86b8;
    --list-odd-bg-color: #5e5e5e2e;
    --list-even-bg-color: #42424245;
    --list-selectable-bg-hover-color: #1f2c3a;
    --droparea-active-bg-color: #184e80;
    --tabs-selected-bg-color: var(--main-component-additional-color);
    --tabs-selected-font-color: var(--main-font-color);
    --circlebar-filler-bg-color: #4040407f;
    --itempicker-border-color: #606060;
	
	
	
	
  scrollbar-base-color: black;
  scrollbar-face-color: dodgerblue;
  scrollbar-3dlight-color: white;
  scrollbar-highlight-color: black;
  scrollbar-track-color: black;
  scrollbar-arrow-color: black;
  scrollbar-shadow-color: black;
  scrollbar-dark-shadow-color: black;
	
	
	
	
	
	
}

body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 15px;
    background-color: var(--page-bg-color);
    color: var(--main-font-color);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    overflow: hidden
}

canvas {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none
}

	button{
		background:var( --headerbutton-bg-color-hover);	
		padding:4px;
		color:white;
		cursor:pointer;
		border:none;
		border-radius:4px;
		transition:200ms linear;
		
	}	
	button:hover{
			background:var( --headerbutton-bg-color);
		
	}	
	button:active{
		transition:0ms linear;
		transform:scale(0.94);
		
	}	
	input[type="file"]:hover{
				background:var( --main-component-bg-color-hover);
				cursor:pointer;
	}
	input[type="file"]{
		paddin:8px;
		width:auto;
		height:auto;
		content-align:center;
		background:var( --main-component-bg-color);
		color:var(--nw-blue-color);
		transition:300ms linear;
	}	
		
input[type="range" i]:hover {
    box-shadow: 0px 0px 20px #545454;
    background: #545454;
}
    input[type="range" i] {
    appearance: none;
    cursor: default;
    color: var( --main-component-bg-color);
    padding: initial;
    border: initial;
    margin: 0px;
	background:#101010;
	border:1px solid transparent;
	border-radius:10px; 
/*	backdrop-filter:blur(3.0em); */
	transition:200ms linear;
	cursor:pointer;
    writing-mode: none;
	-webkit-appearance: none;
	
	

	
	
}
		
	input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
	transition: all ease 100ms;
	height: 20px;
	width: 20px;
	position:relative;
	border-radius:50%;
}	

	
input[type="range"]::-webkit-slider-thumb {
	background:red;

}

input[type="range"]::-webkit-slider-runnable-track {
  background: none;

  border-radius: 16px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none; 
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid red;
  box-shadow: -807px 0 0 800px red;
}

input[type="range"]{
	overflow:hidden;
	transition:500ms ease-out;
	box-shadow:inse 0px 0px 10px #5454;
}







		
	input[type="file" i] {
    appearance: none;
    background-color: inicial;
    cursor: default;
    align-items: baseline;
    color: inherit;
    text-overflow: ellipsis;
    white-space: pre;
    text-align: start !important;
    padding: 4px;
    border: none;
    border-color: white;
    overflow: hidden !important;
    border-radius: 10px;
	
	}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
.VIDEO_ON_LIST{
	width:300px;
	height:300px;
	border:1px solid black;
	position:relative;
	display:inline-table;
	overflow:hidden;
	transition: left 899ms linear;
	margin:20px;
	border-radius:10px;
	background:rgba(0,0,0,0.8);
	padding:12px;
	font-family:Segoe UI;
	box-shadow:0px 0px 20px darkgray;

}
	.video_name{
	position:absolute;
	bottom:7%;
	left:8%;
	text-align:center;
	}
	.VIDEO_ON_LIST:hover >.video_thumb{
		transform:scale(1.1);
		filter:blur(2.5px);
	}
	.VIDEO_ON_LIST:hover > .video_play{
		   opacity:1;
		   border:1px solid white;
	}
	.VIDEO_ON_LIST:hover > .vid_bottom{
		bottom:0%;
	}
	.vid_bottom{
	position:absolute;
	left:0%;
	bottom:-30%;
	height:19%;
	width:100%;
	color:white;
	text-align:center;
	background:linear-gradient(0deg,rgba(0,0,0,0.8),transparent);
	transition:200ms ease-out;
	}	
	.video_play{
	position:absolute;left:30%;bottom:27%;
	height:130px;
	width:130px;
	border-radius:50%;	
	z-index:3131;
	font-size:20px;
	font-family:Tahoma;
	background:rgba(0,0,0,0.2);
	border:8px solid white;
	color:white;
	text-shadow:0px 0px 10px white;
	opacity:0;
	transition:700ms linear;
	cursor:pointer;
	backdrop-filter:blur(3.0em);
	box-shadow:0px 0px 20px white;
	}
	 .video_thumb{
	 width:400px;
	 height:400px;
	 position:absolute;
	 left:-33px;
	 bottom:-30px;
	 transition:200ms ease-out;
	 }
	 
	 
 	.MODAL_GIMEO_WINDOW{
		background:rgba(0,0,0,0.8);
		transition:300ms ease-out;
		width:100%;
		height:100%;
		position:fixed;
		bottom:0%;
		left:0%;
		z-index:2823131234;
		backdrop-filter:blur(2.5px);
		
		}
		.MODAL_GIMEO_WINDOW_MINIMIZED  > * {
    transition: 300ms ease-out;
		}
		
		.MODAL_GIMEO_WINDOW  > * {
    transition: 300ms ease-out;
		}
	.MODAL_GIMEO_WINDOW_MINIMIZED {
		
    background: black;
	border-radius:20px;
    transition: 300ms ease-out;
    width: 24%;
    height: 45%;
    position: fixed;
    bottom: 5%;
    left: 2%;
    z-index: 2823131234;
    backdrop-filter: blur(2.5px);
	border:1px solid red;
}	
		
		
		
	   .GIMEO_VIDEO_SCREEN{
		position:fixed;
		left:5%;
		bottom:12%;
		width:88%;
		height:80%;
		border:4px solid transparent;
		z-index:23204;
		padding:12px;
		box-shadow:0px 0px 20px transparent;
		border-radius:10px;
		overflow:hidden;
		z-index:293731313146;
		background:transparent;
	}
	#VIDEO_SRC{
border-radius: 39px;
    left: 10%;
    bottom: 12%;
    width: 81.4%;
    height: 81%;
    position: fixed;
    background: transparent;
    border: 1px solid transparent;
	}
	
	
	
	
	
	
	
	.w_topbar{
	background:transparent;
			position:absolute;
			top:-1%;
			right:0%;
			width:99%;
			height:30px;
			color:white;
			padding:8px;
			border:1px solid transparent;
	} 
	.w_title{
	font-family:Segoe UI;
	text-align:center;
	opacity:0.3;
	}	
	.w_buttons{
	width:auto;
	height:40px;
	color:white;
	float:right;
	}
	.w_body{
	width:99.4%;
	height:89.5%;
	border:4px solid transparent;
	position:absolute;
	bottom:0%;
	left:0%;
	background:none;
	overflow:hidden;
	}	
	
	.video_show{
	width:99.5%;
	height:99.5%;
	border:1px solid transparent;
	}
	#CanvasAmbientLight{
border-radius: 39px;
	left: 8%;
    bottom: 8%;
    width: 85.4%;
    height: 88%;
    position: fixed;
    background: transparent;
    border: 1px solid red;
	filter:blur(4.0em);
	opacity:0.5;
	}	
	
	
	
	.w_video_controls{
	position:absolute;
	bottom:0%;
	left:0%;
	height:50px;
	width:97.5%;
	background:linear-gradient(0deg,rgba(0,0,0,0.8),transparent );
	color:black;
	padding:12px;
	font-family:Segoe UI;
	color:white;
	}	
	#VideoTime{
	float:right;
	position:absolute;
	right:4%;
	top:8%;
	}
	#VideoVolume{
	float:right;
	width:150px;
	position:absolute;
	right:11%;
	top:8%;
	}
	.vol{
	position:absolute;
	right:12%;
	top:7%;
	}
	
	
	
	
	
	
	
	#VideoRange{
	width:100%;
	height:10px;
	}	
	.w_control_button:hover{
	box-shadow: 0px 0px 15px #5454;
    background: #5454;
	}
	.w_control_button{
	width:auto;
	height:40px;
	border:1px solid transparent;
	color:white;
	border-radius:8px;
	background:#101010;
	font-family:tahoma;
	}
	* [hidded]{
	display:none;
	}
	 
	 
	.credits{
		position:fixed;
		top:3px;
		right:4px;
		width:auto;
		height:30px;
		background:rgba(0,0,0,0.8);
		color:white;
		border-radius:8px;
		border:1px solid transparent;
		font-family:Tahoma;
		opacity:0.2;
		
	} 
	 

#VIDEO_SRC{
	transition:300ms linear;
}
#ContentBox{
transition:300ms linear;
color:white;
font-family:Monospace;
}
#VideoApresentationIntro{
position:absolute;
right:0%;bottom:40%;
width:100%;
height:100px;
background:rgba(0,0,0,0.0);
color:white;
font-family:Tahoma;
color:white;
overflow:hidden;
transition:300ms linear;
z-index:347298472983;
font-family:Monospace;

}

	 
	 
	 
	 
	 
	 
	 .svg_icon_loading{
		 transform:scale(2.8);
	 }
	 .svg_icon{
		 width:20px;
		 height:20px;
		 
		 
	 }
	 
	 #TG_BT{
		 z-index:289439284;
		 
	 
	 }
	 
	 
	
#mouse_cursor {
	border:2px solid white;
	width:20px;
	height:20px;
	position:fixed;
	transition:0ms linear;
	z-index:22;
	box-shadow:0px 0px 30px white;
	border-radius:50px;
	z-index:99999999;
	background:transparent;
	 mix-blend-mode: difference;
	 filter:blur(0.3em);
}



	input{
		cursor:auto;
	}	
	button{
		cursor:auto;
	}
	 body{
		 cursor:auto;
	 }
	 
	 .MODAL_GIMEO_WINDOW{
		 cursor:auto;
	 }
	 
	 
	 
	 
	
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
`;
var GIMEO_EXTRA_CONTENT=`
<div id="mouse_cursor" ></div>
<div class="credits">GIMEO.js Created By Gessandre</div>

<audio id="VideoIntroSound" src="./xboxone.mp3" hidden/>

`;
var HEADER = `
<meta name="viewport" content="width=device-width"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
`;
var ExtraCode = `
// xe=0;
// ye=0;
document.onmousemove  = function e(ee){
	var x = ee.x
	var y = ee.y
	var get_mouse_drawn = DomData("mouse_cursor")
	
	
var	CurporY = get_mouse_drawn.style.top.replace("px","")
var	CurporX = get_mouse_drawn.style.left.replace("px","")
	
	xe =  DomLinearInterPolate(x,CurporX,0.89)
	ye =  DomLinearInterPolate(y,CurporY,0.89)
	
	get_mouse_drawn.style.top=ye + "px"
	get_mouse_drawn.style.left=xe + 2 + "px"

	// get_mouse_drawn.innerHTML=xe +"/"+ye
 
}
`;

        if (GIMEO.IsAlreadyUsingGimeoStyles == false) {
            let Styling = document.createElement("style")
			let ExtraContent = document.createElement("div")
			let ExtraCoding = document.createElement("script")
			ExtraCoding.setAttribute("type","text/javascript")
			ExtraCoding.innerHTML=ExtraCode;
			
            Styling.innerHTML = STYLES;
			ExtraContent.innerHTML=GIMEO_EXTRA_CONTENT;
            Styling.id = "GIMEO_STYLES";
            document.head.innerHTML+=HEADER;
            document.head.appendChild(Styling);
            document.body.appendChild(ExtraCoding);
            document.body.appendChild(ExtraContent);
			console.log("Gimeo Integration Instaled Styles and Core elements")
			
            GIMEO.IsAlreadyUsingGimeoStyles = true;
        } else {
            console.warn("GIMEO - Cannot Re apply GIMEO CSS styling because it already done");
        }

    },

    NewVideoAt: function(FileVideoSource, ElemenId) {
	
		try{
        if (GIMEO.IsAlreadyUsingGimeoStyles == false) {
            GIMEO.InitStyles();
        }

		
		GimeoCurrentFilesList = ElemenId;
        var uniqueIDRna = Math.random(23425) * 2023;
        const GimeoBlob = new Blob([FileVideoSource],{
            type: FileVideoSource.type
        })
        const GimeoVideoUrl = URL.createObjectURL(GimeoBlob);
        const GimeoVideoNameReplaced = FileVideoSource.name.replace(/.mp4/g, "").replace(/.ts/g, "").replace(/.mp3/g, "Audio").replace(/.mkv/g, "");
        const GIMEO_VIDEO = `
		 <div class="VIDEO_ON_LIST">
		 <video id="` + uniqueIDRna + `" src="` + GimeoVideoUrl + `" class="video_thumb">
		 </video>
		 <button onmousemove="event.target.parentNode.querySelector('video').play();event.target.parentNode.querySelector('video').volume=0" onmouseout="event.target.parentNode.querySelector('video').pause();event.target.parentNode.querySelector('video').currentTime=0" onclick="GIMEO.OpenVideo(event.target.parentNode.querySelector('video').src,'`+GimeoVideoNameReplaced+`')" class="video_play"> Watch </button>
		 <span class="vid_bottom">
			 <b class="video_name">` + GimeoVideoNameReplaced + `</b>
			</span>
		 </div>
`;

        document.getElementById(ElemenId).innerHTML += GIMEO_VIDEO;
		
			 }catch(error){
			 
			 alert("We cannot add this video: \n"+error.message);
		 }
		
    },

    GIM: function() {
        GIMEO_VIDEO_SCREEN_CODE = `


		 <canvas class="video_show_canvas" id="CanvasAmbientLight">
		 </canvas>
		<div class="GIMEO_VIDEO_SCREEN" id="GIMEO_VIDEO_SCREEN_SELF">
		
<div id="VideoApresentationIntro">
<center>
<span id="ContentBox">

</span>



</center>
</div>
		
		
			<div class="w_topbar">
			<b  class="w_title" id="VIDEO_TITLE_GM">GIMEO - Created By Gessandre</b> / <i id="percent_video"></i>
			<div class="w_buttons">
					  <button onclick="MinimizeRestoreVideo()" id="TG_BT" >Minimize</button>
					  <button onclick='document.body.removeChild(document.getElementById("MODAL_GIMEO_WINDOW"));'> &times </button>
			</div>
			</div>
				<div class="w_body">
<video src="" id="VIDEO_SRC" class="video_show" onclick="GIMEO_PLAYPAUSE()" onmousewheel="GIMEO.ChangeAudio(event,this.id)">
		 </video>
		 



	</div>	 
	</div>	 
		 <div class="w_video_controls">
		 <button class="w_control_button" id="PlayPauseButton" onclick="GIMEO_PLAYPAUSE()" >`+pause_icon+`</button>
		 <button class="w_control_button" onclick="DomGoFullScreen('GIMEO_VIDEO_SCREEN_SELF')"  >`+full_screen_icon+`</button>
		  <input type="range" min="0" max="100" id="VideoRange" /><span id="VideoTime"> 00:00 </span>
		   <input type="range" min="0" max="100" oninput="GIMEO.SetAudio(this.id)" id="VideoVolume" > <b class="vol"> `+audio_icon+ `</b></input>
		 </div>
`;
        var GIM = document.createElement("div");
        GIM.setAttribute("class", "MODAL_GIMEO_WINDOW");
        GIM.id = "MODAL_GIMEO_WINDOW";
        GIM.innerHTML = GIMEO_VIDEO_SCREEN_CODE;
        document.body.appendChild(GIM)
		 DomData("VIDEO_SRC").addEventListener('timeupdate',GIMEO_VideoData);
		 document.getElementById("VIDEO_SRC").ontimeupdate = function(){
	var current = DomData("VIDEO_SRC").currentTime;
	DomData("VideoTime").innerHTML=DomVideoGetTime(current);
	



	
	
	
	
	
	
	
	
	
}	
	

    },

    OpenVideo: function(VideoSource,GimeoVideoName) {
        GIMEO.GIM();
        const Screen = document.getElementById("VIDEO_SRC");
		var	is_already_playing_video  = false;
		var ScreenState = DomGetAttribute("MODAL_GIMEO_WINDOW","style")
		if(ScreenState == "MODAL_GIMEO_WINDOW_MINIMIZED"){
			DomSetAttribute("MODAL_GIMEO_WINDOW","style","MODAL_GIMEO_WINDOW")
		is_already_playing_video == true;
		} else {
		is_already_playing_video == false;	
			
		}
		
		
        //VIDEO_SRC 
        document.getElementById("MODAL_GIMEO_WINDOW").style.display = "";

        Screen.src = VideoSource;
		Screen.pause();
        // alert(VideoSource);
		
		if(is_already_playing_video == false){
       GIMEO.GIMEO_VIDEO_INTRO(GimeoVideoName)
		}
		
	// Seleciona o elemento <video>
var video = document.getElementById("VIDEO_SRC");
	//var meuElemento = DomData("VIDEO_TITLE_GM");
if (video != null) {	
	// Adiciona um evento para chamar a função updateFrames quando o vídeo é atualizado
video.addEventListener("timeupdate", updateFrames);

// Adiciona um evento para chamar a função calculateFPS quando o vídeo é reproduzido
video.addEventListener("play", function () {
  // Obtém o tempo inicial em milissegundos
  startTime = performance.now();

  // Chama a função calculateFPS a cada taxa de atualização definida
  setInterval(calculateFPS, refreshRate);
});
		
}		
		
		
		
    },
	

	
	
GIMEO_VIDEO_INTRO: function(State_Title){
var IntroPanel = DomData("VideoApresentationIntro")
var ContentBox_Inner = DomData("ContentBox")
var State_1 = `
<h1 id="IntroText" style="color:red;font-family:Impact;transform:scale(1.7);"  > GIMEO.JS </h1>
<h5 id="IntroText2">presents </h4>
`;
var State_2 = `
<h1>`+State_Title+`</h1>
`;
ContentBox_Inner.style.opacity="0";
DomSetAttribute("VIDEO_SRC","style","filter:blur(2.5px)")
setTimeout(function(){
DomData("VideoIntroSound").play();
ContentBox_Inner.style.opacity="1";
IntroPanel.style.opacity="1";

ContentBox_Inner.innerHTML=State_1;


setTimeout(function(){
ContentBox_Inner.style.opacity="0";
setTimeout(function(){
ContentBox_Inner.style.opacity="1";
ContentBox_Inner.innerHTML=State_2;


setTimeout(function(){
IntroPanel.style.opacity="0";
ContentBox_Inner.style.opacity="0";
ContentBox_Inner.innerHTML="";


DomSetAttribute("VIDEO_SRC","style","filter:blur(0px)")

},2000);




},2000);



DomData("VIDEO_SRC").play();
startAmbientLight()

},2000);



},2000);



},

	
	
	
	
	
	
	
	
SetAudio : function(id){
	var v = DomData(id);
	DomData("VIDEO_SRC").volume=v.value/100;
	
	
},

	
	ChangeAudio: function(event,id){
	if(currentVolume >= maxVolume){currentVolume = maxVolume;};
	if(currentVolume <= minVolume){currentVolume = minVolume;};
	event.preventDefault();
	if(event.deltaY == "-100"){
		currentVolume +=0.1;
		DomData("VideoVolume").value=round(DomGetPercent(currentVolume,1.0));
		DomData(id).volume=currentVolume;
		console.log(round(DomGetPercent(currentVolume,1.0)));
	}
	if(event.deltaY == "100"){
		currentVolume -=0.1;
		DomData("VideoVolume").value=round(DomGetPercent(currentVolume,1.0));
		DomData(id).volume=currentVolume;
		console.log(round(DomGetPercent(currentVolume,1.0)));
	}
	// if(currentVolume <= 0.0){
		// DomData("ShowVolume").innerHTML="Volume:Mute";	
	// } else {
	// DomData("ShowVolume").innerHTML=round(DomGetPercent(currentVolume,1.0))+"%";	
	// }
		// $message.config({singleton:true});
		// $message.info("Audio changed to "+round(DomGetPercent(currentVolume,1.0))+"%")
	
}
	

}




var	UpdateOnce = 0;
function GIMEO_VideoData(){
	UpdateOnce = 0;
var VideoPercent = round(DomSetVideoProgress("VIDEO_SRC","VideoRange","return"));
DomSetVideoProgress("VIDEO_SRC","VideoRange","ToDom");
DomData('percent_video').innerHTML=VideoPercent+"%";
if(UpdateOnce <=0){DomSetAttribute("VideoRange","oninput"," GIMEO_UpdateTime()") ;};UpdateOnce +=1;if(UpdateOnce >=3){UpdateOnce=3};

// DomData("VideoProgressbar").value= DomSetVideoProgressValue;
}
function GIMEO_UpdateTime(){
	DomSetVideoTime("VIDEO_SRC","VideoRange");
}
	

GIMEO_GLOBAL_IS_VIDEO_PLAYING=true;//True because when the video is loaded the autoplay attribute is added to the element.
DomData("VIDEO_SRC").onplay= function(){GIMEO_GLOBAL_IS_VIDEO_PLAYING=true}
DomData("VIDEO_SRC").pause= function(){GIMEO_GLOBAL_IS_VIDEO_PLAYING=false}
	function GIMEO_PLAYPAUSE(){
		var State1=resume_icon;
		var State2=pause_icon;
		// alert("Newstate")
		var StateShow=DomData("PlayPauseButton")
		// PlayPauseButton
		VideoInQuestion = DomData("VIDEO_SRC")
		
		if(GIMEO_GLOBAL_IS_VIDEO_PLAYING == true){
			GIMEO_GLOBAL_IS_VIDEO_PLAYING=false;
			VideoInQuestion.pause();
			StateShow.innerHTML=State1
			// alert(State1)
			
		} else {
			GIMEO_GLOBAL_IS_VIDEO_PLAYING=true;
			VideoInQuestion.play();
			StateShow.innerHTML=State2
			// alert(State2)
		}
		
		
		
	}
	
	

	
	
	


	
	
function MinimizeRestoreVideo(){
var	WindowState_2 = "MODAL_GIMEO_WINDOW_MINIMIZED";
var WindowState_1 = "MODAL_GIMEO_WINDOW";
var GimeoVideoModalWindow = DomData("MODAL_GIMEO_WINDOW");
var ButtonToToggle = DomData("TG_BT");
if(DomGetAttribute("MODAL_GIMEO_WINDOW","class") == WindowState_1){
	DomSetAttribute("MODAL_GIMEO_WINDOW","class",WindowState_2)
	ButtonToToggle.innerHTML="Restore Video";
	DomSetAttribute("TG_BT","style",`z-index: 289439284;position: fixed; top: -26px; left: 11px; width: 300px;`)
	document.querySelector(".w_video_controls").style="opacity:0";
	document.querySelector("#VideoVolume").style="opacity:0";
} else {
	DomSetAttribute("MODAL_GIMEO_WINDOW","class",WindowState_1)
	ButtonToToggle.innerHTML="Minimize";
	DomSetAttribute("TG_BT","style",` `)
	document.querySelector(".w_video_controls").style="opacity:1";
	document.querySelector("#VideoVolume").style="opacity:1";
	
}


}
	
	

	
	
	
// Define a taxa de atualização em milissegundos
var refreshRate = 900;

// Inicializa as variáveis para armazenar os quadros e o tempo
var frames = 0;
var startTime = 0;
var endTime = 0;

// Cria uma função para calcular o FPS
function calculateFPS() {
  // Obtém o tempo atual em milissegundos
  endTime = performance.now();

  // Calcula o FPS usando a fórmula: FPS = (quantidade de quadros) / (quantidade de segundos)
  var fps = frames / ((endTime - startTime) / 1000);

  // Mostra o resultado na tela

	var meuElemento = DomData("VIDEO_TITLE_GM");
if (meuElemento != null) {
  // o elemento existe
	  DomData("VIDEO_TITLE_GM").innerHTML="FPS: " + fps.toFixed(2) + " / GIMEO - Created By Gessandre";
} 
	  
	  

  // Reinicia as variáveis para a próxima checagem
  frames = 0;
  startTime = endTime;
}

// Cria uma função para incrementar os quadros a cada vez que o vídeo é atualizado
function updateFrames() {
  frames++;
}


	
var timerID;
function startAmbientLight() {

  canvas = DomData('CanvasAmbientLight');
  ctx = canvas.getContext('2d');
  console.log("BACKLIGHT IS ENABLED.")
  var video = DomData('VIDEO_SRC');

  video.onplay =  function() {
    // video.currentTime = 0;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

			
    timerID = window.setInterval(function() {
      ctx.drawImage(video, 0, 0)
	   console.log("Redering BACKLIGHT..")
    }, 30);
  };

  video.addEventListener('pause', function() {
    clearInterval(timerID);
  });

  video.addEventListener('ended', function() {
    clearInterval(timerID);
  });
  

  
  
  
  
  
}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	





// var VideoPreview = document.createElement("div")
// VideoPreview.setAttribute("class","GIMEO_VIDEO_SCREEN");

// document.body.appendChild(VideoPreview)

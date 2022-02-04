
window.onload=()=>{
    crearFormualrio();
}

    function crearFormulario(){
        
        contingut.innerHTML="";
        
        var form="<form  id=\"formulari_contacte\">"+
            "<p>Nom: <input type=\"text\" id=\"nom\" placeholder=\"Escriu el teu nom ...\"></p>"+
            "<p id=\"colores\">Colores:"+
                "Roig<input type=\"checkbox\" value=\"roig\" class=\"colors\">"+
                "Verd<input type=\"checkbox\" value=\"verd\" class=\"colors\">"+
                "Blanc<input type=\"checkbox\" value=\"blanc\" class=\"colors\">"+
                "Negre<input type=\"checkbox\" value=\"negre\" class=\"colors\">"+
            "</p>"+
            "<p>"+
                "<textarea id=\"mensaje\"> Tinc interés en el modelo </textarea>"+
            "</p>"+
            "<input type=\"submit\" id=\"boton_enviar\" value=\"Enviar\">"+
        "</form>"
        
        contingut.innerHTML=form;
        document.getElementById("boton_enviar").disabled=true;
        var f=document.getElementById("formulari_contacte");
        f.addEventListener("change", () => {document.getElementById("boton_enviar").disabled = !f.checkValidity()});
        validarFormulario();
        
            
    }
    function validarFormulario() {
        var inputs=document.getElementsByTagName("input");

        for(let i=0;i<inputs.length;i++){
            inputs[i].required=true;
            inputs[i].addEventListener("input",validarInputs,false);
        }
    }
    function validarInputs(){
    
        if(this.type=="text"){
            if (this.value.length > 2 ) {
                this.setCustomValidity("");
                this.style.outline = "1px solid green";
            }else {
                this.setCustomValidity("Minimo de 3 caracteres");
                this.style.outline = "1px solid red";
            }
        }else if(this.type=="checkbox"){
            var inputs=document.getElementsByTagName("input");
            var checkbox=[];
            for(let i=0;i<inputs.length;i++){
                if(inputs[i].type=="checkbox"){
                    checkbox.push(inputs[i]);
                }
            }
            let contador=0;
            for(let i=0;i<checkbox.length;i++){
                if(checkbox[i].checked){
                    contador++;
                }
            }
            if(contador>=2){
                for(let i=0;i<checkbox.length;i++){
                    if(!checkbox[i].checked){
                        checkbox[i].required=false;
                    }
                }
                for(let i=0;i<checkbox.length;i++){
                    checkbox[i].setCustomValidity("");
                }
            }else{
                for(let i=0;i<checkbox.length;i++){
                    checkbox[i].setCustomValidity("Selecciona almenos dos");
                }
            }
            
        }
    }
    




        
    //listeners

        // seccion 1. Valoracion inicial
        //----------------------------------------------------------
        document.getElementById('sexoinicio').addEventListener('change',modificarsexo);
        document.getElementById('edadinicio').addEventListener('input', modificaredad);
        document.getElementById('pesoinicio').addEventListener('input', modificarpeso);
        document.getElementById('tallainicio').addEventListener('input', modificartalla);
        
        document.getElementById('ascitis').addEventListener('change', updateChildPughScore);
        document.getElementById('bilirrubina').addEventListener('change', updateChildPughScore);
        document.getElementById('inr').addEventListener('change', updateChildPughScore);
        document.getElementById('encefalopatia').addEventListener('change', updateChildPughScore);

        document.getElementById('creatininaMeld').addEventListener('input', modificarcreatinina);
        document.getElementById('inrMeld').addEventListener('input', modificarinr);
        document.getElementById('bilirrubinaMeld').addEventListener('input', modificarbilirrubina);
        document.getElementById('sodioMeld').addEventListener('input', updateMeldScores);


        // seccion 2. Valoracion cardiologica
        //----------------------------------------------------------
        document.getElementById('funcional').addEventListener('change', calculateHfaPeefIndex);
        document.getElementById('morfologico').addEventListener('change', calculateHfaPeefIndex);
        document.getElementById('biomarcador').addEventListener('change', calculateHfaPeefIndex);
        document.getElementById('biomarcadorFA').addEventListener('change', calculateHfaPeefIndex);

        document.getElementById('diabetes').addEventListener('change', evaluateStressEcho);
        document.getElementById('hipertension').addEventListener('change', evaluateStressEcho);
        document.getElementById('dislipidemia').addEventListener('change', evaluateStressEcho);
        document.getElementById('tabaquismo').addEventListener('change', evaluateStressEcho);
        document.getElementById('historiaPatologiaCoronaria').addEventListener('change', evaluateStressEcho);
        document.getElementById('historiaFamiliarPatologiaCoronaria').addEventListener('change', evaluateStressEcho);
        document.getElementById('arteriopatiaPeriferica').addEventListener('change', evaluateStressEcho);
        document.getElementById('historiaInsuficienciaCardiaca').addEventListener('change', evaluateStressEcho);
        document.getElementById('historiaCerebrovascular').addEventListener('change', evaluateStressEcho);
       
        document.getElementById('resultadoStress').addEventListener('change', evaluateResultadoStressEcho);
        document.getElementById('estenosisDerecha').addEventListener('change', evaluateCoronariografia);
        document.getElementById('estenosisIzquierda').addEventListener('change', evaluateCoronariografia);
        document.getElementById('scoreCalcico').addEventListener('change', evaluateCoronariografia);
        document.getElementById('historiaPatologiaCoronaria').addEventListener('change', evaluateCoronariografia);
        
        document.getElementById('fraccionVD').addEventListener('change', evaluateCateterismoDerecho);
        document.getElementById('Tapse').addEventListener('input', evaluateCateterismoDerecho);
        document.getElementById('papsEstimada').addEventListener('input', evaluateCateterismoDerecho);
        
        document.getElementById('pshl').addEventListener('input', updategpvh);
        document.getElementById('pshe').addEventListener('input', updategpvh);

        
        // seccion 3. Pulmonar y via aérea
        //----------------------------------------------------------
        document.getElementById('fio2').addEventListener('input', evaluateAaGradient);
        document.getElementById('paco2').addEventListener('input', evaluateAaGradient);
        document.getElementById('pao2').addEventListener('input', evaluateAaGradient);

        document.getElementById('fev1').addEventListener('input', evaluatePulmonaryFunction);
        document.getElementById('fvc').addEventListener('input', evaluatePulmonaryFunction);
        
        // seccion 4. Renal
        //----------------------------------------------------------
        document.getElementById('falloHepatico').addEventListener('change', calculateCRRTScore);
        document.getElementById('donanteAsistolia').addEventListener('change', calculateCRRTScore);
        document.getElementById('retrasplante').addEventListener('change', calculateCRRTScore);
        document.getElementById('vasopresoresPreop').addEventListener('change', calculateCRRTScore);
        document.getElementById('crrtPreop').addEventListener('change', calculateCRRTScore);
        document.getElementById('kPreop').addEventListener('input', calculateCRRTScore);
        document.getElementById('bilirrubina').addEventListener('input', calculateCRRTScore);
        
        document.getElementById('currentCreatinine').addEventListener('input', calculateEGFR);
        document.getElementById('previousCreatinine').addEventListener('input', checkAKI);
        
        // seccion 5. Sangrado
        //----------------------------------------------------------
        document.getElementById('retrasplantehemato').addEventListener('change', calculateBleedingScore);
        document.getElementById('sexohemato').addEventListener('change', calculateBleedingScore);
        document.getElementById('edadhemato').addEventListener('input', calculateBleedingScore);
        document.getElementById('hemoglobina').addEventListener('input', calculateBleedingScore);
        document.getElementById('protrombina').addEventListener('input', calculateBleedingScore);
        document.getElementById('creatininahemato').addEventListener('input', calculateBleedingScore);
        document.getElementById('albumina').addEventListener('input', calculateBleedingScore);
        document.getElementById('plaquetas').addEventListener('input', calculateBleedingScore);
        
        // seccion 6. Nutricion
        //----------------------------------------------------------
        document.getElementById('hepatitisAlcoholicaAguda').addEventListener('change', calculateScoreNPT);
        document.getElementById('nutricionEnteral').addEventListener('change', calculateScoreNPT);
        document.getElementById('sobrecargaHidrica').addEventListener('change', habilitar);
        document.getElementById('imc').addEventListener('change', calculateScoreNPT);
        document.getElementById('perdidaPeso6Meses').addEventListener('change', calculateScoreNPT);
        document.getElementById('enfermedadAgudaSinAlimentacion').addEventListener('change', calculateScoreNPT);
        document.getElementById('capacidadAlimentarse').addEventListener('change', calculateScoreNPT);
        document.getElementById('menosMitadDieta5Dias').addEventListener('change', calculateScoreNPT);
        document.getElementById('perdidaPeso3_6Meses').addEventListener('change', calculateScoreNPT);
        
        document.getElementById('fatigabilidad').addEventListener('change', calculateFrailScore);
        document.getElementById('resistencia').addEventListener('change', calculateFrailScore);
        document.getElementById('deambulacion').addEventListener('change', calculateFrailScore);
        document.getElementById('pesofrail').addEventListener('change', calculateFrailScore);
        document.querySelectorAll('input[name="comorbilidad"]').forEach(element => {
            element.addEventListener('change', calculateFrailScore);
        });

        document.querySelectorAll('#autocuidado, #caminarCasa, #caminar200m, #subirEscaleras, #correr, #trabajoLigero, #trabajoModerado, #trabajoFuerte, #trabajosJardin, #relacionesSexuales, #ejercicioModerado, #ejercicioIntenso').forEach(element => {
                    element.addEventListener('change', calculateDukeScore);
                });

    // riesgos
    //-------------------------------------------------------
    function riskinicio(){
       const nhc = parseInt(document.getElementById('nhc').value);
       const sexo = document.getElementById('sexoinicio').selectedIndex;
       const sexodef = document.getElementById("sexoinicio").options[sexo].text;
       const edad = parseInt(document.getElementById('edadinicio').value);
       const peso = parseInt(document.getElementById('pesoinicio').value);
       const talla = parseInt(document.getElementById('tallainicio').value);
       const imc = parseInt(document.getElementById('imcinicio').value);
       const nombre = document.getElementById("nombre").value;
       const apellido1 = document.getElementById("primerApellido").value;
       const apellido2 = document.getElementById("segundoApellido").value;

       document.getElementById("Rnhc").innerHTML="<b>" + nhc +"</b>";
       document.getElementById("Rsexo").innerHTML="<b>" + sexodef +"</b>";
       document.getElementById("Redad").innerHTML="<b>" + edad +"</b>";
       document.getElementById("Rpeso").innerHTML="<b>" + peso +"</b>";
       document.getElementById("Rtalla").innerHTML="<b>" + talla +"</b>";
       document.getElementById("Rimc").innerHTML="<b>" + imc +"</b>";
       document.getElementById("Rnombre").innerHTML="<b>" + nombre +"</b>";
       document.getElementById("RprimerApellido").innerHTML="<b>" + apellido1 +"</b>";
       document.getElementById("RsegundoApellido").innerHTML="<b>" + apellido2 +"</b>";
        
    }
    function riskgeneral(){
        const child = parseInt(document.getElementById("childPughScore").value);
        let meld = (parseFloat(document.getElementById("meldScore").value)).toFixed(1);
        if (meld > 41 ){
            meld = 40;
        }
        let riesgo = parseFloat(document.getElementById("meldNaScore").value);
        if (riesgo >41){
            riesgo = 40;
        }
        let mensaje = "";
        if (riesgo > 39){
            mensaje ="Paciente con muy alta mortalidad preoperatoria. Mortalidad 71%";
        }else if(riesgo > 29){
            mensaje = "Paciente con alta mortalidad preoperatoria. Mortalidad 52%";
        }else if(riesgo > 20){
            mensaje = "Paciente con moderada mortalidad preoperatoria. Mortalidad 19%";
        }else if(riesgo > 10){
            mensaje ="Paciente con baja mortalidad preoperatoria. Mortalidad 6%";
        }else{
            mensaje = "Paciente con baja mortalidad preoperatoria. Mortalidad 2%";
        }
        document.getElementById("riskMessage").innerText = mensaje;
        riesgo = riesgo * 2.5;// 0-100
        cuadrado("cuadradoriesgo",riesgo);
        gauge("childcanvas",child,0,6,9,15);
        gauge("meldcanvas",meld,0,15,30,40);
    }   
    function riskVA(){
        const mallampati= parseInt(document.getElementById("mallampati").value);
        const apertura = parseInt(document.getElementById("apertura").value);
        const distancia = parseInt(document.getElementById("distancia").value);
        const movilidad = parseInt(document.getElementById("movilidadcolumna").value);
        const mordida = document.getElementById("mordida").value;
        const riesgo = parseInt((mallampati * 2 + apertura + distancia + movilidad)*100/12);
        cuadrado("cuadradovia", riesgo);
        gauge("viacanvas",riesgo,0,35,70,100);
        let texto1,texto2,texto3,texto4;
        let mensaje ="";
        if (apertura ==1){
            texto1=">4 cm";

        }else{
            texto1="<4cm";
        }
        if (movilidad ==1){
            texto2 = "Normal";
        }else{
            texto2 = "limitada";
        }
        if (distancia == 1){
            texto3 = ">6 cm";
        }else{
            texto3 = "<6 cm";
        }
        if (mordida ==1) {
            texto4 = "Los incisivos inferiores ocupan TOTALMENTE el labio superior";
        }else if (mordida == 2){
            texto4 = "Los incisivos inferiores ocupan PARCIALMENTE el labio superior";
        }else {
            texto4 ="Los incisivos inferiores NO LLEGAN al labio superior";
        }

        document.getElementById("txtmallampati").innerHTML="<h4> Mallampati </h4><br><h5>" + (mallampati +1).toString() + "</h5>";
        document.getElementById("txtdistancia").innerHTML="<h4> Dist.Tiroment. </h4><br><h5>" + texto3 + "</h5>";
        document.getElementById("txtmovilidad").innerHTML="<h4> Mov. Cervical </h4><br><h5>" + texto2 + "</h5>";
        document.getElementById("txtapertura").innerHTML="<h4> Apert. Bucal </h4><br><h5>" + texto1 + "</h5>";
        document.getElementById("viaMessage").innerHTML = "Test Mordida: " + texto4;
    }
    function riskcardio(){
        let colorinsuficiencia;
        let colorisquemia;
        let colorparada;
        let colorderecho
        // riesgo disfuncion. Escala HAFF
        const haff = parseInt(document.getElementById("indiceHfaPeef").value);
        let mensajeHAFF="";
        if (haff>=5){
            mensajeHAFF="Paciente con muy elevado riesgo de insuficiencia cardiaca. Considera iniciar tratamiento con levosimedan dosis de carga 5 mcgr/kg y PC 0,1 mcgr/kg/min ó incluso adrenalina en PC inicio a 0,1 mcg/kg/min.";
            colorinsuficiencia ="rojo";
        }else if (haff > 2){
            mensajeHAFF="Paciente con riesgo moderado de presentar insuficiencia cardiaca intraoperatoria. Considera iniciar tratamiento con levosimedan dosis de carga 5 mcgr/kg y PC 0,1 mcgr/kg/min y preparar PC adrenalina";
            colorinsuficiencia="amarillo";
        }else{
            mensajeHAFF="Paciente con bajo riesgo de presentar insuficiencia cardiaca intraoperatoria";
            colorinsuficiencia = "verde";
        }
        // riesgo isquemia. Fact. riesgo no revasc.
        /*
        RICR: 
            0:<1%
            1-2: 1-5%
            >=3: > 5%
        Eco Stress
            +:10%
            -:1-5%
        AngioTAC:
            score calcico > 100: 7%
            Estenosis coronaria signif.: 30%
        */
        /* valor riesgo
            1%: RICR <=2 || eco stress normal || revasc
            8%: RICR >=3 || Ca score >100 || ecostress moderado
            12%: Ecostress severo
            30%: angiotac estenosis
        */
        let ricr = 1; // un punto por cirugia mayor
        let mensajeCI = "";
        let valorriesgo = 0;
        
        // calculo de RCRI despues se modifica con PC
        const creatinina = parseFloat(document.getElementById("creatininaMeld").value);
        const isquemia = document.getElementById('historiaPatologiaCoronaria').checked;
        const cerebro = document.getElementById('historiaCerebrovascular').checked;
        const insuficiencia = document.getElementById('historiaInsuficienciaCardiaca').checked;
        const diabetes = document.getElementById('diabetes').checked;
        
        ricr += (creatinina >=2) ? 1:0;
        ricr += (isquemia) ? true:false;
        ricr += (cerebro) ? true:false;
        ricr += (insuficiencia) ? true:false;
        ricr += (diabetes) ? true:false;
        
        if (ricr >=3){
            mensajeCI ="Paciente con factores de riesgo que podrian indicar alto riesgo de isquemia intraoperatoria (>5%). Seria aconsejable ampliar estudio. En pacientes de alto riesgo es aconsejable dejar una guía en arteria femoral izquierda por si es necesario colocar BCIAo intraoperatorio. Evita fármacos como la terlipresina para el tratamiento del sd hepatorenal prefiriendo en este caso noradrenalina. Considera el uso de betabloqueantes intraoperatorios, Esmolol inicio a 50 mcgr/kg/min, vigilando la función derecha sobre todo en pacientes con hipertensión pulmonar. En hipertension portal puedes usar somatostatina u octeotrido y no se aconseja terlipresina";
            valorriesgo = 10;
            colorisquemia="rojo"
        }else if (ricr >=1){
            mensajeCI ="Paciente con factores de riesgo que indican riesgo moderado (1-5%) de sufrir eventos intraoperatorios isquémicos. Aconsejable ampliar estudio. En pacientes de riesgo moderado evita fármacos como la terlipresina para el tratamiento del síndrome hepatorenal (mejor usar la noradrenalina) o la hipertensión portal (mejor somatostatina u octeotrido)";
            valorriesgo=5;
            colorisquemia="amarillo";
        } else {
            mensajeCI ="Bajo riesgo de eventos isquemicos intraoperatorios (<1%)"
            valorriesgo=1;
            colorisquemia="verde";
        }

        // esta revascularizadoo y estable?
        const revasc = parseInt(document.getElementById("resultadoCoronariografia").value);
        
        if (revasc == 2 || revasc==0) {
            // revascularizado o no indicado. riesgo leve /moderado
            // RCRI
            valorriesgo = 1;
            colorisquemia="verde";
        }else if (revasc == 1){
            // no puede realizarse revasc incompleta. Riesgo moderado/elevado
            // chequear eco stress
            const resultadoStress = parseInt(document.getElementById('resultadoStress').value);
                if (resultadoStress ==1 || resultadoStress==2){
                    // no concluyente o no puede realizarse. check angiotac
                    const estenosisDerecha = document.getElementById('estenosisDerecha').checked;
                    const estenosisIzquierda = document.getElementById('estenosisIzquierda').checked;
                    const scoreCalcico = document.getElementById('scoreCalcico').checked;
                    const realizacion = document.getElementById('norealizado').checked;
                        if (estenosisDerecha || estenosisIzquierda){
                            mensajeCI="Los pacientes con estenosis coronaria significativa no revascularizada presentan un riesgo de eventos isquémicos intraoperatorios del 30% si no han sido revascularizados. Es aconsejable dejar una guía en arteria femoral izquierda por si es necesario colocar BCIAo intraoperatorio. Evita fármacos como la terlipresina para el tratamiento del sd hepatorenal prefiriendo en este caso noradrenalina. Considera el uso de betabloqueantes intraoperatorios, Esmolol inicio a 50 mcgr/kg/min, vigilando la función derecha sobre todo en pacientes con hipertensión pulmonar. En hipertension portal puedes usar somatostatina u octeotrido y no se aconseja terlipresina";
                            valorriesgo = 30;
                            colorisquemia="rojo";
                        } else if ( scoreCalcico){
                            mensajeCI="En ausencia de lesiones coronarias significativas un score calcico por encima de 100 asocia un riesgo de eventos isquémicos en torno a un 8% si no es revascularizado. Evita fármacos como la terlipresina para el tratamiento del síndrome hepatorenal (mejor usar la noradrenalina) o la hipertensión portal (mejor somatostatina u octeotrido).";
                            valorriesgo = 8;
                            colorisquemia="amarillo";
                        } else if (realizacion) {
                            // elevado
                            mensajeCI = "En ausencia de coronariografía un paciente con ecostress positivo presenta un riesgo de eventos isquemicos que oscila entre el 10% si las lesiones coronarias no son significativas y el 30% si lo son. Evita fármacos como la terlipresina para el tratamiento del sd hepatorenal prefiriendo en este caso noradrenalina. Considera el uso de betabloqueantes intraoperatorios, Esmolol inicio a 50 mcgr/kg/min, vigilando la función derecha sobre todo en pacientes con hipertensión pulmonar. En hipertension portal puedes usar somatostatina u octeotrido y no se aconseja terlipresina";
                            valorriesgo = 15;
                            colorisquemia="rojo";
                        }else{
                            // normal
                            mensajeCI="El riesgo de isquemia intraoperatoria en estos pacientes se situa entre el 1-5%. Evita fármacos como la terlipresina para el tratamiento del síndrome hepatorenal (mejor usar la noradrenalina) o la hipertensión portal (mejor somatostatina u octeotrido).";
                            valorriesgo=3;
                            colorisquemia="verde";
                        }
                }else if (resultadoStress == 4){
                    // riesgo bajo
                    mensajeCI = "El riesgo de isquemia intraoperatoria en este grupo de pacientes se situa por debajo del 1%";
                    valorriesgo = 1;
                    colorisquemia="verde";
                }else{
                    // resultado = 3. riesgo moderado o alto
                    const selectedOptionText = document.getElementById('resultadoStress').options[document.getElementById('resultadoStress').selectedIndex].text;
                    if (selectedOptionText == "WMSI 1.1-1.7"){
                        //riesgo moderado 3%
                        mensajeCI =  "El riesgo de isquemia intraoperatoria en este grupo de pacientes se situa en torno al 3%. Evita fármacos como la terlipresina para el tratamiento del síndrome hepatorenal (mejor usar la noradrenalina) o la hipertensión portal (mejor somatostatina u octeotrido).";
                        valorriesgo=3;
                        colorisquemia="amarillo";
                    }else{
                        //riesgo elevado 10%
                        mensajeCI =  "El riesgo de isquemia intraoperatoria en este grupo de pacientes se situa  en torno al 7%. Evita fármacos como la terlipresina para el tratamiento del síndrome hepatorenal (mejor usar la noradrenalina) o la hipertensión portal (mejor somatostatina u octeotrido).";
                        valorriesgo=7;
                        colorisquemia="amarillo";
                    }
                } 
           
        }
        // riesgo parada sd reperfusión. Indice CARI QTc, edad, sexo, MELD
        /* 4-5 elevado
           2-3 moderado
           0-1 bajo
        */
        const QTc= parseInt(document.getElementById("qtc").value);
        const edad = parseInt(document.getElementById("edadinicio").value);
        const MELD = parseInt(document.getElementById("meldScore").value);
        const sexo = parseInt(document.getElementById("sexoinicio").value);
        let CARI = 0;
        let mensajePC="";
        CARI += (QTc >= 480) ? 2 : 0;
        CARI += (edad >=65) ? 1 : 0;
        CARI += (MELD >=30) ? 1 : 0;
        CARI += (sexo ==1) ? 1 : 0;
        if (CARI >=4){
            colorparada="rojo";
            mensajePC = "Paciente con riesgo elevado de arritmia grave o parada intraoperatoria. Considera evitar fármacos que prolonguen el QT como la amiodarona, quinolonas, droperidol, macrolidos y ondasetron. Considera realizar profilaxis con la administración de 2gr iv de sulfato de magnesio";
        }else if (CARI ==2 || CARI ==3 ){
            colorparada="amarillo";
            mensajePC = "paciente con riesgo moderado de parada intraoperatoria.Considera evitar fármacos que prolonguen el QT como la amiodarona, quinolonas, droperidol, macrolidos y ondasetron. Considera realizar profilaxis con la administración de 2gr iv de sulfato de magnesio."
        }else{
            colorparada="verde"
            mensajePC = "Paciente con bajo riesgo de parada intraoperatoria";
        };
        // riesgo de disfuncion derecha
        // TAPSE/PASP en traspl hepatico
        /*
        >0.32 leve 
        0.19-0.32 mod
        < 0.19 severo
        */

        let mensajeVD="";
        const paps = parseInt(document.getElementById("papsEstimada").value);
        const tapse = parseInt(document.getElementById("Tapse").value);
        const indiceTP = (tapse/paps).toFixed(2);
        if (indiceTP <0.19){
            colorderecho="rojo";
            mensajeVD ="Muy alto riesgo de disfunción severa de VD en el intraoperatorio. Considera monitorizar CAP, si PAPm >=45-50 contraindica el implante. Considera iniciar PC de milrinona a 0.5 mcgr/kg/min, subir FiO2 e hiperventilar para paCO2 30-35 mmHg";
        }else if (indiceTP >= 0.19&& indiceTP<=0.32){
            mensajeVD ="Riesgo moderado de disfunción severa de VD en el intraoperatorio. Considera monitorizar CAP, si PAPm >=45-50 contraindica el implante. Considera iniciar PC de milrinona a 0.5 mcgr/kg/min, subir FiO2 e hiperventilar para paCO2 30-35 mmHg";
            colorderecho="amarillo";
        }else{
            mensajeVD ="Riesgo leve de disfunción de VD";
            colorderecho="verde";
        }

        let recomendaciones="<ul>";
        recomendaciones = "<li><b>Valoración de riesgo de I. Cardiaca:</b> " + mensajeHAFF +"</li>";
        recomendaciones = recomendaciones + "<li><b>Valoración del riesgo de isquemia:</b> " + mensajeCI + "</li>";
        recomendaciones = recomendaciones + "<li><b>Valoración del riesgo de parada intraoperatoria:</b> " + mensajePC + "</li>";
        recomendaciones = recomendaciones + "<li><b>Valoración del riesgo de disfunción derecha:</b> " + mensajeVD + "</li>";
        recomendaciones = recomendaciones + "</ul>";
        // actualiza pagina
        gauge("PCcanvas",CARI,0,1,3,5);
        gauge("VIcanvas",haff,0,3,5,6);
        gauge("CIcanvas",valorriesgo,0,5,15,30);
        gauge("VDcanvas",indiceTP,0.8,0.31,0.19,0);
        if (colorderecho=="rojo" || colorisquemia=="rojo" || colorinsuficiencia=="rojo"){
            //rojo
            cuadrado("cuadradocardio",90);
        }else if (colorderecho="verde" && colorisquemia=="verde" && colorinsuficiencia =="verde" && colorparada =="verde"){
            //verde
            cuadrado("cuadradocardio",30);
        }else{
            //amarillo
            cuadrado("cuadradocardio",60);
        }
        document.getElementById("cardioMessage").innerHTML=recomendaciones;
        
    }
    function riskneumo(){
        // sd hepato pulmonar
        const fio2 = parseFloat(document.getElementById('fio2').value) || 0.21;
        const paco2 = parseFloat(document.getElementById('paco2').value) || 35;
        const pao2 = parseFloat(document.getElementById('pao2').value) || 95;
        const edad = parseInt(document.getElementById('edadinicio').value) || 50;
        const aaGradient = (713 * fio2) - (paco2 / 0.8) - pao2;
        let recomiendashp;
        
        if ((edad >=65 && aaGradient >=20 )|| (edad < 65 && aaGradient>=15)){
            if (pao2 >= 80){
                //leve
                recomiendashp = "Paciente con Sd Hepatopulmonar leve";
            }else if (pao2 >=60){
                recomiendashp = "Paciente con Sd Hepatopulmonar moderado. Considera usar octeotrido 50 mg en bolo lento iv";
                //moderado
            }else if (pao2 >=50){
                // severa
                recomiendashp = "Paciente con Sd Hepatopulmonar severo. Considera usar octeotrido 50 mg en bolo lento iv y/o azul de metileno en bolo lento iv (15 min) 3 mg/kg";
                
            }else{
                //muy severa
                recomiendashp = "Paciente con Sd Hepatopulmonar muy severo. Considera usar octeotrido 50 mg en bolo lento iv y/o azul de metileno en bolo lento iv (15 min) 3 mg/kg";
                
            }
        } else {
            //normal
                recomiendashp="Paciente sin Sd Hepatopulmonar."
        }
        //HTP
        const papm = parseInt(document.getElementById("papmSelect").value);
        let papvalue;
        let recomiendapapm;
            if (papm == 0){
                // <25 normal
                recomiendapapm = "Presión pulmonar normal";
                papvalue=24;
            }else if (papm == 1){
                // 25-34 leve
                recomiendapapm = "HTP leve. Evita factores agravantes como la hipercapnia o la hipoxia y fármacos como la amiodarona, el tramadol o inhibidores recaptacion serotonina";
                papvalue=30;
            }else if (papm == 2){
                // 35-44 moderado
                recomiendapapm ="HTP moderada. Considera monitorizar con CAP. Evita factores agravantes como la hipercapnia o la hipoxia y fármacos como la amiodarona, el tramadol o inhibidores recaptacion serotonina. Considera usar sildenafilo en bolo lento de 10 mg iv y/o epoprostenol iv en pc inicio a 2 nanogr/kg/min y aumentar 2 nanogr/kg/min cada 15 min hasta 15-30 nanogr/kg/min";
                papvalue=40;
            }else{
                //>=45 severo
                recomiendapapm = "HTP severa. Considera monitorizar con CAP. Valores de PAPm en torno a 50 contraindican el trasplante. Considera usar sildenafilo en bolo lento de 10 mg iv y/o epoprostenol iv en pc inicio a 2 nanogr/kg/min y aumentar 2 nanogr/kg/min cada 15 min hasta 15-30 nanogr/kg/min";
                papvalue = 45;
            }
        // pfr
        document.getElementById("lblpfr").innerHTML="<b>Pruebas de Función respiratoria:</b><br>" + document.getElementById("pulmonaryFunctionMessage").innerHTML;
           
        gauge("SHPcanvas",pao2,100,60,50,30);
        gauge("HPPcanvas",papvalue,20,25,35,45);
        let color=0;
        if (papvalue == 45 || pao2 <=50){
            color = 90;
        }else if (papvalue <= 30 && pao2 >=80){
            color = 20;
        }else{
            color = 55;
        }
        cuadrado("cuadradopulmon",color);
        document.getElementById("neumoMessage").innerHTML="<ul><li><b>Valoración del sd hepatopulmonar: </b>" + recomiendashp + "</li><li><b>Valoración de hipertensión portopulmonar:</b> " + recomiendapapm + "</li></ul>";
    }
    function risksangrado(){
        // score, cirugia previa e HTPortal
        // chequear medicacion
        let score = 0;
        const retrasplante = document.getElementById('retrasplantehemato').value;
        const sexo = document.getElementById('sexoinicio').value;
        const edad = parseFloat(document.getElementById('edadinicio').value);
        const hemoglobina = parseFloat(document.getElementById('hemoglobina').value);
        const protrombina = parseFloat(document.getElementById('protrombina').value);
        const creatinina = parseFloat(document.getElementById('creatininahemato').value);
        const albumina = parseFloat(document.getElementById('albumina').value);
        const plaquetas = parseFloat(document.getElementById('plaquetas').value);
        
        if (retrasplante == '1') score += 1;
        if (hemoglobina < 10) score += 1;
        if (edad > 40) score += 1;
        if (protrombina >2) score += 2;
        if (sexo == '1' && creatinina >= 1.36) score += 1;
        if (sexo == '2' && creatinina >= 1.28) score += 1;
        if (plaquetas < 70000) score += 1;
        if (albumina < 24) score += 1;
        gauge("sangradocanvas",score,0,2,2,8);
        let mensajesangrado;
        let mensajeportal;
        let color;

        if (score>=3){
            // riesgo alto. avisar a hematologia, preactivar protocolo hemrragia masiva corregir hb, plaqu, INR
            mensajesangrado = "Paciente con riesgo elevado de sangrado intraoperatorio. Considera avisar a hematología para disponer de concentrados de hematies en nevera, pedir 2 gr de fibrinogeno y 2 viales de prothromplex del dispensador, y corregir plaquetas e INR previo a la fase de disección. Preactiva el protocolo de hemorragia masiva.";
        }else{
            // riesgo bajo
            mensajesangrado = "Paciente sin alteraciones analíticas que lo pongan en riesgo para sangrado intraoperatorio."
        }
        const pe= document.getElementById('pshe').value;
        const pl= document.getElementById('pshl').value;
        const gpvh = pe-pl;
        gauge("portalcanvas",gpvh,0,9,12,25);

        if (gpvh >=12){
            //grave, vasopresina terlipresina, bypass
            //vasopresina 4UI/h, terlipresina bolo 1 mg PC 2 mcgr/kg/h
            mensajeportal="Paciente con HTP severa, riesgo de sangrado intraoperatorio. Considera iniciar tratamiento con vasopresina 4UI/h, o (especialmente si presenta sindrome hepatorenal) terlipresina bolo 1 mg seguido de PC a 2 mcgr/kg/h. Es posible que pueda requerir transfusión importante, considera preactivar protocolo de hemorragia masiva.";

        }else if (gpvh>=10){
            //moderada vasopresina terlipresina
            mensajeportal="Paciente con HTP moderada, riesgo de sangrado intraoperatorio. Considera iniciar tratamiento con vasopresina 4UI/h, o (especialmente si presenta sindrome hepatorenal) terlipresina bolo 1 mg seguido de PC a 2 mcgr/kg/h. Es posible que pueda requerir transfusión importante, considera preactivar protocolo de hemorragia masiva.";

        }else if (gpvh>=6){
            //leve
            mensajeportal="paciente con HTP leve. Vigilancia de sangrado en fase de disección."
        }else{
            //no HTP
            mensajeportal="Paciente sin hipertensión portal";
        }

        if (parseInt(document.getElementById("cirugiaAbdominalPrevia").value) == 1 || parseInt(document.getElementById("peritonitisBacterianaEspontanea").value == 1)){
            // cirugia o peritonitis alto riesgo
            document.getElementById("cirugiasprevias").innerHTML = "Paciente con mayor riesgo de sangrado por cirugía abdominal previa y/o episodios de peritonitis bacteriana.";
           
        }

        if (gpvh>=10 || score>=3){
            color=90;
        }else if (gpvh<9 && score<2){
            color = 20
        }else{
            color = 55;
        }
        cuadrado("cuadradosangrado",color);
        document.getElementById("sangreMessage").innerHTML="<ul><li><b>Riesgo de sangrado: </b>" + mensajesangrado + "</li><li><b>Hipertensión portal: </b>" + mensajeportal + "</li></ul>";
    }
    function risknefro(){
            // filtrado
            const eGFR = parseInt(document.getElementById('egfrValue').innerText);
            let lblefgr;
    
            if (eGFR >= 90) {
               lblefgr = "Grado 1";
            } else if (eGFR >= 60) {
                lblefgr = "Grado 2";
            } else if (eGFR >= 45) {
                lblefgr = "Grado 3a";
            } else if (eGFR >= 30) {
                lblefgr = "Grado 3b";
            } else if (eGFR >= 15) {
                lblefgr = "Grado 4";
            } else {
                lblefgr = "Grado 5";
            }   
            gauge("eFGRcanvas",eGFR,150,30,15,0);
            document.getElementById("grado").innerHTML=lblefgr;
            // sd hepatorenal
            let mensajeaki;
            let coloraki;
            const divaki = document.getElementById('akiMessage').innerHTML;
            document.getElementById("riesgoAKI").innerHTML= divaki;
            if (divaki !="AKI / Sd Hepatorrenal poco probable"){
                mensajeaki = "Paciente con Sd Hepatorenal/AKI. No olvidar reponer las pérdidas de liq. ascitico con 10 gr de albumina por cada litro evacuado. Considera comenzar tratamiento con terlipresina bolo 1 mg seguido de PC a 2 mcgr/kg/h, si no es posible considera la PC de noradrenalina comenzando a 0,1 mcgr/kg/min.";
                coloraki=90;
            }else{
                mensajeaki ="Paciente con bajo riesgo de sd hepatorenal/AKI"
                coloraki=20;
            }
            // Agopian
            const falloHepatico = parseInt(document.getElementById('falloHepatico').value);
            const donanteAsistolia = parseInt(document.getElementById('donanteAsistolia').value);
            const retrasplante = parseInt(document.getElementById('retrasplante').value);
            const vasopresoresPreop = parseInt(document.getElementById('vasopresoresPreop').value);
            const crrtPreop = parseInt(document.getElementById('crrtPreop').value);
            const kPreop = parseFloat(document.getElementById('kPreop').value) || 3.5;
            const bilirrubina = parseFloat(document.getElementById('bilirrubinaCRRT').value) || 5;

            let score = 0;
            if (falloHepatico === 1) { // Crónico
                if (donanteAsistolia === 1) score += 10;
                if (retrasplante === 1) score += 9;
                if (vasopresoresPreop === 1) score += 7;
                if (crrtPreop === 1) score += 6;
                score += Math.floor((kPreop - 3.5) / 0.12);
                //score += Math.floor(isquemiaFrio / 0.72);
                score += Math.floor(bilirrubina / 6);
            } else if (falloHepatico === 2) { // Agudo
                if (donanteAsistolia === 1) score += 10;
                if (vasopresoresPreop === 1) score += 7;
                if (crrtPreop === 1) score += 28;
                //score += Math.floor(isquemiaFrio / 0.72);
                score += Math.floor(bilirrubina / 6);
            }
            let colorcrrt=20;
            let mensajecrrt = "";
            if (score >= 42 && falloHepatico===1){
                mensajecrrt = "Paciente con riesgo elevado de requerir CRRT intraoperatoria";
                colorcrrt=90;
            }else if (score >=28 && falloHepatico ===2){
                mensajecrrt = " Paciente con riesgo elevado de requerir CRRT intraoperatoria. Considera la canalización de Shaldon en lugar de introductor de CAP";
                colorcrrt=90
            }else if (score <42  && falloHepatico ===1){
                mensajecrrt = " Paciente con riesgo leve de requerir CRRT intraoperatoria.";
                colorcrrt =20;
            } else if (score <28 && falloHepatico ===2){
                mensajecrrt = " Paciente con riesgo leve de requerir CRRT intraoperatoria.";
                colorcrrt=20;
            }else{
                mensajecrrt = "Paciente con riesgo moderado de necesitar CRRT intraoperatoria. Considera usar Shaldon en lugar de introductor de CAP"
                colorcrrt = 50;
            };
            
            gauge ("CRRTcanvas",score,0,28,42,60);
            let color=20;
            if (eGFR<=45 || coloraki==90 || colorcrrt==90){
                color=90;
            }else if(eGFR>=90 && coloraki ==20 && colorcrrt==20){
                color=20;
            }else{
                color=55;
            }
            cuadrado("cuadradorenal",color);
            document.getElementById("renalMessage").innerHTML="<ul><li><b>Filtrado Glomerular:</b> Paciente con eFGR de " + eGFR +" mL/min/1.73m². " + lblefgr + "</li><li><b>Riesgo Sd Hepatorenal/AKI: </b>" +mensajeaki+"</li><li><b>Riesgo de requerir CRRT intraoperatorio: </b>" + mensajecrrt + "</li></ul>";
    }

    function risknutricion(){

    }
                // graficos
    //----------------------------------------------------------
   function gauge(canvas,valor,limite1,limite2,limite3,limite4) {
        var ctx = document.getElementById(canvas).getContext("2d");
    new Chart(ctx, {
        type: "tsgauge",
        data: {
            datasets: [{
                backgroundColor: ["#0fdc63", "#fd9704", "#ff7143"],
                borderWidth: 0,
                gaugeData: {
                    value: valor,
                    valueColor: "#ff7143"
                },
                gaugeLimits: [limite1, limite2, limite3, limite4]
            }]
        },
        options: {
                events: [],
                showMarkers: true
        }
    });
   }
   function cuadrado(identificador, valor){
        let texto = "";
        const cuadrado = document.getElementById(identificador); 
        let color = "green";
    
        if (valor < 34){
            color = 'green';
            texto = "Leve"
        } else if (valor<67){
            color = 'yellow'; 
            texto = "Moderado"
        } else{
            color = 'red'; 
            texto = "Elevado"
        }
        
        cuadrado.innerHTML ="<h3>"+ texto+ "</h3>";
        cuadrado.style.backgroundColor = color; 
        cuadrado.style.color = color === 'yellow' ? 'black' : 'white';
    }
    // funciones
     //----------------------------------------------------------
     //----------------------------------------------------------

     // comunes
        function showNextSection(currentSection) {
            document.getElementById('section' + currentSection).classList.remove('active');
            document.getElementById('section' + (currentSection + 1)).classList.add('active');
           
            if (currentSection === 6) {
              riskinicio();
              riskgeneral();
              riskVA();
              riskcardio();
              riskneumo();
              risksangrado();
              risknefro();
            }
            if (currentSection==3){
                calculateEGFR();
                calculateCRRTScore();
            }
        }

        function showPreviousSection(currentSection) {
            document.getElementById('section' + currentSection).classList.remove('active');
            document.getElementById('section' + (currentSection - 1)).classList.add('active');
        }
       
        function saveJSON() {
            var formData = form2js('valoracionForm', '.', true,
				function(node)
				{
					if (node.id && node.id.match(/callbackTest/))
					{
						return { name: node.id, value: node.innerHTML };
					}
				});

		document.getElementById('testArea').innerHTML = JSON.stringify(formData, null, '\t');

        }

        function loadJSON() {

        }
        // generar PDF
        //https://raw.githack.com/MrRio/jsPDF/master/index.html
        function generatePDF() {
            /*const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'pt', 'a4');
           
           const pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
            const pageWidth =  pdf.internal.pageSize.width || pdf.internal.pageSize.getWidth();
            
            pdf.setLineWidth(0.5);
            pdf.line(10, 5, pageWidth - 10, 5);
            pdf.line(10, 35, pageWidth - 10, 35);
            pdf.line(10, 250, pageWidth - 10, 250);
            pdf.line(10, 5, 10, 250);
            pdf.line(pageWidth - 10, 5, pageWidth - 10, 250);

            pdf.setFontSize(10);
            pdf.text(20, 20, 'Informe de valoración preoperatoria');
            pdf.text(400, 20, 'Fecha de valoración: ' + new Date().toLocaleDateString());
           
            pdf.text(20, 40, 'NHC: ' + document.getElementById('nhc').value);
            pdf.text(50, 40, 'Sexo: ' + document.getElementById('sexoinicio').value);
            pdf.text(110, 40, 'Edad: ' + document.getElementById('edadinicio').value);
            pdf.text(170, 40, 'Peso: ' + document.getElementById('pesoinicio').value);
            pdf.text(240, 40, 'Talla: ' + document.getElementById('tallainicio').value);
            pdf.text(310, 40, 'IMC: ' + document.getElementById('imcinicio').value);

            pdf.text(20, 60, 'Nombre: ' + document.getElementById('nombre').value);
            pdf.text(20, 200, 'Primer apellido: ' + document.getElementById('primerApellido').value);
            pdf.text(20, 300, 'Segundo apellido: ' + document.getElementById('segundoApellido').value);
           
           
           pdf.save('formulario_valoracion.pdf');
        */}
        
    // seccion 1.Valoracion inicial
    //----------------------------------------------------------
        function modificarsexo() {
            const sexo = document.getElementById('sexoinicio').value;
            document.getElementById('sexohemato').value = sexo;

        }

        function modificaredad() {
            const edad = document.getElementById('edadinicio').value;
            document.getElementById('edadhemato').value = edad;
            document.getElementById('edadeco').value = edad;
            evaluateAaGradient();
            evaluateStressEcho();

        }

        function modificarpeso() {
           // calculo IMC
           const peso = parseFloat(document.getElementById('pesoinicio').value);
           const talla = parseFloat(document.getElementById('tallainicio').value) / 100; // Convertir cm a metros
       
           if (peso && talla) {
               const imc = peso / (talla * talla);
               document.getElementById('imcinicio').value = imc.toFixed(2);
           }
           // calculo requerimientos
           calculoRequerimientos();

        }

        function modificartalla() {
            // calculo IMC
            const peso = parseFloat(document.getElementById('pesoinicio').value);
            const talla = parseFloat(document.getElementById('tallainicio').value) / 100; // Convertir cm a metros
        
            if (peso && talla) {
                const imc = peso / (talla * talla);
                document.getElementById('imcinicio').value = imc.toFixed(2);
            }
            // calculo requerimientos
           calculoRequerimientos();
        }

        function modificarcreatinina() {
            const creatinina = parseFloat(document.getElementById('creatininaMeld').value);
            // modifica valores de Cr en el resto del formulario
            document.getElementById('currentCreatinine').value = creatinina;
            document.getElementById('previousCreatinine').value = creatinina;
            document.getElementById('creatininahemato').value = creatinina;
            // cambia MELD
            updateMeldScores();
            // cambia EFGr
            calculateEGFR();
            // cambia hemato
            calculateBleedingScore();

        }

        function modificarinr() {
            const inr = parseFloat(document.getElementById('inrMeld').value);
            // cambia MELD
            updateMeldScores();
            // modifica valores de INR en el resto del formulario
            document.getElementById('protrombina').value = inr;
            
        }

        function modificarbilirrubina() {   
            const bilirrubina = parseFloat(document.getElementById('bilirrubinaMeld').value);
            // cambia MELD
            updateMeldScores();
            // modifica valores de bilirrubina en el resto del formulario
            document.getElementById('bilirrubinaCRRT').value = bilirrubina;
        }


        function updateChildPughScore() {
            const ascitis = parseInt(document.getElementById('ascitis').value);
            const bilirrubina = parseInt(document.getElementById('bilirrubina').value);
            const inr = parseInt(document.getElementById('inr').value);
            const encefalopatia = parseInt(document.getElementById('encefalopatia').value);

            const totalScore = ascitis + bilirrubina + inr + encefalopatia;
            document.getElementById('childPughScore').value= totalScore;

            const escalaChild = document.getElementById('escalaChild');
            if (totalScore >= 5 && totalScore <= 6) {
                escalaChild.value = "1";
                document.getElementById('childA').classList.add('highlight');
                document.getElementById('childB').classList.remove('highlight');
                document.getElementById('childC').classList.remove('highlight');
            
            } else if (totalScore >= 7 && totalScore <= 9) {
                escalaChild.value = "2";
                document.getElementById('childB').classList.add('highlight');
                document.getElementById('childA').classList.remove('highlight');
                document.getElementById('childC').classList.remove('highlight');
            
            } else if (totalScore >= 10 && totalScore <= 15) {
                escalaChild.value = "3";
                document.getElementById('childC').classList.add('highlight');
                document.getElementById('childB').classList.remove('highlight');
                document.getElementById('childA').classList.remove('highlight');
            
            }

            return {childRisk: totalScore, childRisk2:escalaChild.value}
            
        }

        function updateMeldScores() {
            let creatinina = parseFloat(document.getElementById('creatininaMeld').value) || 0;
            if (creatinina > 4) {
                creatinina = 4;
            }
            const bilirrubina = parseFloat(document.getElementById('bilirrubinaMeld').value) || 0;
            const inr = parseFloat(document.getElementById('inrMeld').value) || 0;
            const sodio = parseFloat(document.getElementById('sodioMeld').value) || 0;

            const meldScore = 9.6 * Math.log(creatinina) + 3.8 * Math.log(bilirrubina) + 11.2 * Math.log(inr) + 6.4;
            const meldNaScore = meldScore - sodio - (0.025 * meldScore * (140 - sodio)) + 140;

            document.getElementById('meldScore').value = meldScore.toFixed(2);
            document.getElementById('meldNaScore').value = meldNaScore.toFixed(2);

            document.getElementById('meld40').classList.remove('highlight');
            document.getElementById('meld30_39').classList.remove('highlight');
            document.getElementById('meld20_29').classList.remove('highlight');
            document.getElementById('meld10_19').classList.remove('highlight');
            document.getElementById('meldMenor9').classList.remove('highlight');

            if (meldScore >= 40) {
                document.getElementById('meld40').classList.add('highlight');
            } else if (meldScore >= 30) {
                document.getElementById('meld30_39').classList.add('highlight');
            } else if (meldScore >= 20) {
                document.getElementById('meld20_29').classList.add('highlight');
            } else if (meldScore >= 10) {
                document.getElementById('meld10_19').classList.add('highlight');
            } else {
                document.getElementById('meldMenor9').classList.add('highlight');
            }
            return {meldScore: meldScore, meldNaScore: meldNaScore};
        }


        // seccion 2. Cardiologica
        //----------------------------------------------------------
        function calculateHfaPeefIndex() {
            
           
            const funcional  = parseInt(document.getElementById('funcional').value);
            const morfologico = parseInt(document.getElementById('morfologico').value);
            const biomarcador = parseInt(document.getElementById('biomarcador').value);
            const biomarcadorFA = parseInt(document.getElementById('biomarcadorFA').value);
            
            let biomarcadorI=0;
            let biomarcadorFAI=0;
            let funcionalI = 0;
            let morfologicoI = 0;

            switch (funcional) {
                case 1:
                    funcionalI = 0;
                    break;
                case 2:
                    funcionalI = 2;
                    break;
                case 3:
                    funcionalI = 2;
                    break;
                case 4:
                    funcionalI = 2;
                    break;
                case 5:
                    funcionalI = 1;
                    break;
                case 6:
                    funcionalI = 1;
                    break;
            };
            
            switch (morfologico) {

                case 1:
                    morfologicoI = 0;
                    break;
                case 2:
                    morfologicoI = 2;
                    break;
                case 3:
                    morfologicoI = 2;
                    break;
                case 4:
                    morfologicoI = 1;
                    break;
                case 5:
                    morfologicoI = 1;
                    break;
                case 6:
                    morfologicoI = 1;
                    break;
            };
            
            switch (biomarcador) {
                case 1:
                    biomarcadorI = 0;
                    break;
                case 2:
                    biomarcadorI = 2;
                    break;
                case 3:
                    biomarcadorI = 1;
                    break;
            };
           
            switch (biomarcadorFA) {
                case 1:
                    biomarcadorFAI = 0;
                    break;
                case 2:
                    biomarcadorFAI = 2;
                    break;
                case 3:
                    biomarcadorFAI = 1;
                    break;
            };

            const indiceHfaPeef = funcionalI + morfologicoI + biomarcadorI + biomarcadorFAI;
            document.getElementById('indiceHfaPeef').value = indiceHfaPeef;

            const resultado = document.getElementById('resultadoHfaPeef');
            if (indiceHfaPeef >= 5) {
                resultado.innerText = "Paciente con Insuficiencia cardiaca";
                resultado.style.backgroundColor = "red";
                resultado.style.color = "white";
            } else if (indiceHfaPeef > 2 && indiceHfaPeef < 5) {
                resultado.innerText = "Paciente con riesgo de insuficiencia cardiaca";
                resultado.style.backgroundColor = "yellow";
                resultado.style.color = "black";
            } else {
                resultado.innerText = "Paciente con bajo riesgo de insuficiencia cardiaca";
                resultado.style.backgroundColor = "green";
                resultado.style.color = "white";
            }
        }

         
        function evaluateResultadoStressEcho(){
            evaluateAngioTac();
            evaluateCoronariografia();
        }
        
        function evaluateStressEcho() {
            const diabetes = document.getElementById('diabetes').checked;
            const hipertension = document.getElementById('hipertension').checked;
            const dislipidemia = document.getElementById('dislipidemia').checked;
            const tabaquismo = document.getElementById('tabaquismo').checked;
            const historiaPatologiaCoronaria = document.getElementById('historiaPatologiaCoronaria').checked;
            const historiaFamiliarPatologiaCoronaria = document.getElementById('historiaFamiliarPatologiaCoronaria').checked;
            const historiaInsuficienciaCardiaca = document.getElementById('historiaInsuficienciaCardiaca').checked;
            const historiaCerebrovascular = document.getElementById('historiaCerebrovascular').checked;
            const arteriopatiaPeriferica = document.getElementById('arteriopatiaPeriferica').checked;
            const edad = parseInt(document.getElementById('edadinicio').value);

            let riesgoModerado = 0;
            let mensaje = "No es necesario ecocardiograma de stress";
            let color = "green";

            if (diabetes || historiaPatologiaCoronaria||historiaCerebrovascular||historiaInsuficienciaCardiaca) {
                mensaje = "Es necesario ecocardiograma de stress";
                color = "red";
            } else {
                if (hipertension) riesgoModerado++;
                if (dislipidemia) riesgoModerado++;
                if (tabaquismo) riesgoModerado++;
                if (historiaFamiliarPatologiaCoronaria) riesgoModerado++;
                if (arteriopatiaPeriferica) riesgoModerado++;

                if (riesgoModerado >= 2 || (riesgoModerado >= 1 && edad >= 50)) {
                    mensaje = "Es necesario ecocardiograma de stress";
                    color = "red";
                }
            }

            const stressEchoMessage = document.getElementById('stressEchoMessage');
            stressEchoMessage.innerText = mensaje;
            stressEchoMessage.style.backgroundColor = color;
        }

        function evaluateAngioTac() {
            const resultadoStress = parseInt(document.getElementById('resultadoStress').value);
            const angioTacMessage = document.getElementById('angioTacMessage');

            if (resultadoStress === 1 || resultadoStress === 2) {
                angioTacMessage.innerText = "Está indicado la realización de angioTAC";
                angioTacMessage.style.backgroundColor = "red";
            } else {
                angioTacMessage.innerText = "No es necesario angioTAC";
                angioTacMessage.style.backgroundColor = "green";
            }
        }

        function evaluateCoronariografia() {
            const estenosisDerecha = document.getElementById('estenosisDerecha').checked;
            const estenosisIzquierda = document.getElementById('estenosisIzquierda').checked;
            const scoreCalcico = document.getElementById('scoreCalcico').checked;
            const resultadoStress = parseInt(document.getElementById('resultadoStress').value);
            const historiaPatologiaCoronaria = document.getElementById('historiaPatologiaCoronaria').checked;

            const coronariografiaMessage = document.getElementById('coronariografiaMessage');

            if (estenosisDerecha || estenosisIzquierda || scoreCalcico || resultadoStress === 3 || historiaPatologiaCoronaria) {
                coronariografiaMessage.innerText = "Está indicado la realización de coronariografía";
                coronariografiaMessage.style.backgroundColor = "red";
            } else {
                coronariografiaMessage.innerText = "No es necesario realizar coronariografía";
                coronariografiaMessage.style.backgroundColor = "green";
            }
        }

        function evaluateCateterismoDerecho() {
            const fraccionVD = parseInt(document.getElementById('fraccionVD').value);
            const tapse = parseFloat(document.getElementById('Tapse').value) || 16;
            const papsEstimada = parseFloat(document.getElementById('papsEstimada').value) || 44;

            const cateterismoMessage = document.getElementById('cateterismoMessage');

            if (fraccionVD === 1 && tapse > 14 && papsEstimada < 45) {
                cateterismoMessage.innerText = "No está indicado la realización de cateterismo derecho";
                cateterismoMessage.style.backgroundColor = "green";
            } else {
                cateterismoMessage.innerText = "Está indicada la realización de cateterismo derecho";
                cateterismoMessage.style.backgroundColor = "red";
            };
        }

        function updategpvh() {
            const pe= document.getElementById('pshe').value;
            const pl= document.getElementById('pshl').value;
            const gpvh = pe-pl;
            document.getElementById('gpvh').value = gpvh;
            document.getElementById('gpvh1').classList.remove('highlight');
            document.getElementById('gpvh2').classList.remove('highlight');
            document.getElementById('gpvh3').classList.remove('highlight');
            document.getElementById('gpvh4').classList.remove('highlight');

            if (gpvh > 12) {
                document.getElementById('gpvh4').classList.add('highlight');
            } else if (gpvh >9) {
                document.getElementById('gpvh3').classList.add('highlight');
            } else if (gpvh >5) {
                document.getElementById('gpvh2').classList.add('highlight');
            } else {
                document.getElementById('gpvh1').classList.add('highlight');
            } 
        }

        // seccion 3. Pulmonar
        //----------------------------------------------------------
        function evaluateAaGradient() {
            const fio2 = parseFloat(document.getElementById('fio2').value) || 0.21;
            const paco2 = parseFloat(document.getElementById('paco2').value) || 35;
            const pao2 = parseFloat(document.getElementById('pao2').value) || 95;
            const edad = parseInt(document.getElementById('edadinicio').value) || 50;

            const aaGradient = (713 * fio2) - (paco2 / 0.8) - pao2;
            const aaGradientMessage = document.getElementById('aaGradientMessage');
            const ecoContrasteMessage = document.getElementById('ecoContrasteMessage');

            aaGradientMessage.innerText = "Gradiente A-a de oxígeno: " + aaGradient.toFixed(2);

            if ((edad > 64 && aaGradient > 20) || (edad <= 64 && aaGradient > 15)) {
                aaGradientMessage.style.backgroundColor = "red";
                ecoContrasteMessage.innerText = "Se requiere realizar eco contraste para valorar shunt";
                ecoContrasteMessage.style.backgroundColor = "red";
            } else {
                aaGradientMessage.style.backgroundColor = "green";
                ecoContrasteMessage.innerText = "No se requiere ecografía de contraste";
                ecoContrasteMessage.style.backgroundColor = "green";
            }

            document.getElementById('leve').style.backgroundColor = "";
            document.getElementById('moderada').style.backgroundColor = "";
            document.getElementById('severa').style.backgroundColor = "";
            document.getElementById('muySevera').style.backgroundColor = "";

            if (pao2 >= 80) {
                document.getElementById('leve').style.backgroundColor = "red";
            } else if (pao2 >= 60) {
                document.getElementById('moderada').style.backgroundColor = "red";
            } else if (pao2 >= 50) {
                document.getElementById('severa').style.backgroundColor = "red";
            } else {
                document.getElementById('muySevera').style.backgroundColor = "red";
            }
        }

        function evaluatePulmonaryFunction() {
            const fev1 = parseFloat(document.getElementById('fev1').value) || 0;
            const fvc = parseFloat(document.getElementById('fvc').value) || 0;
            const fev1FvcRatio = fev1 / fvc;
            const pulmonaryFunctionMessage = document.getElementById('pulmonaryFunctionMessage');

            document.getElementById('fev1FvcRatio').innerText = fev1FvcRatio.toFixed(2);

            if (fev1FvcRatio < 0.7) {
                //restricitivo
                if (fvc <= 80) {
                    if (fvc > 65) {
                        pulmonaryFunctionMessage.innerText = "Patrón restrictivo leve (FVC > 65%)";
                    } else if (fvc >= 50) {
                        pulmonaryFunctionMessage.innerText = "Patrón restrictivo moderado (FVC 50-65%)";
                    } else if (fvc >= 35) {
                        pulmonaryFunctionMessage.innerText = "Patrón restrictivo severo (FVC 35-49%)";
                    } else {
                        pulmonaryFunctionMessage.innerText = "Patrón restrictivo muy severo (FVC >35%)";
                    }
                    pulmonaryFunctionMessage.style.backgroundColor = "red";
                } else {
                    pulmonaryFunctionMessage.innerText = "Patrón normal";
                    pulmonaryFunctionMessage.style.backgroundColor = "green";
                }
            } else {
                // mixto-obstructivo
                if (fvc <= 80) {
                    pulmonaryFunctionMessage.innerText = "Patrón mixto";
                    pulmonaryFunctionMessage.style.backgroundColor = "red";
                } else {
                    if (fev1 > 65) {
                        pulmonaryFunctionMessage.innerText = "Patrón obstructivo leve (FEV1 > 65%)";
                    } else if (fev1 >= 50) {
                        pulmonaryFunctionMessage.innerText = "Patrón obstructivo moderado (FEV1 50-65%)";
                    } else if (fev1 >= 35) {
                        pulmonaryFunctionMessage.innerText = "Patrón obstructivo severo (FEV1 35-49%)";
                    } else {
                        pulmonaryFunctionMessage.innerText = "Patrón obstructivo muy severo (FEV1 <35%)";
                    }
                    pulmonaryFunctionMessage.style.backgroundColor = "red";
                }
            }
        };

        // seccion 4. Renal
        //----------------------------------------------------------
        function calculateEGFR() {
            const creatinine = parseFloat(document.getElementById('currentCreatinine').value || 0.5);
            const sexo = parseInt(document.getElementById('sexoinicio').value);
            const edad = parseInt(document.getElementById('edadinicio').value) || 45;
            const k = sexo === 1 ? 0.9 : 0.7;
            const a = sexo === 1 ? -0.411 : -0.329;
            const min = Math.min(creatinine / k, 1);
            const max = Math.max(creatinine / k, 1);
            const eGFR = 141 * Math.pow(min, a) * Math.pow(max, -1.209) * Math.pow(0.993, edad) * (sexo === 2 ? 1.018 : 1);

             document.getElementById('egfrValue').innerText = eGFR.toFixed(2);

            // Reset table row backgrounds
            const rows = document.querySelectorAll('#egfrTable tr');
            rows.forEach(row => row.style.backgroundColor = '');

            // Highlight the appropriate row
            if (eGFR >= 90) {
                document.getElementById('grado1').style.backgroundColor = 'red';
            } else if (eGFR >= 60) {
                document.getElementById('grado2').style.backgroundColor = 'red';
            } else if (eGFR >= 45) {
                document.getElementById('grado3a').style.backgroundColor = 'red';
            } else if (eGFR >= 30) {
                document.getElementById('grado3b').style.backgroundColor = 'red';
            } else if (eGFR >= 15) {
                document.getElementById('grado4').style.backgroundColor = 'red';
            } else {
                document.getElementById('grado5').style.backgroundColor = 'red';
            }   
            checkAKI();
        }

        function checkAKI() {
            const currentCreatinine = parseFloat(document.getElementById('currentCreatinine').value|| 0.5);
            const previousCreatinine = parseFloat(document.getElementById('previousCreatinine').value || 0.5);
            const akiMessage = document.getElementById('akiMessage');

            if (currentCreatinine >= previousCreatinine * 1.5 && currentCreatinine <= previousCreatinine * 2 ) {
                akiMessage.style.backgroundColor = 'red';
                akiMessage.innerText = "Posible AKI grado 1 (aumento en 0,3 mg/dl o incremento 1,5-2 veces valor previo)";
            } else if (currentCreatinine > previousCreatinine * 2 && currentCreatinine <= previousCreatinine * 3) {
                akiMessage.style.backgroundColor = 'red';
                akiMessage.innerText = "Posible AKI grado 2 (incremento 2-3 veces valor previo)";
            } else if (currentCreatinine > previousCreatinine * 3 || currentCreatinine >= 4) {
                akiMessage.style.backgroundColor = 'red';
                akiMessage.innerText = "Posible AKI grado 3 (incremento >3 veces valor previo o Cr >=4gr/dl)";
            } else {
                akiMessage.style.backgroundColor = 'green';
                akiMessage.innerText = "AKI / Sd Hepatorrenal poco probable";
            }
}

        function calculateCRRTScore() {
            const falloHepatico = parseInt(document.getElementById('falloHepatico').value);
            const donanteAsistolia = parseInt(document.getElementById('donanteAsistolia').value);
            const retrasplante = parseInt(document.getElementById('retrasplante').value);
            const vasopresoresPreop = parseInt(document.getElementById('vasopresoresPreop').value);
            const crrtPreop = parseInt(document.getElementById('crrtPreop').value);
            const kPreop = parseFloat(document.getElementById('kPreop').value) || 3.5;
            //const isquemiaFrio = parseFloat(document.getElementById('isquemiaFrio').value) || 0.71;
            const bilirrubina = parseFloat(document.getElementById('bilirrubinaCRRT').value) || 5;

            let score = 0;

            if (falloHepatico === 1) { // Crónico
                if (donanteAsistolia === 1) score += 10;
                if (retrasplante === 1) score += 9;
                if (vasopresoresPreop === 1) score += 7;
                if (crrtPreop === 1) score += 6;
                score += Math.floor((kPreop - 3.5) / 0.12);
                //score += Math.floor(isquemiaFrio / 0.72);
                score += Math.floor(bilirrubina / 6);
            } else if (falloHepatico === 2) { // Agudo
                if (donanteAsistolia === 1) score += 10;
                if (vasopresoresPreop === 1) score += 7;
                if (crrtPreop === 1) score += 28;
                //score += Math.floor(isquemiaFrio / 0.72);
                score += Math.floor(bilirrubina / 6);
            }
            let tiempo = 0;
            let mensaje = "";
            if (score >= 42 && falloHepatico===1){
                mensaje = " .Riesgo elevado de requerir CRRT intraoperatoria";

            }else if (score >=28 && falloHepatico ===2){
                mensaje = " .Riesgo elevado de requerir CRRT intraoperatoria";
            }else if (score <42  && falloHepatico ===1){
                tiempo = (42 - score) * 0.72;
                mensaje = " .Riesgo de necesitar CRRT si Tº isquemia frío > " + tiempo + " horas";
            } else if (score <28 && falloHepatico ===2){
                tiempo = (28 - score) * 0.72;
                mensaje = " .Riesgo de necesitar CRRT si Tº isquemia frío > " + tiempo + " horas";
            };
            const crrtScoreMessage = document.getElementById('crrtScoreMessage');
            crrtScoreMessage.innerText = "Score de CRRT: " + score + mensaje;
        }
        
        // seccion 5. Sangrado
        //----------------------------------------------------------
        function calculateBleedingScore() {
            let score = 0;

            const retrasplante = document.getElementById('retrasplantehemato').value;
            const sexo = document.getElementById('sexoinicio').value;
            const edad = parseFloat(document.getElementById('edadinicio').value);
            const hemoglobina = parseFloat(document.getElementById('hemoglobina').value);
            const protrombina = parseFloat(document.getElementById('protrombina').value);
            const creatinina = parseFloat(document.getElementById('creatininahemato').value);
            const albumina = parseFloat(document.getElementById('albumina').value);
            const plaquetas = parseFloat(document.getElementById('plaquetas').value);
            const messageDiv = document.getElementById('bleedingScoreMessage');
           
            if (retrasplante == '1') score += 1;
            if (hemoglobina < 10) score += 1;
            if (edad > 40) score += 1;
            if (protrombina >2) score += 2;
            if (sexo == '1' && creatinina >= 1.36) score += 1;
            if (sexo == '2' && creatinina >= 1.28) score += 1;
            if (plaquetas < 70000) score += 1;
            if (albumina < 24) score += 1;

            
            if (score >= 3 ) {
                messageDiv.style.backgroundColor = 'red';
                messageDiv.innerHTML = `Alto riesgo de sangrado. Score: ${score}`;
            } else {
                messageDiv.style.backgroundColor = 'green';
                messageDiv.innerHTML = `Bajo riesgo de sangrado. Score: ${score}`;
            }
        }
        
        // seccion 6. Nutricion
        //----------------------------------------------------------
        function calculateScoreNPT() {
            const isSobrecargaHidrica = document.getElementById('sobrecargaHidrica').value === '1';
            let score = 0;

            if (isSobrecargaHidrica) {
                score += parseInt(document.getElementById('capacidadAlimentarse').value);
                score += parseInt(document.getElementById('menosMitadDieta5Dias').value);
                score += parseInt(document.getElementById('perdidaPeso3_6Meses').value);
            } else {
                score += parseInt(document.getElementById('imc').value);
                score += parseInt(document.getElementById('perdidaPeso6Meses').value);
                score += parseInt(document.getElementById('enfermedadAgudaSinAlimentacion').value);
            }

            score += parseInt(document.getElementById('hepatitisAlcoholicaAguda').value);
            score += parseInt(document.getElementById('nutricionEnteral').value);

            const messageDiv = document.getElementById('scoreMessageNPT');
             if (score === 0) {
                messageDiv.style.backgroundColor = 'green';
                messageDiv.style.color = 'white';
                messageDiv.innerHTML = `Bajo riesgo. Score Nutricional: ${score}`;
             } else if (score === 1) {
                messageDiv.style.backgroundColor = 'yellow';
                messageDiv.style.color = 'black';
                messageDiv.innerHTML = `Riesgo moderado. Score Nutricional: ${score}`;
             } else {
                messageDiv.style.backgroundColor = 'red';
                messageDiv.style.color = 'white';
                messageDiv.innerHTML = `Alto riesgo. Score Nutricional: ${score}`;
            }
            calculoRequerimientos();
        }

        function habilitar(){
            const isSobrecargaHidrica = this.value === '1';
            document.getElementById('imc').disabled = isSobrecargaHidrica;
            document.getElementById('perdidaPeso6Meses').disabled = isSobrecargaHidrica;
            document.getElementById('enfermedadAgudaSinAlimentacion').disabled = isSobrecargaHidrica;

            document.getElementById('capacidadAlimentarse').disabled = !isSobrecargaHidrica;
            document.getElementById('menosMitadDieta5Dias').disabled = !isSobrecargaHidrica;
            document.getElementById('perdidaPeso3_6Meses').disabled = !isSobrecargaHidrica;

            calculateScoreNPT();
        }

        function calculateFrailScore() {
            let score = 0;

            score += parseInt(document.getElementById('fatigabilidad').value);
            score += parseInt(document.getElementById('resistencia').value);
            score += parseInt(document.getElementById('deambulacion').value);
            score += parseInt(document.getElementById('pesofrail').value);

            const comorbilidades = document.querySelectorAll('input[name="comorbilidad"]:checked');
            if (comorbilidades.length > 4) {
                score += 1;
            }

            const messageDiv = document.getElementById('frailScoreMessage');
            if (score === 0) {
                messageDiv.style.backgroundColor = 'green';
                messageDiv.style.color = 'white';
                messageDiv.innerHTML = `Bajo riesgo de fragilidad. Score Frail: ${score}`;
            } else if (score === 1) {
                messageDiv.style.backgroundColor = 'yellow';
                messageDiv.style.color = 'black';
                messageDiv.innerHTML = `Riesgo moderado de fragilidad. Score Frail: ${score}`;
            } else {
                messageDiv.style.backgroundColor = 'red';
                messageDiv.style.color = 'white';
                messageDiv.innerHTML = `Alto riesgo de fragilidad. Score Frail: ${score}`;
            }
        }
        function calculateDukeScore() {
                    let score = 0;
                    score += parseFloat(document.getElementById('autocuidado').value);
                    score += parseFloat(document.getElementById('caminarCasa').value);
                    score += parseFloat(document.getElementById('caminar200m').value);
                    score += parseFloat(document.getElementById('subirEscaleras').value);
                    score += parseFloat(document.getElementById('correr').value);
                    score += parseFloat(document.getElementById('trabajoLigero').value);
                    score += parseFloat(document.getElementById('trabajoModerado').value);
                    score += parseFloat(document.getElementById('trabajoFuerte').value);
                    score += parseFloat(document.getElementById('trabajosJardin').value);
                    score += parseFloat(document.getElementById('relacionesSexuales').value);
                    score += parseFloat(document.getElementById('ejercicioModerado').value);
                    score += parseFloat(document.getElementById('ejercicioIntenso').value);

                    const messageDiv = document.getElementById('dukeScoreMessage');
                    if (score < 15) {
                        messageDiv.style.backgroundColor = 'red';
                        messageDiv.style.color = 'white';
                        messageDiv.innerHTML = `Baja capacidad funcional. Score: ${score}`;
                    } else {
                        messageDiv.style.backgroundColor = 'green';
                        messageDiv.style.color = 'white';
                        messageDiv.innerHTML = `Capacidad funcional aceptable. Score: ${score}`;
                    }
                    calculoRequerimientos();
                }

        function calculoRequerimientos(){
            const peso = parseFloat(document.getElementById('pesoinicio').value);
            const talla = parseFloat(document.getElementById('tallainicio').value) / 100; // Convertir cm a metros
            const imc = parseFloat(document.getElementById('imcinicio').value);
            const ascitis = parseInt(document.getElementById('ascitis').value);
            
            let pesoseco;
            let calorias_total;
            let proteinas_total;
            let hidratos_total;
            let lipidos_total;

            let proteinas_gr;
            let hidratos_gr;
            let lipidos_gr;


            // calcular peso seco
            if (ascitis === 2) {
                pesoseco = peso - (peso * 0.05); // ascitis leve
            }  else if (ascitis === 3) {
                pesoseco = peso - (peso * 0.1); // ascitis moderada
            } else {
                pesoseco = peso // sin ascitis
            }
            // calculo requerimientos
            if (imc < 25){
                calorias_total = 40 * pesoseco;
            }else{
                pesoseco = 25 * (talla * talla); // peso ideal
                calorias_total = 30 * pesoseco;
            }

            // Hdc 4 kcl/gr. Prots 4 kcl/gr. Lipidos 9 kcl/gr.
            // calcular prots en función de grado de desnutricion
            // ajustar Hdc en funcion de actvidad. Lípidos el resto
           
            const colorNPT = document.getElementById('scoreMessageNPT').style.backgroundColor; //  red || green || yellow
            const colorDuke = document.getElementById('dukeScoreMessage').style.backgroundColor; // red || green
            
            if (colorNPT === 'red'){
                proteinas_gr = 1.5 * pesoseco;
            } else if (colorNPT === 'yellow'){
                proteinas_gr = 1.3 * pesoseco;
            } else {
                proteinas_gr = 1.2 * pesoseco;
            }
            proteinas_total = 4 * proteinas_gr; //cal aportan prots
            
            if (colorDuke === 'red'){
                hidratos_total = 0.45 * calorias_total; //cal aportan hidratos
            } else {
                hidratos_total = 0.60 * calorias_total;
            }
            hidratos_gr = hidratos_total / 4; // gramos de hidratos
            lipidos_total = calorias_total - proteinas_total - hidratos_total; // calorias que aportan los lipidos
            lipidos_gr = lipidos_total / 9; // gramos de lipidos

            // modifica tabla
            document.getElementById('calorias_total').textContent = calorias_total.toFixed(2);
            document.getElementById('proteinas_total').textContent = proteinas_total.toFixed(2);
            document.getElementById('hidratos_total').textContent = hidratos_total.toFixed(2);
            document.getElementById('lipidos_total').textContent = lipidos_total.toFixed(2);

            document.getElementById('proteinas_gr').textContent = proteinas_gr.toFixed(2);
            document.getElementById('hidratos_gr').textContent = hidratos_gr.toFixed(2);
            document.getElementById('lipidos_gr').textContent = lipidos_gr.toFixed(2);

            document.getElementById('proteinas_porcentaje').textContent = (proteinas_total/calorias_total * 100).toFixed(2);
            document.getElementById('hidratos_porcentaje').textContent = (hidratos_total/calorias_total * 100).toFixed(2);  
            document.getElementById('lipidos_porcentaje').textContent = (lipidos_total/calorias_total * 100).toFixed(2);    


        }
        

     

   
    

        
        // final
        //
        //----------------------------------------------------------

        
        
        // comprueba requeridos
                document.addEventListener('DOMContentLoaded', function() {
                    /*const requiredFields = ['nhc', 'sexoinicio', 'edadinicio', 'pesoinicio', 'tallainicio','nombre','primerApellido','segundoApellido'];
                    const nextButton = document.querySelector('button[onclick="showNextSection(1)"]');
                
                    function checkRequiredFields() {
                        let allFilled = true;
                        requiredFields.forEach(function(fieldId) {
                            const field = document.getElementById(fieldId);
                            if (!field.value) {
                                allFilled = false;
                            }
                        });
                        nextButton.disabled = !allFilled;
                    }
                
                    requiredFields.forEach(function(fieldId) {
                        document.getElementById(fieldId).addEventListener('input', checkRequiredFields);
                    });
                
                    checkRequiredFields(); // Initial check
                    */
                   updateChildPughScore();
                   updateMeldScores();
                   updategpvh();
                   habilitar();
                   
                });
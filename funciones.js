
        
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
       
    // graficos
    //----------------------------------------------------------
   function childgauge() {
        var ctx = document.getElementById("childcanvas").getContext("2d");
    new Chart(ctx, {
        type: "tsgauge",
        data: {
            datasets: [{
                backgroundColor: ["#0fdc63", "#fd9704", "#ff7143"],
                borderWidth: 0,
                gaugeData: {
                    value: 7,
                    valueColor: "#ff7143"
                },
                gaugeLimits: [0, 6, 10, 15]
            }]
        },
        options: {
                events: [],
                showMarkers: true
        }
    });
   }
   function meldgauge() {
    var ctx = document.getElementById("meldcanvas").getContext("2d");
        new Chart(ctx, {
            type: "tsgauge",
            data: {
                datasets: [{
                    backgroundColor: ["#0fdc63", "#fd9704", "#ff7143"],
                    borderWidth: 0,
                    gaugeData: {
                        value: 20,
                        valueColor: "#ff7143"
                    },
                    gaugeLimits: [0, 10, 30, 50]
                }]
            },
            options: {
                    events: [],
                    showMarkers: true
            }
        });
   }
    // funciones
     //----------------------------------------------------------
     //----------------------------------------------------------

     // comunes
        function showNextSection(currentSection) {
            document.getElementById('section' + currentSection).classList.remove('active');
            document.getElementById('section' + (currentSection + 1)).classList.add('active');
            if (currentSection === 6) {
                childgauge();
                meldgauge()
                
                
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
            const { jsPDF } = window.jspdf;
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
        }
        
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
            const arteriopatiaPeriferica = document.getElementById('arteriopatiaPeriferica').checked;
            const edad = parseInt(document.getElementById('edadinicio').value);

            let riesgoModerado = 0;
            let mensaje = "No es necesario ecocardiograma de stress";
            let color = "green";

            if (diabetes || historiaPatologiaCoronaria) {
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
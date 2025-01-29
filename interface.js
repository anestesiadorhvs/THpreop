// Módulo principal de la aplicación
const App = (() => {
    // Inicialización de la aplicación
    const init = () => {
        setupEventListeners();
        updateInitialScores();
    };

    // Configuración de los listeners
    const setupEventListeners = () => {
        // Sección 1: Valoración inicial
        document.getElementById('pesoinicio').addEventListener('input', EventHandlers.modificarPeso);
        document.getElementById('tallainicio').addEventListener('input', EventHandlers.modificarTalla);

        document.getElementById('ascitis').addEventListener('change', Calculations.updateChildPughScore);
        document.getElementById('bilirrubina').addEventListener('change', Calculations.updateChildPughScore);
        document.getElementById('inr').addEventListener('change', Calculations.updateChildPughScore);
        document.getElementById('encefalopatia').addEventListener('change', Calculations.updateChildPughScore);

        document.getElementById('creatininaMeld').addEventListener('input', Calculations.updateMeldScores);
        document.getElementById('inrMeld').addEventListener('input', Calculations.updateMeldScores);
        document.getElementById('bilirrubinaMeld').addEventListener('input', Calculations.updateMeldScores);
        document.getElementById('sodioMeld').addEventListener('input', Calculations.updateMeldScores);

        // Sección 2: Valoración cardiológica
        document.getElementById('funcional').addEventListener('change', Calculations.calculateHfaPeefIndex);
        document.getElementById('morfologico').addEventListener('change', Calculations.calculateHfaPeefIndex);
        document.getElementById('biomarcador').addEventListener('change', Calculations.calculateHfaPeefIndex);
        document.getElementById('biomarcadorFA').addEventListener('change', Calculations.calculateHfaPeefIndex);
        
        document.getElementById('FRdiabetes').addEventListener('change', UI.updateCardioUI);
        document.getElementById('FRhipertension').addEventListener('change', UI.updateCardioUI);
        document.getElementById('FRdislipidemia').addEventListener('change', UI.updateCardioUI);
        document.getElementById('FRobesidad').addEventListener('change', UI.updateCardioUI);
        document.getElementById('FRtabaquismo').addEventListener('change', UI.updateCardioUI);
        document.getElementById('FRhistoriaPatologiaCoronaria').addEventListener('change', UI.updateCardioUI);
        document.getElementById('FRhistoriaFamiliarPatologiaCoronaria').addEventListener('change', UI.updateCardioUI);
        document.getElementById('FRarteriopatiaPeriferica').addEventListener('change', UI.updateCardioUI);
        document.getElementById('FRhistoriaInsuficienciaCardiaca').addEventListener('change', UI.updateCardioUI);
        document.getElementById('FRhistoriaCerebrovascular').addEventListener('change', UI.updateCardioUI);
        
        document.getElementById('resultadoStress').addEventListener('change', UI.updateCardioUI);
        document.getElementById('estenosisDerecha').addEventListener('change', UI.updateCardioUI);
        document.getElementById('estenosisIzquierda').addEventListener('change', UI.updateCardioUI);
        document.getElementById('scoreCalcico').addEventListener('change', UI.updateCardioUI);
        document.getElementById('norealizado').addEventListener('change', UI.updateCardioUI);
        
        document.getElementById('fraccionVD').addEventListener('change', UI.updateCardioUI);
        document.getElementById('Tapse').addEventListener('input', UI.updateCardioUI);
        document.getElementById('papsEstimada').addEventListener('input', UI.updateCardioUI);
        
        document.getElementById('pshl').addEventListener('input', Calculations.updategpvh);
        document.getElementById('pshe').addEventListener('input', Calculations.updategpvh);

        // Sección 3: Pulmonar y vía aérea
        document.getElementById("mallampati").addEventListener('change',Calculations.evaluateVA);
        document.getElementById("apertura").addEventListener('change',Calculations.evaluateVA);
        document.getElementById("distancia").addEventListener('change',Calculations.evaluateVA);
        document.getElementById("movilidadcolumna").addEventListener('change',Calculations.evaluateVA);
        document.getElementById('paco2').addEventListener('input', Calculations.evaluateAaGradient);
        document.getElementById('pao2').addEventListener('input', Calculations.evaluateAaGradient);
        document.getElementById('fev1').addEventListener('input',Calculations.evaluatefuncionpulmonar);
        document.getElementById('fvc').addEventListener('input',Calculations.evaluatefuncionpulmonar);
        
        // Sección 4: Renal
        document.getElementById('currentCreatinine').addEventListener('input', Calculations.calculateEGFR);
        document.getElementById('previousCreatinine').addEventListener('input', Calculations.checkAKI);
        document.getElementById('h48Creatinine').addEventListener('input', Calculations.checkAKI);
        
        document.getElementById('falloHepatico').addEventListener('change',Calculations.checkAgopian);
        document.getElementById('donanteAsistolia').addEventListener('change',Calculations.checkAgopian);
        document.getElementById('donanteAsistolia').addEventListener('change',Calculations.checkAgopian);
        document.getElementById('retrasplante').addEventListener('change',Calculations.checkAgopian);
        document.getElementById('vasopresoresPreop').addEventListener('change',Calculations.checkAgopian);
        document.getElementById('crrtPreop').addEventListener('change',Calculations.checkAgopian);
        document.getElementById('kPreop').addEventListener('input',Calculations.checkAgopian);
        document.getElementById('bilirrubinaCRRT').addEventListener('input',Calculations.checkAgopian);
        
        // Sección 5: Sangrado
        document.getElementById('retrasplantehemato').addEventListener('change', Calculations.calculateBleedingScore);
        document.getElementById('sexohemato').addEventListener('change', Calculations.calculateBleedingScore);
        document.getElementById('edadhemato').addEventListener('input', Calculations.calculateBleedingScore);
        document.getElementById('hemoglobina').addEventListener('input', Calculations.calculateBleedingScore);
        document.getElementById('protrombina').addEventListener('input', Calculations.calculateBleedingScore);
        document.getElementById('creatininahemato').addEventListener('input', Calculations.calculateBleedingScore);
        document.getElementById('albumina').addEventListener('input', Calculations.calculateBleedingScore);
        document.getElementById('plaquetas').addEventListener('input', Calculations.calculateBleedingScore);
        document.getElementById('cirugiaAbdominalPrevia').addEventListener('change', Calculations.calculateBleedingScore);
        document.getElementById('peritonitisBacterianaEspontanea').addEventListener('change', Calculations.calculateBleedingScore);
        
        // Sección 6: Nutrición
        document.getElementById('hepatitisAlcoholicaAguda').addEventListener('change', Calculations.calculateScoreNPT);
        document.getElementById('nutricionEnteral').addEventListener('change', Calculations.calculateScoreNPT);
        document.getElementById('sobrecargaHidrica').addEventListener('change',Calculations.calculateScoreNPT);
        document.getElementById('imc').addEventListener('change', Calculations.calculateScoreNPT);
        document.getElementById('perdidaPeso6Meses').addEventListener('change', Calculations.calculateScoreNPT);
        document.getElementById('enfermedadAgudaSinAlimentacion').addEventListener('change', Calculations.calculateScoreNPT);
        document.getElementById('capacidadAlimentarse').addEventListener('change', Calculations.calculateScoreNPT);
        document.getElementById('menosMitadDieta5Dias').addEventListener('change', Calculations.calculateScoreNPT);
        document.getElementById('perdidaPeso3_6Meses').addEventListener('change', Calculations.calculateScoreNPT);
        
        document.getElementById('fatigabilidad').addEventListener('change', Calculations.calculateFrailScore);
        document.getElementById('resistencia').addEventListener('change', Calculations.calculateFrailScore);
        document.getElementById('deambulacion').addEventListener('change', Calculations.calculateFrailScore);
        document.getElementById('pesofrail').addEventListener('change', Calculations.calculateFrailScore);
        document.querySelectorAll('input[name="th.comorbilidad"]').forEach(element => {
            element.addEventListener('change', Calculations.calculateFrailScore);
        });

        document.querySelectorAll('#autocuidado, #caminarCasa, #caminar200m, #subirEscaleras, #correr, #trabajoLigero, #trabajoModerado, #trabajoFuerte, #trabajosJardin, #relacionesSexuales, #ejercicioModerado, #ejercicioIntenso').forEach(element => {
                    element.addEventListener('change', Calculations.calculateDukeScore);
                });

    };

    // Actualización de puntuaciones iniciales
    const updateInitialScores = () => {
        Calculations.updateChildPughScore();
        Calculations.updateMeldScores();
        Calculations.updategpvh();
        
    };

    return {
        init,
    };
})();

// Módulo de cálculos
const Calculations = (() => {
    // Actualiza el score de Child-Pugh
    const updateChildPughScore = () => {
        const ascitis = parseInt(document.getElementById('ascitis').value);
        const bilirrubina = parseInt(document.getElementById('bilirrubina').value);
        const inr = parseInt(document.getElementById('inr').value);
        const encefalopatia = parseInt(document.getElementById('encefalopatia').value);
        const totalScore = ascitis + bilirrubina + inr + encefalopatia;
        document.getElementById('childPughScore').value = totalScore;
        UI.updateChildPughUI(totalScore);
    };

    // Actualiza el score de MELD
    const updateMeldScores = () => {
        let creatinina = parseFloat(document.getElementById('creatininaMeld').value) || 0;
        if (creatinina > 4) creatinina = 4;
        const bilirrubina = parseFloat(document.getElementById('bilirrubinaMeld').value) || 0;
        const inr = parseFloat(document.getElementById('inrMeld').value) || 0;
        const sodio = parseFloat(document.getElementById('sodioMeld').value) || 0;
        const meldScore = 9.6 * Math.log(creatinina) + 3.8 * Math.log(bilirrubina) + 11.2 * Math.log(inr) + 6.4;
        const meldNaScore = meldScore - sodio - (0.025 * meldScore * (140 - sodio)) + 140;
        document.getElementById('meldScore').value = meldScore.toFixed(2);
        document.getElementById('meldNaScore').value = meldNaScore.toFixed(2);
        UI.updateMeldUI(meldScore);
        UI.updateanaliticaUI();
    };

    // Calcula el índice HFA-PEEF
    const calculateHfaPeefIndex = () => {
        const funcional = parseInt(document.getElementById('funcional').value);
        const morfologico = parseInt(document.getElementById('morfologico').value);
        let biomarcador = parseInt(document.getElementById('biomarcador').value);
        let biomarcadorFA = parseInt(document.getElementById('biomarcadorFA').value);
        const funcionalMap = {1: 0, 2: 2, 3: 2, 4: 2, 5: 1, 6: 1 };
        const funcionalI = funcionalMap[funcional] || 0;
        const morfologicoMap = {1: 0, 2: 2, 3: 2, 4: 1, 5: 1, 6: 1};
        const morfologicoI = morfologicoMap[morfologico] || 0; 
        const biomarcadorMap = {1: 0, 2: 2, 3: 1};
        const biomarcadorI = biomarcadorMap[biomarcador] || 0; 
        const biomarcadorFAMap = {1: 0, 2: 2, 3: 1};
        const biomarcadorFAI = biomarcadorFAMap[biomarcadorFA] || 0;
        const indiceHfaPeef = funcionalI + morfologicoI + biomarcadorI + biomarcadorFAI;
        document.getElementById('indiceHfaPeef').value = indiceHfaPeef;
        UI.updateHfaPeefUI(indiceHfaPeef);
    };

    // evalua vía aérea
    const evaluateVA = () =>{
        const mallampati= parseInt(document.getElementById("mallampati").value);
        const apertura = parseInt(document.getElementById("apertura").value);
        const distancia = parseInt(document.getElementById("distancia").value);
        const movilidad = parseInt(document.getElementById("movilidadcolumna").value);
        const riesgo = parseInt((mallampati * 2 + apertura + distancia + movilidad)*100/12);
        document.getElementById('hiddenscoreVA').value = riesgo;
    };

    // Evalúa el gradiente A-a de oxígeno
    const evaluateAaGradient = () => {
        const fio2 = parseFloat(document.getElementById('fio2').value);
        const paco2 = parseFloat(document.getElementById('paco2').value);
        const pao2 = parseFloat(document.getElementById('pao2').value);
        const edad = parseInt(document.getElementById('edadinicio').value)||45;
        const aaGradient = (713 * fio2) - (paco2 / 0.8) - pao2;
        document.getElementById("hiddengradiente").value = aaGradient;
        UI.updateAaGradientUI(aaGradient, edad, pao2);
    };

    // Calcula fvc/fev1
    const evaluatefuncionpulmonar = () =>{
        const fev1 = parseFloat(document.getElementById('fev1').value) || 80;
        const fvc = parseFloat(document.getElementById('fvc').value) || 80;
        const fev1FvcRatio = fev1 / fvc;
        document.getElementById('fev1FvcRatio').innerText = fev1FvcRatio.toFixed(2);
        UI.updatefuncionpulmonarUI(fev1FvcRatio,fev1,fvc);
    };
    // Calcula el filtrado glomerular (eGFR)
    const calculateEGFR = () => {
        const creatinine = parseFloat(document.getElementById('currentCreatinine').value || 0.5);
        const sexo = parseInt(document.getElementById('sexoinicio').value);
        const edad = parseInt(document.getElementById('edadinicio').value) || 45;
        const k = sexo === 1 ? 0.9 : 0.7;
        const a = sexo === 1 ? -0.411 : -0.329;
        const min = Math.min(creatinine / k, 1);
        const max = Math.max(creatinine / k, 1);
        const eGFR = 141 * Math.pow(min, a) * Math.pow(max, -1.209) * Math.pow(0.993, edad) * (sexo === 2 ? 1.018 : 1);
        document.getElementById('egfrValue').innerText = eGFR.toFixed(2);
        UI.updateEGFRUI(eGFR);
    };

    // Verifica si hay AKI (Lesión Renal Aguda)
    const checkAKI = () => {
        const currentCreatinine = parseFloat(document.getElementById('currentCreatinine').value);
        const previousCreatinine = parseFloat(document.getElementById('previousCreatinine').value);
        const h48Creatinine = parseFloat(document.getElementById('h48Creatinine').value);
        // aki aumento >= 0,3 mg/dl en 48h o aumento>50% en la ultima semana
        const akiMessage = document.getElementById('akiMessage');
        if ( currentCreatinine - h48Creatinine >= 0.3 )  {
            akiMessage.style.backgroundColor = 'red';
            akiMessage.innerText = "Posible AKI, incremento de Cr >=0,3 mg/dl en 48h";
            document.getElementById("hiddenAKI").value =1;
        }else if (currentCreatinine >= previousCreatinine * 1.5){
            akiMessage.style.backgroundColor = 'red';
            akiMessage.innerText = "Posible AKI, incremento de Cr superior a 1.5 veces la basal";
            document.getElementById("hiddenAKI").value =1;
        }else{
            akiMessage.style.backgroundColor = 'green';
            akiMessage.innerText = "Bajo riesgo de AKI / Sd hepatorrenal";
            document.getElementById("hiddenAKI").value =0;
        }
    };

    // score agopian necesidad de CRRT intraop
    const checkAgopian = () => {
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
            score += Math.floor(bilirrubina / 6);
        } else if (falloHepatico === 2) { // Agudo
            if (donanteAsistolia === 1) score += 10;
            if (vasopresoresPreop === 1) score += 7;
            if (crrtPreop === 1) score += 28;
            score += Math.floor(bilirrubina / 6);
        }
        document.getElementById ("hiddenAgopian").value = score;
        UI.updateAgopianUI(score,falloHepatico);
    };

    // Calcula el riesgo de sangrado
    const calculateBleedingScore = () => {
        let score = 0;
        const retrasplante = document.getElementById('retrasplantehemato').value;
        const sexo = document.getElementById('sexoinicio').value;
        const edad = parseFloat(document.getElementById('edadinicio').value);
        const hemoglobina = parseFloat(document.getElementById('hemoglobina').value);
        const protrombina = parseFloat(document.getElementById('protrombina').value);
        const creatinina = parseFloat(document.getElementById('creatininahemato').value);
        const albumina = parseFloat(document.getElementById('albumina').value);
        const plaquetas = parseFloat(document.getElementById('plaquetas').value);
        const cirugia = document.getElementById('cirugiaAbdominalPrevia').value;
        const peritonitis = document.getElementById('peritonitisBacterianaEspontanea').value;
        if (retrasplante == '1') score += 1;
        if (hemoglobina < 10) score += 1;
        if (edad > 40) score += 1;
        if (protrombina > 2) score += 2;
        if (sexo == '1' && creatinina >= 1.36) score += 1;
        if (sexo == '2' && creatinina >= 1.28) score += 1;
        if (plaquetas < 70000) score += 1;
        if (albumina < 24) score += 1;
        if (cirugia == '1') score += 5; // directo a alto riesgo
        if (peritonitis == '1') score += 5; // directo a alto riesgo
        UI.updateBleedingScoreUI(score);
    };

    const calculateScoreNPT = () =>{
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
        if (score >=7){score=7;}
        document.getElementById("hiddenNPT").value = score;
        calculateRequerimientos();
        UI.updatescoreNPTUI(score);

    };

    const calculateDukeScore = () => {
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
        document.getElementById("hiddenDuke").value = score;
        calculateRequerimientos();
        UI.updateDukeScoreUI(score);
    };

    const calculateFrailScore = () => {
        let score = 0;
        score += parseInt(document.getElementById('fatigabilidad').value);
        score += parseInt(document.getElementById('resistencia').value);
        score += parseInt(document.getElementById('deambulacion').value);
        score += parseInt(document.getElementById('pesofrail').value);

        const comorbilidades = document.querySelectorAll('input[name="th.comorbilidad"]:checked');
        if (comorbilidades.length > 4) {
            score += 1;
        }
        document.getElementById("hiddenFrail").value = score;
        UI.updateFrailScoreUI(score);
    };

    const calculateRequerimientos = () => {
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
        UI.updaterequerimientosUI(calorias_total,hidratos_total,lipidos_total,proteinas_total);
    };

    // Actualiza el GPVH
    const updategpvh = () => {
        const pe = document.getElementById('pshe').value;
        const pl = document.getElementById('pshl').value;
        const gpvh = pe - pl;
        document.getElementById('gpvh').value = gpvh;
        UI.updateGpvhUI(gpvh);
    };

    return {
        updateChildPughScore,
        updateMeldScores,
        calculateHfaPeefIndex,
        evaluateVA,
        evaluateAaGradient,
        evaluatefuncionpulmonar,
        calculateEGFR,
        checkAKI,
        checkAgopian,
        calculateBleedingScore,
        calculateScoreNPT,
        calculateDukeScore,
        calculateFrailScore,
        calculateRequerimientos,
        updategpvh,
    };
})();

// Módulo de actualización de la UI
const UI = (() => {
    // Actualiza la UI del score de Child-Pugh
    const updateChildPughUI = (totalScore) => {
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
    };

    // Actualiza la UI del score de MELD
    const updateMeldUI = (meldScore) => {
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
        };
        
    };
    const updateanaliticaUI = () => {
        document.getElementById("naPRE").value = document.getElementById("sodioMeld").value;
        document.getElementById("crPRE").value = document.getElementById("creatininaMeld").value;
        document.getElementById("inrPRE").value = document.getElementById("inrMeld").value;
        document.getElementById("bilirrubinaPRE").value = document.getElementById("bilirrubinaMeld").value;
    };
    // Actualiza eco stress si indicado
    const updateCardioUI = () =>{
        //¿Esta indicado eco stress?
            const diabetes = document.getElementById('FRdiabetes').checked;
            const hipertension = document.getElementById('FRhipertension').checked;
            const dislipidemia = document.getElementById('FRdislipidemia').checked;
            const tabaquismo = document.getElementById('FRtabaquismo').checked;
            const obesidad = document.getElementById('FRobesidad').checked;
            const historiaPatologiaCoronaria = document.getElementById('FRhistoriaPatologiaCoronaria').checked;
            const historiaFamiliarPatologiaCoronaria = document.getElementById('FRhistoriaFamiliarPatologiaCoronaria').checked;
            const historiaInsuficienciaCardiaca = document.getElementById('FRhistoriaInsuficienciaCardiaca').checked;
            const historiaCerebrovascular = document.getElementById('FRhistoriaCerebrovascular').checked;
            const arteriopatiaPeriferica = document.getElementById('FRarteriopatiaPeriferica').checked;
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
                if (obesidad) riesgoModerado++;
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

        // esta indicoado angioTAC?
        const resultadoStress = parseInt(document.getElementById('resultadoStress').value);
        const angioTacMessage = document.getElementById('angioTacMessage');
        if (resultadoStress === 1 || resultadoStress === 2) {
            angioTacMessage.innerText = "Está indicado la realización de angioTAC";
            angioTacMessage.style.backgroundColor = "red";
        } else {
            angioTacMessage.innerText = "No es necesario angioTAC";
            angioTacMessage.style.backgroundColor = "green";
        }
        //¿esta indicado coronariografía?
            const estenosisDerecha = document.getElementById('estenosisDerecha').checked;
            const estenosisIzquierda = document.getElementById('estenosisIzquierda').checked;
            const scoreCalcico = document.getElementById('scoreCalcico').checked;
            const norealizado = document.getElementById('norealizado').checked;
            const resultadoStresseco = parseInt(document.getElementById('resultadoStress').value);
            const historiaPatologiaCoronaria2 = document.getElementById('FRhistoriaPatologiaCoronaria').checked;

            const coronariografiaMessage = document.getElementById('coronariografiaMessage');

            if (norealizado || estenosisDerecha || estenosisIzquierda || scoreCalcico || resultadoStresseco === 3 || historiaPatologiaCoronaria2) {
                coronariografiaMessage.innerText = "Está indicado la realización de coronariografía";
                coronariografiaMessage.style.backgroundColor = "red";
            } else {
                coronariografiaMessage.innerText = "No es necesario realizar coronariografía";
                coronariografiaMessage.style.backgroundColor = "green";
            }
        // esta indicado cate dercho?
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

    };
    
    // Actualiza la UI del índice HFA-PEEF
    const updateHfaPeefUI = (indiceHfaPeef) => {
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
    };

    // Actualiza la UI del gradiente A-a de oxígeno
    const updateAaGradientUI = (aaGradient, edad, pao2) => {
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
    };
    // actualiza PFR
    const updatefuncionpulmonarUI = (fev1FvcRatio,fev1,fvc) => {
        let color2="green";
        // fvc
        let mensajefvc;
            if (fvc > 65) {
                mensajefvc = "restrictivo leve (FVC > 65%)";
                color2="green";
            } else if (fvc >= 50) {
                color2="red";
                mensajefvc = "restrictivo moderado (FVC 50-65%)";
            } else if (fvc >= 35) {
                mensajefvc = " restrictivo severo (FVC 35-49%)";
                color2="red";
            } else {
                mensajefvc = "restrictivo muy severo (FVC >35%)";
                color2="red";
            };
        // vems
        let mensajefev1;
            if (fev1 > 65) {
                mensajefev1 = "obstructivo leve (FEV1 > 65%)";
                color2="green";
            } else if (fev1 >= 50) {
                mensajefev1 = "obstructivo moderado (FEV1 50-65%)";
                color2="red";
            } else if (fev1 >= 35) {
                mensajefev1 = "obstructivo severo (FEV1 35-49%)";
                color2="red";
            } else {
                mensajefev1 = "obstructivo muy severo (FEV1 <35%)";
                color2="red";
            };

        if (fev1FvcRatio < 0.7) {
            //restricitivo
            if (fvc <= 80) {
                pulmonaryFunctionMessage.innerText = "Patrón " +mensajefvc;
                pulmonaryFunctionMessage.style.backgroundColor = color2;
            } else {
                pulmonaryFunctionMessage.innerText = "Patrón normal";
                pulmonaryFunctionMessage.style.backgroundColor = "green";
            }
        } else {
            // mixto-obstructivo
            if (fvc <= 80) {
                pulmonaryFunctionMessage.innerText = "Patrón mixto: " + mensajefev1 + " " + mensajefvc;
                pulmonaryFunctionMessage.style.backgroundColor = color2;
            } else {
                pulmonaryFunctionMessage.innerText = "Patrón " + mensajefev1;
                pulmonaryFunctionMessage.style.backgroundColor = color2;
            }
        };
    };
    // Actualiza la UI del eGFR
    const updateEGFRUI = (eGFR) => {
        const rows = document.querySelectorAll('#egfrTable tr');
        rows.forEach(row => row.style.backgroundColor = '');
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
    };

   // riesgo de requerir CRRT
    const updateAgopianUI = (score,falloHepatico) =>{
        let tiempo = 0;
        let mensaje = "";
        if (score >= 42 && falloHepatico===1){
            mensaje = " .Riesgo elevado de requerir CRRT intraoperatoria";
        }else if (score >=28 && falloHepatico ===2){
            mensaje = " .Riesgo elevado de requerir CRRT intraoperatoria";
        }else if (score <42  && falloHepatico ===1){
            tiempo = ((42 - score) * 0.72).toFixed(1);
            mensaje = " .Riesgo de necesitar CRRT si Tº isquemia frío > " + tiempo + " horas";
        } else if (score <28 && falloHepatico ===2){
            tiempo = ((28 - score) * 0.72).toFixed(1);
            mensaje = " .Riesgo de necesitar CRRT si Tº isquemia frío > " + tiempo + " horas";
        };
        const crrtScoreMessage = document.getElementById('crrtScoreMessage');
        crrtScoreMessage.innerText = "Score de CRRT: " + score + mensaje;
    
    };
    //  riesgo de sangrado UI
    const updateBleedingScoreUI = (score) => {
        const messageDiv = document.getElementById('bleedingScoreMessage');
        if (score >= 3) {
            messageDiv.style.backgroundColor = 'red';
            messageDiv.innerHTML = `Alto riesgo de sangrado. Score: ${score}`;
        } else {
            messageDiv.style.backgroundColor = 'green';
            messageDiv.innerHTML = `Bajo riesgo de sangrado. Score: ${score}`;
        }
    };

    // score NPT UI
    const updatescoreNPTUI = (score) => {
        // activa /desactiva calculos en funcion de sobrecarga hidrica
        const isSobrecargaHidrica = document.getElementById('sobrecargaHidrica').value === '1';
        document.getElementById('imc').disabled = isSobrecargaHidrica;
        document.getElementById('perdidaPeso6Meses').disabled = isSobrecargaHidrica;
        document.getElementById('enfermedadAgudaSinAlimentacion').disabled = isSobrecargaHidrica;
        document.getElementById('capacidadAlimentarse').disabled = !isSobrecargaHidrica;
        document.getElementById('menosMitadDieta5Dias').disabled = !isSobrecargaHidrica;
        document.getElementById('perdidaPeso3_6Meses').disabled = !isSobrecargaHidrica;
        // Marcar el valor del select como 0 solo para los controles select que están deshabilitados
        const selects = document.querySelectorAll('select:disabled');
        selects.forEach(select => {
            select.value = '0';
        });
    
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
       
    };
    // score Duke UI
    const updateDukeScoreUI = (score) => {
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
    };
    // actualiza Frail
    const updateFrailScoreUI = (score) =>{
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
    };
    const updaterequerimientosUI = (calorias_total,hidratos_total,lipidos_total,proteinas_total) => {
        // modifica tabla
        const proteinas_gr = proteinas_total / 4;
        const hidratos_gr = hidratos_total / 4;
        const lipidos_gr = lipidos_total / 9;
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


    };
    // Actualiza la UI del GPVH
    const updateGpvhUI = (gpvh) => {
        document.getElementById('gpvh1').classList.remove('highlight');
        document.getElementById('gpvh2').classList.remove('highlight');
        document.getElementById('gpvh3').classList.remove('highlight');
        document.getElementById('gpvh4').classList.remove('highlight');
        if (gpvh > 12) {
            document.getElementById('gpvh4').classList.add('highlight');
        } else if (gpvh > 9) {
            document.getElementById('gpvh3').classList.add('highlight');
        } else if (gpvh > 5) {
            document.getElementById('gpvh2').classList.add('highlight');
        } else {
            document.getElementById('gpvh1').classList.add('highlight');
        }
    };

    const gaugeUI = (canvas, valor, limite1, limite2, limite3, limite4) => {
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
    };

    const updateResumenGeneralUI = () => {
        // administradivos
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
        // comorbilidades
        const checkboxes = document.querySelectorAll('input[name="th.comorbilidad[]"]:checked');
        const comorbilidadesList = document.getElementById('comorbilidadesList');
        comorbilidadesList.innerHTML = ''; 
        checkboxes.forEach((checkbox) => {
            const li = document.createElement('li');
            li.textContent = checkbox.value;
            comorbilidadesList.appendChild(li);
        });
        // antecedentes quirurgicos
        const checkboxes2 = document.querySelectorAll('input[name="th.cirugia[]"]:checked');
        const antecedentesList = document.getElementById('antecedentesList');
        antecedentesList.innerHTML = ''; //
        checkboxes2.forEach((checkbox) => {
            const li = document.createElement('li');
            li.textContent = checkbox.value;
            antecedentesList.appendChild(li);
        });
        // medicación
        const checkboxes3 = document.querySelectorAll('input[name="th.medicacion[]"]:checked');
        const medicacionList = document.getElementById('medicacionList');
        medicacionList.innerHTML = '';
        checkboxes3.forEach((checkbox) => {
            const li = document.createElement('li');
            li.textContent = checkbox.value;
            medicacionList.appendChild(li);
        });
        document.getElementById('Rcomentarioantecedentes').innerText = document.getElementById('comentarioantecedentes').value;
        // indicaciones
        const checkboxes4 = document.querySelectorAll('input[name="th.indicacion[]"]:checked');
        const indicacionesList = document.getElementById('indicacionesList');
        indicacionesList.innerHTML = '';
        checkboxes4.forEach((checkbox) => {
            const li = document.createElement('li');
            li.textContent = checkbox.value;
            medicacionList.appendChild(li);
        });
        const selectElement = document.getElementById('tipoTrasplante');
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        document.getElementById('Rtipotrasplante').innerText = selectedOption.text;
        // analitica
        document.getElementById('phR').innerText = document.getElementById('phPRE').value;
        document.getElementById('pao2R').innerText = document.getElementById('pao2PRE').value;
        document.getElementById('paco2R').innerText = document.getElementById('paco2PRE').value;
        document.getElementById('co3hR').innerText = document.getElementById('co3hPRE').value;
        document.getElementById('ebR').innerText = document.getElementById('ebPRE').value;
        document.getElementById('lacticoR').innerText = document.getElementById('lacticoPRE').value;
        document.getElementById('hemoglobinaR').innerText = document.getElementById('hemoglobinaPRE').value;
        document.getElementById('tProtrombinaR').innerText = document.getElementById('tProtrombinaPRE').value;
        document.getElementById('inrR').innerText = document.getElementById('inrPRE').value;
        document.getElementById('ttpaR').innerText = document.getElementById('ttpaPRE').value;
        document.getElementById('fibrinogenoR').innerText = document.getElementById('fibrinogenoPRE').value;
        document.getElementById('plaquetasR').innerText = document.getElementById('plaquetasPRE').value;    
        document.getElementById('naR').innerText = document.getElementById('naPRE').value;
        document.getElementById('kR').innerText = document.getElementById('kPRE').value;
        document.getElementById('caR').innerText = document.getElementById('caPRE').value;
        document.getElementById('mgR').innerText = document.getElementById('mgPRE').value;
        document.getElementById('clR').innerText = document.getElementById('clPRE').value;
        document.getElementById('procalcitoninaR').innerText = document.getElementById('procalcitoninaPRE').value;
        document.getElementById('proBNPR').innerText = document.getElementById('proBNPPRE').value;
        document.getElementById('bilirrubinaR').innerText = document.getElementById('bilirrubinaPRE').value;
        document.getElementById('albuminaR').innerText = document.getElementById('albuminaPRE').value;
        document.getElementById('crR').innerText = document.getElementById('crPRE').value;

    };
    const updateResumenVAUI = () => {
        
    };
    const updateResumenCardioUI = () => {
    };


    return {
        updateChildPughUI,
        updateMeldUI,
        updateanaliticaUI,
        updateHfaPeefUI,
        updateAaGradientUI,
        updatefuncionpulmonarUI,
        updateEGFRUI,
        updateAgopianUI,
        updateBleedingScoreUI,
        updatescoreNPTUI,
        updateDukeScoreUI,
        updateFrailScoreUI,
        updaterequerimientosUI,
        updateGpvhUI,
        gaugeUI,
        updateCardioUI,
        updateResumenGeneralUI,
        updateResumenVAUI,
        updateResumenCardioUI
    };
})();
// botones atras y siguiente
function showNextSection(currentSection) {
    
    document.getElementById('section' + currentSection).classList.remove('active');
    document.getElementById('section' + (currentSection + 1)).classList.add('active');
    const seccionesMap = {
        1: Secciones.Seccion2,
        2: Secciones.Seccion3,
        3: Secciones.Seccion4,
        4: Secciones.Seccion5,
        5: Secciones.Seccion6,
        6: Secciones.Seccion7
    };
    seccionesMap[currentSection]();
}

function showPreviousSection(currentSection) {
    document.getElementById('section' + currentSection).classList.remove('active');
    document.getElementById('section' + (currentSection - 1)).classList.add('active');
}

// Módulo de recarga de secciones
const Secciones = (() => {
    const Seccion2 = () => {
        // cardiología.
        // rellena campos de secciones previas
        document.getElementById("FRhipertension").checked = document.getElementById("hipertension").checked;
        document.getElementById("FRdiabetes").checked = document.getElementById("diabetes").checked;
        document.getElementById("FRhistoriaCerebrovascular").checked = document.getElementById("ictus").checked;
        document.getElementById("FRhistoriaInsuficienciaCardiaca").checked = document.getElementById("insuficienciaCardiaca").checked;
        document.getElementById("FRarteriopatiaPeriferica").checked = document.getElementById("enfermedadVascular").checked;
        const const1 = document.getElementById("infarto").checked;
        const const2 = document.getElementById("angina").checked;
        if (const1 || const2 ){
            document.getElementById("FRhistoriaPatologiaCoronaria").checked=true;
        }
        document.getElementById('FRedad').value = document.getElementById('edadinicio').value;
        // chequea indicaciones y actualiza indices
        UI.updateCardioUI();
        Calculations.calculateHfaPeefIndex();

        };
    const Seccion3 = () => {
        //neumo
        // rellena campos de secciones previas
        document.getElementById("ph").value = document.getElementById("phPRE").value || 7.40;
        document.getElementById("pao2").value = document.getElementById("pao2PRE").value || 90;
        document.getElementById("paco2").value = document.getElementById("paco2PRE").value || 40;
        document.getElementById("hco3").value = document.getElementById('co3hPRE').value || 24;
        document.getElementById("eb").value = document.getElementById("ebPRE").value || 0;
        document.getElementById("na").value = document.getElementById("naPRE").value || 140;
        //calculos
        Calculations.evaluateVA();
        Calculations.evaluateAaGradient();
        Calculations.evaluatefuncionpulmonar();

    };
    const Seccion4 = () => {
        //nefro
        // rellena de secciones previas
        document.getElementById("currentCreatinine").value = document.getElementById("crPRE").value;
        document.getElementById("kPreop").value = document.getElementById("kPRE").value;
        document.getElementById("bilirrubinaCRRT").value = document.getElementById("bilirrubinaPRE").value;
        // indices
        Calculations.calculateEGFR();
        Calculations.checkAKI();
    };
    const Seccion5 = () => {
        //sangrado
        // rellena desde secciones previas
        document.getElementById('retrasplantehemato').value = document.getElementById('tipoTrasplante').value;
        document.getElementById('sexohemato').value = document.getElementById('sexoinicio').value;
        document.getElementById('edadhemato').value = document.getElementById('edadinicio').value;
        document.getElementById('hemoglobina').value = document.getElementById('hemoglobinaPRE').value;
        const abd1 = document.getElementById('cirugiaAbdominalAlta').checked;
        const abd2 = document.getElementById('cirugiaAbdominalBaja').checked;
        const abd3 = document.getElementById('cirugiaHepatobilioPancreas').checked;
        if (abd1 || abd2 || abd3){
            document.getElementById('cirugiaAbdominalPrevia').value = 1;
        }
        document.getElementById('protrombina').value=document.getElementById('inrPRE').value;
        document.getElementById('creatininahemato').value=document.getElementById('crPRE').value;
        document.getElementById('albumina').value=document.getElementById('albuminaPRE').value;
        document.getElementById('plaquetas').value=document.getElementById('plaquetasPRE').value;
       // calcula indice
       Calculations.calculateBleedingScore();
    };  

    const Seccion6 = () => {
        // nutricion y rehab
        // no hay datos que recoger. Calcular indices
        Calculations.calculateScoreNPT();
        Calculations.calculateDukeScore();
        Calculations.calculateFrailScore();
        Calculations.calculateRequerimientos();

    };
    const Seccion7 = () => {
        // resumen e indices
        UI.updateResumenGeneralUI();
        Indices.indicesChildMeld();
        Indices.indiceNaguib();
        Indices.indiceFHA();
        Indices.indiceRICR();
        Indices.indiceCARI();
        Indices.indiceVD();
        Indices.indiceSHP();
        Indices.indiceSPP();
        Indices.indicesangrado();
        Indices.indiceHP();
        Indices.indiceeFGR();
        Indices.indiceAgopian();
        Indices.indiceRFH();
        Indices.indiceDuke();
        Indices.indiceFrail();

    };

    return{
        Seccion2,
        Seccion3,
        Seccion4,
        Seccion5,
        Seccion6,
        Seccion7
    };
})();

// Modulo para calculo de indices de riesgo
const Indices = (() => {
    const indicesChildMeld = () => {
        const child = document.getElementById('childPughScore').value;
        const meld = document.getElementById('meldScore').value;
        UI.gaugeUI("childcanvas",child,0,6,9,15);
        UI.gaugeUI("meldcanvas",meld,0,15,30,40);
    };
    const indiceNaguib = () => {
        const mallampati= parseInt(document.getElementById("mallampati").value);
        const apertura = parseInt(document.getElementById("apertura").value);
        const distancia = parseInt(document.getElementById("distancia").value);
        const movilidad = parseInt(document.getElementById("movilidadcolumna").value);
        const riesgo = parseInt((mallampati * 2 + apertura + distancia + movilidad)*100/12);
        UI.gaugeUI("viacanvas",riesgo,0,35,70,100);
    };
    const indiceFHA = () =>{
        const haff = parseInt(document.getElementById("indiceHfaPeef").value);
        UI.gaugeUI("VIcanvas",haff,0,3,5,6);
    };
    const indiceRICR = () =>{
        let ricr = 0;
        const creatinina = parseFloat(document.getElementById("creatininaMeld").value);
        const isquemia = document.getElementById('FRhistoriaPatologiaCoronaria').checked;
        const cerebro = document.getElementById('FRhistoriaCerebrovascular').checked;
        const insuficiencia = document.getElementById('FRhistoriaInsuficienciaCardiaca').checked;
        const diabetes = document.getElementById('FRdiabetes').checked;
        ricr += (creatinina >=2) ? 1:0;
        ricr += (isquemia) ? true:false;
        ricr += (cerebro) ? true:false;
        ricr += (insuficiencia) ? true:false;
        ricr += (diabetes) ? true:false;
        let valorriesgo = ricr; // se modifica con PC
        const revasc = parseInt(document.getElementById("resultadoCoronariografia").value);
        const riskMap = {
            2: 1,
            0: 1,
            1: {
                1: (estenosisDerecha, estenosisIzquierda, scoreCalcico, realizacion) => {
                    if (estenosisDerecha || estenosisIzquierda) return 30;
                    if (scoreCalcico) return 8;
                    if (realizacion) return 15;
                    return 3;
                },
                2: (estenosisDerecha, estenosisIzquierda, scoreCalcico, realizacion) => {
                    if (estenosisDerecha || estenosisIzquierda) return 30;
                    if (scoreCalcico) return 8;
                    if (realizacion) return 15;
                    return 3;
                },
                4: 1,
                3: (selectedOptionText) => {
                    return selectedOptionText === "WMSI 1.1-1.7" ? 3 : 7;
                }
            }
        };
        const resultadoStress = parseInt(document.getElementById('resultadoStress').value);
        const estenosisDerecha = document.getElementById('estenosisDerecha').checked;
        const estenosisIzquierda = document.getElementById('estenosisIzquierda').checked;
        const scoreCalcico = document.getElementById('scoreCalcico').checked;
        const realizacion = document.getElementById('norealizado').checked;
        const selectedOptionText = document.getElementById('resultadoStress').options[document.getElementById('resultadoStress').selectedIndex].text;
        
        if (riskMap[revasc]) {
            if (typeof riskMap[revasc] === 'function') {
                valorriesgo = riskMap[revasc](estenosisDerecha, estenosisIzquierda, scoreCalcico, realizacion);
            } else if (typeof riskMap[revasc][resultadoStress] === 'function') {
                valorriesgo = riskMap[revasc][resultadoStress](estenosisDerecha, estenosisIzquierda, scoreCalcico, realizacion);
            } else if (typeof riskMap[revasc][resultadoStress] === 'number') {
                valorriesgo = riskMap[revasc][resultadoStress];
            } else if (resultadoStress === 3) {
                valorriesgo = riskMap[revasc][resultadoStress](selectedOptionText);
            }
        }
        UI.gaugeUI("CIcanvas",valorriesgo,0,5,15,30);

    };
    const indiceCARI = () =>{
        const QTc= parseInt(document.getElementById("qtc").value);
        const edad = parseInt(document.getElementById("edadinicio").value);
        const MELD = parseInt(document.getElementById("meldScore").value);
        const sexo = parseInt(document.getElementById("sexoinicio").value);
        let CARI = 0;
        CARI += (QTc >= 480) ? 2 : 0;
        CARI += (edad >=65) ? 1 : 0;
        CARI += (MELD >=30) ? 1 : 0;
        CARI += (sexo ==1) ? 1 : 0;
        UI.gaugeUI("PCcanvas",CARI,0,1,3,5);
    };
    const indiceVD = () =>{
        const paps = parseInt(document.getElementById("papsEstimada").value);
        const tapse = parseInt(document.getElementById("Tapse").value);
        const indiceTP = (tapse/paps).toFixed(2);
        UI.gaugeUI("VDcanvas",indiceTP,0.8,0.31,0.19,0);
    };

    const indiceSHP = () =>{
        // sd hepato pulmonar
        const pao2 = parseFloat(document.getElementById('pao2').value) || 95;
        UI.gaugeUI("SHPcanvas",pao2,100,60,50,30);
    };

    const indiceSPP = () => {
        const papm = parseInt(document.getElementById("papmSelect").value);
        const papMap = {
            0: 24,
            1: 30,
            2: 40,
            default: 45
        };
        const papvalue = papMap[papm] !== undefined ? papMap[papm] : papMap.default;
        UI.gaugeUI("HPPcanvas",papvalue,20,25,35,45);
    };
    const indicesangrado = () => {
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
        UI.gaugeUI("sangradocanvas",score,0,2,2,8);
    };
    const indiceHP=() => {
        const pe= document.getElementById('pshe').value;
        const pl= document.getElementById('pshl').value;
        const gpvh = pe-pl;
        UI.gaugeUI("portalcanvas",gpvh,0,9,12,25);
    };
    const indiceeFGR = () => {
        const eGFR = parseInt(document.getElementById('egfrValue').innerText);
        UI.gaugeUI("eFGRcanvas",eGFR,150,30,15,0);
    };
    const indiceAgopian = () => {
        const agopian = parseInt(document.getElementById('hiddenAgopian').value);
        UI.gaugeUI ("CRRTcanvas",agopian,0,28,42,60);
    };
    const indiceRFH = () => {
        const score = parseInt(document.getElementById('hiddenNPT').value);
        UI.gaugeUI("NPTcanvas",score,0,1,2,7);
    };
    const indiceFrail = () => {
        const score = parseInt(document.getElementById('hiddenFrail').value);
        UI.gaugeUI("Frailcanvas",score,0,1,2,3);
    };
    const indiceDuke = () => {
        const score = parseInt(document.getElementById('hiddenDuke').value);
        UI.gaugeUI("Dukecanvas",score,60,45,35,0);
    };
    return {
        indicesChildMeld,
        indiceNaguib,
        indiceFHA,
        indiceRICR,
        indiceCARI,
        indiceVD,
        indiceSHP,
        indiceSPP,
        indicesangrado,
        indiceHP,
        indiceeFGR, 
        indiceAgopian,
        indiceRFH,
        indiceFrail,
        indiceDuke
    };
})();

// Módulo de manejo de IMC y eventos
const EventHandlers = (() => {
    // Modifica el peso
    const modificarPeso = () => {
        const peso = parseFloat(document.getElementById('pesoinicio').value);
        const talla = parseFloat(document.getElementById('tallainicio').value) / 100;
        if (peso && talla) {
            const imc = peso / (talla * talla);
            document.getElementById('imcinicio').value = imc.toFixed(2);
        }
    };
    // Modifica la talla
    const modificarTalla = () => {
        const peso = parseFloat(document.getElementById('pesoinicio').value);
        const talla = parseFloat(document.getElementById('tallainicio').value) / 100;
        if (peso && talla) {
            const imc = peso / (talla * talla);
            document.getElementById('imcinicio').value = imc.toFixed(2);
        }
    };
    return {
        modificarPeso,
        modificarTalla
    };
})();



// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', App.init);
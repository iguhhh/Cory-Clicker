$(document).ready(function(){
    var money = 0;
    var cpc = 1;
    var trabalhador$ = 10;
    var menu;
    var trabalhador = 0;
    var coolercory$ = 50;
    var coolC = 0;
    var paycheck = 1;
    var pay$ = 50;
    var cps = 0;
    const coryaudio = new Audio("./images/lancer-splat2.mp3");
    var kiryu = 0
    var kiryu$ = 200;
    var ashtar = 0;
    var ashtar$ = 200;

setInterval(function(){
    money += cps;
    changeInventory();
    changeMarket();
}, 1000);

setInterval(function(){
    frasePog();
}, 10000    );



//Cory

    $("#BigCory").click(function(){
        money += cpc;
        changeInventory();
        changeMarket();
        coryaudio.currentTime = 0;
        coryaudio.cloneNode(true).play();
    
    });

//botao

    $("#visitB").click(function(){
        menu = switchMenu("buildings");
    });

    $("#visitH").click(function(){
        menu = switchMenu("help")
    });

    $("#return").click(function(){
        menu = switchMenu("main");
    });

    $("#return2").click(function(){
        menu = switchMenu("main");
    });

    $("#worker").click(function(){
        money -= trabalhador$;
        trabalhador++;
        cps += 1 * paycheck;
        trabalhador$ *= 2
        changeInventory();
        changeMarket();
        increaseCPS();
    })

    $("#coolerC").click(function(){
        money -= coolercory$;
        coolC++;
        cpc *= 2;
        coolercory$ *= 3
        changeInventory();
        changeMarket();
        increaseCPS();
    })

    $("#payer").click(function(){
        money -= pay$;
        paycheck++;
        pay$ *= 3
        changeInventory();
        changeMarket();
        increaseCPS();
    })

    $("#kiryu").click(function(){
        money -= kiryu$;
        kiryu++;
        $("#kiryu").css("display", "none");
        changeInventory();
        changeMarket();
        increaseCPS();
    })

    $("#ashtar").click(function(){
        money -= ashtar$;
        ashtar++
        ashtar$ *= 3
        changeInventory();
        changeMarket();
        increaseCPS();
    })
//inventario

    function changeInventory(){
        if (money ==1){
            $("#money").html("Você tem " + Math.round(money * 10) / 10 + " Cory");
        }else {
            $("#money").html("Você tem " + Math.round(money * 10) / 10 + " Coryes");
        }

        if (trabalhador ==1){
            $("#workert").html(trabalhador + " Trabalhador")
        }else {
            $("#workert").html(trabalhador + " Trabalhadores")
        }
        if (coolC == 0){
            $("#coolinator").html("");
        }else {
            $("#coolinator").html("Cory é "+ coolC +"% mais legal")
        }

        if (trabalhador == 0){
            $("#yipee").html("");
        }else {
            $("#yipee").html("O salário dos seus trabalhadores é " + paycheck +"$");
        }
        if (ashtar == 0){
            $("#army").html("");
        }else if(ashtar == 1){
            $("#army").html("O exercito intergalactico tem "+ ashtar +" nave");
        } else {
            $("#army").html("O exercito intergalactito tem "+ ashtar +" naves")
        }
        if (coolC >= 1){
            document.getElementById("Bcory").setAttribute("src", "./images/sungcory.png");
        }else{
            document.getElementById("Bcory").setAttribute("src", "./images/cory.png");
        }
        if (trabalhador == 0){
            $("#obama").css("display", "none");
        }else{
            $("#obama").css("display", "block")
        }
        if (kiryu == 0){
            $("#Kimg").css("display", "none");
        }else{
            $("#Kimg").css("display", "block");
       }
        if (ashtar == 0){
            $("#ashtars").css("display", "none");
        }else{
            $("#ashtars").css("display", "block");
        }
    }

//mudar menu

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }

//lojas

    function changeMarket() {
        if (money >= trabalhador$){
            document.getElementById("worker").disabled = false;
        }else{
            document.getElementById("worker").disabled = true;
        }
        if (money >= coolercory$){
            document.getElementById("coolerC").disabled = false;
        }else{
            document.getElementById("coolerC").disabled = true;
        }
        if (money >= pay$ && trabalhador >= 1){
            document.getElementById("payer").disabled = false;
        }else{
            document.getElementById("payer").disabled = true;
        }
        if (money >= kiryu$ && kiryu == 0){
            document.getElementById("kiryu").disabled = false;
        }else{
            document.getElementById("kiryu").disabled = true;
        }
        if (money >= ashtar$){
            document.getElementById("ashtar").disabled = false;
        }else{
            document.getElementById("ashtar").disabled = true;
        }
        $("#coolerC").html("Deixe o cory 1% mais legal [Custa "+ coolercory$ +" Coryes]");
        $("#worker").html("Compre 1 trabalhador [Custa "+ trabalhador$ + " Coryes]"); 
        $("#payer").html("Aumente o salário dos trabalhadores em 1$ [Custa "+ pay$+" Coryes]")
        $("#kiryu").html("Faça Kiryu clicar por você [Custa "+ kiryu$+" Coryes]")
        $("#ashtar").html("Faça Ashtar e seu exército intergalactico clicar por você [Custa "+ ashtar$+" Coryes]")

    }

    function increaseCPS(){
        cps = (trabalhador * paycheck) + (kiryu * cpc) + (10 * ashtar);
    }

    function frasePog(){
        const frases = ['"Hwell, butter my butt n call me a biscuit!"',
        '"Você sabia que é muito fácil de hackear o seu nintendo 3DS?"',
        '"O livro ta na mesa"',
        '"A verdade é que, eu nunca assisti Cory na casa branca"',
        '"Obama é meu parceiro"',
        '"Se você não sabe o porquê do site ser metade em inglês e metade em português, eu também não sei"',
        '"Todo jogo bom tem pesca"',
        '"My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession."',
        '"Rock and Stone!"',
        '"Não sou feito de milho"',
        '"SaBOR Cookie"',
        '"Menor pecinha passou por aqui"',
        '"Gradiente CSS > Pedro"',
        '"Agora eu entendi!" <-- Não entendeu',
        '"La ele um milhão de vezes"',
        '"Me da ponto por favor professora"',
        '"@grok isso é verdade?"',
        '"Cory parece pensativo"',
        '"Cory quer dinheiro"',
        '"Cory nunca saiu da casa branca em toda sua vida"',
        '"Cory afirma que metade das frases que aparecem aqui foram escritas por outras pessoas."',
        '"Literalmente 1984"',
        '"Cory quer abrir uma casa de apostas"',
        '"Cory afirma ser vascaino"',
        '"Nois vai te desejar muitas bençãos e orar por ti"'] 
        let frase = frases[Math.floor(Math.random()* frases.length)];
        $("#teste").html(frase);

    }  

})
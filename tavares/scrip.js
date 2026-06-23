let total = 0;


let estoque = {

"X-Burguer":10,

"X-Bacon":10,

"Batata Frita":10

};



function comprar(nome,preco){



if(estoque[nome] <= 0){


alert("Produto sem estoque!");

return;


}




let lista = document.getElementById("carrinho");



let item = document.createElement("li");



item.innerHTML =
nome + " - R$ " + preco.toFixed(2);



lista.appendChild(item);



total += preco;



document.getElementById("total").innerHTML =
total.toFixed(2);



estoque[nome]--;



atualizarEstoque();



}





function atualizarEstoque(){



document.getElementById("estoque1").innerHTML =
estoque["X-Burguer"];


document.getElementById("estoque2").innerHTML =
estoque["X-Bacon"];


document.getElementById("estoque3").innerHTML =
estoque["Batata Frita"];



}




function finalizar(){



let nome =
document.getElementById("nome").value;



let forma =
document.getElementById("pagamento").value;



if(nome == ""){


alert("Digite o nome do cliente");


return;


}



if(total == 0){


alert("Carrinho vazio");


return;


}




alert(

"Pedido realizado!\n\nCliente: "
+nome+
"\nPagamento: "
+forma+
"\nTotal: R$ "
+total.toFixed(2)

);



total = 0;


document.getElementById("carrinho").innerHTML="";


document.getElementById("total").innerHTML="0.00";


}
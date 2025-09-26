//cria uma div "conteiner" e adicionar ao body
const conteiner = document.createElement('div');
conteiner.id = 'lista-conteiner';
document.body.appendChild(conteiner);

//=====Estilos direto no js =====
conteiner.style.backgroundColor = '#f9f9f9'; //cor de fundo 
conteiner.style.border = '2px solid #ccc'; //borda
conteiner.style.borderRadius = '10px'; //cantos arredondados
conteiner.style.padding = '20px'; //espaçamento interno
conteiner.style.maxWidth = '400px'; //largura maxima
conteiner.style.margin = '20px auto'; //centralizar horizontalmente
conteiner.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'; //sombra


//cria o titulo
const titulo = document.createElement('h1');
titulo.textContent = 'Lista de Compras';
titulo.style.textAlign = 'center';//exemplo de estilo no titulo
conteiner.appendChild(titulo);


const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = ' Digite um item';
conteiner.appendChild(inputItem);

const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
conteiner.appendChild(btnAdd);

const lista = document.createElement('ul');
conteiner.appendChild(lista);


function adicionarItem() {
    const valor =  inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.textContent= valor;
        lista.appendChild(li);
        inputItem.value = '';
        inputItem.focus(); // volta o foco para o campo
    }
};

btnAdd.addEventListener('click', adicionarItem);

inputItem.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter'){
        adicionarItem();
    }
});


document.body.style.backgroundColor = 'pink';
document.body.style.textAlign = 'center';
document.body.style.alignItems = 'center';
// Botão para salvar
const btnSalvar = document.createElement('button');
btnSalvar.textContent = 'Salvar Lista';
btnSalvar.style.display ='block';
btnSalvar.style.margin ='20px auto';
btnSalvar.style.padding ='6px 12px';
btnSalvar.style.cursor = 'poiter';
btnSalvar.style.borderRadius = '15px';
btnSalvar.style.color = 'dark';
btnSalvar.style.fontWeight = 'bold';
container.appendChild(btnSalvar);


// Função para salvar a lista em um arquivo .txt
function salvarLista(){
    // Pega todos os <li> e monta o texto (cada item em uma linha)
    const itens = Array.from(lista.querySelectorAll('li'))
                       .map(li => li.textContent)
                       .join('\n');

     if(!itens) {
        alert('A lista está vazia!')
        return;
     }
   
     // Cria um Blob com o conteúdo de texto
     const blob = new Blob ([itens], {type: 'text/plain' });
     const url = URL.createObjectURL(blob);

     // Cria um link temporario para download 
     const a = document.createElement('a');
     a.href = url; 
     a.download = 'lista.txt'; // nome do arquivo
     document.body.appendChild(a);
     a.click(); // dispara o download
     document.body.removeChild(a);

     // Libera o objeto URL
     URL.revokeObjectURL(url);
    }

    // Evento do botão 
    btnSalvar.addEventListener('click', salvarLista);
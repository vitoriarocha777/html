//Botão para salvar
const btnSalvar = document.createElement('button');
btnSalvar.textContent = 'Salvar Lista';
btnSalvar.style.display = 'block';
btnSalvar.style.margin = '20px auto';
btnSalvar.style.padding = '6px 12px';
btnSalvar.style.cursor = 'pointer';
conteiner.appendChild(btnSalvar);

// Função para salvar a lista em um arquivo .txt
function salvarLista () {
    //Pegar todos os <li> e monta o texto ( cada item em uma linha)
    const itens = Array.from(lista.querySelectorAll('li'))
                            . map(li => li.textContent)
                            .join('\n');
   if (!item) {
      alert('A lista esta vazia!');
     return;
    }


      //Cria uma Blob com o conteudo de texto
      const blob = new Blob((itens),{ typer: 'text/plain'});
      const url = URL.createObjectURL(blob);

    // Cria uma link temporario para downloand
       const a = document.createElement('a');
       a.href = url;
      a.download = 'lista.txt'; //none do arquivo
     document.body.appendChild(a);
      a.click(); //dispara o download
       document.body.removeChild(a);

      //Libera o objeto URL
    URL.revokeObjectURL(url);
}

//Evento de botão
btnSalvar.addEventlistenner('click', salvarLista)
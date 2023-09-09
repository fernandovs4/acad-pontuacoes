
const nome = document.querySelector("#nome")
const justificativa = document.querySelector(".justificativa")
const input = document.getElementById("foto");
const uploadButton = document.getElementById("upload-button");
const table_  = document.querySelector(".table")
const foi_pra_acad = document.querySelector("select")
const horas_treino = document.querySelector("#horas")

dados_tabela = {
    "dados_tabela":[
    {
        "nome":"Fernando",
        "pontuacao": 0,
        "treinou": "Não",
        "tempoTreino": "",
        "justificativa": "",
        "foto": ""
    },

     {
        "nome":"Alan",
        "pontuacao": 0,
        "treinou": "Não",
        "tempoTreino": "",
        "justificativa": "",
        "foto": ""
    },
    {
        "nome":"Fernando",
        "pontuacao": 0,
        "treinou": "Não",
        "tempoTreino": "",
        "justificativa": "",
        "foto": ""
    },
    {
        "nome":"Fernando",
        "pontuacao": 0,
        "treinou": "Não",
        "tempoTreino": "",
        "justificativa": "",
        "foto": ""
    },
    {
        "nome":"Fernando",
        "pontuacao": 0,
        "treinou": "Não",
        "tempoTreino": "",
        "justificativa": "",
        "foto": ""
    },
    {
        "nome":"Fernando",
        "pontuacao": 0,
        "treinou": "Não",
        "tempoTreino": "",
        "justificativa": "",
        "foto": ""
    },
    {
        "nome":"Fernando",
        "pontuacao": 10,
        "treinou": "Não",
        "tempoTreino": "",
        "justificativa": "",
        "foto": ""
    },
    {
        "nome":"Fernando",
        "pontuacao": 1,
        "treinou": "Não",
        "tempoTreino": "12",
        "justificativa": "",
        "foto": "kkl"
    }]
}


const compararPorPontuacao = (a, b) => b.pontuacao - a.pontuacao;

// Ordena o array de objetos com base na função de comparação
arrayDeObjetos = dados_tabela['dados_tabela'].sort(compararPorPontuacao);


console.log(foi_pra_acad.value)
console.log(table_)
const nomes_pessoas = []

const carregou_pagina = () => {
   
    
      

        const table = document.createElement("table")
        const th1 = document.createElement("th")
        th1.innerHTML = "Nome"
        const th2 = document.createElement("th")
        th2.innerHTML = "Pontuacoes"
        const th3 = document.createElement("th")
        th3.innerHTML = "Treinou"
        const th4 = document.createElement("th")
        th4.innerHTML = "Tempo de treino"
        const th5 = document.createElement("th")
        th5.innerHTML = "Justificativa"
        const th6 = document.createElement("th")
        th6.innerHTML = "Link da foto"
        const td_h = document.createElement("tr")
        td_h.appendChild(th1)
        td_h.appendChild(th2)
        td_h.appendChild(th3)
        td_h.appendChild(th4)
        td_h.appendChild(th5)
        td_h.appendChild(th6)
        table.appendChild(td_h)



        arrayDeObjetos.map(el => {
            nomes_pessoas.push(el.nome)
            console.log(el.nome, el.pontuacao, el.treinou)
            const td1 = document.createElement("td")
            const td2 = document.createElement("td")
            const td3 = document.createElement("td")
            const td4 = document.createElement("td")
            const td5 = document.createElement("td")
            const td6 = document.createElement("td")
            td1.innerHTML = el.nome
            td2.innerHTML = el.pontuacao
            td3.innerHTML = el.treinou
            td4.innerHTML = el.tempoTreino
            td5.innerHTML = el.justificativa
            td6.innerHTML = el.foto

            const tr = document.createElement("tr")
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tr.appendChild(td6)
            table.append(tr)



        })
   
       
        table_.appendChild(table)

    
}


// Função para obter informações da branch




const atualiza_tabela = ( justificativa, horas_treino, link_foto)=> {
    arrayDeObjetos.map(el => {
        if (el.nome == nome.value){
            el.pontuacao +=1
            el.foi_pra_acad = "Sim",
            el.justificativa = justificativa
            el.tempoTreino = horas_treino
            el.foto = link_foto
            
        }
    })
    
    
}

function envia_dados_tabela() {
    const owner = 'fernandovs4'; // Seu nome de usuário do GitHub
    const repo = 'acad-pontuacoes'; // Seu repositório no GitHub
    const branch = 'main'; // Nome da branch que você deseja usar
    const token = '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'; // Seu token de acesso pessoal do GitHub
    const filePath = 'tabela_dados.json'; // Caminho para o arquivo JSON local
    const commitMessage = 'Adicionando arquivo tabela dados'; // Mensagem do commit
  
    const fileContent = JSON.stringify({ "dados_tabela": [...arrayDeObjetos] });
    console.log(fileContent)
    
    // Codifica o conteúdo em base64
    const contentBase64 = btoa(fileContent);
  
    // Cria um objeto com os dados a serem enviados
    const dataToSend = {
      message: commitMessage,
      committer: {
        name: 'fernandovs4',
        email: 'fervsantos3000@gmail.com',
      },
      content: contentBase64,
    };
  
    // Faz a requisição para adicionar ou atualizar o arquivo
    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log('Arquivo JSON enviado com sucesso!');
        } else {
          console.error('Erro ao enviar o arquivo JSON:', response.statusText);
     
        }
      })
      .catch((error) => {
        console.log('Mensagem de erro da API:', error.response.statusText);
        console.error('Erro ao enviar o arquivo JSON:', error);
      });
  }
  

  



carregou_pagina()

        uploadButton.addEventListener("click", function () {


            if (!nomes_pessoas.includes(nome.value)){
                alert("Nome não encontrado na lista. Tente novamente")
            }    
            else{
                const file = input.files[0];
            console.log(horas_treino.value)
            if(foi_pra_acad.value == "sim"){
                if (file) {
                    if(horas_treino.value ==""){
                        alert("Selecione quantos minutos teve seu treino.")
                    }
                    else{



                        nome_da_foto = String(Date.now())

                        const reader = new FileReader();
            
                        reader.onload = function (e) {
                            const imageDataUrl = e.target.result;
            
                           
                            const token = "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";
                            const username = "fernandovs4";
                            const repository = "acad-pontuacoes";
            
                            const apiUrl = `https://api.github.com/repos/${username}/${repository}/contents/${nome_da_foto}.png`; 

                            

                            atualiza_tabela("",horas_treino.value,apiUrl)
                            console.log(arrayDeObjetos)
                            envia_dados_tabela()

                            const requestData = {
                                message: "Adicionando imagem do " + nome.value,
                                content: imageDataUrl.split(",")[1], 
                            };
            
                            fetch(apiUrl, {
                                method: "PUT",
                                headers: {
                                    Authorization: `token ${token}`,
                                },
                                body: JSON.stringify(requestData),
                            })
                                .then((response) => response.json())
                                .then((data) => {
                                    console.log("Imagem enviada com sucesso:", data);



                                })
                                .catch((error) => {
                                    console.error("Erro ao enviar imagem:", error);
                                });
                        };
            
                        reader.readAsDataURL(file); 

                    }
                   
                }
                else{
                    alert("Foto não selecionada, selecione a foto do seu shape.")
                }

            }
            else{
                

            }
           
            


            }
            
        });
        
    




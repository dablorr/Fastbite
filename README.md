# 🍔 Desenvolvimento de um Sistema de Pedidos Online para Fast Food  
**Autor:** João Gabriel A. de Brito

---
### Deploy:

[Fastbite](https://dablorr.github.io/Fastbite/)

## 🎯 Motivo da Escolha do Objeto de Estudo  
Decidi focar neste projeto porque um banco de dados bem estruturado é a base essencial de qualquer sistema de pedidos online, especialmente para fast food, onde rapidez e organização são fundamentais. Entender profundamente como criar e integrar um banco de dados robusto com o site me permitiu aplicar conceitos práticos que garantem eficiência, segurança e uma experiência do usuário fluida.

---

## 🗄️ A Importância do Banco de Dados no Sistema  
O banco de dados é o coração deste projeto. Ele armazena todas as informações críticas: categorias de produtos, detalhes de cada item do cardápio, dados dos clientes, registros dos funcionários e, principalmente, os pedidos realizados. Sem ele, não seria possível gerenciar o estoque, controlar a disponibilidade dos produtos ou acompanhar o status de cada pedido em tempo real.

---

## 🛠️ Como o Banco de Dados Foi Criado  
Utilizei o PostgreSQL para construir o banco de dados, devido à sua confiabilidade e robustez. A criação envolveu definir tabelas específicas que refletem as entidades do sistema como `categorias`, `produtos`, `clientes`, `funcionarios`, `pedidos`, e `itens_pedido`. Cada tabela foi detalhadamente planejada para organizar e relacionar os dados de forma eficiente, com restrições que garantem a integridade e a qualidade da informação.

As tabelas foram estruturadas para armazenar os dados de forma clara e permitir consultas rápidas. Por exemplo, a tabela `produtos` contém informações sobre nome, descrição, preço, imagem e um campo importante que sinaliza se o produto está disponível para venda.

---

## ⚙️ Como o Banco de Dados Funciona na Prática  
Quando um usuário acessa o site e visualiza o cardápio, o sistema não mostra apenas dados fixos; ele faz uma consulta ao banco de dados para obter os produtos disponíveis naquele momento. Isso garante que qualquer alteração — como a inclusão de um novo lanche ou a indisponibilidade temporária de um item — seja refletida imediatamente no site.

Ao realizar um pedido, os dados desse pedido são enviados para o servidor, que grava todas as informações no banco: quais produtos foram pedidos, quem fez o pedido, forma de pagamento, endereço de entrega, entre outros. Isso possibilita o controle integral da operação, desde a seleção do cliente até a entrega final.

---

## 🔗 Como Integrar o Banco de Dados com o Site via servidor (server.js)  
A integração é feita por um servidor backend, implementado em Node.js com o framework Express. Esse servidor atua como um “tradutor” entre o site (frontend) e o banco de dados.  

- **Conexão:** Usamos uma variável de ambiente `DATABASE_URL` que indica onde o banco está, seus dados de acesso e qual banco utilizar. Essa informação permite que o backend conecte de forma segura e controla as consultas e comandos SQL.

- **API:** O backend expõe rotas como `/api/products` para o site pedir dados dos produtos, e `/api/orders` para enviar novos pedidos. Quando o site faz uma requisição, o backend executa a consulta no banco, pega os dados, e devolve para o frontend em formato JSON.

- **Frontend:** No site, usamos JavaScript para fazer essas chamadas assíncronas, montar o cardápio dinamicamente e refletir as mudanças feitas no banco em tempo real para o usuário.

---

## 🔍 Estratégias de Análise do Objeto  
Para a análise do objeto Fastbite, utilizamos uma abordagem que envolveu a identificação das necessidades dos usuários e a estruturação do banco de dados de acordo com essas demandas. Realizamos sessões de brainstorming para mapear as funcionalidades essenciais, como a gestão de pedidos e a atualização do cardápio em tempo real. A partir desse mapeamento, definimos as entidades e seus relacionamentos, garantindo que o sistema fosse intuitivo e eficiente. A análise também incluiu a pesquisa de mercado sobre sistemas de pedidos online, permitindo que incorporássemos melhores práticas e inovações que poderiam agregar valor ao projeto.

---

## 📝 Considerações Críticas e Criativas  
Neste parágrafo, a equipe deve descrever o posicionamento tomado e já discutido nas considerações críticas e criativas realizadas ao longo da análise do objeto. É preciso transformar o Brainstorming ou o mapa conceitual em um ou dois parágrafos explicativos. 

Durante a análise do Fastbite, discutimos a importância de criar uma interface amigável e um sistema que respondesse rapidamente às interações do usuário. A equipe considerou a experiência do usuário como um fator crucial, levando em conta a necessidade de um design responsivo e acessível. Além disso, refletimos sobre a segurança dos dados, implementando práticas que garantem a proteção das informações dos clientes. A criatividade foi fundamental para encontrar soluções que não apenas atendessem às necessidades funcionais, mas que também proporcionassem uma experiência agradável e memorável para os usuários.

---

## 📚 Reflexões Finais  
Neste último parágrafo, a equipe deve concluir o seu resumo expandido apresentando como este estudo contribuiu para sua formação. Devem relatar as dificuldades e possibilidades encontradas durante a realização do trabalho informando resultados, o que teriam feito de diferente, se este objeto se adequa aos dias de hoje etc. Devem discorrer sobre os objetivos propostos a fim de refletir se foram alcançados ou não. 

Neste projeto, entendi que o banco de dados é muito mais que uma simples tabela onde os dados são guardados — ele é a fundação que torna o sistema funcional, ágil e confiável. Criar um banco estruturado, manter sua integridade e integrá-lo corretamente com o servidor e o site é essencial para uma aplicação que deseja oferecer uma experiência memorável para seus usuários. 

Aprendi também que a colaboração entre front-end, back-end e banco de dados é um processo contínuo de ajustes e melhorias, e que o entendimento profundo de cada parte faz toda a diferença na qualidade e no sucesso do sistema. As dificuldades encontradas, como a integração entre as diferentes tecnologias, foram superadas com pesquisa e testes, e isso me proporcionou um aprendizado valioso. Se eu pudesse fazer algo diferente, talvez investiria mais tempo na fase de testes para garantir que todas as funcionalidades estivessem perfeitamente alinhadas antes do lançamento. Este objeto se mostra extremamente relevante nos dias de hoje, considerando a crescente demanda por serviços de entrega e pedidos online.

---

## 📚 Referências Bibliográficas
- W3Schools. (2023). *PostgreSQL Tutorial*. Disponível em: [https://www.w3schools.com/sql/sql_intro.asp](https://www.w3schools.com/sql/sql_intro.asp)  
- Node.js Foundation. (2023). *Node.js Documentation*. Disponível em: [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)  
- Mozilla Developer Network. (2023). *Using Fetch*. Disponível em: [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)  
- iFood. (2023). *Como Funciona o iFood*. Disponível em: [https://www.ifood.com.br](https://www.ifood.com.br)  
- Uber Eats. (2023). *Como Funciona o Uber Eats*. Disponível em: [https://www.ubereats.com](https://www.ubereats.com)  

---


- [Projeto Fastbite](#Fastbite)
  - [Video de apresentação do projeto](#Video-de-apresentação)
  -  [Deploy](#Deploy)
    - [Conteúdo](#Conteúdo)

# Fastbite
🍔 Desenvolvimento de um Sistema de Pedidos Online para Fast Food  
**Autor:** João Gabriel A. de Brito

## Video de apresentação

- [Video](./Apresentação.mp4)

### Deploy:

[Fastbite](https://dablorr.github.io/Fastbite/)

## Conteúdo:
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

- **Conexão:** Utilizei uma variável de ambiente `DATABASE_URL` que indica onde o banco está, seus dados de acesso e qual banco utilizar. Essa informação permite que o backend conecte de forma segura e controle as consultas e comandos SQL.

- **API:** O backend expõe rotas como `/api/products` para o site pedir dados dos produtos, e `/api/orders` para enviar novos pedidos. Quando o site faz uma requisição, o backend executa a consulta no banco, pega os dados e devolve para o frontend em formato JSON.

- **Frontend:** No site, utilizei JavaScript para fazer essas chamadas assíncronas, montar o cardápio dinamicamente e refletir as mudanças feitas no banco em tempo real para o usuário.

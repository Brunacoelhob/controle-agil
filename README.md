📦 TechFlow Task Manager

Sistema de gerenciamento de tarefas baseado em metodologias ágeis, desenvolvido para simular o fluxo de trabalho de uma equipe de desenvolvimento utilizando boas práticas de Engenharia de Software.
🎯 Objetivo e Escopo

O objetivo deste projeto é criar um sistema web simples que permita:

    📌 Criar, visualizar, editar e excluir tarefas (CRUD);
    ⚙️ Acompanhar o andamento das tarefas em tempo real;
    🏷️ Classificar tarefas por prioridade;
    📊 Monitorar o desempenho da equipe com base nas entregas.

Este sistema será voltado para equipes de pequenas empresas/startups que desejam uma solução leve e funcional para controle de atividades, dentro de uma abordagem ágil.
🛠️ Metodologia Adotada

Este projeto foi desenvolvido utilizando práticas de Engenharia de Software Ágil, com foco no uso de:

    ✅ Kanban, por meio da aba Projects do GitHub, organizando as tarefas em três colunas:
        A Fazer
        Em Progresso
        Concluído
    ✅ Versionamento e colaboração via Git e GitHub
    ✅ Controle de qualidade automatizado com GitHub Actions
    ✅ Documentação e organização seguindo boas práticas de repositórios públicos

🚀 Instruções para Executar o Sistema

    ⚠️ Requisitos:

    Node.js ou Python (dependendo da linguagem escolhida)
    Git instalado na máquina

Clonando o projeto

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

### Requisitos Funcionais
- **RF01:** O sistema deve permitir que o usuário se cadastre com nome, e-mail e senha.
- **RF02:** O sistema deve permitir que o usuário faça login com e-mail e senha.
- **RF03:** O usuário deve poder criar novas tarefas.
- **RF04:** O usuário deve poder visualizar a lista de tarefas cadastradas.
- **RF05:** O usuário deve poder editar o título, descrição e status de uma tarefa.
- **RF06:** O usuário deve poder excluir tarefas.

### Requisitos Não Funcionais
- **RNF01:** O sistema deve ser acessado via navegador (interface web responsiva).
- **RNF02:** A interface deve ser simples e intuitiva, com usabilidade acessível.
- **RNF03:** O sistema deve armazenar os dados de forma persistente (ex: arquivos JSON ou banco de dados).
- **RNF04:** A autenticação deve ser segura, com senha criptografada.
- **RNF05:** O sistema deve responder às ações do usuário em até 2 segundos.
- **RNF06:** O sistema deve funcionar corretamente nos navegadores modernos (Chrome, Firefox, Edge).



// Criando o CRUD básico para Tarefas

class Tarefa {
  constructor(id, titulo, descricao, status) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = status;
    this.dataCriacao = new Date();
  }
}

// Funções CRUD
const tarefas = [];

function criarTarefa(id, titulo, descricao, status) {
  const tarefa = new Tarefa(id, titulo, descricao, status);
  tarefas.push(tarefa);
}

function editarTarefa(id, novoTitulo, novaDescricao, novoStatus) {
  let tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.titulo = novoTitulo;
    tarefa.descricao = novaDescricao;
    tarefa.status = novoStatus;
  }
}

function excluirTarefa(id) {
  const index = tarefas.findIndex(t => t.id === id);
  if (index !== -1) {
    tarefas.splice(index, 1);
  }
}

function listarTarefas() {
  return tarefas;
}

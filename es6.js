const alunos = [
    { nome: 'Pedro', nota: 5 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Luan', nota: 8 },
    { nome: 'Ana', nota: 4 },
];

function getAlunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

console.log(getAlunosAprovados(alunos));


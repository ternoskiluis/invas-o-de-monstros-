const nomes = ["Matheus e kauan ", "João Bosco e Vinícios", "Marcos e Belutii", "Luis Suárez", "Lucas Moura", "Franscisco de Assis", "Bruno Fernandes"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)

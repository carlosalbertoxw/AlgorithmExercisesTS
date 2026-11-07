/**
 * Two Sum (LeetCode #1) — https://leetcode.com/problems/two-sum/
 *
 * Dado un arreglo de números y un objetivo, devuelve los índices de los dos
 * números que suman el objetivo. Si no existe tal par, devuelve un arreglo vacío.
 *
 * Estrategia: una sola pasada guardando cada valor y su índice en un mapa;
 * para cada elemento se busca su complemento (target - valor) en el mapa.
 *
 * Complejidad: O(n) en tiempo, O(n) en espacio.
 *
 * @param nums   Arreglo de números enteros.
 * @param target Suma objetivo.
 * @returns Índices `[i, j]` (con `i < j`) del primer par encontrado, o `[]`.
 */
export function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();

    for (const [i, num] of nums.entries()) {
        const complementIndex = seen.get(target - num);
        if (complementIndex !== undefined) {
            return [complementIndex, i];
        }
        if (!seen.has(num)) {
            seen.set(num, i);
        }
    }

    return [];
}

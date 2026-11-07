# AlgorithmExercisesTS

Este repositorio contiene una colección de ejercicios de algoritmos resueltos en TypeScript. Está diseñado para practicar lógica de programación, estructuras de datos y técnicas de resolución de problemas.

Cada ejercicio es una función pura documentada con JSDoc (incluyendo su complejidad en tiempo y espacio) y acompañada de pruebas unitarias en [Vitest](https://vitest.dev/).

## Requisitos

- [Node.js](https://nodejs.org/) 22.12 o superior (recomendado: 24 LTS)
- [pnpm](https://pnpm.io/) 11 o superior

## Instalación

```bash
pnpm install
```

## Uso

```bash
pnpm test              # Ejecuta todas las pruebas
pnpm test:watch        # Ejecuta las pruebas en modo watch
pnpm test:coverage     # Ejecuta las pruebas con reporte de cobertura
pnpm typecheck         # Verifica los tipos (no genera archivos)
```

## Estructura del proyecto

Los ejercicios viven en `src/`, agrupados por categoría (siguiendo los temas de [NeetCode](https://neetcode.io/roadmap)). Cada solución tiene su archivo de pruebas al lado (`*.test.ts`):

```
src/
  arrays-hashing/
    twoSum.ts
    twoSum.test.ts
.github/
  workflows/ci.yml     # CI: typecheck + pruebas en cada push/PR
  dependabot.yml       # Actualizaciones automáticas de dependencias
```

## Índice de ejercicios

| Categoría | Ejercicio | Solución | Pruebas | Complejidad |
|-----------|-----------|----------|---------|-------------|
| Arrays & Hashing | [Two Sum (LeetCode #1)](https://leetcode.com/problems/two-sum/) | [`src/arrays-hashing/twoSum.ts`](src/arrays-hashing/twoSum.ts) | [`src/arrays-hashing/twoSum.test.ts`](src/arrays-hashing/twoSum.test.ts) | O(n) tiempo, O(n) espacio |

## Cómo agregar un nuevo ejercicio

1. Crea la solución en `src/<categoría>/<nombreEjercicio>.ts`, exportando una función con nombre. Documéntala con JSDoc: qué hace, la estrategia usada y su complejidad.
2. Crea las pruebas al lado, en `src/<categoría>/<nombreEjercicio>.test.ts`, importando `describe`/`it`/`expect` desde `vitest` y la función con ruta relativa (`./<nombreEjercicio>`). Usa `it.each` para cubrir el caso típico, los casos borde y el caso sin solución.
3. Ejecuta `pnpm test` y `pnpm typecheck` para verificar que todo pasa.
4. Agrega el ejercicio a la tabla del [índice](#índice-de-ejercicios).

Si el ejercicio pertenece a una categoría nueva (por ejemplo `two-pointers`, `linked-lists`, `dynamic-programming`), simplemente crea la carpeta en `src/`.

## Licencia

[MIT](LICENSE)

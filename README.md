# AlgorithmExercisesTS

Este repositorio contiene una colección de ejercicios de algoritmos resueltos en TypeScript. Está diseñado para practicar lógica de programación, estructuras de datos y técnicas de resolución de problemas.

Cada ejercicio es una función pura documentada con JSDoc (incluyendo su complejidad en tiempo y espacio) y acompañada de pruebas unitarias en Jest.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior (incluye npm)

## Instalación

```bash
npm install
```

## Uso

```bash
npm test              # Ejecuta todas las pruebas
npm run test:watch    # Ejecuta las pruebas en modo watch
npm run test:coverage # Ejecuta las pruebas con reporte de cobertura
npm run typecheck     # Verifica los tipos sin compilar
```

## Estructura del proyecto

Los ejercicios viven en `src/`, agrupados por categoría. Cada solución tiene su archivo de pruebas al lado (`*.test.ts`):

```
src/
  arrays/
    twoSum.ts
    twoSum.test.ts
```

## Índice de ejercicios

| Categoría | Ejercicio | Solución | Pruebas | Complejidad |
|-----------|-----------|----------|---------|-------------|
| Arrays | Two Sum (LeetCode #1) | [`src/arrays/twoSum.ts`](src/arrays/twoSum.ts) | [`src/arrays/twoSum.test.ts`](src/arrays/twoSum.test.ts) | O(n) tiempo, O(n) espacio |

## Cómo agregar un nuevo ejercicio

1. Crea la solución en `src/<categoría>/<nombreEjercicio>.ts`, exportando una función con nombre. Documéntala con JSDoc: qué hace, la estrategia usada y su complejidad.
2. Crea las pruebas al lado, en `src/<categoría>/<nombreEjercicio>.test.ts`, importando la función con ruta relativa (`./<nombreEjercicio>`). Cubre el caso típico, los casos borde y el caso sin solución.
3. Ejecuta `npm test` y `npm run typecheck` para verificar que todo pasa.
4. Agrega el ejercicio a la tabla del [índice](#índice-de-ejercicios).

Si el ejercicio pertenece a una categoría nueva (por ejemplo `strings`, `linked-lists`, `dynamic-programming`), simplemente crea la carpeta en `src/` y `tests/`.

## Licencia

ISC

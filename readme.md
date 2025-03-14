# Ejercicios de Métodos de Arrays en JavaScript

## forEach

1.  **Ejercicio 1:** Dado un array de nombres, utiliza `forEach` para imprimir en la consola un saludo personalizado para cada nombre. Por ejemplo, si el array es `["Ana", "Juan", "María"]`, la salida debería ser:

    ```
    Hola, Ana!
    Hola, Juan!
    Hola, María!
    ```

    ```javascript
    const nombres = ["Ana", "Juan", "María"];
    ```

2.  **Ejercicio 2:** Dado un array de números, utiliza `forEach` para calcular la suma de todos los números y mostrar el resultado en la consola.

    ```javascript
    const numeros = [1, 2, 3, 4, 5];
    ```

## map

1.  **Ejercicio 1:** Dado un array de números, utiliza `map` para crear un nuevo array que contenga el doble de cada número.

    ```javascript
    const numerosParaDoblar = [2, 4, 6, 8];
    ```

2.  **Ejercicio 2:** Dado un array de objetos que representan productos con propiedades `nombre` y `precio`, utiliza `map` para crear un nuevo array que contenga solo los nombres de los productos.

    ```javascript
    const productos = [
      { nombre: "Camiseta", precio: 20 },
      { nombre: "Pantalón", precio: 40 },
      { nombre: "Zapatos", precio: 60 },
    ];
    ```

## filter

1.  **Ejercicio 1:** Dado un array de números, utiliza `filter` para crear un nuevo array que contenga solo los números pares.

    ```javascript
    const numerosParaFiltrar = [1, 2, 3, 4, 5, 6];
    ```

2.  **Ejercicio 2:** Dado un array de objetos que representan personas con propiedades `nombre` y `edad`, utiliza `filter` para crear un nuevo array que contenga solo las personas mayores de 18 años.

    ```javascript
    const personas = [
      { nombre: "Carlos", edad: 25 },
      { nombre: "Sofía", edad: 17 },
      { nombre: "Pedro", edad: 30 },
      { nombre: "Laura", edad: 16 },
    ];
    ```

## includes

1.  **Ejercicio 1:** Dado un array de palabras, utiliza `includes` para verificar si una palabra específica está presente en el array y mostrar un mensaje en la consola indicando si se encontró o no.

    ```javascript
    const palabras = ["manzana", "banana", "naranja", "uva"];
    const palabraBuscada = "banana";
    ```

2.  **Ejercicio 2:** Dado un array de números, utiliza `includes` para verificar si el array contiene el número 0 y mostrar un mensaje en la consola indicando el resultado.

    ```javascript
    const numerosParaIncluir = [1, 2, 3, 0, 4, 5];
    ```

## slice

1.  **Ejercicio 1:** Dado un array de números, utiliza `slice` para crear un nuevo array que contenga los primeros tres elementos del array original.

    ```javascript
    const numerosParaCortar = [10, 20, 30, 40, 50];
    ```

2.  **Ejercicio 2:** Dado un array de palabras, utiliza `slice` para crear un nuevo array que contenga las palabras desde el índice 2 hasta el índice 4 (sin incluir el índice 4).

    ```javascript
    const palabrasParaCortar = ["rojo", "verde", "azul", "amarillo", "morado"];
    ```
#NOTAS

Aplicación básica de consola en NODE.

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Base de la tabla de multiplicar             [number] [required]
  -l, --listar   Condición para mostrar la tabla en consola            [boolean]
  -h, --hasta    Es el número hasta donde se quiere que llegue la tabla [number]
```


Ejemplo:
```
run: node app -b 3 -l true -h 5
```
Output:
```
==================
   Tabla del 3 
==================
1 x 3 = 3
2 x 3 = 6
3 x 3 = 9
4 x 3 = 12
5 x 3 = 15

TABLA - 3 (CREADA)
```
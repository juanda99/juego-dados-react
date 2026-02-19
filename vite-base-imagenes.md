# Problema con rutas de imágenes y `base` en Vite (GitHub Pages)

Cuando usas rutas que empiezan por `/` como:

``` jsx
<img src="/imagenes/xxx.png" />
```

esas rutas son **absolutas respecto al dominio**, no respecto al `base`
configurado en Vite.\
Por eso, al desplegar en GitHub Pages dentro de un subdirectorio, las
imágenes no se encuentran.

------------------------------------------------------------------------

## 1) Usar `import.meta.env.BASE_URL`

Vite expone el `base` en runtime. Puedes construir la URL así:

``` jsx
<img src={`${import.meta.env.BASE_URL}imagenes/xxx.png`} />
```

Si tu `base` es `/mi-repo/`, la ruta final será:

    /mi-repo/imagenes/xxx.png

Funciona tanto en desarrollo como en producción.

------------------------------------------------------------------------

## 2) Evitar `/public` y usar imports desde `src`

En Vite es más robusto importar los assets:

``` jsx
import img from "../assets/imagenes/xxx.png";

<img src={img} />
```

### Ventajas

-   Vite resuelve automáticamente el `base`
-   Hashing y cache control
-   Menos problemas al cambiar rutas o subpaths

------------------------------------------------------------------------

## 3) Usar `new URL(..., import.meta.url)`

Otra alternativa compatible con el `base`:

``` jsx
<img src={new URL("/imagenes/xxx.png", import.meta.env.BASE_URL).href} />
```

o si está dentro de `src`:

``` jsx
<img src={new URL("../assets/imagenes/xxx.png", import.meta.url).href} />
```

------------------------------------------------------------------------

## 4) Qué evitar

Esto fallará en GitHub Pages cuando el proyecto esté en subdirectorio:

``` jsx
<img src="/imagenes/xxx.png" />
```

porque apunta al root del dominio y no al subpath del repositorio.

------------------------------------------------------------------------

## Recomendación práctica

Si ya tienes muchas imágenes en `public`, crea un helper:

``` js
export const base = import.meta.env.BASE_URL;
```

y úsalo así:

``` jsx
<img src={`${base}imagenes/xxx.png`} />
```

Si el proyecto sigue en desarrollo activo, mueve las imágenes a
`src/assets` y usa imports.

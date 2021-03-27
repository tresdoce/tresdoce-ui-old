# Tresdoce-ui 
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

Tresdoce-ui es la implementación React del [Design System](https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969) de Tresdoce. 
Se aplicó la metodología [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/) para el diseño de los componentes y se generaron los siguientes paquetes:

- [`@tresdoce-ui/brand`](packages/brand/README.md): contiene las fuentes e imágenes.
- [`@tresdoce-ui/core`](packages/core/README.md): contiene los componentes más atómicos.

## Tecnologías

Los componentes que contiene este repositorio se desarrollan con las siguientes librerías:

- **Babel**: v7
- **React**: v16.8
- **Styled-components**: v5
- **TypeScript**: v4
- **Storybook**: v6
- Build: **RollUp**

## ¿Cómo instalo Tresdoce-ui en mi proyecto?

Se debe crear un archivo `.npmrc` dentro del proyecto para utilizar el **Nexus Corporativo**:

.npmrc

```
registry=http://143.198.236.101:8081/repository/npm-group/
_auth=<token>
```

Luego instalar las siguientes librerías:

```bash
npm i --save @tresdoce-ui/brand @tresdoce-ui/core
```

## ¿Cómo desarrollo nuevos componentes?

### ¿Dónde desarrollo mi componente?



### Setup de Proyecto

Para poder comenzar a desarrollar necesitas tener instalado el paquete `lerna` como una dependencia global:

```bash
npm i -g lerna
```

Luego de eso, se debe correr el siguiente comando:

```bash
npm i
```

Esto va a permitir que se instalen las dependencias del proyecto root y de todas las librerías que están dentro de la carpeta `packages`.

### Iniciar Storybook

Para desarrollar localmente se utiliza Storybook. Para el entorno de desarrollo local, se debe ejecutar:

```bash
npm run storybook
```

### Comandos Adicionales

El proyecto cuenta a nivel global con los siguientes comandos disponibles para ejecutar:

```bash
// Permite remover los datos generados por el build
npm run clean

// Permite generar un build por cada package dentro de packages
npm run build

// Permite instalar todas las dependencias por cada package dentro de packages
npm run install

// Permite publicar todos los packages buildeados a NPM
npm run publish

// Permite hacer un build de storybook para exportarlo como un HTML hosteable
npm run build-storybook
```

# Requisitos de sistema
- Docker Engine
- docker-compose 
- NPM
- Node.js
# Pasos para arrancar
- Instalar las dependencias necesarias para la ejecución:
    - npm install

- Si hay base de datos mongo, configurar su URL en los dos entornos, dev y test

- Si no hay base de datos preparada, este comando lanza una en un container
    - docker-compose -f docker-compose.yaml up -d

- Arrancar la aplicación:
    - npm run dev

- Pasar los tests:
    - npm run test

# TODO List
- Los tests se podrían ampliar más hasta alcanzar el code coverage máximo.
- Creo que he hecho demasiado con la autorización, pero necesitaba refrescar.
- En este caso al ser búsquedas sencillas, no habría que revisar la eficiencia de las querys.
- Los middleware de validación faltarían.
- Un frontend.
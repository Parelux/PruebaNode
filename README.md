# Requisitos de sistema
- Docker Engine
- docker-compose 
- NPM
- Node.js
# Pasos para arrancar
- Si hay base de datos mongo, configurar su URL en los dos entornos, dev y test

- Si no hay base de datos preparada, este comando lanza una en un container
    - docker-compose -f docker-compose.yaml up -d

- Arrancar la aplicación:
    - npm run dev

- Pasar los tests:
    - npm run test

# Cosas que se podrían mejorar
- Los tests se podrían ampliar mucho más evaluando todos los endpoints
según las posibles causas para aumentar el code coverage



# Requisitos de sistema
- Docker Engine
- docker-compose 
- NPM
- Node.js
# Pasos para arrancar
- Si no hay base de datos preparada, este comando lanza una en un container
    - docker-compose -f docker-compose.yaml up -d

- Arrancar la aplicación:
    - npm run dev

- Pasar los tests:
    - npm run test



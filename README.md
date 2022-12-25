# ipl_backend_2023

## create a model or table
    -   npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string

## migrate db
    -    npx sequelize-cli db:migrate  

## undo last migration
    -   npx sequelize-cli db:migrate:undo
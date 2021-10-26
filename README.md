# learning-docker
Este projeto foi desenvolvido para aprendizado do docker, em base em um vídeo do canal <a href="https://www.youtube.com/watch?v=Kzcz-EVKBEQ"> Programador a Bordo</a>. Você pode ver o passo a passo no arquivo TUTORIAL.txt


  <a href="http://docker.com/" target="blank"><img src="https://www.docker.com/sites/default/files/d8/styles/large/public/2021-08/Moby-share.png?itok=Kc8zKIm4" width="500" alt="Nest Logo" /></a>

Para executá-lo execute os comandos:

 1. Baixar e construir nossa imagem de base mysql de acordo com o arquivo Dockerfile: 
      
      `docker build -t mysql-image -f api/db/Dockerfile .`
      
  2. Executar o container com base na nossa imagem
      
      `docker run -d --rm --name mysql-container mysql-image`
   
  3. Executar os comandos do script, ou seja, irá criar o banco de dados e os inserts
      
      `docker exec -i mysql-container mysql -uroot -proot < api/db/script.sql`
      
  4. Baixar e construir nossa imagem de base node de acordo com o arquivo Dockerfile: 
    
      `docker build -t node-image -f api/Dockerfile .`
      
   5. Subir o container node 'linkando' com o container mysql
   
      `docker run -d -v <YOUR_DIRECTORY>\api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image`
      (Acesse `http://localhost:9001/products`! )
     
   6. Construir imagem php
    
      `docker build -t php-image -f website/Dockerfile .`
      
   7. Subir um container para o php
      
        `docker run -d -v C:\projects\learning-docker/website:/var/www/html -p 8888:80 --link node-container --rm --name php-container php-image`
        
   8. Acesse em http://localhost:8888/ para verificar se ocorreu tudo bem, deverá trazer a lista de produtos criada.

### Pronto!! Sua aplicação está rodando! 
Para mais detalhes, siga o passo a passo para criar esse projeto em TUTORIAL.txt presente nesse repositório, ou acesso o link do canal <a href="https://www.youtube.com/watch?v=Kzcz-EVKBEQ"> Programador a Bordo</a>

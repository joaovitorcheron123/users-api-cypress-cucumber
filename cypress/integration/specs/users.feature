#language: pt
@funcionalidadeUsuarios
Funcionalidade: Usuários

  @getUsuarios
  Cenário: (Get) Listar usuários cadastrados
    Quando buscar pelos usuários cadastrados
    Então deverá retornar 'get_users' com status 200
    E deverá retornar uma lista que não seja vazia

  @getUsuariosId
  Esquema do Cenário: (Get) Usuários por ID
    Quando buscar por um usuário com o ID '<id>'
    Então deverá retornar 'get_userId' com status 200
    E deverá retornar o usuário buscado

      Exemplos:
        | id |
        | 4  |
        | 15 |


  @postUsuario
  Esquema do Cenário: (Post) Novo usuário
    Quando criar um novo usuário com '<createdAt>' e '<name>' e '<phone>' e '<city>' e '<zipcode>' e '<email>' e '<country>' e '<address>' 
    Então deverá retornar 'post_users' com status 201
    E deverá retornar o nome do usuário criado

       Exemplos:
        | createdAt                | name   | phone               | city      | zipcode  | email            | country | address  | 
        | 2021-01-05T10:10:35.984Z | Joao   | 797.365.9614 x34126 | Sao Paulo | 61810000 | Alia37@yahoo.com | Brasil  | 697 Br   |

  @postUsuarioFaker
  Cenário: (Post) Novo usuário com dados do Faker
    Quando criar um novo usuário com o faker
    Então deverá retornar 'post_users' com status 201

  @putUsuario
  Esquema do Cenário: (Put) Atualizar usuário
    Quando atualizar os dados de um usuário '<id>' com '<createdAt>' e '<name>' e '<phone>' e '<city>' e '<zipcode>' e '<email>' e '<country>' e '<address>' 
    Então deverá retornar 'put_users' com status 200
    E deverá retornar o nome do usuário atualizado

       Exemplos:
      | id  | createdAt                | name    | phone               | city      | zipcode  | email            | country | address  | 
      | 6   | 2021-01-05T10:10:35.984Z | Joao2   | 797.365.9614 x34126 | Sao Paulo | 61810000 | Alia37@yahoo.com | Brasil  | 697 Br   |

  @putUsuarioFaker
  Cenário: (Put) Atualizar usuário com dados do Faker
    Quando atualizar um usuário ID 4 com o faker
    Então deverá retornar 'put_users' com status 200

  @deleteUsuario
    Cenário: (Delete) Excluir usuário por ID
    Quando buscar por um usuário com o ID 2
    Então deverá retornar 'delete_users' com status 200

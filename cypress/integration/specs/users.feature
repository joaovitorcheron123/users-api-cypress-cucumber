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
  Cenário: (Post) Novo usuário com dados do Faker
    Quando criar um novo usuário
    Então deverá retornar 'post_users' com status 201

  @putUsuario
  Cenário: (Put) Atualizar usuário com dados do Faker
    Quando atualizar um usuário com o ID 4
    Então deverá retornar 'put_users' com status 200

  @deleteUsuario
    Cenário: (Delete) Excluir usuário por ID
    Quando buscar por um usuário com o ID 2
    Então deverá retornar 'delete_users' com status 200

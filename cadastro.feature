Feature: Cadastro de clientes

    Cadastro de clientes com nome, senha e email.

Background: 
    When Cliente seleciona Cadastro
    And Digitou as informações obrigatórias
    And Clicou em Cadastrar
    Then Dados do cliente são salvos no banco de dados

Scenario: Email não informado
    When Não digitou o email
    And Clicou em Cadastrar
    Then O Cadastro não é concluído
    And O cliente é redirecionado para a página de login

Scenario: Senha não informada
    When Não digitou a senha
    And Clicou em Cadastrar
    Then O Cadastro não é concluído
    And O cliente é redirecionado para a página de login

Scenario: Senha divergente
    When Digitou a senha como "123"
    And Digitou a confirmação de senha como "1234"
    And Clicou em Cadastrar
    Then O Cadastro não é concluído
    And O cliente é redirecionado para a página de login

Scenario: Nenhum campo preenchido
    When Cliente seleciona Cadastro
    And Não digitou nenhum campo
    And Clicou em Cadastrar
    Then O Cadastro não é concluído
    And O cliente é redirecionado para a página de login

<?php

    class User{
        public $id, $nome, $email, $senha, $idade;

        public function getId(){
            return $this->id;
        }
        public function setId($id){
            $this->id = $id;
        }

        public function getNome(){
          return $this->nome;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }

        public function getEmail(){
          return $this->email;
        }
        public function setEmail($email){
            $this->email = $email;
        }

        public function getSenha(){
          return $this->senha;
        }
        public function setSenha($senha){
            $this->senha = $senha;
        }

        public function getIdade(){
            return $this->idade;
          }
          public function setIdade($idade){
              $this->idade = $idade;
        }
    }
?>
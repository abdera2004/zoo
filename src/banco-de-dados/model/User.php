<?php

    class User{
        public $id, $nome, $email, $password, $idade;

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

        public function getPassword(){
          return $this->password;
        }
        public function setPassword($password){
            $this->password = $password;
        }

        public function getIdade(){
            return $this->idade;
          }
          public function setIdade($idade){
              $this->idade = $idade;
        }
    }
?>
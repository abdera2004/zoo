<?php

    class User{
        public $id, $nome, $foto, $habitat, $vida, $comida;

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

        public function getFoto(){
          return $this->foto;
        }
        public function setFoto($foto){
            $this->foto = $foto;
        }

        public function getHabitat(){
          return $this->habitat;
        }
        public function setHabitat($habitat){
            $this->habitat = $habitat;
        }

        public function getVida(){
            return $this->vida;
          }
          public function setVida($vida){
              $this->vida = $vida;
        }

        public function getComida(){
            return $this->comida;
          }
          public function setComida($comida){
              $this->comida = $comida;
        }
    }
?>
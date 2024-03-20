<?php
header('Access-Control-Allow-Origin: *');

    require_once ('Conexao.php');

    
    class animalDao{
        public static function insert($animal){
            $conexao = Conexao::conectar();
            // Prepara a consulta SQL
            $query = "INSERT INTO tbanimal (nome, foto, habitat, vida, comida) VALUES (?,?,?,?,?)";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $animal['nome']);
            $stmt->bindValue(2, $animal['foto']);
            $stmt->bindValue(3, $animal['habitat']);
            $stmt->bindValue(4, $animal['vida']);
            $stmt->bindValue(5, $animal['comida']);
            $stmt->execute();
                    // Retornar o ID do usuário inserido
        return $conexao->lastInsertId();
        }

        public static function selectAll(){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbanimal";
            $stmt = $conexao->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll();
        }

        public static function selectById($id){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbanimal WHERE id = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        public static function delete($id){
            $conexao = Conexao::conectar();
            $query = "DELETE FROM tbanimal WHERE id = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $id);
            return  $stmt->execute();
        }
        public static function update($animal) {
            $conexao = Conexao::conectar();
            // Prepara a consulta SQL
            $query = "UPDATE tbanimal 
                      SET nome = ?, 
                          foto = ?, 
                          habitat = ?, 
                          vida = ?,
                          comida = ?, 
                      WHERE id = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $animal['nome']);
            $stmt->bindValue(2, $animal['foto']);
            $stmt->bindValue(3, $animal['habitat']);
            $stmt->bindValue(4, $animal['vida']);
            $stmt->bindValue(5, $animal['comida']);
            $stmt->bindValue(6, $animal['id']);
            $stmt->execute();
        
            // Fechar a conexão com o banco de dados
           // $conexao = null;
        }
    }
?>
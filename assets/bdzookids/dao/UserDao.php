<?php
header('Access-Control-Allow-Origin: *');

    require_once ('Conexao.php');

    
    class userDao{
        public static function insert($user){
            $conexao = Conexao::conectar();
            // Prepara a consulta SQL
            $query = "INSERT INTO tbuser (nomeUser, emailUser, senhaUser, idadeUser) VALUES (?,?,?,?)";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $user['nomeUser']);
            $stmt->bindValue(2, $user['emailUser']);
            $stmt->bindValue(3, $user['senhaUser']);
            $stmt->bindValue(4, $user['idadeUser']);
            $stmt->execute();
                    // Retornar o ID do usuário inserido
        return $conexao->lastInsertId();
        }

        public static function selectAll(){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbUser";
            $stmt = $conexao->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll();
        }

        public static function selectById($id){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbuser WHERE id = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        public static function delete($id){
            $conexao = Conexao::conectar();
            $query = "DELETE FROM tbuser WHERE id = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $id);
            return  $stmt->execute();
        }
        public static function update($user) {
            $conexao = Conexao::conectar();
            // Prepara a consulta SQL
            $query = "UPDATE tbuser 
                      SET nomeUser = ?, 
                          emailUser = ?, 
                          senhaUser = ?, 
                          idadeUser = ?, 
                      WHERE idUser = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $user['nomeUser']);
            $stmt->bindValue(2, $user['emailUser']);
            $stmt->bindValue(3, $user['senhaUser']);
            $stmt->bindValue(4, $user['idadeUser']);
            $stmt->bindValue(5, $user['idUser']);
            $stmt->execute();
        
            // Fechar a conexão com o banco de dados
           // $conexao = null;
        }
        










        public static function checkCredentials($email, $senha){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbclient WHERE emailclient = ? and passwordClient = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $email);
            $stmt->bindValue(2, $senha);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
    }
?>
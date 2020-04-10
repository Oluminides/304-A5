
<?php
    try{
        $dsn = "mysql:host=localhost; dbname=dictionary";
        $db_conn = new PDO($dsn, "root", "mmljar");
        $db_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        echo "Error connecting to database".  $e->getMessage();
    }

    $word = $_GET['word'];

    $query = $db_conn->query("SELECT correct FROM words WHERE correct='$word'");

    while($record = $query->fetch()){
        if("$record[correct]"){
            echo "$record[correct]";
        }
    }
?>
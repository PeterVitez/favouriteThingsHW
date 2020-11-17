<?php 
    $db_dsn = array( 
        'host' => 'localhost',
        'dbname' => 'favourite_things',
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'root';
    $db_pass = ''; // windows users leave this blank

    try{
        $pdo = new PDO($dsn, $db_user, $db_pass);
        echo "you're in! enjoy the show";
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }
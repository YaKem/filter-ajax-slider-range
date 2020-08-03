<?php

    $pdo = new PDO('mysql:host=localhost;dbname=search-data', 'root', '');
    
    $minPrice = $_GET['min'];
    $maxPrice = $_GET['max'];

    $sql = 'SELECT * FROM cars WHERE price BETWEEN ? AND ? ORDER BY price ASC';
    $query = $pdo->prepare($sql);
    $query->execute([$minPrice, $maxPrice]);
    $cars = $query->fetchAll(PDO::FETCH_ASSOC);

    $result = '';

    foreach($cars as $car) {
        $result .= '<hr>' . $car['model'] . ' - ' . $car['year'] . ' - ' . $car['price'] . '<br>';
    }

    echo $result ?? 'Not results';
?>
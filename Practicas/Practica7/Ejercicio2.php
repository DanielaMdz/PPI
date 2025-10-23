<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aproximación de e</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <a href="index.html" class="back-btn">Regresar</a>
    <div class="container">
        <h1>Aproximación del Número e</h1>
        
        <form method="POST" action="">
            <div class="form-group">
                <label for="n_e">Ingrese el valor de n (límite superior):</label>
                <input type="number" id="n_e" name="n_e" min="1" required>
                <small>Mientras más grande sea n, mejor será la aproximación</small>
            </div>
            <button type="submit">Calcular e</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['n_e'])) {
            $n = intval($_POST['n_e']);
            
            if ($n > 0) {
                echo "<div class='result'>";
                echo "<h2>Resultados para n = $n</h2>";
                
                function factorial($numero) {
                    if ($numero == 0 || $numero == 1) {
                        return 1;
                    }
                    
                    $resultado = 1;
                    for ($i = 2; $i <= $numero; $i++) {
                        $resultado *= $i;
                    }
                    return $resultado;
                }
                
                function aproximarE($limite) {
                    $suma = 0;
                    $resultados = array();
                    
                    for ($i = 0; $i <= $limite; $i++) {
                        $factorial = factorial($i);
                        $termino = 1 / $factorial;
                        $suma += $termino;
                        $resultados[$i] = $suma;
                    }
                    
                    return $resultados;
                }
                
                $aproximaciones = aproximarE($n);
                $e_aproximado = end($aproximaciones);
                
                echo "<p><strong>Valor aproximado de e:</strong> " . number_format($e_aproximado, 10) . "</p>";
                echo "<p><strong>Valor real de e:</strong> " . number_format(exp(1), 10) . "</p>";
                echo "<p><strong>Diferencia:</strong> " . number_format(abs(exp(1) - $e_aproximado), 10) . "</p>";
                
                
                echo "<h3>Iteraciones del cálculo</h3>";
                echo "<table>";
                echo "<tr><th>n</th><th>Aproximación de e</th></tr>";
                
                foreach ($aproximaciones as $iteracion => $valor) {
                    echo "<tr>";
                    echo "<td>$iteracion</td>";
                    echo "<td>" . number_format($valor, 10) . "</td>";
                    echo "</tr>";
                }
                
                echo "</table>";
                echo "</div>";
            } else {
                echo "<div class='error'>Error: n debe ser mayor que cero.</div>";
            }
        }
        ?>
        <br>
        <div class="navigation">
            <a href="Ejercicio1.php" class="nav-link">Ir a cálculo de π</a>
        </div>
    </div>
</body>
</html>
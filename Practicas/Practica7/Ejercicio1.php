<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aproximación de π (Pi)</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <a href="index.html" class="back-btn">Regresar</a>
    <div class="container">
        <h1>Aproximación del Número π (Pi)</h1>
        
        <form method="POST" action="">
            <div class="form-group">
                <label for="n_pi">Ingrese el valor de n (límite superior):</label>
                <input type="number" id="n_pi" name="n_pi" min="1" required>
                <small>Mientras más grande sea n, mejor será la aproximación</small>
            </div>
            <button type="submit">Calcular π</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['n_pi'])) {
            $n = intval($_POST['n_pi']);
            
            if ($n > 0) {
                echo "<div class='result'>";
                echo "<h2>Resultados para n = $n</h2>";
                
                function aproximarPi($limite) {
                    $suma = 0;
                    $resultados = array();
                    
                    for ($i = 0; $i <= $limite; $i++) {
                        $termino = pow(-1, $i) / (2 * $i + 1);
                        $suma += $termino;
                        $aproximacion = 4 * $suma;
                        $resultados[$i] = $aproximacion;
                    }
                    
                    return $resultados;
                }
                
                $aproximaciones = aproximarPi($n);
                $pi_aproximado = end($aproximaciones);
                
                echo "<p><strong>Valor aproximado de π:</strong> " . number_format($pi_aproximado, 10) . "</p>";
                echo "<p><strong>Valor real de π:</strong> " . number_format(pi(), 10) . "</p>";
                echo "<p><strong>Diferencia:</strong> " . number_format(abs(pi() - $pi_aproximado), 10) . "</p>";
                
                echo "<h3>Iteraciones del cálculo</h3>";
                echo "<table>";
                echo "<tr><th>n</th><th>Aproximación de π</th></tr>";
                
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
        
        <div class="navigation">
            <br>
            <a href="Ejercicio2.php" class="nav-link">Ir a cálculo de e</a>
        </div>
    </div>
</body>
</html>
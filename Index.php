<?php
if($_POST['Naam1'] && $_POST['Naam2'] && $_POST['pvp']){
    session_start();
    $naam1 = $_POST['Naam1'];
    $naam2 = $_POST['Naam2'];
    $_SESSION['Naam1']= $naam1;
    $_SESSION['Naam2']= $naam2;
    header('Location: Tussen-pagina.php');

    
    
}

?>

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css" type="text/css" />
        <script type="text/javascript" src="Javascript.js"></script>
        
    </head>
    <body>
        <div class="LeftBody">
            <div class="Logo">
                <div onclick="" class="blok">
                    <img src="download.png" id="image"></img>
                </div>
            </div>
        </div>
        <div id="LeftBody">
            <div>
                <img src="left.jpg" id="image2"></img>
            </div>
        </div>
        <div class="RightBody">
            <form method="post" class="form1" action="">
                <div class="Formelement">
                <input type="text" name="Naam1" class="TField" placeholder="Speler 1"/>
                </div>
                <div class="Formelement">
                <input type="text" name="Naam2" class="TField" placeholder="Speler 2"/>
                </div>
                <div class="Formelement">
                    <input type="submit" name="pvp" class="button" value="Speler vs Speler"/>
                </div>
                </div>
            </form>
        </div>
    </body>
</html>
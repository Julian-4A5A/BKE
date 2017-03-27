<?php
session_start();
$_SESSION['Naam1'];
$_SESSION['Naam2'];


?>
<!DOCTYPE html>
<html>
    <head>
        <title>Boter, Kaas en Eireren</title>
        <link rel="stylesheet" href="style.css" type="text/css" />
        <script type="text/javascript" src="Javascript.js"></script>
        <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
    </head>
    <body>
        <header>
            <div id=hoofd>
            <div id=titel>Boter, Kaas en Eireren</div>
            <input class="button" type="button" value="Opnieuw" onClick="window.location.reload()">
            
            
                <h1><label for="" id="speler">Speler:<?php echo " ".$_SESSION['Naam1'];?></label></h1>
            
            </div>
            <form action="" method="post" class="uilog">
                <input class="button" name="uitloggen" type="submit" value="Uitloggen"/>
            </form>
            
        </header>
        <div id="links">
            <div id="scorebord">
                <h2 id="win0"></h2>
                <table>
                    <th>
                        <td><?php echo  "<h3>" . "Speler 1 "."</h3>". "<h2><span id=speler1>" .$_SESSION['Naam1']."</span></h2>"; ?></td>
                    </th>
                    <th>
                        <td><?php echo  "<h3>" . "Speler 2 "."</h3>". "<h2><span id=speler2>" .$_SESSION['Naam2']."</span></h2>"; ?></td>
                    </th>    
                </table>
            </div>
            
        </div>
        <div id="game">
            
            <table id="spelletje">
                <tr>
                    <td onclick="vak(button=0)" id="button0" class="button"></td>
                    <td onclick="vak(button=1)" id="button1" class="button"></td>
                    <td onclick="vak(button=2)" id="button2" class="button"></td>
                </tr>
                <tr>
                    <td onclick="vak(button=3)" id="button3" class="button"></td>
                    <td onclick="vak(button=4)" id="button4" class="button"></td>
                    <td onclick="vak(button=5)" id="button5" class="button"></td>
                </tr>
                <tr>
                    <td onclick="vak(button=6)" id="button6" class="button"></td>
                    <td onclick="vak(button=7)" id="button7" class="button"></td>
                    <td onclick="vak(button=8)" id="button8" class="button"></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td></td>
                </tr>
            </table>
            
        </div>
        <?php 
            if(isset($_POST['uitloggen'])){
                session_start();
                session_destroy();
                header("Location: Index.php");
            }
        ?>
        
    </body>
</html>
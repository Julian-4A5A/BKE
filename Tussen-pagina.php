<?php
session_start();
$_SESSION['Naam1'];
$_SESSION['Naam2'];

if(isset($_POST['go'])){
    header('Location: PvP.php');
}
?>

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="titel.css" type="text/css" />
    </head>
    <body>
        <div class="container">
                                            <div class="header">
                                                <div class="clr"></div>
                                            </div>
                                            <div class="sp-container">
                                                <div class="sp-content">
                                                    <div class="sp-globe"></div>
                                                    	<h2 class="frame-1">Boter</h2>
                                        
                                                    	<h2 class="frame-2">Kaas</h2>
                                        
                                                    	<h2 class="frame-3">En</h2>
                                        
                                                    	<h2 class="frame-4">Eireren</h2>
                                        
                                                    	<h2 class="frame-5"><span>Welkom:</span> <span><?php echo  $_SESSION['Naam1']; ?></span> <span>en</span> <span><?php echo $_SESSION['Naam2']; ?></span></h2>
                                                    	<form method="post">
                                                    	    
                                                    	    <input name="go" class="sp-circle-link" type="submit" value="Let's start"/>
                                                    	</form>
                                                    	
                                        	     </div>
                                            </div>
                                        </div>
                                        
                                        <script type="text/javascript" src="/path/to/shared/js/EventHelpers.js">
                                        </script>
                                        <script type="text/javascript" src="/path/to/shared/js/cssQuery-p.js">
                                        </script>
                                        <script type="text/javascript" src="/path/to/shared/js/jcoglan.com/sylvester.js">
                                        </script>
                                        <script type="text/javascript" src="/path/to/shared/js/cssSandpaper.js">
                                        </script>
    </body>
</html>
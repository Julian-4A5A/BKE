{"changed":true,"filter":false,"title":"uilogpagina.php","tooltip":"/uilogpagina.php","value":"<?php\nsession_start();\n$_SESSION['Naam1'];\n$_SESSION['Naam2'];\n\nif(isset($_POST['go'])){\n    \n    header('Location: PvP.php');\n}\n?>\n\n<!DOCTYPE html>\n<html>\n    <head>\n        <link rel=\"stylesheet\" href=\"titel.css\" type=\"text/css\" />\n    </head>\n    <body>\n        <div class=\"container\">\n                                            <div class=\"header\">\n                                                <div class=\"clr\"></div>\n                                            </div>\n                                            <div class=\"sp-container\">\n                                                <div class=\"sp-content\">\n                                                    <div class=\"sp-globe\"></div>\n                                                    \t<h2 class=\"frame-1\">Boter</h2>\n                                        \n                                                    \t<h2 class=\"frame-2\">Kaas</h2>\n                                        \n                                                    \t<h2 class=\"frame-3\">En</h2>\n                                        \n                                                    \t<h2 class=\"frame-4\">Eireren</h2>\n                                        \n                                                    \t<h2 class=\"frame-5\"><span>Welkom:</span> <span><?php echo  $_SESSION['Naam1']; ?></span> <span>en</span> <span><?php echo $_SESSION['Naam2']; ?></span></h2>\n                                                    \t<form method=\"post\">\n                                                    \t    \n                                                    \t    <input name=\"go\" class=\"sp-circle-link\" type=\"submit\" value=\"Let's start\"/>\n                                                    \t</form>\n                                                    \t\n                                        \t     </div>\n                                            </div>\n                                        </div>\n                                        \n                                        <script type=\"text/javascript\" src=\"/path/to/shared/js/EventHelpers.js\">\n                                        </script>\n                                        <script type=\"text/javascript\" src=\"/path/to/shared/js/cssQuery-p.js\">\n                                        </script>\n                                        <script type=\"text/javascript\" src=\"/path/to/shared/js/jcoglan.com/sylvester.js\">\n                                        </script>\n                                        <script type=\"text/javascript\" src=\"/path/to/shared/js/cssSandpaper.js\">\n                                        </script>\n    </body>\n</html>","undoManager":{"mark":-2,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":50,"column":7},"action":"insert","lines":["<?php","session_start();","$_SESSION['Naam1'];","$_SESSION['Naam2'];","","if(isset($_POST['go'])){","    header('Location: PvP.php');","}","?>","","<!DOCTYPE html>","<html>","    <head>","        <link rel=\"stylesheet\" href=\"titel.css\" type=\"text/css\" />","    </head>","    <body>","        <div class=\"container\">","                                            <div class=\"header\">","                                                <div class=\"clr\"></div>","                                            </div>","                                            <div class=\"sp-container\">","                                                <div class=\"sp-content\">","                                                    <div class=\"sp-globe\"></div>","                                                    \t<h2 class=\"frame-1\">Boter</h2>","                                        ","                                                    \t<h2 class=\"frame-2\">Kaas</h2>","                                        ","                                                    \t<h2 class=\"frame-3\">En</h2>","                                        ","                                                    \t<h2 class=\"frame-4\">Eireren</h2>","                                        ","                                                    \t<h2 class=\"frame-5\"><span>Welkom:</span> <span><?php echo  $_SESSION['Naam1']; ?></span> <span>en</span> <span><?php echo $_SESSION['Naam2']; ?></span></h2>","                                                    \t<form method=\"post\">","                                                    \t    ","                                                    \t    <input name=\"go\" class=\"sp-circle-link\" type=\"submit\" value=\"Let's start\"/>","                                                    \t</form>","                                                    \t","                                        \t     </div>","                                            </div>","                                        </div>","                                        ","                                        <script type=\"text/javascript\" src=\"/path/to/shared/js/EventHelpers.js\">","                                        </script>","                                        <script type=\"text/javascript\" src=\"/path/to/shared/js/cssQuery-p.js\">","                                        </script>","                                        <script type=\"text/javascript\" src=\"/path/to/shared/js/jcoglan.com/sylvester.js\">","                                        </script>","                                        <script type=\"text/javascript\" src=\"/path/to/shared/js/cssSandpaper.js\">","                                        </script>","    </body>","</html>"],"id":1}],[{"start":{"row":5,"column":24},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":4},"end":{"row":6,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":"php-start","mode":"ace/mode/php"}},"timestamp":1466581421814}
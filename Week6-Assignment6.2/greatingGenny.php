<!-- Blaine Smith
     2-27-2020
    Assignment 6.2 -->
<?php
   
   function Greating () {

    $number=mt_rand(0,4);

    switch ($number) {
        case 0:
            echo "BONJOUR";
            break;
        case 1:
            echo "HOLA";
            break;
        case 2:
            echo "CIAO";
            break;
        case 3:
            echo "NAMASTE";
            break;
        case 4:
            echo "SALAAM";
            break;
    }
   }

   Greating();
   

?>

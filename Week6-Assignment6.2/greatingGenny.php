<!-- Blaine Smith
     2-27-2020
    Assignment 6.2 -->
<?php
   
   function Greating () {

    $number=mt_rand(0,4);

    define("ZERO", "BONJOUR", true);
    define("ONE", "HOLA", true);
    define("TWO", "CIAO", true);
    define("THREE", "NAMASTE", true);
    define("FOUR", "SALAAM", true);

    switch ($number) {
        case 0:
            echo zero;
            break;
        case 1:
            echo one;
            break;
        case 2:
            echo two;
            break;
        case 3:
            echo three;
            break;
        case 4:
            echo four;
            break;
    }
   }

   Greating();
   

?>

<!-- Blaine Smith
     2-27-2020
    Assignment 6.2 -->
<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01//EN'
  'http://www.w3.org/TR/1999/REC-html401-19991224/strict.dtd'>
<html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>

    <body>
    <p>
    <?php
        function numbers ($num) {
            if (empty($num))
                {
                	echo '<br>false';
                }
            else 
                {
                    $new_str = str_replace(' ', '', $num);
                    echo "<br>$new_str";
                }
        };

        numbers('1 2 3 4');
        numbers('1 9 5 2 6');
        numbers('');
    ?>
    </p>
        

    </body>
</html>

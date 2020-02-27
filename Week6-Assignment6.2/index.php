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
                    $num = preg_replace('/[^0-9]/', $num, $string);
                    echo "$num";
                };
            ?>
        </p>

    </body>
</html>

// state variables:
// turn: 1/-1 these represents turns 1=purple and -1 =orange
// each cell on a 2 dimensional board 7 columns by 6 rows
// board: 2D array
//       null -> no player
//       1/-1 -> player at that cell
// winner: null -> no winner / in play
//      1/-1 -> winner
//      'T' -> Tie
// all of the updating of hte page will be done by render functions

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
  <script defer src="script.js"></script>
</head>

<body>
  <header>CONNECT FOUR</header>
  <h1>PURPLE'S turn</h1>
  <section id="markers">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
  <section id="board">
    <div id="c0r5"></div>
    <div id="c1r5"></div>
    <div id="c2r5"></div>
    <div id="c3r5"></div>
    <div id="c4r5"></div>
    <div id="c5r5"></div>
    <div id="c6r5"></div>

    <div id="c0r4"></div>
    <div id="c1r4"></div>
    <div id="c2r4"></div>
    <div id="c3r4"></div>
    <div id="c4r4"></div>
    <div id="c5r4"></div>
    <div id="c6r4"></div>

    <div id="c0r3"></div>
    <div id="c1r3"></div>
    <div id="c2r3"></div>
    <div id="c3r3"></div>
    <div id="c4r3"></div>
    <div id="c5r3"></div>
    <div id="c6r3"></div>

    <div id="c0r2"></div>
    <div id="c1r2"></div>
    <div id="c2r2"></div>
    <div id="c3r2"></div>
    <div id="c4r2"></div>
    <div id="c5r2"></div>
    <div id="c6r2"></div>

    <div id="c0r1"></div>
    <div id="c1r1"></div>
    <div id="c2r1"></div>
    <div id="c3r1"></div>
    <div id="c4r1"></div>
    <div id="c5r1"></div>
    <div id="c6r1"></div>

    <div id="c0r0"></div>
    <div id="c1r0"></div>
    <div id="c2r0"></div>
    <div id="c3r0"></div>
    <div id="c4r0"></div>
    <div id="c5r0"></div>
    <div id="c6r0"></div>
  </section>
  <button>PLAY AGAIN</button>
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
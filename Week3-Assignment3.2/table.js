
const btn = document.getElementById("click");

btn.addEventListener("click", helloWorld);

function helloWorld() {
    document.write("<table border=\"2\">"+
    "<tbody>" +
    "<tr>" +
    "<td>&nbsp;</td>" +
    "<td>2</td>" +
    "<td>3</td>" +
    "<td>4</td>" +
    "<td>5</td>" +
    "<td>6</td>" +
    "<td>7</td>" +
    "<td>8</td>" +
    "</tr>"+
    "<tr>"+
    "<td>Squared</td>" +
    "<td>" + Math.pow(2,2) + "</td>" +
    "<td>" + Math.pow(3,2) + "</td>" +
    "<td>" + Math.pow(4,2) + "</td>" +
    "<td>" + Math.pow(5,2) + "</td>" +
    "<td>" + Math.pow(6,2) + "</td>" +
    "<td>" + Math.pow(7,2) + "</td>" +
    "<td>" + Math.pow(8,2) + "</td>" +
    "</tr>"+
    "<tr>"+
    "<td>Cubed</td>" +
    "<td>" + Math.pow(2,3) + "</td>" +
    "<td>" + Math.pow(3,3) + "</td>" +
    "<td>" + Math.pow(4,3) + "</td>" +
    "<td>" + Math.pow(5,3) + "</td>" +
    "<td>" + Math.pow(6,3) + "</td>" +
    "<td>" + Math.pow(7,3) + "</td>" +
    "<td>" + Math.pow(8,3) + "</td>" +
    "</tr>"+
    "</tbody>"+
    "</table>");
};


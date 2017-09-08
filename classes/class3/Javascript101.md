# Javascript 101

### What's it for?

* Dynamic change
* Interaction!

##### Javascript can change HTML Attributes

```
<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

```

##### Javascript can change CSS styles

```
document.getElementById("demo").style.fontSize = "25px";
```

##### Javascript can hide HTML elements

```
document.getElementById("demo").style.display = "none";
```

##### or show them

```
document.getElementById("demo").style.display = "block";
```
### It goes between ```<script>``` tags
* In HEAD or BODY

### Calling external scripts

```
<!DOCTYPE html>
<html>
<body>

<script src="myScript.js"></script>

</body>
</html>
```

#### Advantages of External scripts
* It separates HTML and code
* It makes HTML and JavaScript easier to read and maintain
* Cached JavaScript files can speed up page loads
* you can load several

```
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
```

### Display Javascript **output**

* Use ```innerHTML```
* To access an HTML element, JavaScript can use the document.getElementById(id) method.
* The id attribute defines the HTML element. The innerHTML property defines the HTML content:

```document.getElementById("demo").innerHTML = "my new replacement text";```

* Use console.log for testing

```console.log(5 + 6);```

#### Bonus info
* [More info on using innerHTML](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)
* [How To Append to a DIV with Javascript](https://stackoverflow.com/questions/5677799/how-to-append-data-to-div-using-javascript)

### Variables
* In JavaScript, the first character must be a letter, or an underscore (_), or a dollar sign ($).
* declare, initialize variables
* camelCase
* Javascript is CaSe SeNsItIvE
* underscore is okay but hyphens are not!
* you can think of variables holding *numbers* and *strings* aka text

### Syntax
* lines end with a ;
* Flow order (top to bottom)
* comments start with //
* increment with ```++``` and decrement with ```--```
* add strings together with ```txt = string1 + " " + string2;```

### Functions are code blocks
* they break your code into manageable chunks
* name them. Put them in brackets

```
function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}
```

### Operators

* ```==``` equal to
* ```!=```	not equal
* ```>```	greater than
* ```<```	less than
* ```>=```	greater than or equal to
* ```<=``` less than or equal to

### Logic

* AND ```&&```
* OR ```||```
* NOT ```!```

### Arrays

```var cars = ["Saab", "Volvo", "BMW"];```

# assignment-4-clinardos
assignment-4-clinardos created by GitHub Classroom


## assignment-4-challenge-1
### [Link] (https://editor.p5js.org/clinardos/full/nzgWYu7yz)
<p> To start off this assignment, the first challenge was to create a radially symmetric shape by using a loop to assist you in building the shape. After, designing your shape the next part of the assignment was to create a custom function that creates your shape with the loop included inside the function. That function must be able to pass parameters that set one aspect of the shape. Lastly, we were to use our function that was just created to create multiple shapes on the canvas and make them distinct by using the different parameters that have been set. 

<p> To complete this challenge, I first started by using the p5.js software and creating a new sketch that measured 400 x 400. Next I decided I wanted to make a Sunflower. I added a function called <strong>"addSunFlower"</strong> within this function I began to build my unique shape. As I edited my shape within the function, I called my function within the Draw() function to allow me to see the shape I was designing. I next implemented a loop to add the petals on to the sunflower which at this point had just been a circle. The loop looked like this: 

```Javascript 
    for (let petalsAdded = 0; petalsAdded <120; petalsAdded++)
    { rotate (140) ellipse (0,42,7,45) } 
```



# Python Coding challenges - Part 1

### 1. Three in, three out
Write a program that will allow a user to enter their name `(string)`, their age `(integer)` and their favourite TV program `(string)`.

The program will then display the information entered.

```python
firstname = ...
age = ...
program = ...
```

```
What is your first name? Bob
What is your age? 20
What is your favourite TV program? Stranger Things

Hello Bob
You are 20 years old
Your favourite TV program is Strager Things
```

### 2. Name Swapper
Write a program that will ask the user to type in their first name and surname.

The program will then display the two names in reverse order.

### 3. Postcode Formatter

Ask your user to enter the four separate sections of a post code.

Postcodes take the following form: `letters`, `number`, `number`, `letter`.

Once entered the postcode should be displayed with a space in the middle.

### 4. Formatting an Address
A program is required to store a user’s address in a single string.

The user should be asked three questions:
    
    1. What is your house number?
    2. What is the name of your street?
    3.What town do you live in?

The program will then combine the users answers in a single string with each answer being separated by a comma and store the result.

Finally, the program will display the result on the screen.

### 5. Formatting Telephone Numbers
UK telephone numbers are often displayed in the following format:

`area code`, `space`, `local code`

All UK telephone numbers start with a `0`.

Write a program that will allow a user to enter the area code and local code of a telephone number.

The program will then display the two codes, separated by a space.

### 6. Calculate the Area of a Rectangle
Ask your user to enter the `length` and `width` of a rectangle.

Your program should calculate the area of the rectangle and display the result with a suitable message

### 7. Calculate the Area of a Circle
Ask your user to enter the radius of a circle.

Your program should use what they have enter to calculate the area of the circle and display the result.

### 8. Number Generator (2 digits)
Write a program that inputs two individual integers between 0 and 9.

The program should then perform a calculation and store a single number in a third variable called `total`. If the first digit is a `0`, it should not be displayed.

The total should then be displayed on the screen.

### 9. Number Generator (3 digits)
Adapt program 8 above to work for 3 numbers instead of 2

### 10. Calculating the Atomic Weight of Hydrocarbons (Alkanes)
A hydrocarbon is a molecule made up of linked Carbon (C) atoms with Hydrogen (H) atoms branching off each Carbon.

Your program will ask the user to enter the number of Carbon atoms in a hydrocarbon and use the number entered to then calculate the number of Hydrogen atoms using the formula below.

Both numbers should be stored.

```
number of H atoms = (number of C atoms x 2) + 2
```

The atomic weight of the molecule is calculated by multiplying the number of carbon atoms by 12 and adding the number of hydrogen atoms.

The number of C and H atoms along with the atomic weight should be displayed …

The atomic mass of C3 H8 is 44

### 11. Standard Scratch
The “standard scratch” of a golf course is calculated by adding together the number of shots it should take to complete each hole.

This score is then adjusted depending on the difficulty of the course.

**For example:**
2 holes take 5 shots (par 5) 2x5 = 10
10 holes take 4 shots (par 4)
10x4 = 40
6 holes take 3 shots (par 3) 6x3 = 18
10 + 40 + 18 = 68 shots in total
Difficulty adjustment -2
68-2 = 66
Standard Scratch = 66

Write a program that allows the user to enter the information required to calculate the standard scratch score of a golf course.

The standard scratch should then be calculated and displayed.

### 12. Counting vowels
Write a program that asks the user to enter a sentence of their choice.

The program should then calculate and display the number of times each vowel appears in the sentence along with the total number of vowels.

Make sure the program counts both upper case and lower case vowels.

### 13. Stock code generator
A program is required to generate stock codes for a supermarket.

Ask the user to enter the name of a new product along with the year.

The program should combine the first and last two letters of the product to the first and last characters of the year to create the code.

**E.g.** `Plaza Beans 2016` should become `Plns26`

### 14. Auction fee
A program is required to calculate the fee charged by an auction company when good are sold.

The program should add up the costs of three items sold and calculate the fee, which is 10% of the total cost.

Fees are rounded up to the nearest whole number.

### 15. Prize draw cheat

You think you can win your football club’s “Guess the number of sweets in the jar”.

Assuming that you have already calculated the volumes of one sweet and the jar, write a program to input these two volumes and output the number of whole sweets that fit in the jar.

### 16. Leftover paint
A painter requires a simple program that will calculate and display the number of pots of paint required to complete a job.

The program should also display the area (in metres squared) that could be painted with the leftover paint.

### 17. Laying bricks
A bricklayer needs to calculate if they have part of a brick left over when they build a wall of a certain length.

Write a program that asks for the length of the wall in metres.

The program should add 1 cm to the length of each brick (to allow for concrete between the bricks) and then calculate the number of bricks required to build one row of the wall.

The program should also display any centimetres left over once a single of bricks of one row is laid.

### 18. Cycling Speed
Many cyclists use a bicycle computer to display their speed and distance.

The computer measures the number of times the bike’s front wheel has rotated and multiples this by circumference of the front tyre to calculate the distance travelled.

If the computer also knows how long the cyclist has been travelling for, the average speed can also be calculated.

Write a program to simulate the bicycle computer.

The user should input the circumference of the wheel in millimetres, the number of wheel revolutions and the number of minutes the cyclist has been travelling. 

The program should calculate the kilometres travelled and the average speed in km per hour.

```
Speed (kmph) = distance (kilometres) / time (hours)
```


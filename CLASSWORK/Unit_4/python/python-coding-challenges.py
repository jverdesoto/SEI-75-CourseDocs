"""
1. Three in, three out
Write a program that will allow a user to enter their name (string), their age (integer) and their favourite TV program (string).
The program will then display the information entered.

firstname = ...
age = ...
program = ...
What is your first name? Bob
What is your age? 20
What is your favourite TV program? Stranger Things

Hello Bob
You are 20 years old
Your favourite TV program is Stranger Things
"""
def three_in_out():
    firstname = input('What is your first name? ')
    age = input('What is your age? ')
    program = input('What is your favourite TV program? ')

    print(f'Hello {firstname}')
    print(f'You are {age} years old')
    print(f'Your favourite TV programme is {program}')

# three_in_out()

"""
Name Swapper
Write a program that will ask the user to type in their first name and surname.
The program will then display the two names in reverse order.
"""
def name_swapper():
    first_name = input('What is your first name? ')
    surname = input('What is your surname? ')
    print(f'Hello {surname} {first_name}!')

# name_swapper()

"""
Postcode Formatter
Ask your user to enter the four separate sections of a post code.
Postcodes take the following form: letters, number, number, letter.
Once entered the postcode should be displayed with a space in the middle.
"""
def postcode_formatter():
    city = input('Enter the first letter(s): ').upper()
    number = input('Enter the first number (before the space): ')
    number_2 = input('Enter the second number (after the space): ')
    letters = input('Enter the 2 letters at the end: ').upper()
    print(f'Your postcode is {city}{number} {number_2}{letters}')

# postcode_formatter()

"""
Formatting an Address
A program is required to store a user’s address in a single string.
The user should be asked three questions:

1. What is your house number?
2. What is the name of your street?
3. What town do you live in?
The program will then combine the users answers in a single string with each answer being separated by a comma and store the result.

Finally, the program will display the result on the screen.
"""
def address_formatter():
    number = input('What is your house number? ')
    street = input('What is the name of your street? ')
    town = input('What town do you live in? ')
    address = f'{number}, {street}, {town}'
    print(address)

# address_formatter()

"""
Formatting Telephone Numbers
UK telephone numbers are often displayed in the following format:
area code, space, local code

All UK telephone numbers start with a 0.
Write a program that will allow a user to enter the area code and local code of a telephone number.
The program will then display the two codes, separated by a space.
"""
def phone_no_formatter():
    area_code = input('Input your area code: 0')
    local_code = input('Enter the rest of your phone number: ')
    print(f'0{area_code} {local_code}')

# phone_no_formatter()

"""
Calculate the Area of a Rectangle
Ask your user to enter the length and width of a rectangle.
Your program should calculate the area of the rectangle and display the result with a suitable message
"""
def rectangle_area():
    length = input('Enter the length: ')
    width = input('Enter the width: ')
    area = int(length) * int(width)
    print(f'The area of your rectangle is {area}')

# rectangle_area()

"""
Calculate the Area of a Circle
Ask your user to enter the radius of a circle.
Your program should use what they have enter to calculate the area of the circle and display the result.
"""
import math

def circle_area():
    radius = input('Input the radius of the circle: ')
    area = math.pi * int(radius) ** 2
    print(f'The area of the circle is {area}')

# circle_area()

"""
Number Generator (2 digits)
Write a program that inputs two individual integers between 0 and 9.
The program should then perform a calculation and store a single number in a third variable called total. If the first digit is a 0, it should not be displayed.
The total should then be displayed on the screen.
"""
def two_digit_number_gen():
    tens = int(input('Input the tens digit (0-9): '))
    ones = int(input('Input the ones digit (0-9): '))
    total = tens * 10 + ones
    print(total)

# two_digit_number_gen()

"""
Number Generator (3 digits)
Adapt program 8 above to work for 3 numbers instead of 2
"""
def three_digit_number_gen():
    hundreds = int(input('Input the hundreds digit (0-9): '))
    tens = int(input('Input the tens digit (0-9): '))
    ones = int(input('Input the ones digit (0-9): '))
    total = hundreds * 100 + tens * 10 + ones
    print(total)

# three_digit_number_gen()

"""
Calculating the Atomic Weight of Hydrocarbons (Alkanes)
A hydrocarbon is a molecule made up of linked Carbon (C) atoms with Hydrogen (H) atoms branching off each Carbon.

Your program will ask the user to enter the number of Carbon atoms in a hydrocarbon and use the number entered to then 
calculate the number of Hydrogen atoms using the formula below. Both numbers should be stored.

number of H atoms = (number of C atoms x 2) + 2
The atomic weight of the molecule is calculated by multiplying the number of carbon atoms by 12 and adding the number of hydrogen atoms.

The number of C and H atoms along with the atomic weight should be displayed …

The atomic mass of C3 H8 is 44
"""
def alkanes():
    carbon = int(input('How many Carbon atoms? '))
    hydrogen = carbon * 2 + 2
    atomic_weight = carbon * 12 + hydrogen
    print(f'The atomic mass of C{carbon} H{hydrogen} is {atomic_weight}')

# alkanes()

"""
Standard Scratch
The “standard scratch” of a golf course is calculated by adding together the number of shots it should take to complete each hole.
This score is then adjusted depending on the difficulty of the course.

For example: 
2 holes take 5 shots (par 5) 2x5 = 10 
10 holes take 4 shots (par 4) 10x4 = 40 
6 holes take 3 shots (par 3) 6x3 = 18 
10 + 40 + 18 = 68 shots in total 
Difficulty adjustment -2 68-2 = 66 Standard Scratch = 66

Write a program that allows the user to enter the information required to calculate the standard scratch score of a golf course.
The standard scratch should then be calculated and displayed.
"""
def standard_scratch():
    course = []
    total_holes = 18
    while total_holes > 0:
        par = int(input('Enter the par: '))
        holes = int(input('How many holes at this par level? '))
        course.append((holes, par))
        total_holes -= holes
        print(f'{total_holes} holes left to add')
    difficulty = int(input('What is the difficulty adjustment? '))
    total_shots = 0
    for holes, par in course:
        total_shots += holes * par
    standard_scratch = total_shots + difficulty
    print(f'The Standard Scratch is {standard_scratch}')

# standard_scratch()

"""
Counting vowels
Write a program that asks the user to enter a sentence of their choice.
The program should then calculate and display the number of times each vowel 
appears in the sentence along with the total number of vowels.
Make sure the program counts both upper case and lower case vowels.
"""
def vowel_counter():
    sentence = input('Enter a sentence: ').lower()
    a = sentence.count('a')
    e = sentence.count('e')
    i = sentence.count('i')
    o = sentence.count('o')
    u = sentence.count('u')
    total = a + e + i + o + u
    print(f"Total a's: {a}")
    print(f"Total e's: {e}")
    print(f"Total i's: {i}")
    print(f"Total o's: {o}")
    print(f"Total u's: {u}")
    print(f"Total vowels: {total}")

# vowel_counter()

"""
Stock code generator
A program is required to generate stock codes for a supermarket.
Ask the user to enter the name of a new product along with the year.
The program should combine the first and last two letters of the product to 
the first and last characters of the year to create the code.

E.g. Plaza Beans 2016 should become Plns26
"""
def stock_code():
    name = input('Name of product: ')
    year = input('Year: ')
    code = f'{name[:2]}{name[-2:]}{year[0]}{year[-1]}'
    print(code)

# stock_code()

"""
Auction fee
A program is required to calculate the fee charged by an auction company when goods are sold.
The program should add up the costs of three items sold and calculate the fee, which is 10% of the total cost.
Fees are rounded up to the nearest whole number.
"""
def auction_fee():
    items = []
    while len(items) < 3:
        cost = int(input('Cost of item: '))
        items.append(cost)
    total = sum(items)
    fee = math.ceil(total / 10)
    print(f'Total: £{total} / Fee: £{fee}')

# auction_fee()

"""
Prize draw cheat
You think you can win your football club's “Guess the number of sweets in the jar”.
Assuming that you have already calculated the volumes of one sweet and the jar, 
write a program to input these two volumes and output the number of whole sweets that fit in the jar.
"""
def sweets_in_jar():
    sweet_vol = int(input('What is the volume of one sweet? '))
    jar_vol = int(input('What is the volume of the jar? '))
    total = math.floor(jar_vol / sweet_vol)
    print(f'Total sweets in jar: {total}')

# sweets_in_jar()

"""
Leftover paint
A painter requires a simple program that will calculate and display the number of pots of paint required to complete a job.
The program should also display the area (in metres squared) that could be painted with the leftover paint.
"""
def leftover_paint():
    length = int(input('Input total length (m) of area to be painted: '))
    width = int(input('Input total width (m) of area to be painted: '))
    area = length * width
    pot_coverage = 60
    paint = area / pot_coverage
    pots = math.ceil(paint)
    leftover = round((pots - paint) * pot_coverage, 2)
    print(f"You will need {pots} 5l pots to cover this area.")
    print(f"You will be able to paint another {leftover} metres squared with the left over paint.")

# leftover_paint()

"""
Laying bricks
A bricklayer needs to calculate if they have part of a brick left over when they build a wall of a certain length.
Write a program that asks for the length of the wall in metres.
The program should add 1 cm to the length of each brick (to allow for concrete between the bricks) 
and then calculate the number of bricks required to build one row of the wall.
The program should also display any centimetres left over once a single of bricks of one row is laid.
"""

def brick_layer():
    wall_length = int(input('Enter length of wall (m): ')) * 100
    brick_length = 22
    joint_length = 10
    row = wall_length / (brick_length + joint_length)
    row_bricks = math.ceil(row)
    row_length = (brick_length + joint_length) * row_bricks
    excess = row_length - wall_length
    print(f'{row_bricks} bricks are required for a {int(wall_length / 100)}m wall. There will be a {excess}cm excess.')

# brick_layer()

"""
Cycling Speed
Many cyclists use a bicycle computer to display their speed and distance.
The computer measures the number of times the bike's front wheel has rotated and multiples this by 
circumference of the front tyre to calculate the distance travelled.
If the computer also knows how long the cyclist has been travelling for, the average speed can also be calculated.
Write a program to simulate the bicycle computer.
The user should input the circumference of the wheel in millimetres, the number of wheel revolutions and the 
number of minutes the cyclist has been travelling.
The program should calculate the kilometres travelled and the average speed in km per hour.

Speed (kmph) = distance (kilometres) / time (hours)
"""

def cyclometer():
    circumference = int(input('Enter wheel circumference (mm): '))
    revs = int(input('Enter number of wheel revolutions: '))
    minutes = int(input('Enter journey time (minutes): '))
    distance = (circumference * revs) / 1000000
    speed = distance / (minutes / 60)
    print('Journey Info:')
    print(f'Distance: {distance}km')
    print(f'Average Speed: {speed}km/h')

cyclometer()


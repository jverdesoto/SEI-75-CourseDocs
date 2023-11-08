
#! 1. Three in, three out
'''
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
Your favourite TV program is Strager Things
'''
# store variables from user input
firstname = input("What is your first name? ")
age = int(input("What is your age? "))  # convert to integer
program = input("What is your favourite TV program? ")

# Display the entered information
print(f"Hello {firstname}")
print(f"You are {age} years old")
print(f"Your favourite TV program is {program}")


#! 2. Name Swapper
'''
2. Name Swapper
Write a program that will ask the user to type in their first name and surname.
The program will then display the two names in reverse order.
'''

# user input
first_name = input("Please enter your first name: ")
surname = input("Please enter your surname: ")

# Display in reverse order
print(f"{surname} {first_name}")

#! 3. Postcode Formatter
''' Ask your user to enter the four separate sections of a post code.
Postcodes take the following form: letters, number, number, letter.
Once entered the postcode should be displayed with a space in the middle.
'''
# user input each part of postcode
part_one = input("Enter the first part of your postcode (letters): ")
part_two = input("Enter the second part of your postcode (number): ")
part_three = input("Enter the third part of your postcode (number): ")
part_four = input("Enter the fourth part of your postcode (letter): ")

# combine + format pc
postcode = f"{part_one}{part_two}{part_three} {part_four}"

# Display formatted pc
print(postcode)


#! 4. Formatting an Address
'''A program is required to store a user’s address in a single string.
The user should be asked three questions:

1. What is your house number?
2. What is the name of your street?
3.What town do you live in?
The program will then combine the users answers in a single string with each answer being separated by a comma and store the result.

Finally, the program will display the result on the screen.
'''
# user input for each part of address
house_number = input("What is your house number? ")
street_name = input("What is the name of your street? ")
town_name = input("What town do you live in? ")

# combine 
address = f"{house_number}, {street_name}, {town_name}"

# Display address
print(address)


#! 5. Formatting Telephone Numbers
''' UK telephone numbers are often displayed in the following format:
area code, space, local code
All UK telephone numbers start with a 0.
Write a program that will allow a user to enter the area code and local code of a telephone number.
The program will then display the two codes, separated by a space.
'''
# user input for telephone number parts
area_code = input("Enter area code: ")
local_code = input("Enter local code: ")

# combine and format tel num
telephone_number = f"0{area_code} {local_code}"

# Display formatted tel num
print(telephone_number)


#! 6. Calculate the Area of a Rectangle
'''Ask your user to enter the length and width of a rectangle.
Your program should calculate the area of the rectangle and display the result with a suitable message
'''
# user input for dimensions
length = float(input("Enter the length of the rectangle: "))  # Convert input to a float
width = float(input("Enter the width of the rectangle: "))    # Convert input to a float

# Calculate area
area = length * width

# Display area with msg
print(f"The area of the rectangle is {area} square units.")


#! 7. Calculate the Area of a Circle
'''Ask your user to enter the radius of a circle.
Your program should use what they have enter to calculate the area of the circle and display the result.
'''
import math  # Import the math module for the constant pi

# Ask for user input for radius
radius = float(input("Enter radius of circle: "))  # convert input to a float

# Calculate the area using the area formula A = pir^2
area = math.pi * radius ** 2

# Display result
print(f"The area of the circle is {area} square units.")


#! 8. Number Generator (2 digits)
'''Write a program that inputs two individual integers between 0 and 9.
The program should then perform a calculation and store a single number in a third variable called total. If the first digit is a 0, it should not be displayed.
The total should then be displayed on the screen.
'''
# user input for two numbers
first_num = input("Enter first number (0-9): ")
second_num = input("Enter second number (0-9): ")

# Perform calculation to combine numbers into int
total = int(first_num) * 10 + int(second_num)

# Display total
print(f"The combined total is {total}")


#! 9. Number Generator (3 digits)
'''Adapt program 8 above to work for 3 numbers instead of 2'''
# Ask for user input for three integers
first_num = input("Enter first number (0-9): ")
second_num = input("Enter second number (0-9): ")
third_num = input("Enter third number (0-9): ")

# calculation to combine numbers into int
total = int(first_num) * 100 + int(second_num) * 10 + int(third_num)

# Display the total
print(f"The total is {total}")


#! 10. Calculating the Atomic Weight of Hydrocarbons (Alkanes)
'''A hydrocarbon is a molecule made up of linked Carbon (C) atoms with Hydrogen (H) atoms branching off each Carbon.
Your program will ask the user to enter the number of Carbon atoms in a hydrocarbon and use the number entered to then calculate the number of Hydrogen atoms using the formula below.
Both numbers should be stored.
number of H atoms = (number of C atoms x 2) + 2
The atomic weight of the molecule is calculated by multiplying the number of carbon atoms by 12 and adding the number of hydrogen atoms.

The number of C and H atoms along with the atomic weight should be displayed …

The atomic mass of C3 H8 is 44
'''
# user input for the number of carbon atoms
number_of_C_atoms = int(input("Enter the number of Carbon atoms: "))

# Calc number of hydrogen atoms
number_of_H_atoms = (number_of_C_atoms * 2) + 2

# Calc atomic weight
atomic_weight = (number_of_C_atoms * 12) + number_of_H_atoms

# Display results
print(f"The atomic mass of C{number_of_C_atoms} H{number_of_H_atoms} is {atomic_weight}")

#! 11. Standard Scratch
'''The “standard scratch” of a golf course is calculated by adding together the number of shots it should take to complete each hole.
This score is then adjusted depending on the difficulty of the course.
For example: 2 holes take 5 shots (par 5) 2x5 = 10 10 holes take 4 shots (par 4) 10x4 = 40 6 holes take 3 shots (par 3) 6x3 = 18 10 + 40 + 18 = 68 shots in total Difficulty adjustment -2 68-2 = 66 Standard Scratch = 66
Write a program that allows the user to enter the information required to calculate the standard scratch score of a golf course.
The standard scratch should then be calculated and displayed.
'''
# number of shots for each hole
par5_shots = int(input("Enter the number of par 5 holes: ")) * 5
par4_shots = int(input("Enter the number of par 4 holes: ")) * 4
par3_shots = int(input("Enter the number of par 3 holes: ")) * 3

# Calc the initial standard scratch score
initial_score = par5_shots + par4_shots + par3_shots

# Adifficulty adjustment
difficulty_adjustment = int(input("Enter difficulty adjustment if you a legend: "))

# Calc final standard scratch score
standard_scratch = initial_score - difficulty_adjustment

# Display standard scratch score
print(f"Standard Scratch (my back) = {standard_scratch}")


#! 12. Counting vowels
'''Write a program that asks the user to enter a sentence of their choice.
The program should then calculate and display the number of times each vowel appears in the sentence along with the total number of vowels.
Make sure the program counts both upper case and lower case vowels.
'''
# sentence input
sentence = input("Enter a sentence of your choice or dont idc (pls do): ").lower()  

# Count vowels
vowels = 'aeiou'
vowel_counts = {vowel: sentence.count(vowel) for vowel in vowels}

# Display each and total count
total_vowels = sum(vowel_counts.values())
print("Vowel counts:")
for vowel, count in vowel_counts.items():
    print(f"{vowel}: {count}")
print(f"Total number of vowels: {total_vowels}")



#! 13. Stock code generator
'''A program is required to generate stock codes for a supermarket.
Ask the user to enter the name of a new product along with the year.
The program should combine the first and last two letters of the product to the first and last characters of the year to create the code.

E.g. Plaza Beans 2016 should become Plns26
'''
# product name and year
product_name = input("Enter product name: ")
year = input("Enter year of something idk it doesnt say just enter a year pls: ")

# Generate stock code
stock_code = f"{product_name[:2]}{product_name[-2:]}{year[0]}{year[-1]}"

# Display 
print(f"The stock code is {stock_code} swiggy swag")

#! 14. Auction fee
'''
A program is required to calculate the fee charged by an auction company when good are sold.
The program should add up the costs of three items sold and calculate the fee, which is 10% of the total cost.
Fees are rounded up to the nearest whole number.
'''
# costs of three items
#? We got  a floater!
item1 = float(input("Enter cost of item 1: "))
item2 = float(input("Enter cost of item 2: "))
item3 = float(input("Enter cost of item 3: "))

# Calc total cost + fee
total_cost = item1 + item2 + item3
fee = round(total_cost * 0.10)

# Display fee
print(f"The auction fee is £{fee}")


#! 15. Prize draw cheat
'''You think you can win your football club’s “Guess the number of sweets in the jar”.
Assuming that you have already calculated the volumes of one sweet and the jar, write a program to input these two volumes and output the number of whole sweets that fit in the jar.
'''
# user input for volumes
sweet_volume = float(input("Enter volume of one sweet - how on earth you know that idk - (in cm^3): "))
jar_volume = float(input("Enter volume of the jar (in cm^3): "))

# Calculate the number of sweets that fit in the jar
number_of_sweets = int(jar_volume // sweet_volume)  # floor division 

# result
print(f"The number of sweets that fit in the jar(jar binks) is {number_of_sweets}")


#! 16. Leftover paint
'''A painter requires a simple program that will calculate and display the number of pots of paint required to complete a job.
The program should also display the area (in metres squared) that could be painted with the leftover paint.
'''
# made up constant for coverage in square metres
COVERAGE_PER_POT = 69  

# user input for area that needs paint and number of pots bought
area_needed = float(input("Enter area to be painted (in m^2): "))
pots_bought = int(input("Enter number of pots bought (the legal kind): "))

# Calc using made up constant
pots_needed = area_needed // COVERAGE_PER_POT
leftover_paint_area = (pots_bought - pots_needed) * COVERAGE_PER_POT

# Display the results
print(f"total no. of pots needed: {pots_needed}")
print(f"Leftover paint area: {leftover_paint_area} m^2")


#! 17. Laying bricks
'''A bricklayer needs to calculate if they have part of a brick left over when they build a wall of a certain length.
Write a program that asks for the length of the wall in metres.
The program should add 1 cm to the length of each brick (to allow for concrete between the bricks) and then calculate the number of bricks required to build one row of the wall.
The program should also display any centimetres left over once a single of bricks of one row is laid.
'''
# Constants
BRICK_LENGTH_CM = 20  # avg length of a brick in cm
CONCRETE_WIDTH_CM = 1  # concrete between bricks 

# length of the wall
wall_length_m = float(input("Enter wall length in metres: "))

# Convert to cm, calc NoB and leftover length
wall_length_cm = wall_length_m * 100
bricks_needed = int(wall_length_cm // (BRICK_LENGTH_CM + CONCRETE_WIDTH_CM))
leftover_cm = wall_length_cm % (BRICK_LENGTH_CM + CONCRETE_WIDTH_CM)

# print
print(f"Number of bricks needed: {bricks_needed}")
print(f"Leftover length: {leftover_cm} cm")


#! 18. Cycling Speed
'''Many cyclists use a bicycle computer to display their speed and distance.
The computer measures the number of times the bike’s front wheel has rotated and multiples this by circumference of the front tyre to calculate the distance travelled.
If the computer also knows how long the cyclist has been travelling for, the average speed can also be calculated.
Write a program to simulate the bicycle computer.
The user should input the circumference of the wheel in millimetres, the number of wheel revolutions and the number of minutes the cyclist has been travelling.
The program should calculate the kilometres travelled and the average speed in km per hour.

# Speed (kmph) = distance (kilometres) / time (hours)
'''
# Constants
MM_PER_KM = 1_000_000 #? millimetres per kilometres
MINUTES_PER_HOUR = 60

# user input values
circumference_mm = float(input("Enter circumference of wheel in millimetres: "))
wheel_revolutions = int(input("Enter number of wheel revolutions: "))
time_minutes = float(input("Enter number of minutes travelled: "))

# Calc distance travelled in km and avg speed
distance_km = (circumference_mm * wheel_revolutions) / MM_PER_KM
time_hours = time_minutes / MINUTES_PER_HOUR
speed_kmph = distance_km / time_hours

# PRINT Results
print(f"Distance travelled: {distance_km:.2f} km")
print(f"Average speed: {speed_kmph:.2f} km/h")

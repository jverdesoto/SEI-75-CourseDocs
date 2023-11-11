# 1
# Ask the user for their name, age, and favorite TV program
firstname = input("What is your first name? ")
age = int(input("What is your age? "))
program = input("What is your favourite TV program? ")

# Display the entered information
print(f"\nHello {firstname}")
print(f"You are {age} years old")
print(f"Your favourite TV program is {program}")

# 2
# Ask the user for their first name and surname
first_name = input("Enter your first name: ")
surname = input("Enter your surname: ")

# Display the names in reverse order
print(f"\nNames in reverse order: {surname} {first_name}")

# 3
postcode_letters = input('enter the first two letters of you post code')
postcode_numbers = input('enter the first two numbers of your post code')
postcode_numbers2 = input('enter the second two numbers of your post code')
postcode_letter = input('enter the final letter of your post code')

print(f"{postcode_letters}{postcode_numbers} {postcode_numbers2}{postcode_letter}")
# 4
# Ask the user for their address information
house_number = input("What is your house number? ")
street_name = input("What is the name of your street? ")
town = input("What town do you live in? ")

# Combine the answers into a single string with commas
user_address = f"{house_number}, {street_name}, {town}"

# Display the result
print(f"\nUser's Address: {user_address}")

# 5
# Ask the user for the area code and local code
area_code = input("Enter the area code: ")
local_code = input("Enter the local code: ")

# Display the entered codes separated by a space
print(f"\nTelephone number: {area_code} {local_code}")

# 6
# Input the length and width of the rectangle from the user
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))

# Calculate the area of the rectangle: Area = length * width
area = length * width

# Display the result
print(f"\nThe area of the rectangle with length {length} and width {width} is: {area:.2f}")

# 7
import math

# Input the radius of the circle from the user
radius = float(input("Enter the radius of the circle: "))

# Calculate the area of the circle using the formula: Area = π * radius^2
area = math.pi * (radius ** 2)

# Display the result
print(f"\nThe area of the circle with radius {radius} is: {area:.2f}")

# 8
# Input two individual integers between 0 and 9
first_digit = int(input("Enter the first digit (0-9): "))
second_digit = int(input("Enter the second digit (0-9): "))

# Perform the calculation and store the result in the variable 'total'
total = first_digit + second_digit

# Display the total, but don't display if the first digit is 0
if first_digit != 0:
    print(f"\nTotal: {total}")
else:
    print("\nTotal: First digit is 0, not displaying total.")
# 9
# Input three individual integers between 0 and 9
first_digit = int(input("Enter the first digit (0-9): "))
second_digit = int(input("Enter the second digit (0-9): "))
third_digit = int(input("Enter the third digit (0-9): "))

# Perform the calculation and store the result in the variable 'total'
total = first_digit + second_digit + third_digit

# Display the total, but don't display if the first digit is 0
if first_digit != 0:
    print(f"\nTotal: {total}")
else:
    print("\nTotal: First digit is 0, not displaying total.")

# 10
def calculate_hydrocarbon(num_carbon_atoms):
  # Calculate the number of Hydrogen atoms
  num_hydrogen_atoms = (num_carbon_atoms * 2) + 2

  # Calculate the atomic weight of the molecule
  atomic_weight = (num_carbon_atoms * 12) + num_hydrogen_atoms

  # Display the results
  print(f"\nNumber of Carbon atoms: {num_carbon_atoms}")
  print(f"Number of Hydrogen atoms: {num_hydrogen_atoms}")
  print(f"Atomic weight of the molecule: {atomic_weight}")

# Input the number of Carbon atoms from the user
num_carbon_atoms = int(input("Enter the number of Carbon atoms in the hydrocarbon: "))

# Run the program with the user's input
calculate_hydrocarbon(num_carbon_atoms)

# 11
# Ask the user for the number of holes, par for each type, and the difficulty adjustment
num_par_5 = int(input("Enter the number of par 5 holes: "))
num_par_4 = int(input("Enter the number of par 4 holes: "))
num_par_3 = int(input("Enter the number of par 3 holes: "))
difficulty_adjustment = int(input("Enter the difficulty adjustment: "))

# Calculate the standard scratch score
standard_scratch = (num_par_5 * 5) + (num_par_4 * 4) + (num_par_3 * 3) + difficulty_adjustment

# Display the result
print(f"\nStandard Scratch Score: {standard_scratch}")

# 12
def count_vowels(sentence):
  # Convert the sentence to lowercase to ensure case-insensitivity
  sentence = sentence.lower()

  # Define a list of vowels
  vowels = ['a', 'e', 'i', 'o', 'u']

  # Use a dictionary comprehension to count the occurrences of each vowel
  vowel_counts = {vowel: sentence.count(vowel) for vowel in vowels}

  # Calculate the total number of vowels
  total_vowels = sum(vowel_counts.values())

  # Display the results
  print("\nNumber of vowels in the sentence:")
  for vowel, count in vowel_counts.items():
      print(f"{vowel}: {count}")
  print(f"Total number of vowels: {total_vowels}")

# Input a sentence from the user
user_sentence = input("Enter a sentence of your choice: ")

# Run the program with the user's input
count_vowels(user_sentence)

# 13
def generate_stock_code():
  # Input the name of the new product
  product_name = input("Enter the name of the new product: ")

  # Input the year
  year = input("Enter the year: ")

  # Extract the first and last two letters of the product name
  product_code = product_name[:2] + product_name[-2:]

  # Extract the first and last characters of the year
  year_code = year[0] + year[-1]

  # Combine the product code and year code to create the stock code
  stock_code = product_code + year_code

  # Display the result
  print(f"\nThe generated stock code: {stock_code}")

# Run the program
generate_stock_code()

# 14
import math

def calculate_auction_fee():
    # Input the costs of three items sold
    item1 = float(input("Enter the cost of the first item: "))
    item2 = float(input("Enter the cost of the second item: "))
    item3 = float(input("Enter the cost of the third item: "))

    # Calculate the total cost
    total_cost = item1 + item2 + item3

    # Calculate the fee (10% of the total cost) and round up to the nearest whole number
    fee = math.ceil(0.1 * total_cost) #round up to the nearest whole number

    # Display the result
    print(f"\nThe total cost of the items: {total_cost:.2f}")
    print(f"Auction fee (rounded up): {fee}")

# Run the program
calculate_auction_fee()

# 15
def calculate_sweets():
  # Input the volume of one sweet in cubic units
  volume_of_one_sweet = float(input("Enter the volume of one sweet in cubic units: "))

  # Input the volume of the jar in cubic units
  volume_of_jar = float(input("Enter the volume of the jar in cubic units: "))

  # Calculate the number of whole sweets that fit in the jar
  num_sweets = int(volume_of_jar // volume_of_one_sweet)

  # Display the result
  print(f"\nThe number of whole sweets that fit in the jar: {num_sweets}")

# Run the program
calculate_sweets()

# 16
def calculate_paint():
  # Input the area to be painted in square meters
  area_to_paint = float(input("Enter the area to be painted in square meters: "))

  # Input the coverage of one pot of paint in square meters
  coverage_per_pot = float(input("Enter the coverage of one pot of paint in square meters: "))

  # Calculate the number of pots of paint required
  num_pots_required = (area_to_paint / coverage_per_pot) + 1  # Adding 1 to account for any partial pot

  # Calculate the area that could be painted with the leftover paint
  leftover_paint_area = (num_pots_required * coverage_per_pot) - area_to_paint

  # Display the results
  print(f"\nNumber of pots of paint required: {int(num_pots_required)}")  # Round up to the nearest whole number
  print(f"Area that could be painted with leftover paint: {leftover_paint_area:.2f} square meters")

# Run the program
calculate_paint()

# 17
def calculate_bricks():
  # Input the length of the wall in meters
  wall_length = float(input("Enter the length of the wall in meters: "))

  # Add 1 cm to the length of each brick for concrete between the bricks
  brick_length = 1  # 1 cm for concrete between bricks
  total_wall_length = brick_length + wall_length * 100  # Convert meters to centimeters

  # Calculate the number of bricks required and the remaining centimeters
  brick_width = 20  # Assume the width of each brick is 20 cm
  num_bricks = total_wall_length // brick_width
  remaining = total_wall_length % brick_width

  # Display the results
  print(f"\nNumber of bricks required for one row: {num_bricks}")
  print(f"Centimeters left over: {remaining} cm")

# Run the program
calculate_bricks()

# 18
def bicycle_computer():
  # Input the circumference of the wheel in millimeters
  circumference_mm = float(input("Enter the circumference of the wheel in millimeters: "))

  # Input the number of wheel revolutions
  revolutions = int(input("Enter the number of wheel revolutions: "))

  # Input the number of minutes the cyclist has been travelling
  minutes = int(input("Enter the number of minutes the cyclist has been travelling: "))

  # Calculate distance in kilometers
  distance_km = (circumference_mm * revolutions) / 1000000  # Convert millimeters to kilometers

  # Convert minutes to hours
  time_hours = minutes / 60

  # Calculate average speed in km per hour
  speed_kph = distance_km / time_hours

  # Display the results
  print(f"\nDistance Travelled: {distance_km:.2f} kilometers")
  print(f"Average Speed: {speed_kph:.2f} km/h")

# Run the program
bicycle_computer()

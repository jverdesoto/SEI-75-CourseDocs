def fizz_buzz(max_num):
    # Code blocks defined with indentation. def initiates a function, colon plus indent denotes start of block
    '''
    Single line comments use #
    Multi-line comments use 3 single quote marks
    '''
    for num in range(1, max_num):
        if num % 3 == 0 and num % 5 == 0:
            # == for equality - not ===
            print('{} is FizzBuzz'.format(num))
            # String format method - {} is similar template literal in JS, the format method adds the value to the curly braces
        elif num % 3 == 0:
            print(f'{num} is Fizz')
            # Equivalent to template literal - f denotes f-string (similar to backticks)
        elif num % 5 == 0:
            print(f'{num} is Buzz')
        else:
            print(num)

fizz_buzz(31)
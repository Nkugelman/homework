import random

while True:   
    user_input = input("Enter a number between 1 and 100 (or 'exit' to quit): ")
    if user_input.lower() == 'exit':
        print("Goodbye!")
        break

    try:
        user_number = int(user_input)
        if 1 <= user_number <= 100:
            random_number = random.randint(1, 100)
            print(f"Random number generated: {random_number}")
            if user_number == random_number:
                print("Congratulations! You guessed the number!")
            else:
                print("Sorry, try again!")
        else:
            print("Please enter a number between 1 and 100.")
    except ValueError:   
     print("Invalid input. Please enter a valid number or 'exit' to quit.")
   




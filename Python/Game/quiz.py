# ------------------------
def new_game():
    guesses = []
    correct_guesses = 0
    question_num = 1

    for key in questions:
        print("------------------------")
        print(key)

        for i in options[question_num - 1]:
            print(i)

        guess = input("Enter A, B, C or D: ")
        guess = guess.upper()
        guesses.append(guess)

        correct_guesses += check_answer(questions.get(key), guess)
        question_num += 1

    display_score(correct_guesses, guesses)


# ------------------------
def check_answer(answer, guess):
    if answer == guess:
        print("CORRECT!")
        return 1
    else:
        print("WRONG!")
        return 0


# ------------------------
def display_score(correct_guesses, guesses):
    print("------------------------")
    print("RESULT")
    print("------------------------")

    print("Answers: ", end="")
    for i in questions:
        print(questions.get(i), end=" ")
    print()

    print("GUesses: ", end="")
    for i in guesses:
        print(i, end=" ")
    print()

    score = int((correct_guesses / len(questions)) * 100)
    print("Your score is: " + str(score) + "%")


# ------------------------
def play_again():
    response = input("Do you want to play again? (yes or no) ")
    response = response.upper()

    if response == "YES":
        return True
    else:
        return False


# ------------------------

questions = {
    "What is my name? ": "A",
    "What is this called? ": "B",
    "Is Nhi so cute?": "C",
    "Who is Nhi?": "D",
}

options = [
    ["A. Nhi", "B. Hen", "C. Kim", "D.Nah"],
    ["A. Game", "B. Quiz", "C. Puzzle", "D. Film"],
    ["A. No", "B. Never", "C. Yes", "D. I dunno"],
    ["A. A girl", "B. A boy", "C. A handsome boy", "D. A cute girl"],
]

new_game()

while play_again():
    new_game()

print("Byeee <333")
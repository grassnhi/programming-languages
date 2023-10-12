#include<stdio.h>
#include<stdbool.h>
#include<stdlib.h>
#include<time.h>

int main(){
    int maxValue = 5;

    srand(time(NULL));
    
    int randomNumber = rand() % (maxValue + 1);

    // printf("%d\n", randomNumber);

    printf("Guessing a number from 0 - %d: ", maxValue);

    int input;
    scanf("%d", &input);

    printf("You guessed: %d\n", input);
    printf("The correct answer: %d\n", randomNumber);

    if(input == randomNumber){
        printf("You win!\n");
        // return 0;
    }else{
        printf("You don't win. Sorry!\n");
        // return 0;
    }

    printf("Thank you for playing!\n");

    return 0;
}
#include<stdio.h>
#include<stdbool.h>

int main(){
    bool pizzaIsHealthy = true;
    
    int temp;
    printf("Do you believe in the power of pizza? 1. true or 0. false: ");
    scanf("%d", &temp); // %d -> decimal integer # %i -> integer

    pizzaIsHealthy = temp;

    if(pizzaIsHealthy){ // if not zero -> true for all
        printf("Welcome to my pizza :>\n");
    }


    printf("Choose a menu option 1-4: \n");
    printf("1. Add a patient\n");
    printf("2. View a patient\n");
    printf("3. Search patients\n");
    printf("4. Exit\n");

    int input;
    scanf("%d", &input);

    if(input == 1){
        printf("1. Adding a patient\n");
    }else if(input == 2){
        printf("2. Viewing a patient\n");
    }else if(input == 3){
        printf("3. Searching patients\n");
    }else  if(input == 4){
        printf("4. Exiting...\n");
        
        printf("Do you want to save?\n");
        
        char q;

        getchar(); // Because the \n in the input\n
        scanf("%c", &q);

        if(q == 'Y' || q == 'y'){
            printf("Saving changes!\n");
        }else if(q == 'N' || q == 'n'){
            printf("Fine whatever!\n");
        }else{
            printf("Incorrect 5...4...3...2...1...BOOM\n");
        }
        
    }else{
        printf("Incorrect input!");
    }

    // if(true) printf("TRUE\n");

    return 0;
}
#include<stdio.h>

int main(){
    int i = 0;

    // while (i < 10)
    // {
    //     // i++;
    //     printf("%d ", i);
    //     i++;
    // }

    // for(int k = 0; k < 10; k++){
    //     i++;
    //     printf("%d ", i);
    // }


    int k;
    while (i < 11)
    {
        k = i - 1;

        printf("%d ", i);
        i++;

        while (k >= 0)
        {
            printf("%d ", k);
            k--;
        }
        
        printf("\n");
    }
    

    int input;

    do{
        printf("Please enter a number 0 - 9: ");
        scanf("%d", &input);
    } while (input < 0 || input > 9);


    return 0;
}
#include<stdio.h>
#include<stdbool.h>
#include<math.h>

bool isPrime(int input){
    for(int i = sqrt(input); i > 1; i--){
        printf("%d ", i);
        if(input % i){
            return false;
        }
    }
}

int main(){
    int input;
    scanf("%d", &input);

    // bool prime = isPrime(17);

    for(int i = input; i > 1; i--){
        bool prime = isPrime(i);
        if(prime){
            printf("%d Is Prime!\n", i);
        }
    }

    // int input = 25;
    // bool isPrime = true;

    // for(int i = sqrt(input); i > 1; i--){
    //     printf("%d ", i);
    //     if(input % i){
    //         isPrime = false;
    //     }
    // }

    // if(prime){
    //     printf("\nIs Prime!\n");
    // }else{
    //     printf("Not Prime!\n");
    // }

    return 0;
}

// gcc prime.c -o prime -lm
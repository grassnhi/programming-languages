#include<stdio.h>

int factorial(int number){
    int factorial = 1;

    for(int i = number; i > 1; i--){
        factorial *= i;
    }

    return factorial;
}

void outputFactorial(int input){
    printf("The factorial of %d is %d\n", input, factorial(input));
}


void printArray(int arr[], int size){
    for(int i = 0; i < size; i++){
        arr[i]++;
        printf("%d ", arr[i]);
    }
}

void doSth(int a){
    a++;
}

int main(){
    int fact = factorial(5);

    printf("The factorial is %d\n", fact);

    printf("The factorial is %d\n", factorial(8));

    printf("The factorial is %d\n", factorial(factorial(3)));

    outputFactorial(3);
    outputFactorial(5);
    outputFactorial(8);
    outputFactorial(factorial(3));


    int slices[] = {4, 5, 4, 6, 3, 2};
    printArray(slices, 6);

    printf("\n");

    for(int i = 0; i < 6; i++){
        printf("%d ", slices[i]); // changed
    }


    int a = 5;
    doSth(a);

    printf("%d\n", a); // not be changed


    return 0;
}
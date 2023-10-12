#include<stdio.h>

int main(){
    float x = 50.0;

    printf("%f\n", x);  // printf takes a double
    // x is promoted -> value of x is stored as a double
    return 0;
}
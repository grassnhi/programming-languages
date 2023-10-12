#include<stdio.h>

int main(){

    int x, y;
    x = (y = 5);    // this-> right to left

    int z = 20;
    y = 2;
    x = -y + z;  // (-y) + 2 => left to right then = (right to left)

    printf("%i\n", x);
    
    return 0;
}
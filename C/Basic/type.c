#include <stdio.h>

int main(){
    // int dogs = 6;
    // double dogs = 2.5e06; // 25000
    // printf("%i\n", dogs);
    printf("How many dogs? ");

    double dogs;
    scanf("%lf", &dogs); // lf but not f

    printf("%f\n%e\n%g\n", dogs, dogs, dogs);
    /*
    %f : Decimal notation
    %e : Scientific notation
    %g : Computer decides
    */
    return 0;
}
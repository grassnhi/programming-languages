#include <stdio.h>

int main(){
    // char myChar = 'A';
    char ASCII;
    printf("Enter a character: ");
    // scanf("%c", &myChar);
    // printf("%c\n", myChar);
    scanf("%c", &ASCII);
    printf("%i\n", ASCII);  // converted to decimal

    int integer;
    printf("Please enter an integer between 0 - 127: ");
    scanf("%i", &integer);
    printf("%c\n", integer);

    // Math with ASCII:
    char mathz = 'A' + '\t';
    // char mathz = 'A' + 'B';
    printf("A(65) + \\t(11) = %c(%d)\n", mathz, mathz);

    return 0;
}
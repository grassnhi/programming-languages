#include<stdio.h>

int main(){
    int slices;

    printf("How many pizza slices you eat? \n");
    scanf("%d", &slices);

    int caloPerSlice = 250;

    switch (slices)
    {
    case 1:
        printf("You did a great jobs!\n");
        break;
    
    case 2:
        printf("You did an ok jobs!\n");
        break;

    case 3:
        printf("You did a bad jobs!\n");
        break;
    
    case 4:
        printf("You 're a disapointment!\n");
        break;

    default:
        printf("Enjoy the heart disease!\n");
        break;
    }

    printf("You have %d calories.\n", caloPerSlice * slices);
    
    return 0;
}
#include<stdio.h>

void printArray(int arr[], int size){
    for(int i = 0; i < size; i++){
        printf("%d ", arr[i]);
    }
}

int main(){
    int myGrade[10];

    myGrade[0] = 10;
    myGrade[1] = 11;

    printf("%d", myGrade[0]);


    int myGrades[] = {10, 12, 15, 14, 16, 17, 54, 34, 23};

    printf("%d\n", myGrades[0]);

    int x = myGrades[4] + 10;

    printf("%d\n", x);
    // printf("%d\n", myGrades[40]);


    int size = 5;
    int myGradess[size];

    myGradess[0] = 10;
    myGradess[1] = 15;
    myGradess[2] = 20;
    myGradess[3] = 25;
    myGradess[4] = 30;

    // printf("%d\n", myGrades[4]);

    for(int i = 0; i < size; i++){
        printf("%d ", myGradess[i]);
    }

    printf("\n");


    int aGrade[] = {12, 23, 45};

    int columns = 3;
    int rows = 2;
    int grades[2][3] = {
        {12, 23, 45},
        {64, 78, 89}
    };

    printf("%d \n", grades[1][2]);

    grades[1][2] = 30;

    printf("%d \n", grades[1][2]);

    for(int i = 0; i < rows; i++){
        // for(int j = 0; j < columns; j++){
        //     printf("%d ", grades[i][j]);
        // }
        printArray(grades[i], columns);
        printf("\n");
    }
    

    return 0;
}
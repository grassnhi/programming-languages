#include<stdio.h>

int main(){
    int max;

    scanf("%d", &max);

    int i;
    for(i = 0; i < max + 1; i++){
        printf("%d\n", i);
    }

    for(; max > 0; max--){
        printf("%d\n", max);
    }

    printf("You printed up to the number %d\n", i - 1);
    printf("You printed %d number\n", i);

    for(int i = 0; i < 11; i++){
        for(int k = i; k >= 0; k--){
            printf("%d ", k);
        }
        printf("\n");
    }

    return 0;
}
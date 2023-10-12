#include<stdio.h>

int main(){
    for(int i = 0; i < 60; i++){
        printf("Hellooo\n");
        if(i == 6) break;
    }

    int i = 0;
    int number = 2;
    while (1)
    {
        printf("%d", i);
        if(i == number){
            printf("\nWe found it!\n");
            break;
        }
        i++;
    }
    
    return 0;
}
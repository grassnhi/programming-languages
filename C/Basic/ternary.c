#include<stdio.h>

int main(){
    double money = 20;
    double cost = 25;

    if(money > cost){
        printf("You can afford it!\n");
    }else{
        printf("Sorry. You need %lf more money!\n", cost - money);
    }

    money > cost ? printf("You can afford it!\n") : printf("Sorry. You need %lf more money!\n", cost - money);
    
    return 0;
}
#include<stdio.h>

int main(){
    int x  = 2 + 3 * 4 / (3 - 2);
    int y = 5 % 2;
    
    printf("%i\n", x);

    int pieceOfPizza = 5;
    int numberOfEaters = 2;
    int leftOver = pieceOfPizza % numberOfEaters;

    printf("Pizzas left: %i\n", leftOver);

    int money = 25;
    int bill = 15;

    int total = money - -bill; // 25 - -15 = 40

    printf("Total money: %i\n", total);
    

    int pizzaToEat = 123;

    // pizzaToEat = pizzaToEat + 1;

    // int output = pizzaToEat++; //123

    // int output = ++pizzaToEat; // 124

    // int output = pizzaToEat--;

    int output = --pizzaToEat;

    printf("Pizzas to eat: %i\n", output);


    printf("Pizzas to eat: %i\n", pizzaToEat);

    pizzaToEat = pizzaToEat + 100;
    printf("Pizzas to eat: %i\n", pizzaToEat);

    pizzaToEat += 100;
    printf("Pizzas to eat: %i\n", pizzaToEat);

    pizzaToEat -= 100;
    printf("Pizzas to eat: %i\n", pizzaToEat);

    pizzaToEat *= 2;
    printf("Pizzas to eat: %i\n", pizzaToEat);

    pizzaToEat /= 2;
    printf("Pizzas to eat: %i\n", pizzaToEat);
    
    pizzaToEat %= 5;
    printf("Pizzas to eat: %i\n", pizzaToEat);

    return 0;
}
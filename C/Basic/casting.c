#include <stdio.h>

int main()
{
	// a dozen -> 12
	int eggs;

	printf("Enter the number of eggs you have: ");
    scanf("%i", &eggs);

	// double dozen = eggs / 12; // int 18 / int 12 => int 1 => double 1.0..
	// double dozen = eggs / 12.0;
	double dozen = (double) eggs / 12;

	printf("You have %f dozen eggs.\n", dozen);

	
	// int slices = 17;
    // double halfPizza = slices / 2.0;

	int slices = 17;
	int people = 2;
    // double halfPizza = slices / (double) people;
	double halfPizza = (double) slices /  people;
	// double halfPizza = (double) (slices /  people);
	printf("%f\n", halfPizza);


	double c = 25 / 2 * 2; // 24.0000
	double d = 25 / 2 * 2.0; // 24.000

	printf("c: %f\n", c);
	printf("d: %f\n", d);

	return 0;
}
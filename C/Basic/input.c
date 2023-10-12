#include <stdio.h>

int main()
{
	int radius; 	
	printf("Enter a radius: ");
	scanf("%i", &radius);	// address-of operator
	printf("The given radius is: %i\n", radius);

	double area = 3.141559 * (radius * radius);
	printf("The area of a circle with %i radius is: %f\n", radius, area);	

	return 0;
}

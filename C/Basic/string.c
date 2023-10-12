#include <stdio.h>

int main()
{
	char name[31];	// need a null character at the end
	printf("Enter your name: \n");
	scanf("%s", name);
	printf("Hello Nhi :3\n");
	printf("Hello %s\n", "Nhi");
	printf("hello %s\n", name);
	return 0;
}

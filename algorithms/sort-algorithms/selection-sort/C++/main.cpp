#include <iostream>
#include "vector"
int get_smallest(std::vector<int> vector) {
    int *smallest = &vector.at(0);
    int *smallest_index;
    for (int i = 0; i < vector.size(); ++i) {
        int *element = &vector.at(i);
        if (*element < *smallest) {
            smallest = element;
            smallest_index = &i;
        }
    }
    std::cout << *smallest_index << std::endl;
    return *smallest_index;

}

int main() {
    const std::vector<int> my_vector = {1, 2, 3, 4};
    const int result = get_smallest(my_vector);
    std::cout << result << std::endl;
    return 0;
}

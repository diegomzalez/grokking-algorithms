#include <iostream>
#include "vector"
#include "cmath"
int get_mid(const int *low, const int *high) {
    return round((*low + *high) / 2);
}

int binary_search(std::vector<int> *data, int element) {
    int low = 0;
    int high = data->size() - 1;
    while (low <= high) {
        const int mid = get_mid(&low, &high);
        const int guess = data->at(mid);
        if (guess == element) return mid;
        if (guess < element) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}
int main() {
    std::vector<int> data = {1, 2, 3, 4, 5};
    int result = binary_search(&data, 3);
    std::cout << result << std::endl;
    return 0;
}

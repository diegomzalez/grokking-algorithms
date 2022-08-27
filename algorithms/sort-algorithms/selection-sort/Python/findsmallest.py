def find_smallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(len(arr)):
        element = arr[i]
        if element < smallest:
            smallest = element
            smallest_index = i
    return smallest_index

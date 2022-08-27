import findsmallest


def selection_sort(arr: list) -> list:
    new_arr: list = []
    for i in range(len(arr)):
        smallest = findsmallest.find_smallest(arr)
        new_arr.append(arr.pop(smallest))
    return new_arr

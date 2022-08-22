import getmid


def binary_search(data, element):
    low = 0
    high = (len(data) - 1)
    while low <= high:
        mid = getmid.get_mid(low, high)
        guess = data[mid]
        if guess == element:
            return mid
        if guess < element:
            low = mid + 1
        else:
            high = mid - 1
    return None

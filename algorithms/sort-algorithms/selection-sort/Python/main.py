# This is a sample Python script.
# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
import selectionsort


def main() -> None:
    arr: list = [343, 2, 1, 23232, 4, 0, 3232]
    result = selectionsort.selection_sort(arr)
    print(result)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    main()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/

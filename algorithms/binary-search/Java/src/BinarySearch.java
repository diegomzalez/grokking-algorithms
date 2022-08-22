public class BinarySearch {
    public static int binarySearch(int[] data, int element) {
        int low = 0;
        int high = data.length - 1;
        while (low <= high) {
            final int mid = GetMid.getMid(low, high);
            final int guess = data[mid];
            if (guess == element) return  mid;
            if (guess < element) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}

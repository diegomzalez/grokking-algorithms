public class Main {
    public static void main(String[] args) {
        int[] data = new int[200];
        for (int i = 0; i < 200; i++) {
            data[i] = i + 1;
        }
        final int result = BinarySearch.binarySearch(data, 666);
        System.out.println(result);
    }
}

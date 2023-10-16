//1. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Shuffle{
    public static void main(String[] args){
        Integer[] array = {1,2,3,4,5,6,7};
        List<Integer> list = Arrays.asList(array);
        Collections.shuffle(list);
        list.toArray(array);
        System.out.println(Arrays.toString(array));
    }
}

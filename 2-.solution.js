// DAY : 2
// URL : https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)

function solution(str, ending) {
  const lastThree = str.slice(-3);
  return ending.includes(lastThree);
}

// 문제 https://www.acmicpc.net/problem/11720
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

// 출력
// 입력으로 주어진 숫자 N개의 합을 출력한다.

// 예제 입력 1
// 1
// 1
// 예제 출력 1
// 1
// 예제 입력 2
// 5
// 54321
// 예제 출력 2
// 15
// 예제 입력 3
// 25
// 7000000000000000000000000
// 예제 출력 3
// 7
// 예제 입력 4
// 11
// 10987654321
// 예제 출력 4
// 46

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// console.log(input);
const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('readLine 으로 입력받기');

rl
  .on('line', function(line) {
    console.log(solution(line));
    rl.close();
  })
  .on('close', function() {
    console.log('exit');
    process.exit();
  });

function solution(input) {
  return input.split(' ').reduce((a, b) => Number(a) + Number(b));
}

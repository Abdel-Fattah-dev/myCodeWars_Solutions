/*
Problem:
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
returns "-6,-3-1,3-5,7-11,14,15,17-20"

*/
//Solution:

const solution = x =>
    x.reduce(
      (r, vfirst) =>
      [
        ...r.filter(y => y[0] < vfirst),
        ... (x.indexOf(vfirst - 1) === -1 ? [[vfirst, ...x.map(y => [y]).find(([vlast]) => (
          vlast > vfirst &&
          !x.some(v => v == vlast + 1) &&
          x.every(v => v < vfirst || v >= vlast || x.indexOf(v + 1) > -1)
        )) || [] ]] : []),
        ...r.filter(y => y[0] > vfirst)
      ],
      []
    ).map(y => y.slice(-1)[0] - y[0] >= 2 ? y[0] + '-' + y.slice(-1)[0] : y.join()).join();

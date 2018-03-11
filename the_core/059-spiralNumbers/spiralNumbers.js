function spiralNumbers(n) {
    let a = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ];
    let m = [], count = 1;
    for (let i = 0; i < n; i++) {
        m.push(Array(n));
    }
    for (let i = 1, col = 0, row = 0, tot = n*n; i < tot; i++) {
        if (m[0][0]==null) { m[0][0] = i; continue; } else {
            let ael = a[(i-2)%4];
            for (let j = 0; j < n; j++) {
                m[col][row+ael[1]] = i;
            }
            //console.log(col+ael[0],row+ael[1])
            //console.log(m[col+ael[0]][row+ael[1]]);
        }
    }
    return m;
}

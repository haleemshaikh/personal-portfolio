// const str1 = 'Hello';
// const str2 = 'World 1234';

function mergeTwoStrings(str1, str2) {
    let res = '';
    let m;
    for (let i = 0; i < str1.length && str2.length; i++) {
        res = res + str1[i] + str2[i];
        m=i;
    }

    while(m<str1.length || m<str2.length){
        if(m !== str1.length){
            res = res+str1[m];
            m++; 
        } else {
            res = res+str2[m];
            m++;
        }
    }
    return res;
}

console.log(mergeTwoStrings('Hello', 'World12'));

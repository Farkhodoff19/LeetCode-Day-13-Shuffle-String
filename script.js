function restoreString(s, indices) {
    let result = ''

    for(let i=0; i < s.length; i++) {
        let charNum = indices.indexOf(i);
        result = result + s[charNum]
    }

    return result;
}

console.log(restoreString('codeleet',[4,5,6,7,0,2,1,3])); 
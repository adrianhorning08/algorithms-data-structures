// check permutations
// assumptions -
// case senesative?
// whitespace significant?
// character set ASCII?


// in n log n time you could sort both of the strings
// in O(n) time you could loop over one string and put the letters with the count in an obj
// and check that with the other string

function perms(str1, str2) {
  const obj1 = helper(str1);
  const obj2 = helper(str2);

  for (let key in obj1) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

function helper(str) {
  const obj = {};
  for (var i = 0; i < str.length; i++) {
    let letter = str[i];
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  return obj;
}

// URLify
// assumptions -
// ASCII characters?

function URLify(str,len) {
  str = str.slice(0,len);
  return str.split(' ').join('%20')
}

// Palindrome Permutation
// ASCII chars?
// case sensative?

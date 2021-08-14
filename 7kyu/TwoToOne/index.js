function longest(s1, s2) {
  let s_con = (s1 || "") + (s2 || "");
  let s = {};
  let tmpstr = [];

  for (let i = 0; i < s_con.length; i++) {
    s[s_con[i]] = s_con[i];
  }
  for (let key in s) {
    tmpstr.push(key);
  }
  return tmpstr.sort((a, b) => (a > b ? 1 : -1)).join("");
}

module.exports = longest;

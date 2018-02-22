module.exports = function check(str, bracketsConfig) {
  var string = [];
  for(var i in str) {
    string += str[i];
    var l = string.length - 1;
    for(var x = 0; x < 2; x++) {
      for(var y in bracketsConfig) {
        if((string[0] == bracketsConfig[y][1]) && (string[0] != '|')) return false;
        if((string[l] == bracketsConfig[y][1]) && (string[l-1] == bracketsConfig[y][0])) {
          string = string.substring(0, string.length-2);
        }
      }
    }
  }
  string+=" ";
  if(string[0] == " ") return true;
  else return false;
}

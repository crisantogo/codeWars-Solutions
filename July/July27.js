//Write simple .camelCase method for strings. All words must have their first letter capitalized without spaces

//Example:
//"hello case".camelCase() => HelloCase
//"camel case word".camelCase() => CamelCaseWord



String.prototype.camelCase=function(){
    return this.length == 0 ? "" : this.trim().split(' ').map((words)=> words[0].toUpperCase()+words.slice(1)).join('')    
}
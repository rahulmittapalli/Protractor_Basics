/**
 * 
 */

function add(a, b) {
	return b;
}

var c = add(2, 3);
console.log(c);

var b = [ 'Hello', 1, 2, "array" ];
for (i = 0; i < b.length; i++) {
	console.log(b[i]);
}
console.log(b.length + " is the length of the Array");

var c = new Array();
c[0] = 1;
c[1] = "Hello";
c[2] = "World";
for(var j=0;j<c.length;j++)
	{
	console.log(c[j]);
	
	}
for(var j=c.length-1;j>=0;j--)
{
console.log(c[j]);

}
console.log(c.length + " is the length of the Array");


var name="Rahul";
console.log(name.charAt(1));

console.log(name.indexOf("a"));
name.concat("Dravid");
console.log(name.concat("Dravid"));

console.log(name.length);



console.log(
name.lastIndexOf("l"));


console.log(name.slice(1, 4));

console.log(name.slice(1));

console.log(name.toUpperCase());

var name1="     Rahul Dravid  ";
console.log(name1.trim())


var name2=new String();
name2="Uday";

console.log(name2);
















// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(a instanceof Array);
console.log(b instanceof Array);




// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]

for(var i = 0;i<a.length;i++){
	a[i] = a[i]*2;
}
console.log(a);



// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var temp="";
for(var i = 0;i<colors.length;i++){
	temp+=colors[i]+" ";
}
console.log(temp)
// case 2 output: 'Red+Green+White+Black'
var temp2="";
	
for(var i = 0;i<colors.length-1;i++){
	temp2+=colors[i]+"+";
}
temp2 += colors[colors.length-1];
console.log(temp2);
// case 3 output: 'Red,Green,White,Black'

var temp3="";
	
for(var i = 0;i<colors.length-1;i++){
	temp3+=colors[i]+",";
}
temp3 += colors[colors.length-1];
console.log(temp3);



// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(var i = 0;i<a.length;i++){
	for(var j = i+1;j<a.length;j++){
		if(a[i]<a[j]){
			var t = a[i];
			a[i] = a[j];
			a[j] = t;
		}
	}
}
console.log(a);







// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var b = [];

//TODO should output: 'a'

for(var i = 0;i<a.length;i++){
	var t = 0;
	for(var j = i-1;j>=0&&j<a.length;j--){
		
		if(a[j] == a[i]){
			t = 1;
		}
	}
	if(t!=1)
		b.push(a[i]);
}
var c = new Array(b.length);
for(var i = 0;i<c.length;i++){
	c[i] = 0;
}
for(var i = 0;i<b.length;i++){
	for(var j = 0;j<a.length;j++){
		if(b[i] == a[j])
			c[i]++;
			
	}
}
var temp = 0;
for(var i = 1;i<c.length;i++){
	if(c[i]>temp)
		temp = i;
}

console.log(b[1]);


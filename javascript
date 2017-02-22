1. NaN 是一种特殊的Number，当两个值得运算不能正常产生结果是就等于NaN， ps ： NaN != NaN,它自己不等于自己，这很奇怪, Infinity 也是Number类型，代表所有大于1.79769313486231570e+308的值，即64位浮点数的上线

2. The simple types of JavaScript are numbers, strings, booleans (true and false), null,
    and undefined. All other values are objects. Numbers, strings, and booleans are
    object-like in that they have methods, but they are immutable. Objects in JavaScript
    are mutable keyed collections. In JavaScript, arrays are objects, functions are objects,
    regular expressions are objects, and, of course, objects are objects.

3.  1)this的四个作用域，如果function作为object的成员被调用，this指向包含它的object，
    2)如果只是简单的函数调用like sum(1,2) ，this是js虚拟机的全局变量,据说这是设计者的失误，如果没有这个失误的话inner function也是可以使用this的，但是经过验证inner function的this是undefined，但是有个trick是可以在outer function里面var that = this，然后在inner function里面使用that
    3)在构造函数里面的this,js是class-free的，但是现在主流是面向对象编程，所以为了让大家接受js，它提供了一种类似面向对象的构造object方法（var o = new func()),用这种方式构造的变量实际上是一个object，它的prototype指向func的prototype，this指向了新的object o, 如果你设计一个函数的目的是为了当做可以new的class使用，但是使用的时候没有使用new，就会有奇怪的事情发生比如：
                var tf = function(a){
                    this.test_g = a
                }
                tf(3)
    代码运行之后就创造了一个test_g的全局变量,有个约定是可以new的class首字母要大些 //TODO,更好的解决方案
    4)function 的apply方法，这个方法有两个参数，第一个是要绑定this的值，第二个是数组包含函数的参数例子：
        var array = [3, 4];
        var sum = add.apply(null, array); // sum is 7

4. new 关键字会期望得到一个类型是object的返回值，如果返回值不是object，那么this会被返回

5. 1)var a= []; a[10000] = 1; a.length=? ，a的长度是10001虽然它只有一个元素，length属性不一定等于数组的元素个数，要看下表是否连续,
   2)通过修改length属性的值可以改变数组的状态，例子a=[1,2,3], a.length=2, a=[1,2],
   3) 虽然可以对数组使用delete，但是这么做并不会删除元素，delete a[0]; a=[undefined, 2],删除应该使用splice,
   4) typeof Array == object，所以不能用typeof判断array，有个复杂的方法，先判断typeof == object 然后 typeof Array.length == number && typeof Array.splice == function && ! Array.propertyIsEnumerable('length') 最后一个的意思是length是prototype属性，不能被for in 枚举，这样可以排除掉有length属性的object

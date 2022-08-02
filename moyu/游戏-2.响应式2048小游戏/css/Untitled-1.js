//  function Foo() { }
//     const f1 = new Foo()
//     const f2 = new Foo()

//     const o1 = new Object()
//     const o2 = {}
//     // 下面的结果
//     console.log(Foo instanceof Object)
//     console.log(Foo instanceof Function)
//     console.log(Object instanceof Object)
//     console.log(Function instanceof Function)
//     console.log(Function instanceof Object)
//     console.log(Object instanceof Foo)
//     console.log(f1 instanceof Function)
//     console.log(f1 instanceof Object)


function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); 
function compose(...fn) {
    if (!fn.length) return (v) => v;
    if (fn.length === 1) return fn[0];
    return fn.reduce(
        (pre, cur) =>
            (...args) =>
                pre(cur(...args))
    );
}


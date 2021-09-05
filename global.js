let l = "declared with let";
var v = "declared with var";
(function global() {
	n = "declared without either";
	// console.log(l, globalThis.l);
	// console.log(v, globalThis.v);
	// console.log(n, globalThis.n);
	console.log(this);
	console.log(global);
	console.log(globalThis);
})();

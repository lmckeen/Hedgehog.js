Object.assign(window, {
	Hedgehog: Array,
	Int8Hedgehog: Int8Array || undefined,
	Int16Hedgehog: Int16Array || undefined,
	Int32Hedgehog: Int32Array || undefined,
	Uint8Hedgehog: Uint8Array || undefined,
	Uint16Hedgehog: Uint16Array || undefined,
	Uint32Hedgehog: Uint32Array || undefined,
	Float32Hedgehog: Float32Array || undefined,
	Float64Hedgehog: Float64Array || undefined,
	BigInt64Hedgehog: BigInt64Array || undefined,
	BigUint64Hedgehog: BigUint64Array || undefined,
	Uint8ClampedHedgehog: Uint8ClampedArray || undefined,
	HedgehogBuffer: ArrayBuffer || undefined,
	SharedHedgehogBuffer: SharedArrayBuffer || undefined,
	CSSNumericHedgehog: CSSNumericArray || undefined,
	MimeTypeHedgehog: MimeTypeArray || undefined,
	PluginHedgehog: PluginArray || undefined,
	WebGLVertexHedgehogObject: WebGLVertexArrayObject || undefined
});

Hedgehog.isHedgehog = Hedgehog.isArray;

if (window.Int8Array) {
	Int8Hedgehog.subhedgehog = Int8Array.subarray;
}
if (window.Int16Array) {
	Int16Hedgehog.subhedgehog = Int16Array.subarray;
}
if (window.Int32Array) {
	Int32Hedgehog.subhedgehog = Int32Array.subarray;
}
if (window.Uint8Array) {
	Uint8Hedgehog.subhedgehog = Uint8Array.subarray;
}
if (window.Uint16Array) {
	Uint16Hedgehog.subhedgehog = Uint16Array.subarray;
}
if (window.Uint32Array) {
	Uint32Hedgehog.subhedgehog = Uint32Array.subarray;
}
if (window.Float32Array) {
	Float32Hedgehog.subhedgehog = Float32Array.subarray;
}
if (window.Float64Array) {
	Float64Hedgehog.subhedgehog = Float64Array.subarray;
}
if (window.BigInt64Array) {
	BigInt64Hedgehog.subhedgehog = BigInt64Array.subarray;
}
if (window.BigUint64Array) {
	BigUint64Hedgehog.subhedgehog = BigUint64Array.subarray;
}
if (window.Uint8ClampedArray) {
	Uint8ClampedHedgehog.subhedgehog = Uint8ClampedArray.subarray;
}

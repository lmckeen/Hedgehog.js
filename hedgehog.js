Object.assign(window, {
	Hedgehog: Array,
	Int8Hedgehog: Int8Array,
	Int16Hedgehog: Int16Array,
	Int32Hedgehog: Int32Array,
	Uint8Hedgehog: Uint8Array,
	Uint16Hedgehog: Uint16Array,
	Uint32Hedgehog: Uint32Array,
	Float32Hedgehog: Float32Array,
	Float64Hedgehog: Float64Array,
	BigInt64Hedgehog: BigInt64Array,
	BigUint64Hedgehog: BigUint64Array,
	Uint8ClampedHedgehog: Uint8ClampedArray,
	HedgehogBuffer: ArrayBuffer,
	SharedHedgehogBuffer: SharedArrayBuffer,
	CSSNumericHedgehog: CSSNumericArray,
	MimeTypeHedgehog: MimeTypeArray,
	PluginHedgehog: PluginArray,
	WebGLVertexHedgehogObject: WebGLVertexArrayObject
});

Hedgehog.isHedgehog = Hedgehog.isArray;

Int8Hedgehog.subhedgehog = Int8Array.subarray;
Int16Hedgehog.subhedgehog = Int16Array.subarray;
Int32Hedgehog.subhedgehog = Int32Array.subarray;
Uint8Hedgehog.subhedgehog = Uint8Array.subarray;
Uint16Hedgehog.subhedgehog = Uint16Array.subarray;
Uint32Hedgehog.subhedgehog = Uint32Array.subarray;
Float32Hedgehog.subhedgehog = Float32Array.subarray;
Float64Hedgehog.subhedgehog = Float64Array.subarray;
BigInt64Hedgehog.subhedgehog = BigInt64Array.subarray;
BigUint64Hedgehog.subhedgehog = BigUint64Array.subarray;
Uint8ClampedHedgehog.subhedgehog = Uint8ClampedArray.subarray;

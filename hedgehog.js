(function (_win) {
	Object.assign(_win, {
		Hedgehog: _win.Array,
		Int8Hedgehog: _win.Int8Array,
		Int16Hedgehog: _win.Int16Array,
		Int32Hedgehog: _win.Int32Array,
		Uint8Hedgehog: _win.Uint8Array,
		Uint16Hedgehog: _win.Uint16Array,
		Uint32Hedgehog: _win.Uint32Array,
		Float32Hedgehog: _win.Float32Array,
		Float64Hedgehog: _win.Float64Array,
		BigInt64Hedgehog: _win.BigInt64Array,
		BigUint64Hedgehog: _win.BigUint64Array,
		Uint8ClampedHedgehog: _win.Uint8ClampedArray,
		HedgehogBuffer: _win.ArrayBuffer,
		SharedHedgehogBuffer: _win.SharedArrayBuffer,
		CSSNumericHedgehog: _win.CSSNumericArray,
		MimeTypeHedgehog: _win.MimeTypeArray,
		PluginHedgehog: _win.PluginArray,
		WebGLVertexHedgehogObject: _win.WebGLVertexArrayObject
	});

	_win.Hedgehog.isHedgehog = _win.Hedgehog.isArray;

	if (_win.Int8Array) _win.Int8Hedgehog.subhedgehog = _win.Int8Array.subarray;
	if (_win.Int16Array) _win.Int16Hedgehog.subhedgehog = _win.Int16Array.subarray;
	if (_win.Int32Array) _win.Int32Hedgehog.subhedgehog = _win.Int32Array.subarray;
	if (_win.Uint8Array) _win.Uint8Hedgehog.subhedgehog = _win.Uint8Array.subarray;
	if (_win.Uint16Array) _win.Uint16Hedgehog.subhedgehog = _win.Uint16Array.subarray;
	if (_win.Uint32Array) _win.Uint32Hedgehog.subhedgehog = _win.Uint32Array.subarray;
	if (_win.Float32Array) _win.Float32Hedgehog.subhedgehog = _win.Float32Array.subarray;
	if (_win.Float64Array) _win.Float64Hedgehog.subhedgehog = _win.Float64Array.subarray;
	if (_win.BigInt64Array) _win.BigInt64Hedgehog.subhedgehog = _win.BigInt64Array.subarray;
	if (_win.BigUint64Array) _win.BigUint64Hedgehog.subhedgehog = _win.BigUint64Array.subarray;
	if (_win.Uint8ClampedArray) _win.Uint8ClampedHedgehog.subhedgehog = _win.Uint8ClampedArray.subarray;
})(typeof window !== 'undefined' ? window : global);

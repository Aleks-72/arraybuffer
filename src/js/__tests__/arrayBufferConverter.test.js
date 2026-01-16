import ArrayBufferConverter from "../arrayBufferConverter";

const arrayBuffer = new ArrayBufferConverter()

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test.each([['Error testing','Буфер не загружен'],
    ['Data testing','{"data":{"user":{"id":1,"name":"Hitman","level":10}}}']
    ])(('Use setting parameters'), (test_name, expected) => {
        if (test_name==='Error testing') {
            expect(() => arrayBuffer.toString()).toThrow(new Error(expected))
        } else if (test_name==='Data testing') {
            arrayBuffer.load(getBuffer())
            expect(arrayBuffer.toString()).toBe(expected)
        }
    })
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("returns event.partitionKey if it exists", () => {
    const event = { partitionKey: "some-key" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("some-key");
  });

  it("returns sha3-512 hash of JSON.stringify(event) if event.partitionKey does not exist", () => {
    const event = { someData: "data" };
    const result = deterministicPartitionKey(event);
    expect(result).toHaveLength(128);
  });

  it("returns sha3-512 hash of JSON.stringify(candidate) if candidate is not a string", () => {
    const event = { partitionKey: { someData: "data" } };
    const result = deterministicPartitionKey(event);
    expect(result).toHaveLength(19);
  });

  it("returns sha3-512 hash of candidate if candidate is longer than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: "a".repeat(257) };
    const result = deterministicPartitionKey(event);
    expect(result).toHaveLength(128);
  });

  it("returns TRIVIAL_PARTITION_KEY if event is falsy", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });
});

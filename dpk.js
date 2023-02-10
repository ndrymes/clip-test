const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) return TRIVIAL_PARTITION_KEY
 
  const data = JSON.stringify(event);
  let candidate = event.partitionKey || crypto.createHash("sha3-512").update(data).digest("hex")
  

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto
      .createHash("sha3-512")
      .update(candidate)
      .digest("hex");
  }

  return candidate
};








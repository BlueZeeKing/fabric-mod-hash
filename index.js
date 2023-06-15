const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const jar_path = path.join(
  "build/libs",
  fs
    .readdirSync("build/libs")
    .filter(
      (path) =>
        !path.includes("dev") &&
        !path.includes("sources") &&
        path.endsWith("jar")
    )[0]
);

const hash = crypto.createHash("sha512");

hash.update(fs.readFileSync(jar_path));

fs.writeFileSync(path.basename(jar_path) + ".sha512", hash.digest("hex"));

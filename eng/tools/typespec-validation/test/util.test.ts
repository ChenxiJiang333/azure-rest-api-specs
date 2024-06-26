import { describe, it } from "vitest";
import { gitDiffTopSpecFolder, normalizePath } from "../src/utils.js";
import { strict as assert } from "node:assert";
import process from "process";
import path from "path";
import { TsvTestHost } from "./tsv-test-host.js";

describe("util", function () {
  describe("normalize", function () {
    it("should succeed if normalized . and normalized cwd matches", async function () {
      const dotResult = normalizePath(".");
      const cwdResult = normalizePath(process.cwd());
      assert(dotResult === cwdResult);
    });

    it("should succeed if /foo/bar/ is normalized", async function () {
      const result = normalizePath("/foo/bar/", path.posix);
      assert.equal(result, "/foo/bar");
    });

    it("should normalize windows drive letter", async function () {
      const lowerResult = normalizePath("c:\\foo\\bar", path.win32);
      const upperResult = normalizePath("C:\\foo\\bar", path.win32);
      assert.equal(lowerResult, upperResult);
    });

    it("should distinguish different windows drive letters", async function () {
      const lowerResult = normalizePath("c:\\foo\\bar", path.win32);
      const upperResult = normalizePath("d:\\foo\\bar", path.win32);
      assert.notEqual(lowerResult, upperResult);
    });
  });
  describe("gitDiff", function () {
    it("should succeed if git diff produces no output", async function () {
      const result = await gitDiffTopSpecFolder(new TsvTestHost(), TsvTestHost.folder);
      assert(result.success);
    });
  });
});

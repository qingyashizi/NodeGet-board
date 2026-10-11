import test from "node:test";
import assert from "node:assert/strict";

import {
  formatVersionLabel,
  getVersionChannel,
} from "../src/utils/appVersion.ts";

test("没有后缀的版本是正式版", () => {
  assert.equal(getVersionChannel("0.1.0"), "stable");
  assert.equal(getVersionChannel("12.34.56"), "stable");
});

test("带 rc、beta 后缀的版本是预发布", () => {
  assert.equal(getVersionChannel("0.1.0-rc.1"), "prerelease");
  assert.equal(getVersionChannel("0.1.0-beta.2"), "prerelease");
  assert.equal(getVersionChannel("0.1.0-alpha"), "prerelease");
});

test("后缀以 nightly 开头的版本是 nightly", () => {
  assert.equal(getVersionChannel("0.1.0-nightly.20261011"), "nightly");
  assert.equal(getVersionChannel("0.0.0-nightly.20261011"), "nightly");
  assert.equal(getVersionChannel("0.1.0-nightly"), "nightly");
});

test("后缀只是以 nightly 开头的单词，不算 nightly", () => {
  assert.equal(getVersionChannel("0.1.0-nightlyish"), "prerelease");
});

test("版本文字：有提交号时带上提交号", () => {
  assert.equal(formatVersionLabel("0.1.0", "a1b2c3d"), "v0.1.0 · a1b2c3d");
});

test("版本文字：没有提交号时只显示版本号", () => {
  assert.equal(formatVersionLabel("0.1.0", ""), "v0.1.0");
});

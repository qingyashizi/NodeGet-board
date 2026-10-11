/** 构建来源：正式版、预发布（beta / rc 等）、nightly */
export type VersionChannel = "stable" | "prerelease" | "nightly";

/**
 * 根据版本号后缀判断构建来源。
 * 没有后缀是正式版；后缀以 `nightly` 开头是 nightly；其余后缀（`rc.1`、`beta.2` 等）是预发布。
 */
export function getVersionChannel(version: string): VersionChannel {
  const dash = version.indexOf("-");
  if (dash < 0) {
    return "stable";
  }
  const suffix = version.slice(dash + 1);
  return /^nightly(\.|$)/.test(suffix) ? "nightly" : "prerelease";
}

/** 侧边栏上显示的一行版本文字，如 `v0.1.0 · a1b2c3d`；没有提交号时只显示版本号 */
export function formatVersionLabel(version: string, commit: string): string {
  return commit ? `v${version} · ${commit}` : `v${version}`;
}

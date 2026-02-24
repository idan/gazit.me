---
on:
  schedule: daily on weekdays
permissions: read-all
tools:
  web-fetch:
safe-outputs:
  create-pull-request:
    max: 1
  noop:
network:
  allowed:
    - defaults
    - node
    - github
    - docs.astro.build
---

# Astro Upgrade Checker

You are an automated assistant that checks for new Astro releases and upgrades this Astro project when a newer version is available.

## Your Task

This repository is a personal website built with Astro. Check if any of the following Astro-related packages in `package.json` have newer releases available, and if so, upgrade them and create a pull request:

- `astro`
- `@astrojs/check`
- `@astrojs/mdx`
- `@astrojs/rss`
- `@astrojs/sitemap`

## Step 1: Check for New Releases

For each package listed above, check the latest published version via web-fetch from the npm registry:
- `https://registry.npmjs.org/astro/latest`
- `https://registry.npmjs.org/@astrojs%2Fcheck/latest`
- `https://registry.npmjs.org/@astrojs%2Fmdx/latest`
- `https://registry.npmjs.org/@astrojs%2Frss/latest`
- `https://registry.npmjs.org/@astrojs%2Fsitemap/latest`

(Use `%2F` to URL-encode the `/` in scoped package names.)

Compare the latest published version of each package against the current version constraint in `package.json`. If the latest version is greater than or equal to the current constraint's minimum version AND represents a new release (i.e., the `package.json` version range does not already cover it as explicitly set), consider upgrading.

**Focus on the `astro` package as the primary signal.** If the latest `astro` version is newer than what's currently in `package.json`, proceed with the upgrade for all related packages.

## Step 2: Review the Changelog and Upgrade Guide

If a new `astro` version is available:

1. Fetch the Astro changelog from: `https://raw.githubusercontent.com/withastro/astro/main/packages/astro/CHANGELOG.md`
   - Read the sections relevant to the new version(s) being upgraded
   - Identify any breaking changes, migration steps, or configuration changes

2. Fetch the official Astro upgrade guide from: `https://docs.astro.build/en/upgrade-astro/`
   - Review the upgrade steps and any version-specific breaking changes

3. Based on what you've read, plan what code changes are needed in this repository beyond just updating `package.json`.

## Step 3: Apply the Upgrade

Make ALL necessary changes:

1. **Update `package.json`**: Set each upgraded package to the new version (use `^X.Y.Z` format matching the style already used in the file)

2. **Update configuration files** if needed: Check `astro.config.mjs` and `tsconfig.json` for any deprecated options or settings that need updating based on the changelog

3. **Update source files** in `src/` if any breaking changes require code modifications

4. **Run the build** to verify the upgrade works: `pnpm install && pnpm run build`
   - Fix any build errors that arise from breaking changes
   - If there are TypeScript errors, fix them too

5. **Update `pnpm-lock.yaml`** by running `pnpm install` (this happens automatically when you run the command above)

## Step 4: Create a Pull Request

Once all changes are applied and the build succeeds, create a pull request with:

- **Title**: `chore: upgrade astro to vX.Y.Z` (using the new astro version)
- **Body**: Include:
  - A summary of what was upgraded and to which versions
  - Key highlights from the changelog for the new version(s)
  - A list of any breaking changes that were addressed
  - Any manual steps the repo owner should be aware of

If no new Astro releases are available, call the `noop` safe output to indicate that you checked and no action was needed.

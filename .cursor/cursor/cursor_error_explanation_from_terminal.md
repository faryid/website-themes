# Error explanation from terminal log
_Exported on 4/5/2026 at 11:47:30 GMT+7 from Cursor (3.0.9)_

---

**User**

@/Users/macbook/.cursor/projects/1775322039743/terminals/5.txt:468-529 explain about this error

---

**Cursor**


Here’s what that output means.

## What failed

`npm run build` runs `react-scripts build`, which uses **Webpack**. The crash happens when Webpack calls Node’s `crypto.createHash()` to build module hashes. Node throws:

**`ERR_OSSL_EVP_UNSUPPORTED`** / **`digital envelope routines::unsupported`**

So the failure is **not** your React source code; it’s the **Node + OpenSSL + old Webpack** combination.

## Why it happens

From **Node 17** onward, Node links against **OpenSSL 3**. OpenSSL 3 is stricter and turns off some **legacy** crypto algorithms.

**Webpack 4** (what older **Create React App** / **react-scripts 4.x** stacks use) still relies on hashing behavior that OpenSSL 3 treats as unsupported in the default configuration. That surfaces as this exact error when Webpack tries to create hashes during the build.

Your log shows **Node.js v24.13.0**, which is far newer than what those older toolchains were tested with, so this mismatch is expected.

## Typical ways to fix it (conceptually)

1. **`NODE_OPTIONS=--openssl-legacy-provider`**  
   Tells Node to allow the legacy OpenSSL provider so the old Webpack hash path can run. Often used as a quick workaround for older CRA projects on new Node.

2. **Upgrade the toolchain**  
   Moving to **react-scripts 5** (and thus **Webpack 5**) aligns better with modern Node/OpenSSL and is the more durable fix than relying on legacy crypto forever.

3. **Use an older Node for this project**  
   e.g. **Node 16 LTS** (via `nvm`, `fnm`, etc.) so the project matches what it was built for—works but doesn’t modernize the stack.

The **`fs.FOK` deprecation** line is a separate, minor warning; the build is failing on the **OpenSSL / Webpack hash** issue above.

I’m in **Ask mode**, so I can’t change your `package.json` or scripts for you. If you want that wired in the repo automatically, switch to **Agent mode** or apply one of the options above locally.


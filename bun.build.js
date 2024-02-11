const globalDir = {
  entrypoints: ['index.ts'],
  outdir: 'dist',
  format: "esm",
  naming: "[dir]/[name].[ext]", // default
}

function printResult(result, out){
  if (!result.success) {
    console.error("Build failed:", out);
    for (const message of result.logs) {
      console.error(message);
    }
  } else {
    console.log("Build successful:", out);
  }
}

const globalResult = await Bun.build(globalDir)
printResult(globalResult, "Global Directory")

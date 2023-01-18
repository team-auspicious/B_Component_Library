const fs = require("fs");
const path = require("path");
class CoreTrackingPlugin {
  pluginName = "CoreTrackingPlugin";
  data = {};
  arr = [];
  count = 0;

  apply(compiler) {
    compiler.hooks.compilation.tap(this.pluginName, (compilation) => {
      compilation.hooks.optimizeChunkAssets.tap(this.pluginName, (chunks) => {
        chunks.forEach((chunk) => {
          chunk.files.forEach((file) => {
            const filePath = path.join(compiler.outputPath, file);
            compiler.inputFileSystem.stat(filePath, (err, stat) => {
              if (err) return;
              console.log("==============================", filePath);
            });
          });
        });
      });
    });

    compiler.hooks.make.tap(this.pluginName, (compilation) => {
      compilation.hooks.buildModule.tap(
        "SourceMapDevToolModuleOptionsPlugin",
        (module) => {
          // if (module.rawRequest.includes("components")) {
          console.log(module.rawRequest);
          this.arr.push(module.rawRequest);
          // }
        }
      );
    });

    compiler.hooks.normalModuleFactory.tap(this.pluginName, (factory) => {
      factory.hooks.parser
        .for("javascript/auto")
        .tap(this.pluginName, (parser) => {
          parser.hooks.importSpecifier.tap(
            this.pluginName,
            (statement, source, exportName, identifierName) => {
              this.arr.push(`${identifierName}`);
              console.log("-------------", identifierName);
            }
          );
        });
    });

    compiler.hooks.done.tap(this.pluginName, () => {
      console.log(this.arr);
      const dic = {};

      for (let i = 0; i < this.arr.length; i++) {
        const itemArray = this.arr[i].split("/");
        const componentName = itemArray[itemArray.length - 1];

        if (this.arr[i].includes("./components")) {
          dic[componentName] = {};

          for (let j = i + 1; j < this.arr.length; j++) {
            const foundationName = this.arr[j];
            if (foundationName.includes("components")) break;

            const isFoundation =
              dic[componentName].hasOwnProperty(foundationName);

            if (!isFoundation) {
              dic[componentName][this.arr[j]] = 1;
              continue;
            }

            dic[componentName][this.arr[j]] += 1;
          }
        }
      }
      console.log(dic);
    });
  }

  outputCoreTracking() {
    fs.writeFileSync(
      "core-tracking-output.json",
      JSON.stringify(this.data),
      "utf8"
    );
  }
}

module.exports = CoreTrackingPlugin;

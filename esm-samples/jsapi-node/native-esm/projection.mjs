#!/usr/bin/env node

import esriConfig from "@arcgis/core/config.js";
import * as pe from "@arcgis/core/geometry/projection.js";
import Point from "@arcgis/core/geometry/Point.js";

esriConfig.baseUrl = "node_modules/@arcgis/core/"; // relative to when running in root

// CAUTION: without these hacks, pe-wasm.js cannot currently be run in Node as an ES module due to an Emscripten limitation
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
global.__dirname = dirname(__filename);

import { createRequire } from "module";
global.require = createRequire(import.meta.url);
// end hacks

pe.load()
  .then(() => {
    console.log("loaded");
    console.log(
      pe.project(new Point({ x: -117, y: 34 }), { wkid: 3857 }).toJSON()
    );
  })
  .catch((error) => {
    console.log(error);
  });

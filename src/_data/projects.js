const { readdirSync } = require("fs");
const fg = require("fast-glob");
//const ExifImage = require("exif").ExifImage;

function listImages(dir) {
  return fg.sync(dir).map(f => {
    var data = {
      url: f.replace("src/", "/")
    };

    return data;
  });
}

const projects = {};

readdirSync("src/content/projects", { withFileTypes: true })
  .filter(f => f.isDirectory())
  .forEach(f => {
    var project = {
      images: listImages(`src/content/projects/${f.name}/img/*.jpg`)
    };
    console.log(` Project: ${f.name} (${project.images.length} images)`);

    projects[f.name] = project;
  });

module.exports = projects;

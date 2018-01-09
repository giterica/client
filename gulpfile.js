const path = require("path");
const gulp = require("gulp");
const yaml = require("gulp-yaml");

const SRC_DIR = path.resolve(__dirname, "src");

const renderMap = {
  fixtures: {
    source: path.resolve(SRC_DIR, "dev-fixtures/*.yaml"),
    target: "fixtures-json-render",
  }
};

gulp.task("fixtures", () => {
  return gulp.src(renderMap.fixtures.source)
    .pipe(yaml({
      space: "  "
    }))
    .pipe(gulp.dest(renderMap.fixtures.target))
});

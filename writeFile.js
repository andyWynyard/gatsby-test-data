const fs = require("fs")
const path = require(`path`)

const args = process.argv.slice(2)
const [numFiles] = args

const content = i =>
  `---\ntitle: "Super sweet test blog${i}"\ndate: "2019-03-20"\n---\n\nThis blog is cool for the ${i}th time.\n\n<img src="https://picsum.photos/800/500?image=${i}" />`

for (i = 0; i < numFiles; i++) {
  fs.writeFile(
    path.join(__dirname, `src/blog/blog-post${i}.md`),
    content(i),
    err => {
      if (err) {
        return console.log(err)
      }
    }
  )
}
console.log(`${numFiles} files done`)

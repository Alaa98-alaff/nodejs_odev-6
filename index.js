const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  if (ctx.originalUrl === "/") {
    ctx.body = "<h1>index sayfasina hosgeldiniz</h1>";
  } else if (ctx.originalUrl === "/hakkinda") {
    ctx.body = "<h1>hakkinda sayfasina hosgeldiniz</h1>";
  } else if (ctx.originalUrl === "/iletisim") {
    ctx.body = "<h1>iletisim sayfasina hosgeldiniz</h1>";
  } else {
    ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>";
  }
});

const port = 3000;

app.listen(port, () =>
  console.log(`Sunucu port ${port} da çalışmaya başladı...`)
);

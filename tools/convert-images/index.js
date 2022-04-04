import sharp from 'sharp'
import fsP from 'fs/promises'
import path from 'path'

// 转换出来的文件是给 Telegram 用的，所以不需要给浏览器缓存之类的
// 然后每张 webp 都会有一个 webp.png

for (const file of await fsP.readdir(path.join('./dist', 'assets'))) {
  if (!file.endsWith('.webp')) continue;
  await sharp(path.join('./dist', 'assets', file)).png().toFile(path.join('./dist', 'assets', file + '.png'));
}

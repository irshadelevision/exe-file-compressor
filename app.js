const UPX = require('upx')() // see options below
 
UPX('app.exe')
.output('Compressed.exe')
.start().then(function(stats){
  /* stats:
  { cmd: 'compress',
    name: 'Compressed.exe',
    fileSize: { before: '1859072', after: '408064' },
    ratio: '21.95%',
    format: 'win32/pe',
    affected: 1 }
  */
}).catch(function (err) {
  console.error(err)
})

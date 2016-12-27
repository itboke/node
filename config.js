/*构建配置*/
const path = require('path');
const fs = require('fs');
const jsSrc = path.join(__dirname, 'src/js/work');
//全局信息配置对象
const ini = {
    coreJsName: 'core', //核心js库的名字
    staticField: '//127.0.0.1:8081/'
};
//webpack入口js打包文件
function entry(){
    const entrys = {};
    const files = fs.readdirSync(jsSrc);
    files.forEach((file) => {
        const filePath = path.normalize(jsSrc + '/' + file);
        //判断是否文件或目录
        // fs.stat(filePath,(err,stat)=>{
        //  if(stat.isFile()){
        //      entrys.push(filePath);
        //      console.log(entrys);
        //  }
        //  if(stat.isDirectory()){
        //      console.log(filePath);
        //  }
        // });
        if(path.extname(filePath)){
            const thatfile = file.substr(0,file.indexOf('.js'));
            entrys[thatfile] = filePath;
        }
    });
    return entrys;
}
module.exports = {
    entry: entry,
    ini: ini
};
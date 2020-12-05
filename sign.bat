chcp 65001
@echo off
echo @花生酱啊
echo 将resources.arsc改为非压缩
echo call umpress-resources.exe "%1" "%1.edit"
echo 先对apk使用V1签名
echo call apksigner sign --ks E:\Desktop\bats\id.jks --v2-signing-enabled false --v3-signing-enabled false --v4-signing-enabled false --in "%1.edit" --out "%~n1.v1" --ks-pass pass:panrunqiu
echo 按4-byte(32bit)对齐apk
echo call zipalign -v -f 4 "%~n1.v1" "%~n1.v1.zipalign"
echo 再对apk使用V2签名
echo call apksigner sign -v --ks E:\Desktop\bats\id.jks --v1-signing-enabled false --in "%~n1.v1.zipalign" --out "%~n1-signed.apk" --ks-pass pass:panrunqiu
call apksigner sign -v --ks E:\Desktop\bats\id.jks --in "%1" --out "%~n1-signed.apk" --ks-pass pass:panrunqiu
echo 清理临时缓存文件/目录
echo del resources.arsc
echo del "%1.edit"
echo del "%~n1-signed.apk.idsig"
echo del "%~n1.v1"
echo del "%~n1.v1.zipalign"
pause
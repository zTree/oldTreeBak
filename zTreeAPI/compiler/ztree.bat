@echo off
set allfile=core excheck exedit
set file=core excheck exedit exhide

cd ../WebContent/js/

del jquery.ztree.*.js
copy /B all.txt jquery.ztree.all.js
copy /B all.txt jquery.ztree.all.min.js

for %%a in (%file%) do (
del jquery.ztree.%%a.js
echo compiler file: %%a.js to %%a.min.js
copy /B %%a.txt+version.txt+src\jquery.ztree.%%a.js jquery.ztree.%%a.js
java -jar ../../compiler/compiler.jar --js jquery.ztree.%%a.js --js_output_file jquery.ztree.%%a.min.tmp.js
copy /B %%a.txt+version.txt+jquery.ztree.%%a.min.tmp.js jquery.ztree.%%a.min.js

del ..\..\..\zTreeWeb\web3.0_Design\js\jquery.ztree.%%a.js
copy /B jquery.ztree.%%a.min.js ..\..\..\zTreeWeb\web3.0_Design\js\jquery.ztree.%%a.js
)
for %%a in (%allfile%) do (
copy /B jquery.ztree.all.js+jquery.ztree.%%a.js+all.txt jquery.ztree.all.js
copy /B jquery.ztree.all.min.js+jquery.ztree.%%a.min.js+all.txt jquery.ztree.all.min.js
)
del ..\..\..\zTreeWeb\web3.0_Design\api\apiCss\jquery.ztree.core.js
copy /B ..\..\..\zTreeWeb\web3.0_Design\js\jquery.ztree.core.js ..\..\..\zTreeWeb\web3.0_Design\api\apiCss\jquery.ztree.core.js

del *.tmp.js

cd ../../compiler/

echo Press Enter to end......
set /p start=
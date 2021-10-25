@echo off
set p=publish

cd ../

rmdir /s/q %p%
mkdir %p%

xcopy web3.0_Design %p% /S /E

cd %p%\api
rmdir /s/q apiCss
del *.html

cd ../js
for /f "delims=" %%i in ('dir /b /a-d "jquery*.js"') do (
   ren %%i %%i_mm
)
for /f "delims=" %%i in ('dir /b /a-d "*.js" ^|findstr /i /v /c:"jindo*.js"') do (
   java -jar ../../compiler/compiler.jar --js %%i --js_output_file %%i_m
)
ren *.js_m *.js
ren *.js_mm *.js

cd ../../compiler


echo Press Enter to end......
set /p start=
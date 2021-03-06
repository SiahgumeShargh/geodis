# جئودیس (geodis)
جئودیس یک ماژول بسیار ساده جاوااسکریپت برای سکوی نود جی اس است. این ماژول به منظور محاسبه فاصله جغرافیایی بین دو نقطه جغرافیایی توسط تیم ای‌تی
[ایزوگام آب چین](https://siahgumeshargh.com)  ایجاد شده و در بخش 
[هواشناسی شهرهای ایران](https://siahgumeshargh.com/weather)
 وبسایت شرکت سیه گام شرق مشهد مورد استفاده قرار گرفته است. جئودیس با بکارگیری
[فرمول محاسباتی هاورساین](https://en.wikipedia.org/wiki/Haversine_formula)
 فاصله را به صورت آن‌گونه که "پرنده پرواز می‌کند" محاسبه می‌نماید. به عبارت دیگر فاصله با در نظر گرفتن خط مستقیم بر روی سطح زمین بین دو موقعیت جغرافیایی نعیین می‌گردد. شایان به ذکر است که فرمول هاورساین ویژگی گرد بودن زمین را در نظر می‌گیرد.

## نحوه‌ی نصب:
 > npm install geodis

## نحوه‌ی استفاده:

 جئودیس یک تابع است. برای فراخوانی این تابع به ۴ پارامتر نیاز است. پارامتر اول و دوم عرض جفرافیایی و طول جغرافیایی مکان اول و پارامتر سوم و چهارم  عرض جفرافیایی و طول جغرافیایی موقعیت جغرافیایی مکان دوم. مقدار بازگشنی این تابع یک عدد است و واحد آن کیلومتر می‌باشد. کد زیر نحوه‌ی استفاده از این تابع را نمایش می‌دهد. این کد فاصله دو شهر تهران و مشهد را محاسبه می‌نماید. 

 ```javascript
 const geodis = require('geodis');
 const tehran_geo = {
   latitude: 35.6891975,
   longitude: 51.388973599999986
 };
 const mashhad_geo = {
   latitude: 36.2604623,
   longitude: 59.61675489999993
 };
 let distance = geodis(mashhad_geo.latitude, mashhad_geo.longitude, tehran_geo.latitude, tehran_geo.longitude);
 console.log(distance); // 743 kilometer
```

## تست
برای تست ماژول در ابتذا نیاز به نصب ماژول موکا می‌باشد. پس از نصب برنامه می‌توانید فرمان `npm test` را در ترمینال اجرا نمایید:

```
$ npm install -g mocha
$ npm test
```

## درباره سیه گام شرق

شرکت تولیدی سیه گام شرق (سهامی خاص) در امر تولید عایق رطوبتی ایزوگام فعالیت دارد. محصولات این شرکت شامل عایق رطوبتی ایزوگام دولایه و عایق رطوبتی ایزوگام دولایه با روکش آلومینیم (ایزوگام صادراتی) می باشد. این محصولات دارای نشان استاندارد ملی ایران می‌باشند و با نام تجاری آب چین عرضه می‌گردند.


## پروانه (License)

MIT © [Siahgum Shargh](https://siahgumeshargh.com)

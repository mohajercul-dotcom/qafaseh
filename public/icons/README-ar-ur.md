# راهنمای تولید فایل‌های وکتور (SVG) برای عربی و اردو

این سایت سه‌زبانه است (فارسی/عربی/اردو). فارسی default است و فایل‌های آن مستقیماً در
`public/icons/` قرار دارند. برای عربی و اردو، فایل‌ها باید با **همان اسم فارسی** در
پوشه‌های `public/icons/ar/` و `public/icons/ur/` قرار بگیرند تا سایت خودکار آن‌ها را
در نسخهٔ عربی/اردوی هر صفحه بارگذاری کند (مکانیزم `localizeAsset` در `src/lib/i18n.js`).

اگر فایل‌ی وجود نداشته باشد، سایت همان فایل فارسی را نشان می‌دهد. پس فقط باید فایل‌هایی
که در جدول آمده ساخته و سر جایش گذاشت.

کنوانسیون اسم:
- `-l` یا «Light» = ذخیرهٔ تم روشن (روز)
- `-d` یا «Dark» = ذخیرهٔ تم تاریک (شب)

`viewBox` هر فایل باید با نسخهٔ فارسی خودش یکسان باشد تا اندازه/جای‌گیری تغییری نکند.

---

## ۱) شعار سایت (صفحه اصلی)

| فایل (فارسی) | عربی (ar) | اردو (ur) | متن داخل شعار | عربی | اردو |
|---|---|---|---|---|---|
| `Light.svg` | `ar/Light.svg` | `ur/Light.svg` | — | — | — |
| `Dark.svg` | `ar/Dark.svg` | `ur/Dark.svg` | — | — | — |

## ۲) کتابخانه (پایین شعار)

| فایل (فارسی) | عربی (ar) | اردو (ur) | متن داخل | عربی | اردو |
|---|---|---|---|---|---|
| `library-light.svg` | `ar/library-light.svg` | `ur/library-light.svg` | — | — | — |
| `library-dark.svg` | `ar/library-dark.svg` | `ur/library-dark.svg` | — | — | — |

## ۳) نویسندگان

| فایل (فارسی) | عربی (ar) | اردو (ur) | متن داخل | عربی | اردو |
|---|---|---|---|---|---|
| `nevisande-l.svg` | `ar/nevisande-l.svg` | `ur/nevisande-l.svg` | نویسندگان | المؤلفون | مصنفین |
| `nevisande-d.svg` | `ar/nevisande-d.svg` | `ur/nevisande-d.svg` | نویسندگان | المؤلفون | مصنفین |

## ۴) FAQ

| فایل (فارسی) | عربی (ar) | اردو (ur) | متن داخل | عربی | اردو |
|---|---|---|---|---|---|
| `faq-l.svg` | `ar/faq-l.svg` | `ur/faq-l.svg` | — | — | — |
| `faq-d.svg` | `ar/faq-d.svg` | `ur/faq-d.svg` | — | — | — |

## ۵) هفت دسته (category)

| دسته | فایل (فارسی) | عربی (ar) | اردو (ur) | متن داخل | عربی | اردو |
|---|---|---|---|---|---|---|
| shiite | `shia-l/d.svg` | `ar/shia-l/d.svg` | `ur/shia-l/d.svg` | شیعه | الشيعة | شیعیت |
| atheism | `elhad-l/d.svg` | `ar/elhad-l/d.svg` | `ur/elhad-l/d.svg` | الحاد | الإلحاد | الحاد |
| aqeedah | `aqideh-l/d.svg` | `ar/aqideh-l/d.svg` | `ur/aqideh-l/d.svg` | عقیده | العقيدة | عقیدہ |
| adyan | `adyan-l/d.svg` | `ar/adyan-l/d.svg` | `ur/adyan-l/d.svg` | ادیان | الأديان | ادیان |
| maqabeh | `makateb-l/d.svg` | `ar/makateb-l/d.svg` | `ur/makateb-l/d.svg` | مکاتب فکری | المذاهب الفكرية | فکری مکاتب |
| fraq | `feraq-l/d.svg` | `ar/feraq-l/d.svg` | `ur/feraq-l/d.svg` | فرق | الفرق | فرقے |
| daavat | `davat-l/d.svg` | `ar/davat-l/d.svg` | `ur/davat-l/d.svg` | دعوت | الدعوة | دعوت |

---

## جمع‌بندی تعداد فایل

هر دسته از AGENTS محاسبهٔ ۳۲ فایل برای «۷ دسته + صفحه اصلی» است:

- ۷ دسته × (l و d) × (ar و ur) = **۲۸ فایل**
- شعار سایت (Light و Dark) × (ar و ur) = **۴ فایل**
- مجموع: **۳۲ فایل**

(نویسندگان، FAQ و کتابخانه نیز در صورت نیاز همان الگو را دارند — هرکدام ۴ فایل.)

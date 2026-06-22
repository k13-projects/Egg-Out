# EGG & OUT — AI Media Generation Brief

> Tüm medya AI ile üretilecek (elimizde fotoğraf yok). Her item için: **Enerji/Mood · Motion · Kamera/Perspektif · Teknik render · Prompt (yapıştır-üret)**.
> Marka: Farmer Yolk `#f26a22` (lead), Off White `#f0ebd7` zemin, Grill `#212121`, Sunny Up `#ffcd00`, Scrambled Egg `#F7E859`. Stil: açık & ferah, borderless, bol whitespace; motion belirgin & sinematik (eggslut referans).
> Tutarlılık kuralı: TÜM gıda çekimleri aynı ışık (yumuşak büyük softbox + sıcak kontra), aynı zemin paleti (off-white / kraft kağıt / yumuşak gölge), aynı 50–85mm "appetizing" lens karakteri. Her prompt sonuna global stil eki ekli.

**Global stil eki (her food prompt'una yapıştır):**
`shot on phase one medium format, 85mm macro, soft diffused key light from top-left, warm rim light, off-white #f0ebd7 seamless background, subtle natural shadow, high dynamic range, ultra-crisp food photography, no text, no logos, color-graded warm orange-forward palette, commercial advertising quality, 8k`

---

## BÖLÜM 1 — GİRİŞ EFEKTİ + SANDVİÇ KURULUMU (yeni yön, 2 referans)

İki sinematik moment: (1) **Açılış** — "EGG & OUT" tek taraftan dolar, sonra arka plana çekilir _(ref: 333southwabash.com)_. (2) **Sandviç kurulumu** — aşağı kayarken solda menü/anlatım, sağda malzemeler sağdan akıp üst üste dizilir, lobster-roll ekmeği kapanır _(ref: cravburgers.shop)_. Site bu iki efekti şu an CSS placeholder ile çalışır halde gösteriyor; aşağıdaki medya gerçeklerini üretip yerine koyacağız.

### I0 — Giriş reveal → AI MEDYA GEREKTİRMEZ
Mevcut `logotype-black.png` wordmark'ı clip-path ile soldan dolduruyoruz, sonra transparanlaşıp hero watermark'ı oluyor. Üretilecek bir şey yok. (İstersen ileride wordmark'a sıvı yolk dokulu bir versiyon üretilebilir — opsiyonel.)

### S-SET — Sandviç malzeme katmanları (EN KRİTİK İŞ)
Sağ taraftaki kurulum için **her malzeme AYRI, ŞEFFAF ZEMİNLİ (alpha/PNG) görsel** olmalı — çünkü her biri ayrı ayrı uçup üst üste binecek. **Hepsi tam aynı kamera açısı (hafif yandan, ~%15 üstten "sandviç katmanı" açısı), aynı ışık, aynı ölçek** olmalı ki üst üste geldiğinde gerçek bir sandviç gibi otursun. Katman sırası (alttan üste) ve her biri için prompt:

1. **Alt ekmek (lobster-roll tabanı)** — `bottom half of a toasted golden lobster roll bun, side angle, isolated on transparent background, crisp toasted interior`
2. **Folded egg (katlanmış yumurta)** — `a folded fluffy fried egg patty with glossy orange yolk, side angle, isolated on transparent background`
3. **Marul** — `a layer of crisp fresh green lettuce leaves, side angle, isolated on transparent background`
4. **Sos** — `a drizzle layer of creamy orange house sauce, side angle, isolated on transparent background`
5. **Domates** — `a single thick slice of ripe red vine tomato, side angle, isolated on transparent background`
6. **Üst ekmek (lobster-roll kapağı)** — `top half of a toasted golden lobster roll bun, glossy, sesame-free, side angle, isolated on transparent background`
7. **Bitmiş sandviç (hero / final kare)** — `a complete gourmet egg sandwich in a toasted lobster roll bun with folded egg, lettuce, tomato and sauce, hero food shot, gentle steam` + global stil eki

> **Teknik kural (S-SET):** Tüm 1–6 katmanlarını **aynı seed + aynı sahne** ile, sırayla "şu an sadece şu katman görünür" diyerek üret; ya da bitmiş sandviçi (7) üret, sonra layer layer ayır. Hedef: üst üste bindiğinde tek bir kusursuz sandviç. Format: **PNG alpha**, ~2000px, malzeme kadraja ortalı.

### S-OPT — Malzeme "akış" mikro-videoları (opsiyonel, parlatma)
Her malzeme uçarken arkasında minik hareket için (sos damlaması, marul titremesi). Şart değil; statik alpha PNG'ler yeterli. İstersen: `[ingredient] falling and settling in slow motion, isolated on transparent background, alpha matte`.

### H-EXP — Yumurta patlama aksanı (opsiyonel, ikincil)
Eski "yumurta patlar" fikrini hero yerine **bir vurgu/geçiş** olarak saklıyoruz (örn. bölüm arası). İstersen üret:
- **Prompt (video):** `Hyper slow-motion explosion of an egg cracking open, golden yolk bursting outward, shell shards flying, glistening droplets, frozen liquid dynamics, transparent background, ultra detailed` + global stil eki.

> **Not:** Önce S-SET (7 katman) — site bunu bekliyor. Sonra istersen S-OPT / H-EXP ile parlat.

---

## BÖLÜM 2 — Ürün / Menü medyası (hero rotation + menu kartları)

Hepsi **off-white zemin, alpha tercih, 360° döndürülebilir veya hafif hover loop** olacak — borderless yerleşim için kesilmiş ürün şart.

### P1 — Signature breakfast sandwich (360° turntable)
- **Enerji:** İştah, premium ama samimi.
- **Motion:** Yavaş 360° turntable loop, buhar.
- **Kamera:** Göz hizası ¾, makro.
- **Prompt:** `Gourmet breakfast sandwich on a clean surface, slow 360 degree turntable rotation, melted cheese, fluffy egg, crispy bacon, brioche bun, gentle steam, seamless loop` + global stil eki.

### P2 — Sunny-side-up yumurta makro (signature texture)
- **Enerji:** Saf marka ikonu (sunny up sarısı = palet).
- **Motion:** Sarıya dokunulup hafif titreşim (jiggle) veya çatal batınca akma. 2sn.
- **Prompt:** `Extreme macro of a perfect sunny-side-up fried egg, glossy vibrant orange yolk jiggling, crispy lacy white edges, a fork gently breaking the yolk releasing golden flow, slow motion` + global stil eki.

### P3 — Coffee / latte (all-day "later" hissi)
- **Enerji:** Sıcak, sakin, kafe.
- **Motion:** Buhar yükselir, latte art üstten dönerek görünür.
- **Prompt:** `Top-down latte with delicate latte art, rising steam, warm morning light, artisan coffee` + global stil eki.

### P4–P9 — Menü item serisi ("egg as art" placeholder menü — sitedeki tile'larla birebir)
**Konsept:** Gerçek menü yok → genç, dinamik bir **kahvaltı mekanı** gibi düşün; çekirdek = **yumurta sandviçleri + breakfast burrito**. Her tabak "yumurtayı sanata dönüştüren", moda/editorial, hip bir obje gibi sunulmalı — sade off-white zemin, tek kahraman porsiyon, neredeyse müze objesi gibi. Aşağıdakiler sitedeki placeholder tile'larla aynı isimler; gerçek menü gelince swap.
- **Motion:** Statik hero + opsiyonel mikro loop (cheese pull, syrup pour, juice pour).
- **Prompt şablonu:** `[ITEM], single hero portion floating slightly above an off-white surface, soft natural shadow, editorial food styling, modern minimal, mouth-watering, isolated product shot, fashion-magazine quality` + global stil eki.
- **Item'lar:**
  - **Signature Egg Sandwich** — `brioche bun, folded fluffy egg, melted cheddar, crispy lacy egg edges, cheese pull`
  - **Breakfast Burrito** — `flour tortilla breakfast burrito cut in half showing soft scrambled egg, crispy potato, melted cheese, salsa verde`
  - **Sunny Smash** — `sourdough toast, smashed avocado, sunny-side-up egg with glossy orange yolk, chili crunch`
  - **Yolk Melt** — `soft potato bun, double folded egg, American cheese, secret sauce dripping`
  - **Scramble Bowl** — `bowl of fluffy scrambled eggs, fresh greens, grains, pickled red onion, top-down`
  - **House Cold Brew** — `tall glass of cold brew coffee, ice, condensation, kraft-toned palette`

> Menü gerçek item'ları "To confirm" — bunlar iddialı placeholder. Gerçek menü gelince swap edilecek.

---

## BÖLÜM 3 — Atmosfer / Lifestyle (About + Locations placeholder'ları)

> **Sen GPT (image gen) ile üreteceksin.** Aşağıdakiler yapıştır-üret, İngilizce, iddialı prompt'lar. Hedef: mekanın gerçek fotoğrafları gelene kadar **çıtası yüksek** placeholder. Genç, sıcak, California sahili sabah enerjisi; off-white + Farmer Yolk turuncu marka aksanı; editorial/lifestyle kalite. (Bunlar gerçek mekanı temsil ediyormuş gibi "uydurma restoran" olabilir — gerçekler gelince swap.)
>
> **Global lifestyle eki (her atmosfer prompt'una ekle):** `warm golden morning light, casual coastal California aesthetic, off-white and warm orange color palette, shot on 35mm, shallow depth of field, soft film grain, editorial lifestyle photography, natural and candid, high-end commercial quality, no text, no logos`

### A1 — Restoran / food-hall ambiyansı (About bölümü, dikey 4:5)
- **Enerji:** Canlı ama ferah; modern minimal kahvaltı tezgâhı, sabah kalabalığının yumuşak bokeh'i.
- **Prompt:** `Bright airy modern breakfast counter inside a stylish food hall, warm morning sunlight streaming in, young diverse people casually ordering in soft background bokeh, light wood and off-white surfaces, subtle orange accents, vibrant and inviting` + lifestyle eki.

### A2 — El + tabak servis anı (human touch, yatay)
- **Prompt:** `Close-up of hands placing a gourmet egg breakfast sandwich on a light wood table, steam rising, a coffee cup beside it, warm candid morning moment` + lifestyle eki.

### A3 — San Clemente / sahil establishing (Locations, geniş)
- **Prompt:** `Sunny San Clemente California coastal scene in the morning, palm trees, relaxed beach town vibe, golden hour glow, people walking with coffee` + lifestyle eki (food kuralları yok).

### A4 — Genç & dinamik marka anı (sosyal / hero alt) — *yeni*
- **Enerji:** Hip, pop, "cool kids breakfast"; markanın karakteri.
- **Prompt:** `Group of stylish young friends laughing and sharing breakfast sandwiches and burritos outdoors in the California sun, energetic and trendy, candid lifestyle, vibrant orange brand energy` + lifestyle eki.

---

## BÖLÜM 4 — Marka grafik / motion elemanları (UI süsleri, loop)

Bunlar mevcut PNG assetlerin (checkerboard, circle badge, arrow pattern, logotype) **canlandırılmış** halleri. Vektör/temiz, alpha zorunlu.

### G1 — "Your Anytime Egg Spot" dönen badge
- Mevcut Circle 1/2 asset'ini sürekli yavaş dönen sticker olarak kullan (kod ile CSS rotate — AI gerekmez). *AI gereksiz, not olarak bırak.*

### G2 — Checkerboard kayan şerit
- Diner/taksi checkerboard'u yatay sonsuz kaydırma (kod ile). *AI gereksiz.*

### G3 — Arrow pattern parallax katmanı
- Mevcut arrow pattern'i scroll parallax arka plan (kod ile).

### G4 — Yumurta sarısı sıvı transition (bölümler arası "yolk wipe")
- **Enerji:** Bölümden bölüme geçişte ekranı yalayan sarı sıvı.
- **Motion:** Alttan/yandan akan parlak yolk sıvısı ekranı doldurup açar (wipe transition).
- **Teknik:** Alpha matte, 2–3sn, loopable in/out.
- **Prompt (video):** `Glossy golden egg yolk liquid flowing and wiping across the frame, smooth liquid transition, alpha matte, vibrant orange #f26a22, clean, seamless wipe, motion graphics element, transparent background` + (food stil eki).

### G5 — Damla / splash parçacık seti (dekoratif)
- Küçük yolk damlaları, sıçramalar — kenar süsü olarak. PNG/alpha, birkaç adet.
- **Prompt (image):** `Set of glossy golden egg yolk droplets and splashes, isolated on transparent background, vibrant orange-yellow, hyperreal liquid, product photography lighting`.

---

## BÖLÜM 5 — Catering & Order (CTA destek görselleri)

### C1 — Catering spread (büyük masa)
- **Enerji:** Bolluk, paylaşım, etkinlik.
- **Prompt:** `Abundant breakfast catering spread, multiple sandwiches, pastries, coffee carafe, fresh juices, top-down flat lay, generous portions, event catering` + global stil eki.

### C2 — Order packaging (marka kutusu)
- Mevcut colorway PDF'leri (Broken Yolk/Kraft/Red/Green Tea kutu-kese mockup'ları) zaten elimizde — bunları AI ile değil, gerçek brand mockup olarak kullan. Gerekirse kraft kutuyu sahnede çek:
- **Prompt:** `Kraft paper takeout box with breakfast sandwich, branded minimal packaging, off-white background, lifestyle product shot` + global stil eki.

---

## ÖNCELİK SIRASI (üretim planı)

1. **S-SET** (sandviç kurulum katmanları 1–7) — sitenin kalbi; en çok özen buraya, alpha PNG şart.
2. **P2, P3** (sunny-up makro + cold brew) — menü hero'ları.
3. **P4–P9** (menü serisi placeholder, sitedeki tile'larla aynı).
4. **A1–A4** (atmosfer / lifestyle — sen GPT'de üret).
5. **G4** (yolk wipe transition) — bölüm geçişleri.
6. **S-OPT / H-EXP, C1–C2, G5** (parlatma + catering + dekor).

## ÜRETİM NOTLARI
- Video item'lar için **image→video** workflow: önce mükemmel still üret (kontrol kolay), sonra onu video modeline besle.
- S-SET katmanlarını **aynı seed + aynı sahne/ışık/açı** ile üret ki üst üste bindiğinde tek sandviç gibi otursun.
- Hepsini **fazla** üret (4+ varyasyon), en iyiyi seç. Slow-mo + alpha/temiz zemin her zaman tercih.
- Teslim formatı: video `.mp4`/`.webm`, kesilmiş ürün `.png` (alpha), poster `.jpg`.

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "38c449ea9954b22aae930a49ab54778d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "add6a0f314e782e723530b552785a0b2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74c565ca8dd3fe70bb8fd3382ebb77fd",
".git/logs/refs/heads/master": "eedd26b40f0a2c896a6367ff56629c93",
".git/logs/refs/remotes/origin/master": "8d758748005e2e2862ff8ca68159cd90",
".git/objects/00/ca5f5fd55abf5c19513cc26716a7018c6268c8": "e746e0a457cb5cea0cb03a78bd9407e3",
".git/objects/03/0faeca5b3e8b9bd0439bec77609fa436ce6a75": "4179249fcc0fc3b889970fec15512d10",
".git/objects/04/f721112a3e731f780f19bc685d9fced1b203a1": "4c4e18e80222bcc74f89c8a50bf41e08",
".git/objects/05/32dd724cf3d233b9997ac53011968d44ede947": "01a27bb9f7cdaacc005231c6e3d33002",
".git/objects/06/6bd7bff528dc2b04c8e53182c7bb71b9558c5e": "0aff01af06868dd4e1b6d02454d0ef7f",
".git/objects/0a/aa739a79eed07d659359ef8fa86430989c5abd": "d44a62ba10b37816b082ad7796928a52",
".git/objects/0a/fed18e5a37f6aed01b8a6b9594bee8ec7d6b40": "a3255a43aebbad4315bfcd59aa065db9",
".git/objects/0b/09c2719a057f1f9359db6410681df45ceef2f9": "9973bcfb2745a3642e6ef3c3af5b473b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/7e080364ab2f2629c920bce0b8615d5e30b2e1": "8966d7ec0360196d23ff85babe2c395c",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/15/3582960c8047c82542a565bd9dd915b7d42d7e": "881e1a8767d4b00ce235c719e76ce063",
".git/objects/15/d09115bd7ee555d0ca236c1ad2c868161686d2": "259252bfd36d26c4c1675142b39e48fb",
".git/objects/16/619e5780787764c9b283f8f568d16ba8527011": "8e6bbd393cfbac4807539f5f885e7d01",
".git/objects/18/e2ee345fd6d5c2f4b414f494313682983de55d": "7318f70866089c2e12a0bc6eb3f3e1e7",
".git/objects/1b/f084bbc65511683e2f766772129030cdb34612": "1cf8a1943e1b92546cd756c3b311e9f6",
".git/objects/1d/235556b61ee1ac158cae31cae9617a63513466": "4bddf47145ba6eeb9e1f1f00505f07b8",
".git/objects/1d/80cad82005110db40a6941e3118308c013b0ca": "5638e9ab4bbfb58f61db016fe127fdb8",
".git/objects/20/0991c6c656ccb43a20200f45a43f3768614120": "63e910261d0f9bc572b761b11cf879e4",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/b10f597bd142082ed7c60f7f1e54a791f7ea1f": "f49fca53413509693e42dd45bdb83cf3",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/724773df3bcce9250210d98afb9750256513cb": "e5a34e24d898b00429ccd1811a567a43",
".git/objects/29/9de7e8d9a14d9d07c3cac8f4d2072f98bd4733": "34b0566f01b3643d1beea436f17b22f4",
".git/objects/2c/37dee3e33182a1fec7a989432dff1c3352ea66": "69027f90d821f2ab006e38b22aef34c4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/6ef01794ec22cd6d65f6144fbfcb675e0b9328": "c9b2614a4ddf50a8f2668cb84a010ff3",
".git/objects/2e/8bac1d098867916755b8bc65ec652e18c30055": "91d0d9bea159ac7f084da596b5122965",
".git/objects/2f/b73b0b3b01fd2671b578c43471ba09e6c9bced": "4b527675743d49671b76a79c251990ed",
".git/objects/3a/f396c368764fae566d7cedf4e5e661d90d9e14": "e324baba84d75cb1d2cb7d29a479a636",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/47/1bd28be78b991f64abdde52c5ccb3fc58dcaf1": "018d9bc6e209e8a2e2425dad12bdf5b9",
".git/objects/48/8621f81e62150fc78368c2c676a740da5a44c7": "a60e9ccb457dca079be112c91ebf349a",
".git/objects/49/c326f8546e5d8362f5891694eee1818fe546f7": "2460526b0917819b6ce7ac36aaf7229b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/59/834219a3ef22b746c871876272d26ffd5e784c": "153d41e0dfddcd8e4d83963f4bb5357c",
".git/objects/5f/0d519f560e36eb94c0d6f807f045c595526eaa": "486417ecdbfc56127c5115d8b7c96701",
".git/objects/5f/32777db809b960a044ac6a64a9d96c26aef1c3": "54943ac593e464872b2d81f3457bb8f9",
".git/objects/62/014c76861759f6792aec07637df3491811b1bd": "e8f05ff070516847572610876229feed",
".git/objects/63/be7811e793e28f5f083a5e37beaccd0771b3af": "81b09f96dc506dd9ac4ebd1b6ef28669",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/66/992c9bdde07626b2d4c139eebb2f6ee28b9283": "8f945edd648d6209cee9bc6d335563c1",
".git/objects/6e/02ec5099b612429be9d67efb650348f3ce4793": "45631994ee9ac7835dcd359729d851cc",
".git/objects/71/b2c9c044739f020465bfdf13f53884372eca0b": "926788a27309e1a33a2f31a999725c99",
".git/objects/72/52aa8808ca9e29e88a0fdf5f1bdf05ee1fa284": "b39c8cd2c4666de74bb8ac4e57f58685",
".git/objects/74/65da0aee2941fb9f7a40d5e7537fe17d2a8ab0": "46a1c5e2eacdd7979a3193124e61086b",
".git/objects/76/0c80ed8fe3e8d78410f8beb4349ab0e7863c6c": "9e26262fb7018ff2ed424a315ee2b645",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/7a231d2bec912ba1b3773f1c8940a6bb84acbe": "a21e78ee576149521a60107b2e2b2c0c",
".git/objects/78/cc5d3c3399494f5aafa27ecdf9d73f067f007a": "b037e32d6b0f53ba54677f13f5356aa9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/699afb5f2512de8b9a6e72e53b05c8375edb76": "feb4b5791aa2b7d652c03b71dd6d701d",
".git/objects/80/c530b997ca610cc201aeed5b8a08fa8a3b2065": "d6f4cf4e059a803c466a685f7199ce82",
".git/objects/86/511b91ab158466862a0b8e0a78749ea58a4fda": "9613f2b0f0da1db8a73ae78b2964b2ab",
".git/objects/86/b91443164a40b214474aef581f97896df80036": "07125ac8b1a52128757277471cb06d0b",
".git/objects/87/b6aed0a0cff910792760d384454090702ccdcb": "ba2925603332f0226d41ee04772610cc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/985b91643c71a67b226957e71eeb8c3e88aef6": "c9bc656a332561bc158d4865847d3336",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/7f2dc0aa28592d2614fcc88d0631d14532253e": "00d2dd0d31181358f8826489d89c2efc",
".git/objects/90/d0de60d6be301c140ce561b7286d12f681fa7d": "58ce6e11443ea5067acbc23d47236927",
".git/objects/94/552393ca605fd7891a5cbd2f2e30e6e37cd5e3": "f7a4ca637c4e62e87052640ac88f464a",
".git/objects/97/6f84f384f9f0c86a0e56ee8e009644bbda2483": "18996220f531dd445ea9bebed9f1b038",
".git/objects/9b/8be3691f8fab2830582bfda5f4ca81ccab1bc3": "8fa8b20d1aa2ee83bdcdb69c32f1a5bc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/6a16d3c230c7bdb0f8922f3a6085fc802d4132": "7ea05daba84b9badcf0b939d76300396",
".git/objects/a5/6932d63bd0669b28d5a488312118606f64246c": "ce6d63cb55c7968484dbf701336a9476",
".git/objects/a6/8604385670ee99ea99122054869b1dc0a6dbbd": "18cb19269bff693218f3df7a4091f94c",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/d6849af8ca377099eb0174712d9ffe5f50245f": "b7b6438307bdd93c7800dc8adb56673e",
".git/objects/b0/d99070c2b4880a921056b0539bfe9322dc6017": "b6f9672f676705ad56f4483e59152614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/2486c200806a7f92fc6265d66db80d77e820d0": "a62d1e5c5b45b48518799138133b9509",
".git/objects/bd/b9f443cd1a06d8121123ba5865b35247126c1e": "8933d8e0e9bb1ac996bd3f323bb49cc2",
".git/objects/be/57bfaa44c2d5985da8306c6c6e2f04b2059a89": "81f7050b1ea20531edfc6b167fba697a",
".git/objects/bf/0541466d697593eb0246c71bf756e1280e885e": "c22907686f8e1d9700322c4960819f5b",
".git/objects/bf/6f924df871769b7d3a7b4ba681396cc668720a": "3d121622fc24e9a4e44e3a6a6edeaac0",
".git/objects/c0/d049f1d872be198f82f5e8e577f531307299e7": "0f158ab9e9cbcbb1c931faee34a92acf",
".git/objects/c0/dafee789765e633a7b48656dc1decc6cd23c85": "b1d8cdab1f09abeb3a4267199a8e8c9a",
".git/objects/c6/76aba86ed381f96b72b0dd9b7a65a48c65f0fc": "f5fd06f2abd3dbdc213576fbec6c8618",
".git/objects/c8/548471e4fab49db9e8c3b1ffd9c78889ab01cd": "bb3c2260b7910efe48a0e4b384702b57",
".git/objects/c9/422fbbbda153d8a2307c2af94e1ed20be697aa": "8bdea67400721a55694e8df3acc01df7",
".git/objects/c9/99e07c092902ffdfe6583325fd79ea3b3484d3": "da2dfd9870467c23adb0e67b9cc7d855",
".git/objects/ca/b0f90c6bafec6547d90fd68436dbee61898d7d": "0a4bf458a152c292ffedb96528e9778d",
".git/objects/cb/faf285593a17ed44b2fd4553258d15ee5a524a": "77b8c7cc89a729785f68b036c67752d8",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/77d94261a60a9e1f5c3b8487a1565d082043f1": "53bb99c30dec78361251cb32b90efd1c",
".git/objects/d1/e79b9d536941088d8078d89bfc69d913b6a22b": "f8b23c4733473680531b58a3b6018ac7",
".git/objects/d3/22514f0cca734b18b94791d2ebe37c4e950a04": "4c884b21b09c9ceea7be634b422d695e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/a4466bbb422f82bcd27033fe5d390ab01cd9a4": "d17d3e9993aebe826b23bb5d2f813356",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/bcbb4b5af0cad1aa519bf52bbb60302ef303de": "4b4185a8f2724fab24225560a013af2d",
".git/objects/e2/8c5d0c597a6d87c6dded5356451247a7b892b6": "1c3d7f9bb45685655ad12ed9371fe6a9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/f3327c7f1ea02031f7302760e1ca22c8d449bd": "c3dd1133f3e1f789bb7f2ca16b699035",
".git/objects/e7/724bf83a18ec13d314a50d672546bdbc57c8b3": "2c5eb179cb15ba465d8c0be9edba2c34",
".git/objects/e7/d9f22e21fa6af40b4db03062cab20bd4be11a1": "4b1d991efd0c422db4bafd886141ec43",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/98f952649538e2556b5bdfc13f7d0006a42277": "a64882e8cdfae329a6872103f2598e5d",
".git/objects/ee/7755779891ce8ec453f2afa8dfeac103da6111": "404c7834f168f8881548ad33dfdc3808",
".git/objects/f7/82024bbc795d4649919f99c74d568cd6824fa3": "e4e344fe685f5e3fbd9de03b7ccd9add",
".git/refs/heads/master": "f6e93ba40363cf4d703ac7441b396c59",
".git/refs/remotes/origin/master": "f6e93ba40363cf4d703ac7441b396c59",
"assets/AssetManifest.json": "248abd16c6c0393c08220c27ea2b448b",
"assets/assets/audios/bgsound.mp3": "31094760bb27cc3d3e21e6802a8ba166",
"assets/assets/audios/call.mp3": "0b39c4e0f7d9bb29596fd8e8c5c32e52",
"assets/assets/audios/round1/0.mp3": "6af5e142d65107898cdf146b087d7dc4",
"assets/assets/audios/round1/1.mp3": "29324ac9909891b947d17e748dbaa928",
"assets/assets/audios/round1/10.mp3": "dd3ff1e9e48cb0fe942003b060b49435",
"assets/assets/audios/round1/11.mp3": "d4a6aa87a49c2ac04450cb5423579434",
"assets/assets/audios/round1/12.mp3": "353cdcc6df61669fbb164acb51024222",
"assets/assets/audios/round1/13.mp3": "8a24ced944ce70f05b0679530551bd8a",
"assets/assets/audios/round1/14.mp3": "534198ac931f2ff6b67a9c0b92fa282a",
"assets/assets/audios/round1/15.mp3": "741760e93861beead2365a95237f8073",
"assets/assets/audios/round1/16.mp3": "e294dd9dc26f4e5149dae3cdf04aa492",
"assets/assets/audios/round1/17.mp3": "d36e3de9d308ea5a1ce11b7bab2c8631",
"assets/assets/audios/round1/19.mp3": "d4e1118824272dd0cffdff5a03bba5b2",
"assets/assets/audios/round1/2.mp3": "6e27e269e645eb176ecbd974daf88e83",
"assets/assets/audios/round1/3.mp3": "a99f425aafe7c8627362d60ffaededdf",
"assets/assets/audios/round1/4.mp3": "99699261c185a003dd994b70ebb917eb",
"assets/assets/audios/round1/5.mp3": "271afbfe967631f158bfee956254fd19",
"assets/assets/audios/round1/6.mp3": "2a97a2c85dc5a486acae4a75939c16bf",
"assets/assets/audios/round1/7.mp3": "58c9f938aa6831771fb74fd2259e45ac",
"assets/assets/audios/round1/8.mp3": "f687a46debc96123e0f9d4516f8d9b24",
"assets/assets/audios/round1/9.mp3": "017c5ae050fc195a60c155be9c9e8e88",
"assets/assets/audios/round2/0.mp3": "705db82bb19e4ff87aa5790202133299",
"assets/assets/audios/round2/1.mp3": "5d4051714039a655ce8eb2c0dba35c02",
"assets/assets/audios/round2/2.mp3": "bf43bbe1d461f25b4b495656742980c1",
"assets/assets/audios/round2/3.mp3": "207cb631f8048deb957368919aee5f9e",
"assets/assets/audios/round2/4.mp3": "0f0f2a3cded38482bc7d612238f018f3",
"assets/assets/audios/round2/5.mp3": "3c2ce62714f3e09cd59cd14bd172b80d",
"assets/assets/audios/round2/6.mp3": "53b92ecc9a65648bcc6f4c1127f252d1",
"assets/assets/fonts/NotoSansTC-Regular.otf": "d6b43f6600389d7442f317adfbbd9942",
"assets/assets/images/67/0.png": "ac7ce53f6480a137599ca360c89983de",
"assets/assets/images/67/1.png": "0e9bdbcc17d40ccaf8d9946f0f8e2cb8",
"assets/assets/images/67/10.png": "98d66b3e906545a97cef4f962532c625",
"assets/assets/images/67/2.png": "bcbbb1221784997f6a3961b20aac61f4",
"assets/assets/images/67/24.png": "299c2f09ccd0c62bdaf484205ffb86f8",
"assets/assets/images/67/26.png": "12e0c7c8a7918fff6742c3b7ed9eaa89",
"assets/assets/images/67/27.png": "238bfef9538d4457c8da8283b51282fd",
"assets/assets/images/67/29.png": "ebed100545ea453fe81e732a1b48d1d2",
"assets/assets/images/67/4.png": "b6005a5fc3ca6acba2aac9e294ae764d",
"assets/assets/images/67/67.png": "55182b67c040e80cc4adf387d8857d0d",
"assets/assets/images/67/7.png": "1253dcaefc6715d3447aa89aa69535c8",
"assets/assets/images/67/8.png": "147424a7ad0f076432efc5bba0a7750d",
"assets/assets/images/67/9.png": "14dbb147d2ff3471838f386a41b5abf7",
"assets/assets/images/background/0.png": "63b66572dbca5906e92a00b2fc760ff6",
"assets/assets/images/background/1.png": "d057448a54797bc0bdbccad4438d8f19",
"assets/assets/images/background/10.png": "b1dfe51fd5ef073d15db02c78db18f70",
"assets/assets/images/background/2.png": "6fc282d7a799bcf730e95adf5ea9b3c7",
"assets/assets/images/background/3.png": "4e1f6510f48526220d11525d20123a56",
"assets/assets/images/background/4.png": "9e24dd9d030653db600913ea28af4a57",
"assets/assets/images/background/5.png": "a0bb5e1b9277c419f5d9bfb166736346",
"assets/assets/images/background/6.png": "7e591d31ce3e29b8ad113e1bf66efcc9",
"assets/assets/images/background/7.png": "001a0c6616f85c409429aa46b37e186c",
"assets/assets/images/background/8.png": "fc4ed225bd5c0b1eaa4da2f4a1ea8e62",
"assets/assets/images/background/9.png": "24b71ae3fead8da6e98cb406eac00256",
"assets/assets/images/start.png": "4633dd24c85f5c8f3bdebac81453feb9",
"assets/assets/images/textbox.png": "f54c0895137ef3cb7327e980c74e0211",
"assets/assets/videos/0.mp4": "9c65d86c0578daf92189d0f43f85f76f",
"assets/assets/videos/1.mp4": "4e77a285f05ed1a2e2c731c9a93aa723",
"assets/assets/videos/2.mp4": "ac8ff82f96fcc475ffac3efc846c4307",
"assets/assets/videos/3.mp4": "c187edb955d16d1420395eaab5af1923",
"assets/FontManifest.json": "8579c6adc9e38c35424c0f467921413b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "56a175bdb0af9c262c8f740978770ccc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "37cf788f7a38184efe3ef3a5f08391c4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "198cae6ea6c1bc0ab89b46083125ce76",
"/": "198cae6ea6c1bc0ab89b46083125ce76",
"main.dart.js": "0b02cd1a18cb1aa128b231f03bcc6808",
"manifest.json": "a9a65edd6f95e0d3359f9ae44431aa98",
"version.json": "3f76bfcd6e947d74b65a32b7f657b266"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

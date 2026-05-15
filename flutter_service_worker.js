'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7ba98953a2d0232074f6f79dc38ff24c",
"version.json": "ee4bcb4c01a1836c605b6d7dce51b4d1",
"index.html": "08f79d570c0c0475e4305c5ccc34215c",
"/": "08f79d570c0c0475e4305c5ccc34215c",
"firebase-messaging-sw.js": "efc1f47e4d2ca5d831fb67821c4e6430",
"main.dart.js": "4ae95ec0edbd2ff27b6e1fcfdc3d6591",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "32fba635bbfc4c4baae35bddabf441a5",
"firebase.json": "a2fda88966abb603fbeb74cb3a08f6ad",
"assets/AssetManifest.json": "2f56b9c6b4c2666d9c3fe9f081671c56",
"assets/NOTICES": "bda5814e9e1b23453e66fdad4a9f28b6",
"assets/FontManifest.json": "bd9783ab844da4f350f94123f622d471",
"assets/AssetManifest.bin.json": "4d92762034c2bdc30da033e443fa6df3",
"assets/packages/core_notification/assets/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "cc9457856ff4ac8c53e8e5159c2636f0",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "8a5f575ecdf23f21bcae8204882d54bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/config/firebase_background_handler.dart": "3396fccf004f72481e71539914ef8652",
"assets/lib/config/google_cloud_key.json": "ca29772352c0d75f0261aeddeeb7a21f",
"assets/lib/config/firebase_api.dart": "2dfd674e8d5da94b7f07f388c5c199b3",
"assets/AssetManifest.bin": "6196795d3d3a6775ef6ce2ccab8b2184",
"assets/fonts/MaterialIcons-Regular.otf": "098d0b5d921690d1514c8c96fda66bcb",
"assets/assets/dummy/forecast-kh.jpg": "6f991b72ecd57540dc0302dad815aabd",
"assets/assets/images/service-img-8.png": "680edd95af5da205f20084443bdebc54",
"assets/assets/images/satellite-image.png": "32f223eb8deba2d67505edad7e1b2916",
"assets/assets/images/service-img-10.png": "e4047cfc69f3e7a62ec48886f6c951ed",
"assets/assets/images/service-img-11.png": "bfb5472a55ad6cd1c5d18025551f1659",
"assets/assets/images/service-img-9.png": "4185d483397ccf02a561828dda7c114e",
"assets/assets/images/default-pf.jpg": "71336ed2a1b5c8a065d5284973c6f86b",
"assets/assets/images/cambo-flag.png": "3884ab22fcb98989b354239bc9db1f13",
"assets/assets/images/product-img-9.png": "b72c11fd2b5ce13e89d4b5c99530f23d",
"assets/assets/images/apple-farm.jpg": "23a5ab19249278c679ba8f475bd7c5e0",
"assets/assets/images/flag.png": "1f3e92b89e622be8ffb0afa48e3a5714",
"assets/assets/images/service-img-12.png": "3552bfa598f49ee59e87e5ab03a72780",
"assets/assets/images/product-img-8.png": "944935f555019e8c44c666ef516e1fa2",
"assets/assets/images/flags/en.svg": "df0ebd0f6a22e2df4860f599352e615a",
"assets/assets/images/flags/km.svg": "20b7fbc6e8400f3f84c3d05e83594c86",
"assets/assets/images/weather-img.png": "d9effe082ecf8eeb3957665057442703",
"assets/assets/images/product-img-3.jpg.webp": "57cbeb4aed697ffa4b6898b1a1c5fe53",
"assets/assets/images/call-center-pf.png": "cdb68442b24df51e9f077e44111c54a9",
"assets/assets/images/corn.jpg": "fb6db07dac8ac2eb62fa9bd8df64a144",
"assets/assets/images/banner-5.jpg": "42e622d564e64ee31a6a96fd64027785",
"assets/assets/images/banner-6.jpg": "d92cffadb3bb79a8026c5b1c3b0277cb",
"assets/assets/images/social-img-1.jpg": "32e4dec6b7d666d21b4e4759bf8cb1a4",
"assets/assets/images/product-img-10.png": "40d3f83e779f51266d6a5ee93b2d4c61",
"assets/assets/images/placeholder.png": "cc1c13dfb9b9206f8e58e6d90d4546ed",
"assets/assets/images/apple.jpg": "ec002a5d7200ea32327ed78395736dee",
"assets/assets/images/banner-img-1.png": "bb10152f69f4f50244218e9088c1c7db",
"assets/assets/images/duck-img.png": "665d076aa21043dbe7911c42b13e51dc",
"assets/assets/images/farm-land-img-1.png": "5440bea2fba4f1e66a5b1d93ac92a427",
"assets/assets/images/avatar3.jpg": "51ddfc8cf10d11c527b780ad333b0f2e",
"assets/assets/images/thumbnail.png": "6ee2bd9e58eb3acc281dd6bd6b5f4dce",
"assets/assets/images/product-img-3.png": "25fa67459e6095a634cd435a905034b9",
"assets/assets/images/service-img-1.png": "4abc1a73abf4da3b9c3233a0df831eb5",
"assets/assets/images/weather/wind.svg": "8372e7c168b1181b496397b9b5ef4f63",
"assets/assets/images/weather/feelliks.svg": "197d9e3cfddb8534afe926ff697c6929",
"assets/assets/images/weather/humidity.svg": "87596726b76b36ee19c331c412112d87",
"assets/assets/images/weather/rainy.svg": "01451d7abc552c3f3d012ab8b7f2589f",
"assets/assets/images/weather/uv_index.svg": "3d29aa8eb4a65debee2dc3f61a14abbd",
"assets/assets/images/weather/gif/cloudy.gif": "803796f8cd3dcdeeef1bb9f9ff9dfb0a",
"assets/assets/images/weather/gif/sunny.gif": "80cb419d7d30e9fa7cd8cb3c769ce1fe",
"assets/assets/images/weather/gif/light_rain.gif": "2eccf640c134339d14ba60a63cbd47e8",
"assets/assets/images/weather/gif/night_cloud.gif": "4f44982f289e1b1d136a98245b170663",
"assets/assets/images/weather/gif/rainy.gif": "0856ad96a583f5030a8e4071be0c2680",
"assets/assets/images/weather/gif/night.gif": "453a1d5224cd519047f0c3acb16589c0",
"assets/assets/images/weather/gif/storm.gif": "8c36af641044f74fcce840a508538ce6",
"assets/assets/images/weather/gif/thunder_storm.gif": "afd39907b7a92f4dff299417ad3a084f",
"assets/assets/images/weather/gif/thunder.gif": "e157bfbe0e212748a350b5ba1b582c5a",
"assets/assets/images/weather/gif/party_cloudy.gif": "83cdbe56759e0ba94a272b0aa97e9d89",
"assets/assets/images/weather/gif/vibes.gif": "f911a8371857814b0b745f2786ab9ab1",
"assets/assets/images/weather/gif/most_cloudy.gif": "00c8c38b0e492f6f31b7658d368d5623",
"assets/assets/images/banana.png": "50f74e4de46001c1b378ab8514feff65",
"assets/assets/images/product-img-2.png": "bda24196e13bc69f67de9f5e6af87ba0",
"assets/assets/images/service-img-2.png": "118c5df9ed0ebe0daac76fcea5378ec9",
"assets/assets/images/error-image.png": "0b6419e0c5a71de6362ce9cae7111d13",
"assets/assets/images/service-img-3.png": "288aae78d19d00d4d97713075da4ad9f",
"assets/assets/images/unread-chat.png": "16a0769ad0275e772670b6e76291901a",
"assets/assets/images/product-img-1.png": "2fef2eac348b771b3c6250ae43c89c77",
"assets/assets/images/product-img-5.png": "b72c11fd2b5ce13e89d4b5c99530f23d",
"assets/assets/images/service-img-7.png": "11ea4300a47f1ea0fa64299c436f413a",
"assets/assets/images/news-img-2.png": "dfffc1e8319b8c9319fc1fa6115e6561",
"assets/assets/images/service-img-6.png": "f0c939dd8060f19090857e93595501f1",
"assets/assets/images/product-img-4.png": "177fa93849fb0c7087ee762625dcf2c8",
"assets/assets/images/product-img-6.png": "5e88a1185e069b46ae5bce6db1480643",
"assets/assets/images/service-img-4.png": "f7d97a5b9797bbd2411d235e61842045",
"assets/assets/images/fake_map.png": "e6cf34346d9e6f6974a70d88a80eebc2",
"assets/assets/images/news-img-1.png": "e29bac5e788736aff835debec08d009d",
"assets/assets/images/service-img-5.png": "2578b2c6b5a783d8021422dddc6648a1",
"assets/assets/images/product-img-7.png": "f0bc039ce14a88f8439628e3a49371f4",
"assets/assets/logos/microsoft.svg": "19a5dcf3a537c13e6363fcc1b87a4afa",
"assets/assets/logos/tiktok-logo.svg": "3c3e89d4e660acc8b9570cece80d0a5e",
"assets/assets/logos/telegram-logo.svg": "79f5514a9cfabbf4b35880d01cea0810",
"assets/assets/logos/instagram.svg": "5a7198bf9029622422249314ec6c4a2a",
"assets/assets/logos/icon%2520telegram.svg": "919a6e225ffc16e8543738b5e4bd3694",
"assets/assets/logos/facebook-round.svg": "62a4b486ae3ecc600ce8c6a25ac76493",
"assets/assets/logos/sms.svg": "6e1e4f4a5a6bc1ef75eb72a7ed410a94",
"assets/assets/logos/telegram.svg": "8a4f3a69973fba9df0af8b0040b0442e",
"assets/assets/logos/twitter-x.svg": "1a6c488be55de5f5c07004d0edd785b5",
"assets/assets/logos/snapchat.svg": "6b45aac33cbc6786577efe4e2a438546",
"assets/assets/logos/facebook.svg": "9da79baff2baecf10f0126790e0738fb",
"assets/assets/logos/logo.png": "d896ecae6ffccceb969622c8486994d7",
"assets/assets/logos/whatsapp.svg": "724df6d69b5d84d3bf359f62a0cef89f",
"assets/assets/logos/google.svg": "6e8faf20dbc548b97eca40da446be725",
"assets/assets/logos/reddit.svg": "2bdd6bb072a8e4597cc12d18984cd89a",
"assets/assets/logos/icon%2520messenger.svg": "d71cc5661199ea8b4a58473765550853",
"assets/assets/logos/linkedin.svg": "15cf9ebef4a8ddc72756fd6d8d2be471",
"assets/assets/logos/facebook-logo.svg": "27233e5ff1b82e1ecacb9f3d8884bcbb",
"assets/assets/logos/messenger.svg": "d71cc5661199ea8b4a58473765550853",
"assets/assets/logos/logo.svg": "bae7532b9fe77fef8e980d3a85810741",
"assets/assets/logos/apple.svg": "e9eb857f2184565f53a7fa44dc36f68c",
"assets/assets/logos/logo-with-bg.png": "36d420101fafbf900e36f545dbe60828",
"assets/assets/audio/pretty_sound.mp3": "07dc5dbf4aa8f97600bf1a07dbc916ef",
"assets/assets/icons/search.svg": "5ebad6a3834f76de8322459683ccab02",
"assets/assets/icons/save-icon.svg": "7f33ddd80a44065c5c6b2ad5837380e9",
"assets/assets/icons/time-icon.svg": "73b0e7b25987df208bb733367621bcac",
"assets/assets/icons/tick-icon.svg": "213642509f8f4b9f6d6666827b194e9d",
"assets/assets/icons/riel-icon.svg": "8c74852c423b7a0ac9fd7edbc2c0f719",
"assets/assets/icons/user.svg": "da72eaddb9b489d03c92e5b83b7de3cb",
"assets/assets/icons/terrain.jpg": "31bf27139bae7f13ac5cbf066ed129d5",
"assets/assets/icons/camera-icon.svg": "16bd8196f3d7e14c4f780751b8786b40",
"assets/assets/icons/home.svg": "8ddf0cfbc04823e8f62a32de87c8f511",
"assets/assets/icons/verified-icon.png": "862a1afca7fe0067f8f7862a026e6745",
"assets/assets/icons/call-center.svg": "beef9c3fe1d6789e2d0167acf823bcc9",
"assets/assets/icons/sound-on.svg": "f1f78e1cf38d2fa760590fe4a3092476",
"assets/assets/icons/file_excel.svg": "3099790a74adc8bd49850ed7c8eb1255",
"assets/assets/icons/image-file.svg": "55e90c8bbe02b0ffe253883c43339806",
"assets/assets/icons/tag-icon.svg": "8b256b71dbc60425c4a774b18e49899c",
"assets/assets/icons/iconsMenu.svg": "fa94c71b0081fa37314977ab33ae0890",
"assets/assets/icons/lock-icon.svg": "1c360a3a3d553b792a661bdfa7290462",
"assets/assets/icons/file.svg": "42551c1e85ee3fc2c3b25178bd47fd1d",
"assets/assets/icons/list-icon.svg": "d8f508948c6308aa9af87817bb03f8c1",
"assets/assets/icons/service.svg": "588fc4447f482e9ce8cdf6953982a5d0",
"assets/assets/icons/check-chat.svg": "16622daa8dbcd603b7211f7ccd00e8da",
"assets/assets/icons/filter-icon.svg": "731a80177b96255a93243d216cf4cd20",
"assets/assets/icons/location-icon.svg": "99509ad497ab34389b53c637a72ce8cd",
"assets/assets/icons/pen.svg": "c7df76ed544dc8751239c765ccf44a8b",
"assets/assets/icons/farm.svg": "e215e8a1c0a537b7bc1ec05010fc7074",
"assets/assets/icons/add-button.svg": "4f4c2dde2a71165b833f2582cea8c0e9",
"assets/assets/icons/unselect-bookmark.svg": "6076b036eafee416b3473a24552ddbbc",
"assets/assets/icons/qrcode.svg": "4f16a9c5336fb9e4acdee4149849a4f3",
"assets/assets/icons/call_center.png": "d256a5e75b04bae329cd26322549af3f",
"assets/assets/icons/share-media-icon.svg": "284695fd2baada20e5f49186bbf8ea6e",
"assets/assets/icons/cart.svg": "7c9e7bf000379abe42c458967590765e",
"assets/assets/icons/ic_list.svg": "921b1c7470503129d7041fff76d0cca0",
"assets/assets/icons/call-center.png": "690a21b0e00b864e3b1b41372e6bd7ac",
"assets/assets/icons/information-icon.svg": "93b97e44051b69e56c536a17a172030d",
"assets/assets/icons/drop-down-button.svg": "8ff99f7fc2b18ac2adb1819f8675e438",
"assets/assets/icons/happy-face.svg": "f3d872cdd6379238c3e508a521b2dd2e",
"assets/assets/icons/verified-icon.svg": "81ba8e3612336946fb71618bf1adc6c5",
"assets/assets/icons/ic_grid.svg": "20e47e9bed175eb08964f3da03ce7e11",
"assets/assets/icons/edit-profile-icon.svg": "9b89230044b224317c7b2a087e3a569c",
"assets/assets/icons/comment-icon.svg": "bdce15fc239fc97a3e54a7a0b3199a74",
"assets/assets/icons/star-rate.svg": "b30c9738be36e3b4bad861ed5b0c9a03",
"assets/assets/icons/sound-off.svg": "9283af3501a499dd5584cb0a2ff8e1ef",
"assets/assets/icons/file-icons/file-excel.svg": "8d7636096e0601264edef7b8aa24d723",
"assets/assets/icons/file-icons/powerpoint.svg": "ee2500f950fed5817fe63843d3536a14",
"assets/assets/icons/file-icons/file-word.svg": "81689f332f2089a926d4b6f5e1325dd1",
"assets/assets/icons/file-icons/pdf.svg": "8956347c7726c4396d31d3197e3a2a8b",
"assets/assets/icons/line-1.svg": "6e74d2c2d4c2ee9a89e561f7eb990d63",
"assets/assets/icons/map_sample.png": "50e8b319ae80b7fafc17a8266d547814",
"assets/assets/icons/image-icon.svg": "84d470e38f06d9c72db5dd7b4c90bbb4",
"assets/assets/icons/profile-rounded.svg": "9e8e6726a751594ea6e6f51cced45e74",
"assets/assets/icons/next-icon.svg": "d88027289920ceadbc753ff4cae3d40a",
"assets/assets/icons/call-icon-button.svg": "6e03e87ad3768e2c0f13da3dfaf937f9",
"assets/assets/icons/arrow_upward.svg": "40eca86001dbe52a8d8a73b7cf41a8a8",
"assets/assets/icons/drop-down.svg": "f2fef4a849b659579d32274243505c35",
"assets/assets/icons/browsers.svg": "ae8f409cd8c9531ecaa8bad5af1b0876",
"assets/assets/icons/appearance-icon.svg": "f1ac4a858eb93d574679d8276e73f7a4",
"assets/assets/icons/weather-lightning.svg": "2bd4234a92297b257adf4f79f7bc0eb6",
"assets/assets/icons/search-icon.svg": "fb57f0eb7b6bfe76886030449b2583e7",
"assets/assets/icons/favorite.svg": "cc2324848e8dde21d23494013bbd6588",
"assets/assets/icons/file_pdf.svg": "a793cf0b2f4523717568598864cb0627",
"assets/assets/icons/file_ppt.svg": "94950064d4d507df952dfa7914256b53",
"assets/assets/icons/icon_more_horiz.svg": "c9f07946d66911105929c587a193cebd",
"assets/assets/icons/play-button.svg": "e830749c0a7a623860034ec3d29eba73",
"assets/assets/icons/chat.svg": "0fe0ca1fa3eadc9c2210c4c1e092b33d",
"assets/assets/icons/notification.svg": "074e0432dd6d3099bce76efc3dd394d6",
"assets/assets/icons/next-icon-ios.svg": "f553e62b543e7964d9f58452d43c7cf4",
"assets/assets/icons/hybrid.jpg": "26439c60bece11c9b83402b268a0708f",
"assets/assets/icons/riel-icon-2.svg": "2d9e6567d9c93a6ed152af307ec31817",
"assets/assets/icons/bookmark-icon.svg": "f01fbd2c77e66c4afd2959342e1d8610",
"assets/assets/icons/water_wave.svg": "324f2354175c149d7c4a5a8b580d60e9",
"assets/assets/icons/profile_out_line.svg": "5129f081cc78ae7843e3309364b2649e",
"assets/assets/icons/delete-icon.svg": "5794bf0bd3e978664b024a77a751a4a2",
"assets/assets/icons/down-rate.svg": "cc0eb25f4b3f3717afa743450c3b7259",
"assets/assets/icons/Edit.svg": "96a9e2e4a6ebdf31551acc0ae1e6e7e8",
"assets/assets/icons/file_word.svg": "292574df849802775358646e23d1fc0b",
"assets/assets/icons/bug.svg": "4f48397d5738ca5a6a5cd73799c81254",
"assets/assets/icons/description-icon.svg": "61c5a697f8f2c3deae0a92fa2d6d6e7f",
"assets/assets/icons/grid-icon.svg": "7d068f9eecb08c2ae1a4238e94bc3e89",
"assets/assets/icons/share-icon.svg": "92792b40fd96b051f5c3e2430a525a03",
"assets/assets/icons/rise-rate.svg": "09a451698e831ad473f820f40c0db7c2",
"assets/assets/icons/location.svg": "8d96d11d98257f3f528220f18797b326",
"assets/assets/icons/profile-icon.svg": "397267b586693ba66e3fc82447ba16b6",
"assets/assets/icons/draw-polygon.svg": "1785298a13eb7aaa73a92f3b92a686da",
"assets/assets/icons/chat-icons/icon_copy.svg": "1a69a02308915ea2c02208a4ce8d23b9",
"assets/assets/icons/chat-icons/icon_forward.svg": "02e02192c4bb0a51afe50e2acef7853d",
"assets/assets/icons/chat-icons/image-icon.svg": "c98d13a935f37d105ecdd775a7b04869",
"assets/assets/icons/chat-icons/buy.svg": "79b1e261cceab564519d1e5ebde5f623",
"assets/assets/icons/chat-icons/mic-icon.svg": "ca06847036ad4536da9e3d7820822700",
"assets/assets/icons/chat-icons/icon_edit.svg": "3e71cd1ba61a143a9a97b22271bc0625",
"assets/assets/icons/chat-icons/send-icon.svg": "1d65a26203cb89f48eda4bdda6c28643",
"assets/assets/icons/chat-icons/sell1.svg": "836c6a0ef798e3865b7d47c68b820c08",
"assets/assets/icons/chat-icons/icon_delete.svg": "65f0dfbfbce8321611950949fdee76bc",
"assets/assets/icons/profile.svg": "4084ff0485e42a03984784fc72db29f6",
"assets/assets/icons/tags.svg": "03d58a41cb3577c3100ac941d2f7a4c0",
"assets/assets/icons/nature_out_line.svg": "a0cbeaa737b419f8ab1735e82819266f",
"assets/assets/icons/eye-icon.svg": "8e973a873a0080195d4cda2f43e05b64",
"assets/assets/icons/call-phone.svg": "c6b068ba5b34589b9745e8b11170b397",
"assets/assets/icons/calendar.svg": "73197696f34cc89973cb735519ee07cb",
"assets/assets/icons/profile-card.svg": "30dac8216b50c522b1ba39ab3dfbabde",
"assets/assets/icons/chat-center.svg": "21353bd9daee28d5fd6b981b6829c21a",
"assets/assets/icons/current-location.svg": "c93ee7665b4c34ad5848799264a0bc65",
"assets/assets/icons/like-icon.svg": "240cf4fa326138d5737c3fe21f41b74d",
"assets/assets/icons/confirmed.svg": "af240dfe3abdd150a00474b3be3d14b1",
"assets/assets/icons/add_out_line.svg": "fb6c1581a046b720d9aa62f30327f61a",
"assets/assets/icons/more-icon.svg": "b667e6846df982130f39bf177a73632e",
"assets/assets/icons/chat-icon-button.svg": "9fe399aa72cb663f9ea0fdf001cfcb41",
"assets/assets/icons/download-icon.svg": "962319b6ac010c11018d6ce2d9054d26",
"assets/assets/icons/sad-face.png": "f5529fdc1a8814cec70ed6c832a93fcb",
"assets/assets/icons/play-button.png": "e6a6a2dce8bb715a61c5283a08dbb0b7",
"assets/assets/icons/drag-handle.svg": "385e2f30bc45c0edfcc8830ac8ea775b",
"assets/assets/icons/menu.svg": "83d1fe088650f0489524e30a34c12a44",
"assets/assets/icons/saterllite.jpg": "c75bfd7d7d55d3361bc7fb844161007f",
"assets/assets/icons/calender-icon.svg": "416a2c5b34e29145347292cf54e7dbbd",
"assets/assets/icons/grass.svg": "79c814fa191838bb779705d3fadbf622",
"assets/assets/icons/mall.svg": "a760c0815b9502dee47282360059ce4b",
"assets/assets/icons/Minus.svg": "f0d249a6c8d58f3281d12605877daf0b",
"assets/assets/icons/menu_person_list.svg": "2bc727c0f1895546f899ab2dd79eddbe",
"assets/assets/icons/download_all_icon.svg": "d8292c5a12f614779ef3d66dbfdb74e3",
"assets/assets/fonts/NotoSansKhmer-Medium.ttf": "6b43edb54220a4f62a0a27f29576cef9",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Kh-Muol.ttf": "7dd61d9dc7d01dee247cc7378f3924cf",
"assets/assets/fonts/NotoSansKhmer-SemiBold.ttf": "9a0fe0c8c00676befb1fe7177cf9214c",
"assets/assets/fonts/NotoSansKhmer-Regular.ttf": "9946faa2e770b5f7e971742e1ce40f48",
"assets/assets/fonts/NotoSansKhmer-Bold.ttf": "ba5b09f397f26f1abdb802a9bed40216",
"assets/assets/fonts/Battambang-Regular.ttf": "6a5b831b3323bee3a53761c64b6af0ba",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

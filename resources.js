// resources.js - 完整收錄電子資料庫、電子書、期刊、語言、影音及線上教學課程

const allResources = [
    // --- 電子資料庫 (共50筆) ---
    { id: 1, category: "電子資料庫", title: "A+醫學百科", desc: "A+醫學百科是一個開放的在線醫學百科全書網站，在這裡您可以獲取和分享醫學保健知識。", link: "https://cht.a-hospital.com/w/A%2B%E5%8C%BB%E5%AD%A6%E7%99%BE%E7%A7%91:%E5%85%B3%E4%BA%8E" },
    { id: 2, category: "電子資料庫", title: "CDC Wonde", desc: "提供使用NCHS的公共衛生方面的統計資料之系統。", link: "https://wonder.cdc.gov/" },
    { 
        id: 3, 
        category: "電子資料庫", 
        title: "Journals學術期刊資料庫 (華藝)", 
        desc: "包含華藝CEPS中文電子期刊及CETD中文博碩士論文資料，收錄台灣、港澳及大陸出版中文繁簡體學術期刊之全文資料。", 
        link: "https://hsc.idm.oclc.org/login?url=https://www.airitilibrary.com/",
        manual: "https://drive.google.com/file/d/1RAsxLco39APvcwwOOFhygSMq1KKTSjIy/view" 
    },
    { id: 4, category: "電子資料庫", title: "Theses 學位論文資料庫 (華藝)", desc: "「中文電子學位論文服務」資料庫收錄以中文為主要語言類別，地區包括台灣、中國大陸、香港及澳門等大專院校的博碩士論文。", link: "https://hsc.idm.oclc.org/login?url=https://www.airitilibrary.com/Publication/Query?queryString=%7B%22%E6%9F%A5%E8%A9%A2%E6%AD%B7%E5%8F%B2%E9%A1%9E%E5%9E%8B%E4%BB%A3%E7%A2%BC%22%3A%22PubSearch%22%2C%22PSF%22%3A%7B%22SortFiled%22%3A1%2C%22SearchFileds%22%3A%5B%7B%22FieldName%22%3A16%2C%22SearchKeyWord%22%3A%22*%22%2C%22FieldQuery%22%3Atrue%2C%22FieldLogic%22%3A0%7D%5D%2C%22PageSize%22%3A20%2C%22SearchPubTypes%22%3A%5B%7B%22FieldQuery%22%3Atrue%2C%22FieldLogic%22%3A1%2C%22FieldName%22%3A5%7D%2C%7B%22FieldQuery%22%3Atrue%2C%22FieldLogic%22%3A1%2C%22FieldName%22%3A6%7D%5D%7D%7D" },
    { 
        id: 5, 
        category: "電子資料庫", 
        title: "Clinical Drug Guide 臨床醫護用藥指南", 
        desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>針對護理及臨床用藥專業需求提供藥物概括作用以及投藥必備資訊，並建議應採取的臨床措施。", 
        link: "http://cdg.onlineplus.com.tw/cdg/do/Index",
        manual: "https://drive.google.com/file/d/18BgXnRsZgUAuxTqrDzTQFtGTIuOnjQW-/view"
    },
    { 
        id: 6, 
        category: "電子資料庫", 
        title: "EBSCO CINAHL with Full Text (8人版)", 
        desc: "Cumulative Index to Nursing and Allied Health Literature 收錄外文護理學文獻。(使用限制：同時段最大上線人數8人)", 
        link: "https://hsc.idm.oclc.org/login?url=http://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=c8h",
        manual: "https://docs.google.com/presentation/d/1adPGU296ryQjmRrSrwlUQddxf4CtStNW/edit?slide=id.p1#slide=id.p1"
    },
    { id: 7, category: "電子資料庫", title: "EBSCO Education Research Complete", desc: "提供教育學與教育相關領域，亦收錄管理、政策、基金和相關社會學的教育課程。", link: "https://hsc.idm.oclc.org/login?url=https://research.ebsco.com/c/57o3ql/search/results?q=&autocorrect=y&db=ehh&expanders=concept&limiters=FT%3AY&searchMode=boolean&searchSegment=all-results&skipResultsFetch=true&sqId=sq%3A4b2b415e-0ce2-462f-b8c2-ba84b395985c" },
    { id: 8, category: "電子資料庫", title: "EBSCO OmniFile Full Text Select", desc: "整合於 EBSCO資料庫中，提供多種領域西文學術期刊、傳記及目錄等索摘、全文。", link: "https://hsc.idm.oclc.org/login?url=https://research.ebsco.com/c/57o3ql/search/results?q=&autocorrect=y&db=ofs&expanders=concept&limiters=FT%3AY&searchMode=boolean&searchSegment=all-results&skipResultsFetch=true&sqId=sq%3Abaadec33-d5c4-4cf7-9631-86d5950b90fd" },
    { id: 9, category: "電子資料庫", title: "EBSCO ERIC", desc: "收錄記錄以及成千上萬全文文檔的鏈接。該資料庫包括各種來源類型的記錄，包括期刊文章、書籍、會議論文等。", link: "https://hsc.idm.oclc.org/login?url=https://research.ebsco.com/c/57o3ql/search/results?q=&autocorrect=y&db=eric&expanders=concept&limiters=FT%3AY&searchMode=boolean&searchSegment=all-results&skipResultsFetch=true&sqId=sq%3A025e8444-d3a9-4bd7-9940-faa6f65cdfe5" },
    { id: 10, category: "電子資料庫", title: "EBSCO CINAHL Complete", desc: "讀者可以快速方便地閱讀頂尖護理全文期刊、實證照護表單(evidence-based care sheets)、快速線上課程等等。", link: "https://hsc.idm.oclc.org/login?url=https://research.ebsco.com/c/57o3ql/search/results?q=&autocorrect=y&db=ccm&expanders=concept&limiters=FT%3AY&searchMode=boolean&searchSegment=all-results&skipResultsFetch=true&sqId=sq%3Ad3b79eed-edf5-453c-9e3e-3b98b158b8f3" },
    { id: 11, category: "電子資料庫", title: "MEDLINE with Full Text", desc: "涵蓋豐富的學科主題，包括生物醫學、臨床前科學、衛生政策制定等等，MEDLINE Complete 能為每位醫學研究人員提供所需的資源。", link: "https://hsc.idm.oclc.org/login?url=https://research.ebsco.com/c/57o3ql/search/results?q=&autocorrect=y&db=mnh&expanders=concept&limiters=FT%3AY&searchMode=boolean&searchSegment=all-results&skipResultsFetch=true&sqId=sq%3Ac00c8818-8a68-4dbd-b20b-b3bc37c0941d" },
    { id: 12, category: "電子資料庫", title: "Free eMedical Journals", desc: "免費醫學期刊。", link: "http://www.freemedicaljournals.com/" },
    { 
        id: 13, 
        category: "電子資料庫", 
        title: "Journal Citation Report", 
        desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>美國 Thomson Reuters 所建置之網際網路版期刊引用文獻評比統計資料庫系統。", 
        link: "https://hsc.idm.oclc.org/login?url=https://jcr.clarivate.com/",
        manual: "https://drive.google.com/file/d/12zAPXR9VUIogQKld1-epmwTmdJa6g2c2/view"
    },
    { id: 14, category: "電子資料庫", title: "JSTOR (論文數據庫)", desc: "防疫期間仍持續開放線上瀏覽超過25,000種電子書，26種公共衛生學術期刊，其他COVID-19相關知識的教學資源。", link: "https://www.jstor.org/" },
    { id: 15, category: "電子資料庫", title: "MedicineNet", desc: "依英文字母A~Z查詢。每一個醫學名詞都解釋得相當清楚，提供大眾最新的醫療資訊。", link: "https://www.medicinenet.com/" },
    { id: 16, category: "電子資料庫", title: "Nature Archive : 1987-1996", desc: "收錄1987-1996年間發表於 Nature 期刊之文章內容。", link: "https://www.nature.com/" },
    { id: 17, category: "電子資料庫", title: "On-Line Medical Dictionary", desc: "醫學字典，可依主題做查詢，或依字母順序尋找。", link: "https://www.online-medical-dictionary.org/" },
    { 
        id: 18, 
        category: "電子資料庫", 
        title: "Primal Pictures：3D Real Time", 
        desc: "模擬3D立體呈現人體的層次感及其構造，收錄共12個模組。", 
        link: "https://hsc.idm.oclc.org/login?url=https://www.anatomy.tv/",
        manual: "https://drive.google.com/file/d/1-LCtnSaVDE2e_QmJNe1zfv2q7RwEt_y8/view"
    },
    { id: 19, category: "電子資料庫", title: "Primal Pictures：3D Real Time (校內連線)", desc: "模擬3D立體呈現人體的層次感及其構造，收錄共12個模組。", link: "https://www.anatomy.tv/" },
    { 
        id: 20, 
        category: "電子資料庫", 
        title: "ProQuest Dissertations & Theses", 
        desc: "提供美加地區 230 餘萬篇博碩士論文索摘 。主題：理、工、醫、農及人文社會等各類學科。", 
        link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/pqdt",
        manual: "https://docs.google.com/presentation/d/17-lHoChxgUiSOQwSjrsxigZ2Og5zRBIz/edit?slide=id.p1#slide=id.p1"
    },
    { 
        id: 21, 
        category: "電子資料庫", 
        title: "ProQuest Nursing & Allied Health Premium", 
        desc: "範圍涵蓋細胞學、護理學、營養學、腫瘤學、小兒照顧、放射醫學等70多種護理保健相關主題。", 
        link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/nahp?accountid=11513",
        manual: "https://drive.google.com/file/d/1avMhGFaemPaWW-KGAsp094fmGDTQWlQi/view"
    },
    { 
        id: 22, 
        category: "電子資料庫", 
        title: "ProQuest One Applied & Life Science", 
        desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>提供可追溯到1988年的國際報導，涵蓋大範圍的公共衛生議題，包括流行病，災害預防和肥胖。", 
        link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/pq1appliedlifesciences?accountid=11513",
        manual: "https://drive.google.com/file/d/1m-WW7yCh6jw-r6IhKt_h95Cts1_bWW5i/view?usp=sharing"
    },
    { id: 23, category: "電子資料庫", title: "ProQuest Coronavirus Research Database", desc: "開放共享，為讀者提供有關新型冠狀病毒(covid-19)、SARS與MERS等重大傳染病的全文內容。", link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/coronavirus?accountid=11513" },
    { id: 24, category: "電子資料庫", title: "ProQuest Digitale Bibliothek Deutscher Klassiker", desc: "德語研究資源。收錄德國經典名人圖書館系列之數位版，包含歷史、哲學、神學、政治及史地等。", link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/dkv?accountid=11513" },
    { id: 25, category: "電子資料庫", title: "ProQuest Kafkas Werke", desc: "德語研究資源。收錄卡夫卡的創作、手稿、日記、論壇，及其創作「蛻變」、「審判」、「城堡」等著作全文。", link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/kafka?accountid=11513" },
    { id: 26, category: "電子資料庫", title: "ProQuest Schillers Werke", desc: "德語研究資源。席勒作品的國家典藏計畫數位版，收錄席勒的文學作品、手稿、書信、談話及語錄。", link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/schiller?accountid=11513" },
    { id: 27, category: "電子資料庫", title: "ProQuest The Vogue Archive", desc: "完整收錄 Vogue 雜誌 (美國版) 的所有期數，從 1892 年的第一期到最新一期，現代早期至今的時尚獨特記錄。", link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/vogue?accountid=11513" },
    { id: 28, category: "電子資料庫", title: "ProQuest Political Science Database", desc: "收錄數百種的政治科學，公共政策和國際關係期刊；囊括數千篇關於政治科學主題的全文博士論文。", link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/politicalscience?accountid=11513" },
    { id: 29, category: "電子資料庫", title: "ProQuest Publicly Available Content Database", desc: "公開取用資料庫。匯集或連結來自世界各地許多不同來源的公開學術內容的全文。", link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/publiccontent?accountid=11513" },
    { id: 30, category: "電子資料庫", title: "The National Academies Press", desc: "以出版教科書為主，提供約有 2500 冊可免費線上閱覽的電子書。", link: "https://www.nationalacademies.org/publications/all" },
    { id: 31, category: "電子資料庫", title: "UNiLibrary 聯合國出版品網站", desc: "提供相關書籍及資源查詢。", link: "https://www.un-ilibrary.org/" },
    { 
        id: 32, 
        category: "電子資料庫", 
        title: "Visible Body：Physiology Animation", 
        desc: "提供生理學六大主題及病理學三大主題共116部中英文字幕動畫。", 
        link: "https://hsc.idm.oclc.org/login?url=https://ovidsp.ovid.com/ovidweb.cgi?T=JS&NEWS=n&CSC=Y&PAGE=main&D=phan15",
        manual: "https://drive.google.com/file/d/1eKxww3xrY05rK0JxvLGiwieP_IuzB0Sw/view"
    },
    { id: 33, category: "電子資料庫", title: "Visible Body：Physiology Animation (校內)", desc: "提供生理學六大主題及病理學三大主題共116部中英文字幕動畫。", link: "https://ovidsp.ovid.com/ovidweb.cgi?T=JS&NEWS=n&CSC=Y&PAGE=main&D=phan15" },
    { id: 34, category: "電子資料庫", title: "Web Of Science", desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>美國 Thomson Reuters 建置之網際網路版引用文獻索引資料庫。", link: "https://hsc.idm.oclc.org/login?url=https://www.webofscience.com/wos/woscc/smart-search" },
    { id: 35, category: "電子資料庫", title: "WHO Statistical Information System", desc: "提供世界衛生統計及流行病學方面的資料。", link: "https://www.who.int/data/gho" },
    { 
        id: 36, 
        category: "電子資料庫", 
        title: "WOS-Arts & Humanities Citation Index", 
        desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>藝術與人文引文索引資料庫。", 
        link: "https://hsc.idm.oclc.org/login?url=https://www.webofscience.com/wos/woscc/basic-search",
        manual: "https://drive.google.com/file/d/1wwXvkef2mRrgo1JLTGzB-uZd9GEOybpt/view"
    },
    { id: 37, category: "電子資料庫", title: "中文圖書資訊學文獻摘要資料庫 CLISA", desc: "教育部99植根計畫補助全國使用。收錄年代：1955-2011。", link: "http://newsdb.ncl.edu.tw/ttscgi/ttsweb?@0:0:1:clisa@@0.0773186696288155" },
    { id: 38, category: "電子資料庫", title: "中央研究院-研之有物", desc: "親身採訪研究團隊，寫成科普報導，帶大家直擊研究前線，探究科學和生活的關係。", link: "https://research.sinica.edu.tw/" },
    { id: 39, category: "電子資料庫", title: "臺灣生命大百科", desc: "由林務局與中央研究院共同維運。將臺灣已知的生物以一物種一網頁的方式整合資訊。", link: "https://taieol.tw/" },
    { 
        id: 40, 
        category: "電子資料庫", 
        title: "台灣商學企管資料庫", 
        desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>收錄近年來台灣出版之學術期刊。", 
        link: "https://hsc.idm.oclc.org/login?url=http://tbmcdb.lib.ntnu.edu.tw/user/index.php",
        manual: "https://docs.google.com/document/d/1ScZ_MXAZR-6iESyYw5YvnKmHhJBHSfhF/edit"
    },
    { id: 41, category: "電子資料庫", title: "全國學術版人文及社會科學資料庫", desc: "包含多種國科會歷年購置的國外人文及社會科學資料庫內容。", link: "https://hsc.idm.oclc.org/login?url=http://huso.stpi.narl.org.tw/husoc/husokm" },
    { id: 42, category: "電子資料庫", title: "科技部-科技大觀園", desc: "累積了大量的科普影音、科技新知、科普文章、科普演講及各類科普活動訊息。", link: "https://scitechvista.nat.gov.tw/" },
    { id: 43, category: "電子資料庫", title: "動腦知識庫", desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>收錄「動腦雜誌」自2001年出刊至2013年的數位化圖文資料內容。", link: "https://hsc.idm.oclc.org/login?url=https://brian93.lib.ntnu.edu.tw/brain93cgi/ttsweb?@brainkm" },
    { id: 44, category: "電子資料庫", title: "國家圖書館期刊文獻資訊網", desc: "包含「中華民國出版期刊指南系統」與「臺灣期刊論文索引系統」。", link: "https://tpl.ncl.edu.tw/" },
    { id: 45, category: "電子資料庫", title: "國家圖書館臺灣記憶系統", desc: "典藏豐富臺灣歷史資源，包括校園記憶、社會風貌、經濟發展等主題。", link: "https://tm.ncl.edu.tw/" },
    { id: 46, category: "電子資料庫", title: "貿協全球資訊網", desc: "本網站提供各國貿易實務與總體經濟資訊。", link: "https://www.taitra.org.tw/" },
    { id: 47, category: "電子資料庫", title: "經濟統計資訊網路查詢系統", desc: "全國使用。本資料庫自2012年3月30日起免費使用。", link: "https://www.moea.gov.tw/MNS/populace/content/ContentMenu.aspx?menu_id=6027" },
    { id: 48, category: "電子資料庫", title: "臺灣博碩士論文知識加值系統", desc: "免費的學位論文線上檢索系統。", link: "https://ndltd.ncl.edu.tw/" },
    { id: 49, category: "電子資料庫", title: "臺灣藝術教育網", desc: "建置全國藝術教育入口網站及藝術教學平台，並統整文學、音樂、視覺藝術等資源。", link: "https://ed.arte.gov.tw/" },
    { id: 50, category: "電子資料庫", title: "醫學百科", desc: "ADAM 醫學百科全書包括 4,000 多篇關於疾病、測試、症狀、損傷和手術的文章。", link: "https://www.nlm.nih.gov/medlineplus/encyclopedia.html" },

    // --- 電子書資源 (共14筆) ---
    { id: 101, category: "電子書", title: "Hyread 凌網電子書", desc: "台灣最大的圖書館電子書供應商、國內第一個整合圖書館館藏、計次服務及個人購書的雲端圖書館。Hyread提供永久性的館藏與及時性服務，收錄的書籍包括學術、專業、休閒、工具書、語言學習有聲書等各類書籍，以及財經商管、數位資訊、生活、時尚、旅遊、新聞與多媒體等電子雜誌。", link: "https://hsc.idm.oclc.org/login?url=https://hsc.ebook.hyread.com.tw/", image: "ebook.png" },
    { id: 102, category: "電子書", title: "udn讀書館", desc: "「udn讀書館」服務已獲國內外六百間圖書館採購，客戶包括各級學校圖書館、政府機關、企業機構、建設住宅...等。提供讀者、民眾最多暢銷、熱門電子書刊免費借閱，只有擁有手機、平板即可「走到哪、讀到哪」。", link: "https://hsc.idm.oclc.org/login?url=https://reading.udn.com/udnlib/hsc", image: "ebook.png" },
    { id: 103, category: "電子書", title: "iRead eBook 華藝電子書", desc: "華藝於2008年推出iRead eBooks 華藝電子書，精心挑選優良的華文書籍，透過獨家數位化製程讓書籍內容以數位形式推廣；收錄近3000家出版社、逾80,000本繁體中文電子書，成為台灣規模最大的中文電子書平台！", link: "https://hsc.idm.oclc.org/login?url=https://www.airitibooks.com/", image: "ebook.png" },
    { id: 104, category: "電子書", title: "EBSCOhost eBook Collection", desc: "電子書資料庫收錄法律、政治、商業與經濟等20多個學科主題，截至目前為止共計收錄逾90萬冊電子書籍，也可提供不限人次使用方式，本資料庫高達90%的電子書提供離線下載功能。。", link: "https://hsc.idm.oclc.org/login?url=https://research.ebsco.com/c/57o3ql/search/advanced/filters?autocorrect=y&limiters=FT%3AY", image: "ebook.png" },
    { id: 105, category: "電子書", title: "ProQuest Ebook Central", desc: "提供廣泛主題領域的權威全文電子書，以及查找、使用和管理信息的強大工具。學科涵蓋範圍、商業與經濟、計算機與資訊技術、教育、工程與技術、歷史與政治學、人文學科、跨學科和區域研究、語言、文學和語言學法律、國際關係和公共政策生命科學", link: "https://hsc.idm.oclc.org/login?url=https://www.proquest.com/ebookcentral", image: "ebook.png" },
    { id: 106, category: "電子書", title: "Library & Book 數位圖書館", desc: "收錄本館歷年採購的西文電子書，包含社會科學、應用科學、語言文學、哲學、史地...等。", link: "https://lb30.libraryandbook.net/add_Search/MY/New_search/Bao_search", image: "ebook.png" },
    { id: 107, category: "電子書", title: "InfoSci 電子書", desc: "收錄有關 Information Technology 與 Computer Science 主題之西文電子書。", link: "https://www.igi-global.com/gateway/", image: "ebook.png" },
    { id: 108, category: "電子書", title: "International Children's Digital Library", desc: "超過4500本世界童書免費看，內容涵蓋全球59種語言。", link: "http://en.childrenslibrary.org/", image: "ebook.png" },
    { id: 109, category: "電子書", title: "NASA e-books", desc: "提供關於太空旅行、太空任務、航太科學等主題電子書下載瀏覽。", link: "https://www.nasa.gov/", image: "ebook.png" },
    { id: 110, category: "電子書", title: "Oxford OWL", desc: "適合3至11歲兒童的電子書免費借閱。", link: "https://www.oxfordowl.co.uk/for-home/find-a-book/library-page/", image: "ebook.png" },
    { id: 111, category: "電子書", title: "The Internet Archive-Children's Library", desc: "免費線上瀏覽兒童青少年讀本，由美國加利福尼亞大學圖書館等機構提供。", link: "https://archive.org/details/iacl", image: "ebook.png" },
    { id: 112, category: "電子書", title: "公共圖書資源共享服務平台", desc: "收錄HyRead及udn Library等平台電子書，提供公共圖書館資源中心會員圖書館讀者使用。", link: "https://ebook.nlpi.edu.tw/", image: "ebook.png" },
    { id: 113, category: "電子書", title: "文化部-兒童文化館", desc: "文化部打造專屬兒童的閱讀天地，歡迎大朋友、小朋友尋找自己喜愛的繪本。", link: "https://children.moc.gov.tw/animate_list?type=2", image: "ebook.png" },
    { id: 114, category: "電子書", title: "國家圖書館臺灣華文電子書庫", desc: "收錄國內各圖書館典藏1911-1949年出版品為主。", link: "https://taiwanebook.ncl.edu.tw/zh-tw", image: "ebook.png" },

    // --- 電子期刊資源 ---
    { id: 201, category: "電子期刊", title: "KONO libraries 電子雜誌", desc: "亞洲最高評價的電子閱讀平台，收錄台灣、香港、日本、韓國及歐美等200餘種暢銷雜誌。", link: "https://library.thekono.com/hsc/libraries/chinese", image: "kono.jpg" },
    { id: 202, category: "電子期刊", title: "外文雜誌精選平台", desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>為您呈現全球雜誌，提供最新鮮最熱門的知識與視野。", link: "https://hsc.idm.oclc.org/login?url=https://portal.eread.com.tw/abStoreEP/auths.aspx?Token=000UFKIQu0Z23t7sGLn0hwgijYsHslUttNwrAFU3PNudREbxULpqP7CySsUd5GceBm&CustCode=taebdc114", image: "acer-e-publishing.jpg" },
    { id: 203, category: "電子期刊", title: "中文電子雜誌服務平台", desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>以數位化形式呈現雜誌內容，支援手機平板閱讀。", link: "https://hsc.idm.oclc.org/login?url=https://portal.eread.com.tw/hsc", image: "acer-walkinglibrary.jpg" },

    // --- 語言學習資源 ---
    { id: 301, category: "語言學習", title: "FUNDAY英語學院線上平台", desc: "【英文】國內唯一跨產官學界肯定的專業英語線上學習系統。", link: "https://hsc.idm.oclc.org/login?url=https://hunteq.com/sso/funday_taebdc" },
    { id: 302, category: "語言學習", title: "空中英語教室影音典藏 - 空英頻道", desc: "【英文】收錄空中英語教室雜誌之廣播、電視教學節目內容。", link: "https://hsc.idm.oclc.org/login?url=https://tccs5.webenglish.tv/" },
    { id: 303, category: "語言學習", title: "空中英語教室 - 彭蒙惠英語職場頻道", desc: "【英文】收錄35個與職場工作有關的學習課程。", link: "https://hsc.idm.oclc.org/login?url=https://tccs5.webenglish.tv/" },
    { id: 304, category: "語言學習", title: "LiveABC 英日語 AI 互動學習資料庫", desc: "【英/日】整合英語與日語的AI互動學習資源。", link: "https://hsc.idm.oclc.org/login?url=https://library.liveabc.com/" },
    { id: 305, category: "語言學習", title: "NHK WORLD-JAPAN (日本國際傳媒)", desc: "【日文】提供各種日語學習相關的教學電視與廣播節目直播。", link: "https://www3.nhk.or.jp/nhkworld/" },
    { id: 306, category: "語言學習", title: "Live & Programs (NHK電視廣播)", desc: "【日文】提供NHK新聞、生活、文化藝術等主題的線上電視與廣播節目直播。", link: "https://www3.nhk.or.jp/nhkworld/en/live/" },
    { id: 307, category: "語言學習", title: "Learn Japanese (NHK日語學習)", desc: "【日文】專為日語學習者設計的教學節目。", link: "https://www3.nhk.or.jp/nhkworld/en/learnjapanese/" },
    { id: 308, category: "語言學習", title: "Online Storytime - New York Public Library", desc: "【英/西】美國紐約市立圖書館線上說故事。", link: "https://www.nypl.org/education/early-literacy" },
    { id: 309, category: "語言學習", title: "探索 NHK World Japan (華語版)", desc: "【多語】由日本NHK提供，內容包羅萬象的影片及節目單元。", link: "https://www3.nhk.or.jp/nhkworld/zt/" },

    // --- 影音資源 ---
    { id: 401, category: "影音資源", title: "iVideo影音串流隨選服務", desc: "【限校內使用】使用者可透過網際網路或內部網路，從遠端連結隨選視訊伺服器。", link: "http://libivideo.hsc.edu.tw/" },
    { id: 402, category: "影音資源", title: "KMOVIE雲端公播電影網", desc: "提供公播使用的影音串流平台。", link: "https://hsc.idm.oclc.org/login?url=https://kmovie.twedu.com.tw/" },
    { id: 403, category: "影音資源", title: "教室電影院公播大平台", desc: "全國首創將公播及家用版電影置於線上串流的平台。", link: "https://hsc.idm.oclc.org/login?url=https://hsc-app-visionmedia-com-tw.hsc.idm.oclc.org" },
    { id: 404, category: "影音資源", title: "哈佛商業評論全球繁體中文版影音知識庫", desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>收錄270餘段以上國際級大師演講或對談影音精彩內容。", link: "https://hsc.idm.oclc.org/login?url=https://hbr.infolinker.com.tw/index_video.php" },
    { id: 405, category: "影音資源", title: "BBC 文化教學影音網", desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>收錄AI理工數位、醫學護理以及呼叫助產士影集等三個領域共300部影片。", link: "https://hsc.idm.oclc.org/login?url=https://www.harvest-video.com/" },
    { id: 406, category: "影音資源", title: "經理人管理知識庫", desc: "<span class='text-danger fw-bold'>【臺灣學術電子資源永續發展計畫購置】</span>專為企業主管與決策者打造。", link: "https://hsc.idm.oclc.org/login?url=https://elib.infolinker.com.tw/mschool/login_mschool.php" },
    { id: 407, category: "影音資源", title: "國家圖書館數位影音服務系統", desc: "提供未到館的讀者精采、優質的講座、演講、研討會等影音內容。", link: "https://dava.ncl.edu.tw/" },
    { id: 408, category: "影音資源", title: "Scholastic (美國學樂集團YouTube頻道)", desc: "【西文】提供不同年齡層兒童與青少年的故事朗讀、插畫教學影片。", link: "https://www.youtube.com/user/TheScholasticChannel/videos" },
    { id: 409, category: "影音資源", title: "Puffin Storytime (英國海鸚說故事時間)", desc: "【西文】由 Puffin Books 提供繪本與青少年讀本的說故事影片。", link: "https://www.youtube.com/user/puffinbooks1/videos" },

    // --- 線上教學課程 ---
    { id: 501, category: "線上教學課程", title: "「國家圖書館遠距學園」數位學習平台資源", desc: "國家圖書館為提供大眾一自主學習之優質環境，並有效提升民眾資訊利用素養。", link: "https://cu.ncl.edu.tw/" },
    { id: 502, category: "線上教學課程", title: "教育雲", desc: "由教育部推出的「教育雲」入口網，內容包括，數位教材、教學軟體等。", link: "https://cloud.edu.tw/" },
    { id: 503, category: "線上教學課程", title: "零到一學中文", desc: "教育部與國立臺灣大學合作攜手推出「零到一學中文」中文學習線上課程。", link: "https://www.coursera.org/learn/learn-chinese" },
    { id: 504, category: "線上教學課程", title: "教育部美感教育資源整合平台", desc: "教育部美感與設計課程創新計畫。", link: "https://aew.moe.edu.tw/" },
    { id: 505, category: "線上教學課程", title: "臺灣大學開放式課程", desc: "提供社會人士免費上網自我學習。", link: "http://ocw.aca.ntu.edu.tw/ntu-ocw/" },
    { id: 506, category: "線上教學課程", title: "陽明交通大學開放式課程", desc: "提供完整的課程內容，包含課程綱要、課程目標、課程影音等。", link: "https://ocw.nycu.edu.tw/" },
    { id: 507, category: "線上教學課程", title: "清華大學開放式課程", desc: "錄製130多餘門課程，課程規劃分為工程、自然科學及人文社會三個學群。", link: "https://ocw.nthu.edu.tw/" },
    { id: 508, category: "線上教學課程", title: "「1號課堂」", desc: "臺灣第一個自製音頻 App，由遠見天下文化集團推出。", link: "https://classone.cwgv.com.tw/" },
    { id: 509, category: "線上教學課程", title: "Coursera課程學習網站", desc: "免費學習來自全球20多個國家100多所頂尖大學的課程。", link: "https://www.coursera.org/" },
    { id: 510, category: "線上教學課程", title: "國家發展委員會-雙語資料庫學習資源網", desc: "建置整合式英語學習與英譯資源平臺。", link: "https://bilingual.ndc.gov.tw/" },
    { id: 511, category: "線上教學課程", title: "哈客網路學院", desc: "客家委員會為推廣客家語言文化、創造多元化的數位學習環境。", link: "https://elearning.hakka.gov.tw/" },
    { id: 512, category: "線上教學課程", title: "Free online Ivy League Courses", desc: "由美國哈佛、耶魯、康乃爾大學等8所常春藤名校提供的450門免費線上課程。", link: "https://www.classcentral.com/collection/ivy-league-moocs" },
    { id: 513, category: "線上教學課程", title: "Open Culture", desc: "提供1500種免費線上課程，由世界頂尖大學如史丹佛、耶魯等提供。", link: "https://www.openculture.com/freeonlinecourses" },
    { id: 514, category: "線上教學課程", title: "Oxford OWL", desc: "提供3至11歲以上學童有趣好玩的互動教學活動。", link: "https://www.oxfordowl.co.uk/" },
    { id: 515, category: "線上教學課程", title: "National Museum of Australia - Learn", desc: "提供各種學校團體參觀活動與課堂教學資源。", link: "https://www.nma.gov.au/learn" },

    // --- 數位典藏 ---
    { id: 601, category: "數位典藏", title: "國立臺灣科學教育館-臺灣網路科教館", desc: "豐富的大眾科學講座影音記錄、自製之優質教案。", link: "https://www.ntsec.gov.tw/" },
    { id: 602, category: "數位典藏", title: "國立臺灣文學館-線上展覽", desc: "將歷年來建置之線上主題展進行整合，設計易於查詢之介面。", link: "https://www.nmtl.gov.tw/" },
    { id: 603, category: "數位典藏", title: "國立臺灣博物館-線上展覽", desc: "臺博館線上展覽網站，均可如身歷其境的進入博物館內。", link: "https://www.ntm.gov.tw/" },
    { id: 604, category: "數位典藏", title: "國立臺灣美術館-臺灣數位藝術", desc: "將各種不同形式的藝術，如3D、創客、聲音等數位藝術表現。", link: "https://www.ntmofa.gov.tw/" },
    { id: 605, category: "數位典藏", title: "國立海洋生物博物館", desc: "結合水族館及全數位影像化的方式，透過先端科技的整合展示海洋、海藻森林。", link: "https://www.nmmba.gov.tw/" },
    { id: 606, category: "數位典藏", title: "Google Arts & Culture", desc: "（西文）可線上參觀超過70國1200間博物館與美術館。", link: "https://artsandculture.google.com/" },
    { id: 607, category: "數位典藏", title: "The Smithsonian Institution", desc: "（西文）史密森尼學會包括近20座博物館，以及研究中心、美術館。", link: "https://www.si.edu/" },
    { id: 608, category: "數位典藏", title: "Musée du Louvre", desc: "（西文）線上參觀羅浮宮各展覽廳與藝術展。", link: "https://www.louvre.fr/en/online-tours" }

];

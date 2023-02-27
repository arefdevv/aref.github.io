function contact(event) {
    event.preventDefault();
    alert("Thanks for your Email, we will contact you shortly")
    emailjs
        .sendForm(
            'service_ya1t7s1',
            'template_njtxxcs',
            event.target,
            'user_Z0AEog0ZHFzSXDi2s4FQ4'
    ).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "the email service is down at the moment, please email us directly at samen.alhojaj2018@gmail.com"
        );
    })
}

function play(){
    console.log("clicked");
    document.getElementById("marriage_menu").innerHTML = "روند ازدواج";
    document.getElementById("gallery_menu").innerHTML = "گالری";
    document.getElementById("review_menu").innerHTML = "بررسی";
    // document.getElementById("blog_menu").innerHTML = "وبلاگ";
    // document.getElementById("shop_menu").innerHTML = "فروشگاه";
    document.getElementById("social_menu").innerHTML = "رسانه های اجتماعی";
    document.getElementById("enquiry_menu").innerHTML = "استعلام";
    document.getElementById("contact_menu").innerHTML = "تماس";
    document.getElementById("more_btn").innerHTML = "بیشتر";
    document.getElementById("c_p2").innerHTML = "۰۴۷۰ ۶۱۰ ۲۸۲ حسین علی امینی  contact@aminimarriagecelebrant.com.au:ایمیل";
    document.getElementById("c_p1").innerHTML = ":جزئیات تماس";
    document.getElementById("contact_header").innerHTML = "تماس با ما";
    document.getElementById("whatsapp").innerHTML = "واتساپ";
    document.getElementById("instagram").innerHTML = "اینستاگرام";
    document.getElementById("facebook").innerHTML = "فیس بوک";
    document.getElementById("social").innerHTML = "رسانه های اجتماعی";
    document.getElementById("contact_submit").innerHTML = "ارسال پرس و جو";
    document.getElementById("en_title").innerHTML = "استعلام";
    document.getElementById("form_btn").innerHTML = "دانلود";
    document.getElementById("m_6").innerHTML = "امروز با شماره تلفن 0470 610 282 یا با آدرس@aminimarriationcelebrant.com.au با من تماس بگیرید تا دریابید که چگونه ازدواج کنید, دریافت یک گواهی ازدواج رسمی برای ویزا شریک یا پیش فرض اسلامی نیکای در ملبورن یا هر جای استرالیا. همچنین می توانید برای کسب اطلاعات بیشتر در مورد ازدواج در استرالیا ، بروشور زیر را به زبان انگلیسی یا فارسی بخوانید.";
    document.getElementById("m_5").innerHTML = "پس از 4 – 6 هفته ، ازدواج شما در اداره ثبت ازدواج ثبت می شود و گواهی رسمی ازدواج شما از طریق پست به شما تحویل داده می شود.";
    document.getElementById("m_4").innerHTML = "سپس از طریق اداره ثبت ازدواج ، برای دریافت گواهی رسمی ازدواج اقدام خواهم کرد.";
    document.getElementById("m_3").innerHTML = "در روز عروسی شما ، من با حضور داماد و عروس و همچنین دو شاهد ، رسماً ازدواج شما را گرامی می دارم.";
    document.getElementById("m_2").innerHTML = "پس از پر شدن اعلامیه ازدواج در نظر گرفته شده ، باید برای مدت یک ماه تقویم در کنار من بماند. در این مدت ، من همچنین به شما کمک می کنم تا تمام اسناد مربوطه را پر کرده و هرگونه نیاز هویتی را برآورده کنید.";
    document.getElementById("m_1").innerHTML = "امروز برای پر کردن اطلاعیه ای از ازدواج در نظر گرفته شده با من تماس بگیرید. همچنین می توانید فرم را از اینجا بارگیری کنید.";
    document.getElementById("marriage_title").innerHTML = "روند ازدواج";
    // document.getElementById("service_8").innerHTML = "<i class='fa-solid fa-check'></i> ارائه مشاوره در مورد مسائل مذهبی"
    // document.getElementById("service_7").innerHTML = "<i class='fa-solid fa-check'></i> ارائه مشاوره برای خانواده ها و شرکا";
    // document.getElementById("service_6").innerHTML = "<i class='fa-solid fa-check'></i> کمک به تکمیل فرم اعلامیه “ برای ویزاهای شریک";
    // document.getElementById("service_5").innerHTML = "<i class='fa-solid fa-check'></i> در صورت لزوم صدور اثبات ازدواج برای مهاجرت";
    // document.getElementById("service_4").innerHTML = "<i class='fa-solid fa-check'></i> اطلاعات زوجین در مورد آموزش ازدواج";
    // document.getElementById("service_3").innerHTML = "<i class='fa-solid fa-check'></i> ثبت اسناد خود را با ثبت نام در بخش ازدواج";
    // document.getElementById("service_2").innerHTML = "<i class='fa-solid fa-check'></i> تأیید اعتبار اسناد شما";
    // document.getElementById("service_1").innerHTML = "<i class='fa-solid fa-check'></i> صدور گواهی ازدواج رسمی در هر نقطه در استرالیا مطابق با قانون ازدواج و شرع نیکاه";
    // document.getElementById("services_title").innerHTML = "خدماتی که ارائه می دهیم";
    document.getElementById("overview_header").innerHTML = "بررسی اجمالی";
    document.getElementById("overview_para").innerHTML = "نام من حسین علی امینی است و من یک مشهور ازدواج معتبر هستم که در ملبورن واقع شده است. من به عنوان یک مشهور ازدواج ثبت شده تحت دادستان کل ، می توانم ازدواج شما را به رسمیت بشناسم و ثبت نام کنم و یک گواهی رسمی ازدواج را برای شما فراهم کنم.علاوه بر این ، من خدمات محکومیت ازدواج اسلامی را ارائه می دهم و می توانم مطابق قانون شرع ، نیکا را انجام دهم.من می دانم که روند اخذ گواهی ازدواج و پیمایش در مقررات مهاجرت استرالیا می تواند پیچیده باشد,به همین دلیل من می توانم پس از پر کردن اعلامیه فرم ازدواج در نظر گرفته شده ، نامه پشتیبانی برای ویزای شریک را برای شما تهیه کنم من همچنین در زمینه کمک به ایرانیان ساکن استرالیا برای ثبت نام ازدواج خود در سفارت ایران در کانبرا تجربه کرده ام.در این موارد ، یک گواهی ازدواج رسمی استرالیا و یک گواهی ازدواج اسلامی لازم است ، و من اینجا هستم تا به شما در دستیابی به هر دو کمک کنم.علاوه بر ارائه گواهینامه های رسمی ، می توانم در برنامه ریزی عروسی خود نیز به شما کمک کنم.من می دانم که برنامه ریزی عروسی می تواند استرس زا و پر دردسر باشد ، به همین دلیل پیشنهاد می کنم به شما کمک کنم مکان مناسبی ، عکاس ، متخصصان پذیرایی و دکوراسیون را پیدا کنید.از ابتدا تا پایان ، من در آنجا خواهم بود تا اطمینان حاصل شود که از هر جزئیات مراقبت می شود ، بنابراین می توانید روی لذت بردن از روز خاص خود تمرکز کنید.امروز با من تماس بگیرید تا درباره خدمات و محصولاتی که ارائه می دهم اطلاعات بیشتری کسب کنید"
}

function reload(){
    location.reload();
}


function takeme(){
    const element = document.getElementById("help");
    element.scrollIntoView(true);
}
let data = [
  {
    name: {
      ara: "أحمد عبدالعزيز",
      en: "Ahmed Abdalaziz",
    },
    image: "assets/img-01.jpg",
    comment: {
      ara: "في كل لحظة من الصعوبة، تذكر أن الله معك، يوجهك خلال عواصف الحياة.",
      en: "In every moment of weakness, I remember Allah with you. He will guide you through life.",
    },
  },
  {
    name: {
      ara: "محمد حسن",
      en: "Mohamed Hassan",
    },
    image: "assets/img-02.jpg",
    comment: {
      ara: "جمال الإيمان يكمن في قدرته على جلب السلام إلى قلوبنا، بغض النظر عن الفوضى من حولنا.",
      en: "The beauty of faith lies in its ability to bring peace to our hearts, no matter the chaos around us.",
    },
  },
  {
    name: {
      ara: "مالك أمير",
      en: "Malek Ameer",
    },
    image: "assets/img-03.jpg",
    comment: {
      ara: "كل عمل من أعمال اللطف هو انعكاس لمحبّتنا لله، وينير العالم من حولنا.",
      en: "Every act of kindness is a reflection of our love for Allah, and it lights up the world around us.",
    },
  },
  {
    name: {
      ara: "مازن حسام",
      en: "Mazen Hossam",
    },
    image: "assets/img-04.jpg",
    comment: {
      ara: "الصبر فضيلة تقوّي ارتباطنا بالله؛ يعلمنا أن نثق في توقيته.",
      en: "Patience is a virtue that strengthens our connection with Allah; it teaches us to trust His timing.",
    },
  },
  {
    name: {
      ara: "ابراهيم فادي",
      en: "Abdallah Fadi",
    },
    image: "assets/img-05.jpg",
    comment: {
      ara: "الامتنان يحوّل ما لدينا إلى كافٍ، ويذكرنا بنعم الله العديدة.",
      en: "Gratitude transforms what we have into enough, reminding us of Allah's countless blessings.",
    },
  },
  {
    name: {
      ara: "يوسف عبدالله",
      en: "Yousef Abdallah",
    },
    image: "assets/img-06.jpg",
    comment: {
      ara: "القرآن هو مصدر للهداية والحكمة؛ يُعلّمنا كيفية مواجهة تحديات الحياة برشاقة.",

      en: "The Quran is a source of guidance and wisdom; it teaches us to navigate life's challenges with grace.",
    },
  },
  {
    name: {
      ara: "خالد ربيع",
      en: "Khaled Rabea",
    },
    image: "assets/img-07.jpg",
    comment: {
      ara: "في طلب العلم، نقترب من الله، فكل خطوة نخطوها نحو الفهم هي خطوة نحو Him.",
      en: "In seeking knowledge, we draw closer to Allah, for every step we take towards understanding is a step towards Him.",
    },
  },
];

let isAra = false;
let container = document.querySelector(".container");
let langs = document.querySelectorAll(".lang .langs");
let currentIndex = 0;
document.addEventListener("DOMContentLoaded", () => {
  

  loadData(
    data[currentIndex].image,
    data[currentIndex].comment[localStorage.getItem("lang")],
    data[currentIndex].name[localStorage.getItem("lang")]
  );
  setInterval(() => {
    currentIndex = (currentIndex + 1) % data.length;
    loadData(
      data[currentIndex].image,
      data[currentIndex].comment[localStorage.getItem("lang")],
      data[currentIndex].name[localStorage.getItem("lang")]
    );
  }, 10000);

  langs.forEach((lang) => {
    lang.addEventListener("click", (e) => {
      if (lang.id === "ara") {
        isAra = true;
        localStorage.setItem("lang", "ara");
        loadData(
          data[currentIndex].image,
          data[currentIndex].comment.ara,
          data[currentIndex].name.ara
        );
        document.body.style.direction = "rtl";
      } else {
        isAra = false;
        localStorage.setItem("lang", "en");
        loadData(
          data[currentIndex].image,
          data[currentIndex].comment.en,
          data[currentIndex].name.en
        );
        document.body.style.direction = "ltr";
        localStorage;
      }
    });
  });
});
function loadData(imgProfile, comment, name) {
  let imgProf = document.getElementById("profImage");
  let commentProf = document.querySelector("p");
  let nameProf = document.querySelector("h3");
  imgProf.src = imgProfile;
  commentProf.textContent = comment;
  nameProf.textContent = name;
}

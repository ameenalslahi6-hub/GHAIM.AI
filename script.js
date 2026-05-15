const steps = [
  {
    number: "01",
    title: "اكتشاف الهدف",
    body: "نحدد الجمهور، الرسالة، المنصة، ومؤشرات النجاح قبل اختيار أي أداة إنتاج.",
  },
  {
    number: "02",
    title: "بناء العالم البصري",
    body: "نصنع اتجاهًا فنيًا متماسكًا: إضاءة، ألوان، مراجع، لقطات، نبرة كتابة، وأسلوب حركة.",
  },
  {
    number: "03",
    title: "إنتاج النسخ",
    body: "ننتج عدة زوايا بسرعة، ثم نختار الأفضل ونصقله حتى يصبح جاهزًا للحملة.",
  },
  {
    number: "04",
    title: "تسليم وتحسين",
    body: "نسلّم الملفات منظمة حسب المقاسات والمنصات، مع توصيات عملية للاستخدام والاختبار.",
  },
];

const buttons = document.querySelectorAll(".step");
const copy = document.querySelector("#step-copy");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.step);
    const step = steps[index];

    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    copy.innerHTML = `<span>${step.number}</span><h3>${step.title}</h3><p>${step.body}</p>`;
  });
});

document.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "تم استلام الطلب";
  button.disabled = true;
});

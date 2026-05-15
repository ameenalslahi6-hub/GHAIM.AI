const steps = [
  {
    title: "التوجيه الإبداعي",
    body: "كل مخرج يبدأ بقرار فني: زاوية، إضاءة، إيقاع، وهدف تجاري واضح قبل تشغيل أي نموذج.",
  },
  {
    title: "تنسيق النماذج",
    body: "نستخدم أكثر من أداة حسب الحاجة: صور، فيديو، صوت، كتابة، وتحسين، ثم نوحّدها داخل اتجاه بصري واحد.",
  },
  {
    title: "إنتاج فوري",
    body: "نحوّل الفكرة إلى نسخ متعددة بسرعة، ونختبر الزوايا والأساليب قبل اعتماد النسخة النهائية.",
  },
  {
    title: "تسليم احترافي",
    body: "نجهز الملفات للحملات والمنصات المختلفة مع مقاسات، صيغ، وملاحظات استخدام واضحة.",
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

    copy.innerHTML = `<h3>${step.title}</h3><p>${step.body}</p>`;
  });
});

document.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "تم استلام الطلب";
  button.disabled = true;
});

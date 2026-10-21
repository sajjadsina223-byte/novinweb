
document.addEventListener("DOMContentLoaded", () => {
  // نمایش سال جاری در فوتر
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // مشخص کردن لینک صفحه فعلی
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

  document.querySelectorAll(".nav a").forEach((link) => {
    const linkPage = link
      .getAttribute("href")
      .split("#")[0]
      .toLowerCase();

    if (
      linkPage &&
      linkPage === currentPage
    ) {
      link.classList.add("active");
    }
  });

  // پیمایش نرم برای لینک‌های داخلی همین صفحه
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

// Паралакс ефект

var intro__parallax = document.getElementById("intro__parallax");
var parallaxInstance = new Parallax(intro__parallax);

var intro__parallax2 = document.getElementById("intro__parallax2");
var parallaxInstance = new Parallax(intro__parallax2);

var intro__parallax3 = document.getElementById("intro__parallax3");
var parallaxInstance = new Parallax(intro__parallax3);

var intro__parallax4 = document.getElementById("intro__parallax4");
var parallaxInstance = new Parallax(intro__parallax4);

var intro__parallax5 = document.getElementById("intro__parallax5");
var parallaxInstance = new Parallax(intro__parallax5);

var intro__parallax6 = document.getElementById("intro__parallax6");
var parallaxInstance = new Parallax(intro__parallax6);

// Збільшення числа від 1 до 30

window.addEventListener("DOMContentLoaded", () => {
  const countNums = () => {
    const numbersObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const count = new CountUp(
            entry.target.id,
            0,
            entry.target.dataset.num,
            0,
            entry.target.dataset.duration || 4,
            {
              separator: " ",
              prefix: entry.target.dataset.prefix || "",
              suffix: entry.target.dataset.suffix || "",
            }
          );
          count.start(() => {
            entry.target.parentElement.classList.add("numbers__item_done");
          });
          observer.unobserve(entry.target);
        }
      });
    });
    document.querySelectorAll(".numbers__item span").forEach((num) => {
      numbersObserver.observe(num);
    });
  };
  countNums();
});

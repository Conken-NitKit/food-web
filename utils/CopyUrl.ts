export const copyUrl = () => {
  navigator.clipboard
    .writeText("https://food-web-alpha.vercel.app/")
    .then(() => {
      alert("copied!");
    });
};

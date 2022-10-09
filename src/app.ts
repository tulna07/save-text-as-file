const textarea = document.querySelector("textarea")!;
const fileNameInput = document.querySelector(
  ".file-name input"
) as HTMLInputElement;
const selectMenu = document.querySelector(
  ".save-as select"
) as HTMLSelectElement;
const saveBtn = document.querySelector(".btn-save") as HTMLButtonElement;

selectMenu.addEventListener("change", () => {
  const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;
  saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", () => {
  const file = new Blob([textarea.value], { type: selectMenu.value });
  const fileUrl = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.download = fileNameInput.value || "default";
  link.href = fileUrl;
  link.click();
});

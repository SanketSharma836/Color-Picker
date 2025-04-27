const colorPicker = document.getElementById('colorPicker');
const colorPreview = document.getElementById('colorPreview');
const hexValue = document.getElementById('hexValue');

colorPicker.addEventListener('input', function () {
  const color = colorPicker.value;
  colorPreview.style.backgroundColor = color;
  hexValue.textContent = color;
});

colorPreview.style.backgroundColor = colorPicker.value;
hexValue.textContent = colorPicker.value;

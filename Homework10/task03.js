function drawRectangle(height, width) {
  const row = "#".repeat(width);
  for (let i = 0; i < height; i++) console.log(row);
}

drawRectangle(2, 2);
drawRectangle(3, 4);

var minutes = 5, the_interval = minutes * 60 * 1000;

function handleNewData() {
    // Lay du lieu o Adafruit va ghi vao Database o day
}

setInterval(function() {
  console.log("I am doing my 5 minutes check");
  handleNewData();

}, the_interval);
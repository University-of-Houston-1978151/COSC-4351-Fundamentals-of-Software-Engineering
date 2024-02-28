window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest

   /*
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
   */
   const xhr = new XMLHttpRequest();
   xhr.responseType = 'json';
   xhr.addEventListener('load', responseReceivedHandler);
   xhr.open('GET', `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`);
   xhr.send();
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
   if (this.response.error) {
      document.getElementById("quotes").innerHTML = this.response.error;
   } else {
      let quotesList = "<ol>";
      for (let i = 0; i < this.response.length; ++i) {
         quotesList += `<li>${this.response[i].quote} - ${this.response[i].source}</li>`;
      }
      document.getElementById('quotes').innerHTML = quotesList + "</ol>";
   }
}
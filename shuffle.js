function rainbowify() {
  // Get the body element
  var body = document.body;

  // Get all the text nodes in the body
  var textNodes = getTextNodes(body);

  // Invert the colors of all the text nodes
  invertColors(textNodes);

  // Make the body turn rainbow colors
  setInterval(function() {
    body.style.background = getRandomColor();
  }, 100);
    // Replace the src of all image elements
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png";
  }
  
  // Replace the href of all anchor elements
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = "https://rickroll.link";
  }

  // Shuffle the text of all the text nodes
  setInterval(function() {
    shuffleText(textNodes);
  }, 1000);
}

function getTextNodes(node) {
  var textNodes = [];

  function getTextNodesRecursive(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      textNodes.push(node);
    } else {
      for (var i = 0; i < node.childNodes.length; i++) {
        getTextNodesRecursive(node.childNodes[i]);
      }
    }
  }

  getTextNodesRecursive(node);

  return textNodes;
}

function invertColors(textNodes) {
  for (var i = 0; i < textNodes.length; i++) {
    var node = textNodes[i];
    node.parentNode.style.color = (node.parentNode.style.color === 'white') ? 'black' : 'white';
  }
}

function shuffleText(textNodes) {
  for (var i = 0; i < textNodes.length; i++) {
    var node = textNodes[i];
    var text = node.textContent;
    var shuffledText = shuffleString(text);
    node.textContent = shuffledText;
  }
}

function shuffleString(string) {
  var parts = string.split('');
  for (var i = parts.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = parts[i];
    parts[i] = parts[j];
    parts[j] = temp;
  }
  return parts.join('');
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

rainbowify();

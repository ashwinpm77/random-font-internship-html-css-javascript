let inputText = document.getElementById('input_text');
let inputButton = document.getElementById('input_button');
let displayHead = document.getElementById('display_head');
let fontArray = [
    'ABeeZee',
    'Abril Fatface',
    'Abhaya Libre',
    'Abel',
    'Advent Pro',
    'Adamina',
    'Actor',
    'Acme',
    'Aclonica',
    'Aguafina Script',
    'Akronim',
    'Aladin',
    'Aldrich',
    'Alef',
    'Alegreya',
    'Alegreya SC',
    'Alegreya Sans',
    'Alegreya Sans SC',
    'Aleo',
    'Allerta Stencil',
    'Allerta',
    'Allan',
    'Alike Angular',
    'Alike',
    'Alice',
    'Alfa Slab One',
    'Alex Brush',
    'Allan',
    'Allura',
    'Almendra Display',
    'Almendra SC',
    'Amatic SC',
    'Amita',
    'Annie Use Your Telescope',
    'Bad Script',
    'Barrio',
    'Berkshire Swash',
    'Bilbo',
    'Bonbon',
    'Sedgwick Ave'
];

inputButton.onclick = function() {
    let rand = Math.floor((Math.random() * fontArray.length) + 1);
    displayHead.style.fontFamily = fontArray[rand];
    displayHead.innerHTML = inputText.value;
}


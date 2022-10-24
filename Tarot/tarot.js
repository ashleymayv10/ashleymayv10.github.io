function card(name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
}

var deck = [
    new card('Lovers', 
    'The Lovers represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners. Often an aspect of the querents life will have to be sacrificed; a bachelor/bachelorettes lifestyle may be sacrificed and a relationship gained or vice versa, or one potential partner may be chosen while another is turned down. Whatever the choice, it should not be made lightly, as the ramifications will be lasting.', 
    'Lovers'),
    new card('Emperor',
    'If The Empress is the Mother archetype of the Tarot deck, The Emperor is the Father. He sits upon a large stone throne, adorned with four rams heads symbolic of his connection with Aries and the planet Mars. In his right hand, The Emperor holds an ankh, the Egyptian symbol of life, and in his left is an orb representing the world over which he rules He wears a red robe, indicative of his power, passion, and energy for life. Underneath it, he wears a suit of armor, suggesting that he is protected from any threat and any emotional response or vulnerability. His long white beard is symbolic of his age-old wisdom and experience, and along with his gold crown, he is an authority figure who demands to be heard. Behind his throne looms a tall, impenetrable mountain range, signifying that he is backed by a solid foundation but resistant to making any changes unless he deems it necessary. Beneath the peaks flows a small river, giving some hope that despite his tough exterior, he is still an emotional being it will just take a lot of digging and trust to open him up to his softer side.',
    'Emperor'),
    new card('Empress',
    'The Empress is a beautiful, full-figured woman with blonde hair and a peaceful aura about her. On her head, she wears a crown of twelve stars, showing her connection with the mystical realm and the cycles of the natural world the twelve months of the year and the twelve planets. Her robe is patterned with pomegranates, symbolic of fertility, and sits upon a luxurious array of cushions and flowing red velvet. One cushion features the symbol of Venus, the planet of love, creativity, fertility, beauty and grace, the essence of The Empress. A beautiful, lush forest and winding stream surround The Empress, signifying her connection with Mother Earth and life itself. She draws her sense of peace from the trees and the water and is rejuvenated by the energy of nature. In the foreground, golden wheat springs from the soil, reflecting abundance from a recent harvest.',
    'Emperess'),
    new card('Queen of Pentacles',
    'In the Queen of Pentacles, a woman sits on a stone throne decorated with carvings of fruit trees, goats, angels and other symbols of material success and sensual pleasure. She cradles a gold coin with both hands and looks down on it with loving care, as if to nurture this symbol of wealth and material success. Luscious plants and flowers surround her, representing her connection to Mother Earth, nature, and abundance. A small rabbit jumps near to where she is seated, symbolising fertility and suggesting that her life is in flow and alignment.',
    'QueenofPentacles'),
    new card('Sun',
    'The Sun Tarot card radiates with optimism and positivity. A large, bright sun shines in the sky, representing the source of all life on Earth. Underneath, four sunflowers grow tall above a brick wall, representing the four suits of the Minor Arcana and the four elements.In the foreground, a young, naked child is sitting on top of a calm white horse. The child represents the joy of being connected with your inner spirit, and his nakedness is a sign he has nothing to hide and has all the innocence and purity of childhood. The white horse is also a sign of purity and strength.',
    'Sun'),
    new card('Temperance',
    'The Temperance card shows a large, winged angel who is both masculine and feminine. She wears a light blue robe with a triangle enclosed in a square on the front, representing that humans are bound by the Earth and natural law . The angel balances between one foot on the rocks, expressing the need to stay grounded, and one foot in the water, showing the need to be in flow. She pours water between two cups, symbolic of the flow and alchemy of life. In the background, there is a winding path up to a mountain range, reflecting the journey through life. Above the mountains hovers a golden crown encased in a glowing light, a symbol of taking the Higher path and staying true to ones life purpose and meaning.',
    'Temperance'),
    new card('Ace of Swords',
    'The Ace of Swords shows a gleaming hand appearing from a white cloud, a representation of the Divine. It holds an upright sword, symbolic of the mind and the intellect, and at the tip of the sword sits a crown draped with a wreath, a sign of success and victory. While this Ace is a sign of triumph, the jagged mountains in the background suggest that the road ahead will be challenging. You will need mental resilience to navigate this path.',
    'AceofSwords'),
    new card('Page of Pentacles',
    'The Page of Pentacles depicts a young man standing in a grassy field of blooming flowers. In the distance behind him is a small patch of trees and a newly ploughed field, promising an abundant harvest. The mountain range in the horizon signifies the upcoming challenges and obstacles the Page must surmount along his journey. The Page holds a gold coin in his hand and examines it carefully, as if to discover how to manifest even more gold and abundance.',
    'AceofPentacles')    
]

function getRandom(num){
    var randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}

document.getElementById("draw").onclick = function(){
    var index = getRandom(8);
    var currentCard = deck[index];

    document.getElementById("display").innerHTML = '<img src="/Tarot/Images/'  + currentCard.image +'.jpg"><h3>' + currentCard.name + '</h3>' + currentCard.description + '</p>';
}
const isPalindrome = require('../coding-challenges/isPalindrome')

const testingStrings = [
    'kayak',
    'deified',
    'rotator',
    'repaper',
    'deed',
    'peep',
    'wow',
    'noon',
    'civic',
    'racecar',
    'level',
    'mom',
    'bird rib',
    'taco cat',
    'UFO tofu',
    'Borrow or rob',
    'Never odd or even',
    'We panic in a pew',
    'Ma is a nun, as I am',
    'Sir I demand I am a maid named Iris',
    'Was it a car or a cat I saw',
    'A man, a plan, a canal, Panama'
]

test('Test if a string is a palndrome', () => {
    expect(isPalindrome(testingStrings[0])).toBe(true)
    expect(isPalindrome(testingStrings[1])).toBe(true)
    expect(isPalindrome(testingStrings[12])).toBe(true)
    expect(isPalindrome(testingStrings[14])).toBe(true)
    expect(isPalindrome(testingStrings[15])).toBe(true)
    expect(isPalindrome(testingStrings[17])).toBe(true)
    expect(isPalindrome(testingStrings[18])).toBe(true)
    expect(isPalindrome(testingStrings[19])).toBe(true)
    expect(isPalindrome(testingStrings[20])).toBe(true)
    expect(isPalindrome(testingStrings[21])).toBe(true)
    expect(isPalindrome('Let me remind you')).toBe(false)
})
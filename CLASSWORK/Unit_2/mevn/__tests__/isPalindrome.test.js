// const isPalindrome = require('../isPalindrome')
import { isPalindrome } from '../practice/isPalindrome'

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
    expect(isPalindrome(testingStrings[15])).toBe(true)
    expect(isPalindrome('A spoonful of sugar makes the medicine go down')).toBe(false)
    expect(isPalindrome(testingStrings[10])).toBe(true)
})
// export default isPalindrome